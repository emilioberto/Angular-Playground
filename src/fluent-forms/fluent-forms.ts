import {AbstractControl, FormGroup} from "@angular/forms";
import {Observable, of, PartialObserver, Subscription, throwError} from "rxjs";
import {filter, tap} from "rxjs/operators";

export function isNullOrUndefined(value: any) {
  return value === null || value === undefined;
}

export class FormHandler {

  private control!: AbstractControl;
  private handler: Observable<any> | undefined;
  private conditions: ((value: any) => any)[] = [];
  private resetValueWhenNullOrUndefined = false;

  constructor(private formGroup: FormGroup, controlName: string) {
    this.control = this.formGroup.get(controlName)!;
  }

  watch(controlName: string): FormHandler {
    if (this.handler) {
      throw new Error('Handler already defined');
    }
    this.handler = this.formGroup.get(controlName)!.valueChanges;
    return this;
  }

  setValue(condition: (value: any) => any): FormHandler {
    this.conditions = this.conditions.concat(condition);
    return this;
  }

  onChange(callback: (value: any) => void): FormHandler {
    if (this.handler) {
      throw new Error('Handler already defined');
    }
    this.handler = this.control!.valueChanges
      .pipe(
        tap(value => callback(value))
      );
    return this;
  }

  build(): Observable<void> {
    if (!this.handler) {
      throw new Error('Handler not defined');
    }

    if (this.resetValueWhenNullOrUndefined) {
      this.handler = this.handler
        .pipe(
          tap(value => {
            if (isNullOrUndefined(value)) {
              this.control.reset();
            }
          }),
          filter(value => !!value)
        );
    }

    this.conditions.forEach(condition => {
      this.handler = this.handler!.pipe(
        tap(value => {
          const result = condition(value);
          this.control.setValue(result);
        })
      )
    });

    return this.handler;
  }

  resetWhenNil(): FormHandler {
    this.resetValueWhenNullOrUndefined = true;
    return this;
  }

  disableAndResetWhen(condition: (value: any) => boolean): FormHandler {
    this.handler = this.handler!.pipe(
      tap(value => {
        const result = condition(value);
        if (result) {
          this.control.disable();
          this.control.reset();
        } else {
          this.control.enable();
        }
      })
    );
    return this;
  }

  case(condition: (value: any) => boolean, result: any): FormHandler {
    this.handler = this.handler!.pipe(
      tap(value => {
        const result = condition(value);
        if (result) {
          this.control.setValue(result);
        }
      })
    );
    return this;
  }

  subscribe(observer?: PartialObserver<void> | undefined): Subscription {
    return this.build().subscribe();
  }
}

/**
 * When a control changes then change another value
 * When a control changes (specific value) then disable/enable another control
 *
 *
 * const handler = new FormHandler(this.formGroup)
 *
 * handler
 *  .handle(controlName)
 *  .filter()
 *  .disableWhen()
 *  .else
 *
 *
 */


import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {isNullOrUndefined} from "src/fluent-forms/fluent-forms";

export class FormWatcher<T> {

  constructor(private observer: Observable<T>) {}

  when(condition: (value: any) => boolean, callback: (value: any) => void): any {
    if (!this.observer) {
      throw new Error('Not watching');
    }

    this.observer = this.observer.pipe(
      tap(value => {
        if (condition(value)) {
          callback(value);
        }
      })
    );
    return this;
  }

  whenNil(callback: (value: any) => void): any {
    return this.when(value => isNullOrUndefined(value), callback);
  }
}

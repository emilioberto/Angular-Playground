import {FormGroup} from "@angular/forms";
import {FormWatcher} from "src/fluent-forms/form-watcher";

export class FluentForm<T> {

  constructor(private formGroup: FormGroup) {
  }

  watch<FormProperty extends Extract<keyof T, string>>(formControlName: FormProperty) {
    return new FormWatcher(this.formGroup.get(formControlName)!.valueChanges);
  }

}

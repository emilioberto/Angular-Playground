import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormHandler, isNullOrUndefined} from "src/fluent-forms/fluent-forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground';
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      name: [''],
      age: [null],
      canDrive: [{value: false, disabled: true}],
      car: ['']
    });

    new FormHandler(this.form, 'canDrive')
      .watch('age')
      .resetWhenNil()
      .setValue(age => {
        if (isNullOrUndefined(age)) {
          return null;
        }
        return age >= 18;
      })
      .case(age => age > 90, false)
      .subscribe();

    new FormHandler(this.form, 'car')
      .watch('canDrive')
      .resetWhenNil()
      .disableAndResetWhen(canDrive => !canDrive)
      .subscribe();

    new FormHandler(this.form, 'name')
      .onChange(name => console.log('name control has changed and its value is now: ', name))
      .subscribe();
  }
}

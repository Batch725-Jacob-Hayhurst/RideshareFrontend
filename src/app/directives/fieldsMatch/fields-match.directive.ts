import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

//  This Directive checks if the passwords match. This with the cross-field-error-matcher is necessary for the mat-error to appear
//  it is located in the loginredux.component.html on the password form

export const passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirm = control.get('confirmPW');

  return password && confirm && password.value !== confirm.value ? {'notSame': true} : null;
};

@Directive({
  selector: '[appFieldsMatch]',
  providers: [{provide: NG_VALIDATORS, useExisting: FieldsMatchDirective, multi: true}]
})
export class FieldsMatchDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors{
    return passwordMatchValidator(control);
  }

}

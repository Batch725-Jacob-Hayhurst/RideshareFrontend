import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

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
    console.log(passwordMatchValidator(control))
    return passwordMatchValidator(control);
  }

}

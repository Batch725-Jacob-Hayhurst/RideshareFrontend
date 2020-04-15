import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation-service/validation.service';
import { HttpClient } from '@angular/common/http';

function usernameValidator(control: AbstractControl, httpCli: HttpClient): ValidationErrors | null {
  // const usernameField = control.get('username');
  const validServ = new ValidationService(httpCli);
  let isAvailable: boolean;
  console.log(control);
  console.log(control.value);

  validServ.checkUsernameAvailable(control.value as string).subscribe(
    data => {
      isAvailable = data;
      console.log(data);
    }
  );
  console.log(isAvailable);
  return control && !isAvailable ? {'usernameNotAvailable': true} : null;
};

@Directive({
  selector: '[appUsernameAvailability]',
  providers: [{provide: NG_VALIDATORS, useExisting: UsernameAvailabilityDirective, multi: true}]
})
export class UsernameAvailabilityDirective implements Validator{

  constructor(private myHttpCli: HttpClient) { }
  validate(control: AbstractControl): ValidationErrors {
    return usernameValidator(control, this.myHttpCli);
  }

}

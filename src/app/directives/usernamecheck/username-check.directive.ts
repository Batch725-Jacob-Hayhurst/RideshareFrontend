import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';


@Directive({
  selector: '[appUsernameCheck]',
  providers: [{provide: NG_VALIDATORS, useExisting: UsernameCheckDirective, multi: true}]
})
export class UsernameCheckDirective implements Validator{

  constructor(private userServ: UserService) { }
  validate(control: AbstractControl){
    return this.usernameMatchValidator(control);
  }

  usernameMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const userValid = control.get('userName');
    let result: boolean;
    this.userServ.checkUserNameAvailable(control.get('userName') as unknown as string).toPromise().then(res => {result = res});
    return result ? null : {'unavailable':true};
  }

}

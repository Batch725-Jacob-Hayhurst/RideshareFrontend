import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';

// export const usernameMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
//   const userValid = control.get('userName');

//   return password && confirm && password.value !== confirm.value ? {'notSame': true} : null;
// };


@Directive({
  selector: '[appUsernameCheck]'
})
export class UsernameCheckDirective implements Validator{

  constructor(private userServ: UserService) { }
  async validate(control: AbstractControl){
    let result: boolean;
    await this.userServ.checkUserNameAvailable(control.get('userName') as unknown as string).toPromise().then(res => {result = res});
    return result;
  }

}

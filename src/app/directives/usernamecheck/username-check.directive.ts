import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';


@Directive({
  selector: '[appUsernameCheck]',
  providers: [{provide: NG_VALIDATORS, useExisting: UsernameCheckDirective, multi: true}]
})
export class UsernameCheckDirective implements Validator{

  constructor(private userServ: UserService) { }
  validate(control: AbstractControl) : ValidationErrors{
    console.log("here")
    return this.usernameMatchValidator(control);
  }

  usernameMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const username = control.get('userName');
    let result: boolean;
    console.log(control.get('userName'))
    if(username){
      this.userServ.checkUserNameAvailable(control.get('userName').value).subscribe(res => {
        result = res
        console.log("matching", result);

        return result ? null : {'unavailable':true};
        });
      
    } else {
      return null;
    }
    
  }

}

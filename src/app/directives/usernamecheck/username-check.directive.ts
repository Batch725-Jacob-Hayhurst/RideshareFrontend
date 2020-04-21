import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';

//Checks if username exists in database before form submission
//Not used. Directives are needed to make the mat-error work, but this directive doesn't work properly. 
//If fixed implement in the same way that the fields-match directive is

@Directive({
  selector: '[appUsernameCheck]',
  providers: [{provide: NG_VALIDATORS, useExisting: UsernameCheckDirective, multi: true}]
})
export class UsernameCheckDirective implements Validator{

  constructor(private userServ: UserService) { }
  validate(control: AbstractControl) : ValidationErrors{
    console.log("before")
    
    let validation = this.usernameMatchValidator(control)
    console.log(validation);
    console.log("after")
    return validation;
  }

  usernameMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const username = control.get('userName');
    let result: boolean;
    if(username){
      this.userServ.checkUserNameAvailable(control.get('userName').value).subscribe(res => {
        result = res
        console.log("1. matching", result);
        console.log("2.", result ? null : {'unavailable':true});
        console.log("3. inside usernameMatchValidator")
        return result ? null : {'unavailable':true} ;
        });
      
    } else {
      return null;
    }
    
  }

}

import { ErrorStateMatcher } from '@angular/material';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

//This allows us to share errors between forms. 
//Necessary for mat-error to show up
//Used in the loginredux.component.ts and placed in the confirm password form as a property bind in html

export class CrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

        return (invalidCtrl || invalidParent);
        // return control.dirty && form.invalid;
    }
}

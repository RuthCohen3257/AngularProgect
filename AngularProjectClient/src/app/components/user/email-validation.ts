import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailPatternValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value && !control.value.match(emailRegEx)
      ? {
          invalidEmail: true, 
        }
      : null;
  };
};

export const emailValidator = emailPatternValidator();


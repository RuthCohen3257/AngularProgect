import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const passwordStrengthValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) {
    return null; // No value entered, so no validation errors yet
  }

  const password = control.value;
  const errors: ValidationErrors = {};

  if (!passwordRegEx.test(password)) {
    errors['weakPassword'] = true;
  }

  return Object.keys(errors).length > 0 ? errors : null;
};

export const passwordValidator = passwordStrengthValidator;

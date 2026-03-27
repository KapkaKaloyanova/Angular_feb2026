import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return { required: true };
    }

    const regex = /[a-zA-Z0-9._%+-]{6,}@gmail.(bg|com)$/;

    if (!regex.test(value)) {
      return { invalidemail: true };
    }

    return null;
  };
}
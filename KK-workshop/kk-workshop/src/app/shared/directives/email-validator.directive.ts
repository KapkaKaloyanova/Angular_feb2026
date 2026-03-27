import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value; // Извличаме какво е въведено в полето

    if (!value) {
      return null;
    }

    const emailRegex = /[a-zA-Z0-9_\.%+-]{6,}@gmail\.(bg|com)$/;

    if (!emailRegex.test(value)) {
      return { invalidEmail: true };
    } else {
      return null;
    }
  }
}

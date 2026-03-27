import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent implements AfterViewInit {

  @ViewChild('registerForm') form!: NgForm;

  telCodes: string[] = ['+359', '+1', '+44'];

  professions: string[] = ['Designer', 'Engineer', 'Scientist'];

  defaultTelCode: string = '+359';
  defaultProfession: string = 'Designer';

  ngAfterViewInit() {
    console.log('Formata e gotowa', this.form);
  }
  onSubmit(): void {
    console.log(this.form.value);
    this.form.resetForm({
      tel: this.defaultTelCode, // Връщаме дефолтните стойности след ресет
      building: this.defaultProfession
    });
  }
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-formlogin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formlogin.component.html',
  styleUrl: './formlogin.component.css'
})
export class FormloginComponent {
  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit() {
    console.log(this.registerForm.get('password')?.errors);
    console.log(this.registerForm.status);
    this.registerForm.reset();
  }



}

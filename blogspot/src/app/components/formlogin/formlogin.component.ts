import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-formlogin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formlogin.component.html',
  styleUrl: './formlogin.component.css'
})
export class FormLoginComponent {
  loginForm: FormGroup;
  constructor(
    private userService: UserService, 
    private fb: FormBuilder 
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  submit() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value as TLoginUserData;
      this.userService.login(data);
      this.loginForm.reset();
    }
  }
}

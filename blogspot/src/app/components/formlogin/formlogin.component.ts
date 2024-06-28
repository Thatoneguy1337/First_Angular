import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TLoginUserData } from '../../interfaces/user.interfaces';
import { UserService } from '../../services/userService.services';
@Component({
  selector: 'app-formlogin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formlogin.component.html',
  styleUrl: './formlogin.component.css'
})
export class FormLoginComponent {
   loginForm: FormGroup;
   isSubmitted = false;
   isSuccess = false;
   isError = false;
  
  constructor(
    private userService: UserService, 
    private fb: FormBuilder 
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isSuccess = true;
      this.isError = false
      const data = this.loginForm.value as TLoginUserData;
      this.userService.login(data);
      this.loginForm.reset();
    }
    else {
      this.isSuccess = false;
      this.isError = true;
    } 
  }
}

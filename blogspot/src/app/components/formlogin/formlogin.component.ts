import { Component } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms'; 
import { UserService } from '../../services/userService.services';
import { TLoginUserData } from '../../interfaces/user.interfaces';
@Component({
  selector: 'app-formlogin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formlogin.component.html',
  styleUrl: './formlogin.component.css'
})
export class FormloginComponent {
  constructor(private userService: UserService) {}

  loginForm = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, Validators.minLength(8), Validators.maxLength(127)]),
    password: new FormControl<string | null>(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8) ]),
  });

  submit(){
    console.log(this.loginForm.get('email')?.errors);
    console.log(this.loginForm.get('password')?.errors);
    console.log(this.loginForm.status);

    const data = this.loginForm.value as TLoginUserData;
    this.userService.login(data);
  }

}

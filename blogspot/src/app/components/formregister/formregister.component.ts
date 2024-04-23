import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms'; 
import { UserService } from '../../services/userService.services';
import {TRegisterUserData} from  '../../interfaces/user.interfaces';
@Component({
  selector: 'app-formregister',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './formregister.component.html',
  styleUrl: './formregister.component.css'
})
export class FormregisterComponent {
  constructor(
    private userService: UserService
  ) {}
  
  registerForm = new FormGroup({
   fullname:  new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(45)]),
   username:  new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]) ,
   user_img: new FormControl<string|null>(null),
   bg_img: new FormControl<string|null>(null),
   email: new FormControl<string|null>(null, [Validators.required, Validators.minLength(8), Validators.maxLength(45)]),
   password: new FormControl<string|null>(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]) ,
   ssc_number: new FormControl<string|null>(null, [Validators.required, Validators.minLength(11), Validators.maxLength(45)]),
   telephone: new FormControl<string|null>(null, [Validators.required, Validators.minLength(13) ,Validators.maxLength(13)]),
   birthdate: new FormControl<string|null>(null, [Validators.required, Validators.maxLength(11)]),
   zip_code: new FormControl<string|null>(null, [Validators.required, Validators.maxLength(8)]),
   state: new FormControl<string|null>(null, [Validators.required, Validators.maxLength(127)]),
   city: new FormControl<string|null>(null, [Validators.required, Validators.minLength(3), Validators.maxLength(127)]),
   street: new FormControl<string|null>(null, [Validators.required, Validators.minLength(5) ,Validators.maxLength(127)]),
   number: new FormControl<string|null>(null, [Validators.required, Validators.maxLength(127) ])
  });


  submit(){
    console.log(this.registerForm.get('fullname')?.errors);
    console.log(this.registerForm.get('username')?.errors);
    console.log(this.registerForm.get('user_img')?.errors);
    console.log(this.registerForm.get('bg_img')?.errors);
    console.log(this.registerForm.get('email')?.errors);
    console.log(this.registerForm.get('password')?.errors);
    console.log(this.registerForm.get('telephone')?.errors);
    console.log(this.registerForm.get('birthdate')?.errors);
    console.log(this.registerForm.get('zip_code')?.errors);
    console.log(this.registerForm.get('state')?.errors);
    console.log(this.registerForm.get('city')?.errors);
    console.log(this.registerForm.get('street')?.errors);
    console.log(this.registerForm.get('number')?.errors);
    console.log(this.registerForm.status);
    const data = this.registerForm.value as TRegisterUserData;
    this.userService.register(data);
    this.registerForm.reset();
  }


}

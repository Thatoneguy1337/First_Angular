import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms'; 
import { UserService } from '../../services/userService.services';
import {TRegisterUserData} from  '../../interfaces/user.interfaces';
@Component({
  selector: 'app-formregister',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formregister.component.html',
  styleUrl: './formregister.component.css'
})
export class FormregisterComponent {
  constructor(
    private userService: UserService
  ) {}
  
  registerForm = new FormGroup({
   fullname:  new FormControl<string|null>(null),
   username:  new FormControl<string|null>(null) ,
   user_img: new FormControl<string|null>(null),
   bg_img: new FormControl<string|null>(null),
   email: new FormControl<string|null>(null),
   password: new FormControl<string|null>(null) ,
   ssc_number: new FormControl<string|null>(null),
   telephone: new FormControl<string|null>(null),
   birthdate: new FormControl<string|null>(null),
   zip_code: new FormControl<string|null>(null),
   state: new FormControl<string|null>(null),
   city: new FormControl<string|null>(null),
   street: new FormControl<string|null>(null),
   number: new FormControl<string|null>(null)
  });


  submit(){
    const data = this.registerForm.value as TRegisterUserData;
    this.userService.register(data);
    this.registerForm.reset();
  }


}

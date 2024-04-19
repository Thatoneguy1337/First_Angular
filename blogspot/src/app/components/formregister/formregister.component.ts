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
   fullname:  new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(45)]),
   username:  new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]) ,
   user_img: new FormControl<string|null>(null),
   bg_img: new FormControl<string|null>(null),
   email: new FormControl<string|null>(null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
   password: new FormControl<string|null>(null, [Validators.required, Validators.minLength(10), Validators.maxLength(60)]) ,
   ssc_number: new FormControl<string|null>(null, [Validators.required, Validators.minLength(11), Validators.maxLength(45)]),
   telephone: new FormControl<string|null>(null, [Validators.required, Validators.maxLength(11)]),
   birthdate: new FormControl<string|null>(null, [Validators.required, Validators.maxLength(11)]),
   zip_code: new FormControl<string|null>(null, [Validators.required, Validators.maxLength(8)]),
   state: new FormControl<string|null>(null, [Validators.required, Validators.maxLength(147)]),
   city: new FormControl<string|null>(null, [Validators.required, Validators.minLength(3), Validators.maxLength(147)]),
   street: new FormControl<string|null>(null, [Validators.required, Validators.minLength(5) ,Validators.maxLength(127)]),
   number: new FormControl<string|null>(null, [Validators.required, Validators.maxLength(127) ])
  });


  submit(){
    const data = this.registerForm.value as TRegisterUserData;
    this.userService.register(data);
    this.registerForm.reset();
  }


}

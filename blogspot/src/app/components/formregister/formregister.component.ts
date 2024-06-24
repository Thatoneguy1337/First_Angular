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
  
  registerForm: FormGroup;
  
  constructor(
    private userService: UserService,
    private fb: FormBuilder 
  ) {

     this.registerForm = this.fb.group({
      fullname:  new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(45)]),
      username:  new FormControl(null,  [Validators.required, Validators.minLength(6)]) ,
      user_img: new FormControl<string|null>(null),
      bg_img: new FormControl<string|null>(null),
      email: new FormControl<string|null>(null, [Validators.required, Validators.email]),
      password: new FormControl<string|null>(null, [Validators.required, Validators.minLength(8)] ) ,
      ssc_number: new FormControl<string|null>(null, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
      telephone: new FormControl<string|null>(null, [Validators.required, Validators.minLength(12)]),
      birthdate: new FormControl<string|null>(null, [Validators.required, Validators.minLength(9)]),
      zip_code: new FormControl<string|null>(null, [Validators.required, Validators.minLength(8)]),
      state: new FormControl<string|null>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      city: new FormControl<string|null>(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)] ),
      street: new FormControl<string|null>(null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      number: new FormControl<string|null>(null, [Validators.required, Validators.minLength(1), Validators.maxLength(8)])
     });
    }
   
      onSubmit() {
        if(this.registerForm.valid){
          const data = this.registerForm.value as TRegisterUserData;
          this.userService.login(data);
          this.registerForm.reset();
        }
      }

  
  
 


}

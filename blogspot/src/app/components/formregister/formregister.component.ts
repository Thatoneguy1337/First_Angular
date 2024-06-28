import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, } from '@angular/forms'; 
import { UserService } from '../../services/userService.services';
import {TRegisterUserData} from  '../../interfaces/user.interfaces';
@Component({
  selector: 'app-formregister',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl:'./formregister.component.html',
  styleUrl: './formregister.component.css'
})
export class FormregisterComponent {
  registerForm: FormGroup; 
  isSubmitted = false;
  isSuccess = false;
  isError = false;
  
  constructor(
    private userService: UserService,
    private fb: FormBuilder 
  ) {
    this.registerForm = this.fb.group({
      fullname:  new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(45)]),
      username:  new FormControl(null,  [Validators.required, Validators.minLength(6)]) ,
      user_img: new FormControl(""),
      bg_img: new FormControl(""),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)] ) ,
      ssc_number: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})')]),
      telephone: new FormControl(null, [Validators.required, Validators.minLength(9), Validators.pattern('^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$')]),
      birthdate: new FormControl(null, [Validators.required, Validators.minLength(9), Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')]),
      zip_code: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      state: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      city: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)] ),
      street: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      number: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(8)])
     });




  }


    onSubmit() {
      if(this.registerForm.valid){
      const data = this.registerForm.value as TRegisterUserData;
      console.log(this.registerForm.get('password')?.errors);
      this.userService.register(data);
      }
      else{
        this.isSuccess = false;
        this.isError = false;
      }

    }
    

  
  
 


}

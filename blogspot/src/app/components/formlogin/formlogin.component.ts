import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-formlogin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formlogin.component.html',
  styleUrl: './formlogin.component.css'
})
export class FormloginComponent {
  email = new FormControl("");
  password = new FormControl("");

  formSubmit(event: Event){
    event.preventDefault();
    console.log({
      email: this.email.value,
      password: this.password.value
    });
  
    this.email.setValue("");
    this.password.setValue("");
  }

}

import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formregister',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formregister.component.html',
  styleUrl: './formregister.component.css'
})
export class FormregisterComponent {
  fullname = new FormControl("");
  username = new FormControl("");
  user_img = new FormControl("");
  bg_img = new FormControl("");
  email = new FormControl("");
  password = new FormControl("");
  ssc_number = new FormControl("");
  telephone = new FormControl("");
  birthdate = new FormControl("");
  zip_code = new FormControl("");
  state = new FormControl("");
  city = new FormControl("");
  street = new FormControl("");
  number = new FormControl("");
}

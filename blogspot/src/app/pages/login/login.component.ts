import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from '../../components/formlogin/formlogin.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}

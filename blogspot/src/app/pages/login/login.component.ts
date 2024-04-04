import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormloginComponent } from '../../components/formlogin/formlogin.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormloginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormregisterComponent } from '../../components/formregister/formregister.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormregisterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}

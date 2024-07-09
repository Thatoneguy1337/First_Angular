import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from '../../components/aside/aside.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

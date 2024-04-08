import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/userService.services';
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
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      user_img: [''],
      bg_img: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      ssc_number: [''],
      telephone: [''],
      birthdate: [''],
      zip_code: [''],
      state: [''],
      city: [''],
      street: [''],
      number: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.createUser(this.registerForm.value).subscribe(
        response => {
          console.log('Usuário criado com sucesso:', response);
          this.registerForm.reset();
        },
        error => {
          console.error('Erro ao criar usuário:', error);
        }
      );
    } else {
      console.error('Formulário inválido');
    }
  }
  
  
  



}

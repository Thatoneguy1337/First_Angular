import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  TLoginUserData,
  ILoginUserReturn,
  TRegisterUserData,
  TUserReturn,
} from '../interfaces/user.interfaces';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserRequest } from '../api/user/user.request';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  readonly userSignal = signal<TUserReturn | null>(null);

  constructor(private userRequest: UserRequest, private router: Router) {
    const userId = localStorage.getItem('@USERID');
    
    if (userId) {
      this.userRequest.getUser(userId)?.subscribe({
        next: (data) => {
          this.userSignal.set(data);
          this.router.navigateByUrl("/");
        },
        error: (error) => {
          console.log(error);
          this.logout();
        },
      });
    }
  }

  getUser() {
    return this.userSignal();
  }

  register(formData: TRegisterUserData) {
    this.userRequest.register(formData).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso');
        this.router.navigateByUrl("/login");
      },
      error: (error) => {
        console.log(error);
        if (error instanceof HttpErrorResponse) {
          if (error.error === 'Email already exists') {
            alert('Usuário já cadastro no sistema');
          }
        }
      },
    });
  }

  login(formData: TLoginUserData) {
    this.userRequest.login(formData).subscribe({
      next: (data:ILoginUserReturn) => {
        localStorage.setItem('@TOKEN', JSON.stringify(data.token));
        localStorage.setItem('@USERID', JSON.stringify(data.user_id));
        this.router.navigateByUrl('');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  logout() {
    this.userSignal.set(null);
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    this.router.navigateByUrl('');
  }
}
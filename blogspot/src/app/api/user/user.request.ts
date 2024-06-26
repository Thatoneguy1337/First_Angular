import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ILoginUserReturn,
  IRegisterUserReturn,
  TLoginUserData,
  TRegisterUserData,
  TUserReturn,
  IUserData,
  IUserEmail,
  INewUserPassword
} from '../../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserRequest {
  private BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  register(formData: TRegisterUserData) {
    return this.http.post<IRegisterUserReturn>(`${this.BASE_URL}/user`, formData);
  }

  login(formData: TLoginUserData) {
    return this.http.post<ILoginUserReturn>(`${this.BASE_URL}/login`, formData);
  }

  getUserProfile() {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const parsedToken = JSON.parse(token);


      return this.http.get<TUserReturn>(`${this.BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${parsedToken}`
        }
      })
    } else {
      return null;
    }
  }

  getAllUsers() {
    return this.http.get<TUserReturn>(`${this.BASE_URL}/user`)
  }

  updateUser(userId: string, formData: Partial<IUserData>) {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const parsedToken = JSON.parse(token);

      return this.http.patch<IUserData>(`${this.BASE_URL}/user/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${parsedToken}`
        }
      });
    } else {
      return null;
    }
  }

  getUser(userId: string) {

    return this.http.get<IUserData>(`${this.BASE_URL}/user/${userId}`)

  }

  deleteUser(userId: string) {

    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const parsedToken = JSON.parse(token);

      return this.http.delete<IUserData>(`${this.BASE_URL}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${parsedToken}`
        }
      });
    } else {
      return null;
    }
  }

  forgotUserPassword(formData: Partial<IUserEmail>) {

    return this.http.post<IUserEmail>(`${this.BASE_URL}/user/resetPassword`, formData);

  }

  resetPassword(formData: Partial<INewUserPassword>, token: string) {

    return this.http.patch<INewUserPassword>(`${this.BASE_URL}/user/${token}`, formData);

  }




}
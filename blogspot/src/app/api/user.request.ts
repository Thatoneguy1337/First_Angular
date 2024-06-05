import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginUserReturn, 
IRegisterUserReturn, 
TLoginUserData, 
TRegisterUserData, 
TUserReturn 
} from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserRequest {
  private BASE_URL = "http://localhost:3001"

  constructor(private http: HttpClient) { }

  register(formData: TRegisterUserData){
    return this.http.post<IRegisterUserReturn>(`${this.BASE_URL}/users`, formData);
  }

  login(formData: TLoginUserData){
    return this.http.post<ILoginUserReturn>(`${this.BASE_URL}/login`, formData);
  }

  getUser(){
    const token = localStorage.getItem("@TOKEN");
  
    if(token){      
      const parsedToken = JSON.parse(token);
     

      return this.http.get<TUserReturn>(`${this.BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${parsedToken}`
        }
      })
    } else {
      return null;
    }  
  }
}
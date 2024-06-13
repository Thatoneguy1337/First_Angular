import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 
{
IUser,
TUserRequest
} from "../../interfaces/likePost.interfaces";

@Injectable({
    providedIn: 'root'
})
export class likePostRequest {

    private BASE_URL = "http://localhost:3001"

    constructor(private http: HttpClient){}

    createdLike( formData:IUser ,postId: string){
        const token  = localStorage.getItem("@TOKEN")

        if(token){
         
          const parsedToken = JSON.parse(token);
          
          return this.http.post<TUserRequest>(`${this.BASE_URL}/post/${postId}`, formData, {
            headers: {
                Authorization: `Bearer ${parsedToken}`
            }
          } )
              
        } else {
            return null;
        }
    }

    deleteLike(likeId: string){
        const token = localStorage.getItem("@TOKEN")

        if(token){

            const parsedToken = JSON.parse(token);

            return this.http.delete<TUserRequest>(`${this.BASE_URL}/post/${likeId}/like`, {
                headers: {
                    Authorization: `Bearer ${parsedToken}`
                }
            })
        } else {
            return null;
        }
    }

    getLikedPost(postId:string){
        const token = localStorage.getItem("@TOKEN")

        if(token){
            const parsedToken = JSON.parse(token);
            
            return this.http.get<TUserRequest>(`${this.BASE_URL}/post/${postId}/like`, {
                headers: {
                    Authorization: `Bearer ${parsedToken}`
                }
            })
        } else {
            return null 
        }
    }



}


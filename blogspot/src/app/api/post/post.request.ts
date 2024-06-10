import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 
{IPost, 
IPostData, 
TPostUserData 
} from "../../interfaces/post.interfaces";

@Injectable({
    providedIn: 'root'
})
export class PostRequest {
    private BASE_URL = "http://localhost:3001"

    constructor(private http: HttpClient){ }

    createPost(formData: TPostUserData) {
        return this.http.post<TPostUserData>(`${this.BASE_URL}/post`, formData);
    }
   
    editPost(formData:TPostUserData, postId:string ) {
        
        const token = localStorage.getItem("@TOKEN") 
        
        if(token) {

        const parsedToken = JSON.parse(token);
        
        return this.http.patch<TPostUserData>(`${this.BASE_URL}/post/${postId}`, formData, {
            headers: {
                Authorization: `Bearer ${parsedToken}`
            }
        })
        } else {
            return null;
        }
    }

    deletePost(postId:string){
        const token = localStorage.getItem("@TOKEN")

        if(token){
          
         const parsedToken = JSON.parse(token);
         
         return this.http.delete<TPostUserData>(`${this.BASE_URL}/post/${postId}`, {
            headers: {
                AUthorization: `Bearer ${parsedToken}`
            }
         });
        } else {
            return null;
        }
    }

    getPost(){

      const token = localStorage.getItem("@TOKEN");

        if(token){
          
         const parsedToken = JSON.parse(token);
         
         return this.http.delete<TPostUserData>(`${this.BASE_URL}/post`, {
            headers: {
                Authorization: `Bearer ${parsedToken}`
            }
         });
        } else {
            return null;
        }

    }
   
    getPostById(postId: string ){
        
        const token = localStorage.getItem("@TOKEN");

        if(token){
        
            const parsedToken = JSON.parse(token);

            return this.http.get<TPostUserData>(`${this.BASE_URL}/post/${postId}`, {
                headers: {
                    Authorization: `Bearer ${parsedToken}`
                }
            })
        }else{
            return null
        }

    }

}






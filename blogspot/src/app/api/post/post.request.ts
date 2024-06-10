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
        return this.http.post<TPostUserData>(`${this.BASE_URL}/user`, formData);
    }


}






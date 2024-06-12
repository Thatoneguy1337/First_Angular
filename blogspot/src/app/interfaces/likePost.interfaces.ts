  export interface User {
    id: number;
    username: string;
    user_img: string;
  }
  
  export interface UserRequest {
    id: number;
    liked_at: string;
    username: string;
    user: User;
  }
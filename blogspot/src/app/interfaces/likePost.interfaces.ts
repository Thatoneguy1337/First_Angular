  export interface IUser {
    id: number;
    username: string;
    user_img: string;
  }
  
  export interface TUserRequest {
    id: number;
    liked_at: string;
    username: string;
    user: IUser;
  }
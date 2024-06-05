export interface IUser {
id: number;    
fullname: string; 
username: string;
user_img: string;
bg_img: string;
email: string;
password: string;
ssc_number: string;
telephone: string;
birthdate: string;
zip_code: string;
state: string;
city: string;
street: string;
number: string;
}

export interface IUserData{    
fullname: string | null; 
username: string | null;
user_img: string | null;
bg_img: string | null;
email: string | null;
password: string | null;
ssc_number: string | null;
telephone: string | null;
birthdate: string | null;
zip_code: string | null;
state: string | null;
city: string | null;
street: string | null;
number: string | null;
}

export type TRegisterUserData = Omit<IUserData, "id">;

export type TLoginUserData = Pick<IUserData, "email" | "password">;

export type TUserReturn = Omit<IUser, "password">;


export interface IRegisterUserReturn{
    accessToken: string;
    user: TUserReturn;
}

export interface ILoginUserReturn{
    accessToken: string;
    user: TUserReturn
}



 





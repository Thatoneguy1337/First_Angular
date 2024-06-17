interface IUser {
    id: number;
    username: string;
    user_img: string;
}

export interface IThread {
    id: number;
    created_at: string;
    edited: boolean;
    description: string;
    comment_img: string;
    username: string;
    user: IUser;
}

export interface IThreadData {
    id: number | null;
    created_at: string | null;
    edited: boolean | null;
    description: string | null;
    comment_img: string | null;
    username: string | null;
    user: IUser;
}




export type TCreateThreadData = Omit<IThreadData, "id">;
export type TEditThreadData = Partial<IThreadData> & { id: number };
export type TThreadReturn = Omit<IThreadData, "comment_img">;






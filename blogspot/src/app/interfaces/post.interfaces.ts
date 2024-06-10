export interface IPost {
id: number;
posted_at: string;
description: string;
post_img: string;
}

export interface IPostData {
id: number | null;
posted_at: string | null;
description: string | null;
post_img: string | null;
}

export type TPostUserData = Omit<IPostData, "id">;






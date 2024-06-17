interface User {
    id: number;
    username: string;
    user_img: string;
}

interface Comment {
    id: number;
    created_at: string;
    edited: boolean;
    description: string;
    comment_img: string;
    username: string;
    user: User;
}







export interface User{
    _id: number;
    username: string;
    email: string;
    tel?: string;
    themes?: string[];
    posts?: string[];
    ceated_at?: string;
}

export interface UserWithCredentials extends User{
    password: string;
}   



export interface User{
    _id: number;
    username: string;
    email: string;
    tel?: string;
    themes?: string[];
    posts?: string[];
    ceated_at?: string;
}

export interface UserLogin{
    email: string;
    password: string;
}

export interface UserRegister{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}


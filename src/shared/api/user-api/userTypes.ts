
export interface AuthResponse {
    accessToken: string;
    refreshToken?: string;
    user: {
        email:string,
        password:string,
        id:number,
        name:string
    };
}
import {AxiosResponse} from "axios";
import {AuthResponse} from "@/shared/api/user-api/userTypes";
import {$api} from "@/shared/api/axiosConfig";

export default class AuthService {
    static async login(
        email: string,
        password: string,
        passwordCode:string
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('user/login', {email, password,passwordCode});
    }

    static async registration(
        email: string,
        password: string,
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('user/registration', {email,password})
    }
}
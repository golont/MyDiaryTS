import axios from "axios";
import { ILogin } from "Ts/app/pages/authentication/login";
import { ISignup } from "Ts/app/pages/authentication/signup";

let baseUrl: string = "/api/";
const port: number = 5000;

if (process.env.NODE_ENV === "development") {
    baseUrl = `http://localhost:${port}${baseUrl}`;
}

class Service {
    signup = async (signup: ISignup) => {
        const body = await axios.post(`${baseUrl}auth/signup`, signup);
        return body.data;
    };

    login = async (login: ILogin) => {
        const body = await axios.post(`${baseUrl}auth/login`, login);
        const { token, userId, done } = body.data;
        const output = {
            isAuthenticated: done,
            token,
            userId
        };
        return output;
    };

    getTime = async () => {
        const body = await axios.get(`${baseUrl}time`);
        return body.data;
    };
}

export default new Service();

import axios from "axios";

let baseUrl: string = "/api/";
const port: number = 5000;

if (process.env.NODE_ENV === "development") {
    baseUrl = `http://localhost:${port}${baseUrl}`;
}

interface IBubilda {
    message: string;
}

class Service {
    getBubilda = async () => {
        const body = await axios.get(`${baseUrl}bubilda`);
        return body.data;
    };
}

export default new Service();

import axios from "axios";
import BASE_URL from "./BaseUrl";
import { useEffect, useState } from "react";

class LoginService {

    login(usr,psw){

        const [token,setToken] = useState("")

        const datos = {
            username:usr,
            password:psw
        }

        axios.post("http://localhost:8096/auth/login", datos).then((response) => {
            setToken(response.data.token)
        })
        return token;
    }
}

export default new LoginService();
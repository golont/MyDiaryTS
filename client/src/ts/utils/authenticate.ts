import { useCallback, useEffect, useState } from "react";
import actions from "Ts/redux/actions";
import { IAuthentication, initState } from "Ts/redux/state-interfaces";
import { useHistory } from "react-router";

const auth = "userData";

export const useAuth = () => {
    const [ready, setReady] = useState(false);
    const history = useHistory();

    const login = useCallback((body: IAuthentication, remember = false) => {
        actions.setAuth(body);

        if (remember) {
            localStorage.setItem(
                auth,
                JSON.stringify({ token: body.token, userId: body.userId })
            );
        }
    }, []);

    const logout = useCallback(() => {
        actions.setAuth(initState.auth);
        localStorage.removeItem(auth);
        history.push("/");
    }, []);

    useEffect(() => {
        let data: any = localStorage.getItem(auth);
        if (data) {
            data = JSON.parse(data);
            login({
                isAuthenticated: true,
                token: data.token,
                userId: data.userId
            });
        }
        setReady(true);
    }, []);
    return { login, logout, ready };
};

import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import actions from "Ts/redux/actions";
import { IAuthentication, initState } from "Ts/redux/state-interfaces";

const auth = "userData";

export const useAuth = () => {
    const history = useHistory();

    const login = useCallback((body: IAuthentication, remember = false) => {
        actions.setAuth(body);
        const { token, userId } = body;
        actions.fetchNoteRuquest(token);
        if (remember) {
            localStorage.setItem(auth, JSON.stringify({ token, userId }));
        }
    }, []);

    const logout = useCallback(() => {
        actions.setAuth(initState.auth);
        localStorage.removeItem(auth);
        history.push("/");
    }, []);

    return { login, logout };
};

export const useInit = () => {
    const { login } = useAuth();
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
    }, []);
};

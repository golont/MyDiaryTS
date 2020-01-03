import React, { useEffect, useState } from "react";
import { inputEvent } from "Ts/components/input/input";
import Loader from "Ts/components/loader";
import actions from "Ts/redux/actions";
import service from "Ts/services/service";
import { useLang } from "Ts/utils/app";
import { inputObject, useInput } from "Ts/utils/input";
import { useRequest } from "Ts/utils/request";
import { useToast } from "Ts/utils/toast";
import { validateForm } from "Ts/utils/validation";
import Form from "./form";
import { useAuth } from "Ts/utils/authenticate";

export interface ILogin {
    identifier: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const toast = useToast();
    const [remember, setRemember] = useState(false);
    const { login: auth } = useAuth();
    const { error, clearError, loading, request } = useRequest(service.login);
    const { text } = useLang();
    const [form] = useState<inputObject[]>([useInput(), useInput("password")]);
    useEffect(() => {
        const current = form[0].ref;
        const len = current!.getAttribute("placeholder")!.length;
        current!.setAttribute("size", `${len}`);
    }, [text]);

    const failureNode = (
        <div className="toast-danger">{text.toast.failureLogin}</div>
    );

    useEffect(() => {
        error && toast.show(failureNode).then(clearError);
    }, [error]);

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateForm(form);
        const [{ value: identifier }, { value: password }] = form;
        if (isValid) {
            const login: ILogin = {
                identifier,
                password
            };
            const body = await request(login);
            if (body) {
                auth(body, remember);
            }
        }
    };

    const onChange = (e: inputEvent) => {
        e.currentTarget.classList.remove("input-invalid");
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Form
                        names={text.inputs.login}
                        submitName={text.buttons.login}
                        submit={login}
                        onChange={onChange}
                        fields={form}
                    />
                    <div className="remember-me">
                        {text.checkbox}
                        <div className="checkbox-rm-wrapper">
                            <input
                                type="checkbox"
                                className="input-checkbox"
                                onChange={({
                                    currentTarget
                                }: React.ChangeEvent<HTMLInputElement>) => {
                                    setRemember(currentTarget.checked);
                                }}
                                checked={remember}
                            />
                            <div className="checkbox-rm" />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default LoginPage;

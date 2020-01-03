import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { inputEvent } from "Ts/components/input/input";
import Loader from "Ts/components/loader";
import service from "Ts/services/service";
import { useLang } from "Ts/utils/app";
import { inputObject, useInput } from "Ts/utils/input";
import { useRequest } from "Ts/utils/request";
import { useToast } from "Ts/utils/toast";
import { validateForm } from "Ts/utils/validation";
import Form from "./form";

export interface ISignup {
    email: string;
    username: string;
    phone: string;
    password: string;
}

const SignupPage: React.FC = () => {
    const { text } = useLang();
    const { error, loading, clearError, request } = useRequest(service.signup);
    const toast = useToast();
    const history = useHistory();
    const [form] = useState<inputObject[]>([
        useInput("text", "email"),
        useInput(),
        useInput("text", "phone"),
        useInput("password"),
        useInput("password")
    ]);

    const passNode = <div className="toast-danger">{text.toast.passwords}</div>;
    const successNode = (
        <div className="toast-success">{text.toast.successSingup}</div>
    );
    const failureNode = (
        <div className="toast-danger">{text.toast.failureSignup}</div>
    );

    useEffect(() => {
        error && toast.show(failureNode).then(clearError);
    }, [error]);

    const register = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateForm(form);
        if (isValid) {
            const [
                { value: email },
                { value: username },
                { value: phone },
                { value: password },
                { value: pas2 }
            ] = form;
            if (password !== pas2) {
                toast.show(passNode);
            } else {
                const signup: ISignup = {
                    email,
                    username,
                    phone,
                    password
                };
                const done = await request(signup);
                if (done) {
                    await toast.show(successNode);
                    history.push("/login");
                }
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
                <Form
                    names={text.inputs.signup}
                    submitName={text.buttons.registration}
                    submit={register}
                    onChange={onChange}
                    fields={form}
                />
            )}
        </>
    );
};

export default SignupPage;

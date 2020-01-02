import React, { useEffect, useState } from "react";
import { inputEvent } from "Ts/components/input/input";
import { useLang } from "Ts/utils/app";
import { inputObject, useInput } from "Ts/utils/input";
import { validateForm } from "Ts/utils/validation";
import Form from "./form";

const LoginPage: React.FC = () => {
    const { text } = useLang();
    const [form] = useState<inputObject[]>([useInput(), useInput("password")]);
    useEffect(() => {
        const current = form[0].ref;
        const len = current!.getAttribute("placeholder")!.length;
        current!.setAttribute("size", `${len}`);
    }, [text]);

    const login = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateForm(form);
        if (isValid) {
            //TODO: login
            console.log("login");
        }
    };

    const onChange = (e: inputEvent) => {
        e.currentTarget.classList.remove("input-invalid");
    };

    return (
        <Form
            names={text.inputs.login}
            submitName={text.buttons.login}
            submit={login}
            onChange={onChange}
            fields={form}
        />
    );
};

export default LoginPage;

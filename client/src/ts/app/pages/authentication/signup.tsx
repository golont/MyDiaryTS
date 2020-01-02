import React, { useState } from "react";
import { inputEvent } from "Ts/components/input/input";
import { useLang } from "Ts/utils/app";
import { inputObject, useInput } from "Ts/utils/input";
import { useToast } from "Ts/utils/toast";
import { validateForm } from "Ts/utils/validation";
import Form from "./form";
import Toast from "Ts/components/toast";

const SignupPage: React.FC = () => {
    const { text } = useLang();
    const toast = useToast();
    const [form] = useState<inputObject[]>([
        useInput("text", "email"),
        useInput(),
        useInput("text", "phone"),
        useInput("password"),
        useInput("password")
    ]);

    const register = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateForm(form);
        if (isValid) {
            if (form[3].value !== form[4].value) {
                toast.show();
            } else {
                console.log("login");
            }
        }
    };

    const onChange = (e: inputEvent) => {
        e.currentTarget.classList.remove("input-invalid");
    };

    return (
        <>
            <Toast toast={toast}>
                <div className="toast-danger">{text.toast.passwords}</div>
            </Toast>
            <Form
                names={text.inputs.signup}
                submitName={text.buttons.registration}
                submit={register}
                onChange={onChange}
                fields={form}
            />
        </>
    );
};

export default SignupPage;

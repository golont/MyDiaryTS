import React from "react";
import Input from "Ts/components/input";
import { useInput } from "Ts/utils/input";

interface Props {}

const LoginPage: React.FC<Props> = () => {
    const identifier = useInput();
    const textarea = useInput();
    return (
        <section className="section section-login">
            <Input value={identifier} />
            <br />
            {identifier.value}
            <br />
            <Input type="textarea" value={textarea} />
            <br />
            {textarea.value}
        </section>
    );
};

export default LoginPage;

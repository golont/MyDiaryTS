import React from "react";
import Button from "Ts/components/button";
import Input from "Ts/components/input";
import { inputObject } from "Ts/utils/input";

interface Props {
    submit: (e: React.FormEvent) => void;
    fields: inputObject[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    names: string[];
    submitName: string;
}

const Form: React.FC<Props> = ({
    submit,
    fields,
    onChange,
    submitName,
    names
}) => (
    <form onSubmit={submit} className="section authentication">
        {fields.map((field, i) => (
            <Input
                onChange={onChange}
                key={i}
                value={field}
                className="input-auth"
                placeholder={names[i]}
                type={field.type}
            />
        ))}
        <Button className="button-auth">{submitName}</Button>
    </form>
);
export default Form;

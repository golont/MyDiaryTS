import React, { useState } from "react";
import cn from "classnames";
import { inputObject } from "Ts/utils/input";
import "./input.scss";

export type inputEvent = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
>;

interface InputProps {
    type?: "text" | "textarea";
    value: inputObject;
    onChange?: (e: inputEvent) => void;
    className?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({
    type = "text",
    onChange = () => {},
    className = "",
    value,
    placeholder = "Type some text..."
}) => {
    const [v, setV] = useState<string>(value.value);
    const classes: string = cn(
        {
            textarea: type === "textarea"
        },
        "input",
        className
    );

    const onChangeHandler = (e: inputEvent) => {
        onChange(e);
        setV(e.target.value);
        value.value = e.target.value;
    };
    if (type === "textarea") {
        return (
            <textarea
                onChange={onChangeHandler}
                value={v}
                placeholder={placeholder}
                className={classes}
            />
        );
    }
    return (
        <input
            type={type}
            onChange={onChangeHandler}
            className={classes}
            value={v}
            placeholder={placeholder}
        />
    );
};

export default Input;

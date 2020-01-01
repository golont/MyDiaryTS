import cn from "classnames";
import React, { useState } from "react";
import { inputObject } from "Ts/utils/input";
import { useDarkTheme } from "Ts/utils/useDark";
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

const Input: React.FC<InputProps> = React.memo(
    ({
        type = "text",
        onChange = () => {},
        className = "",
        value,
        placeholder = "Type some text..."
    }) => {
        const [v, setV] = useState<string>(value.value);
        const classes: string = useDarkTheme(
            cn(
                {
                    textarea: type === "textarea"
                },
                "input",
                className
            )
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
    }
);

export default Input;

import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { inputObject } from "Ts/utils/input";
import { useDarkTheme } from "Ts/utils/useDark";
import "./input.scss";

export type inputEvent = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
>;
export type inputType = "text" | "textarea" | "password";

interface InputProps {
    type?: inputType;
    value: inputObject;
    onChange?: (e: inputEvent) => void;
    className?: string;
    placeholder?: string;
    trim?: boolean;
}

const Input: React.FC<InputProps> = React.memo(
    ({
        type = "text",
        onChange = () => {},
        className = "",
        value,
        placeholder = "Type some text...",
        trim = false
    }) => {
        const [v, setV] = useState<string | undefined>(value.value);
        const ref = useRef(null);
        const classes: string = useDarkTheme(
            cn(
                {
                    textarea: type === "textarea"
                },
                "input",
                className
            )
        );
        useEffect(() => {
            setV(value.value);
        }, [value.value]);

        useEffect(() => {
            value.ref = ref.current;
        }, [ref]);

        const onChangeHandler = (e: inputEvent) => {
            onChange(e);
            let output = e.target.value;
            if (trim) {
                output = output.trim();
            }
            setV(output);
            value.value = output;
            return output;
        };

        if (type === "textarea") {
            return (
                <textarea
                    onChange={onChangeHandler}
                    value={v}
                    placeholder={placeholder}
                    className={classes}
                    ref={ref}
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
                ref={ref}
            />
        );
    }
);

export default Input;

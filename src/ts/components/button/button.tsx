import cn from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDarkTheme } from "Ts/utils/useDark";
import "./button.scss";

export interface IButton {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    href?: string;
    outside?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
}

const Button: React.FC<IButton> = React.memo(
    ({
        children = "Button",
        onClick = () => {
            console.log("Button onClick function isn't provided");
        },
        className = "",
        href = "",
        outside = false,
        disabled = false,
        ...attrs
    }) => {
        const classes: string = useDarkTheme(cn("button", className, disabled));
        if (href) {
            if (outside) {
                return (
                    <a
                        href={href}
                        className={classes}
                        {...attrs}
                        target="_blank"
                    >
                        {children}
                    </a>
                );
            }
            return (
                <NavLink to={href} className={classes} {...attrs}>
                    {children}
                </NavLink>
            );
        }
        return (
            <button onClick={onClick} {...attrs} className={classes}>
                {children}
            </button>
        );
    }
);

export default Button;

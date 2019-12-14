import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import "./button.scss";

export interface ButtonProps {
    onClick?: () => void;
    className?: string;
    href?: string;
    outside?: boolean;
    children?: React.ReactNode;
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    children = "Button",
    onClick,
    className,
    href,
    outside,
    disabled,
    ...attrs
}) => {
    const classes: string = cn("button", className, disabled);
    if (href) {
        if (outside) {
            return (
                <a href={href} className={classes} {...attrs} target="_blank">
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
};

export default Button;

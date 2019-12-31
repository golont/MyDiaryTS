import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <div className="header__logo">
            <NavLink to="/">
                <img src="/assets/img/logo.png" alt="Bear logo" />
            </NavLink>
        </div>
    );
};

export default Logo;

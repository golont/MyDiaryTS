import React from "react";
import Logo from "./logo";
import Navigation from "./navigation";

const Header: React.FC = () => (
    <header className="header">
        <Logo />
        <Navigation active={true} />
        {/* <Navigation isActive={isActive} isLogged={isLogged} />
        <HamburgerMenu toggleActiveHandler={toggleActiveHandler} /> */}
    </header>
);

export default Header;

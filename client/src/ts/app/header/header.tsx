import React, { useState } from "react";
import Logo from "./logo";
import Navigation from "./navigation";
import Hamburger from "./hamburger";
import { useDarkTheme } from "Ts/utils/useDark";

const Header: React.FC = React.memo(() => {
    const [active, setActive] = useState(false);
    const classes = useDarkTheme("header");
    return (
        <header className={classes}>
            <Logo />
            <Navigation active={active} />
            <Hamburger
                toggleActive={() => {
                    setActive(a => !a);
                }}
            />
        </header>
    );
});

export default Header;

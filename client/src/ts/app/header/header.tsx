import React, { useState } from "react";
import { useDarkTheme } from "Ts/utils/useDark";
import Hamburger from "./hamburger";
import Logo from "./logo";
import Navigation from "./navigation";

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

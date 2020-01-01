import cn from "classnames";
import React from "react";
import { useLinks } from "./links";

interface INavigation {
    active?: boolean;
}

const Navigation: React.FC<INavigation> = React.memo(({ active }) => {
    const authed = false;
    const { authedItems, notAuthedItems } = useLinks();
    let links: React.ReactNode[];
    authed ? (links = authedItems) : (links = notAuthedItems);
    const classes = cn("header__nav", { active });
    return (
        <nav className={classes}>
            <ul className="header__nav-items">
                {links.map((item, i) => (
                    <li key={i} className="header__nav-item">
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
});

export default Navigation;

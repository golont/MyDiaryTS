import cn from "classnames";
import React from "react";
import { useLinks } from "./links";

interface INavigation {
    active?: boolean;
}

const Navigation: React.FC<INavigation> = React.memo(({ active }) => {
    const { authedItems } = useLinks();
    const classes = cn("header__nav", { active });
    console.log();
    return (
        <nav className={classes}>
            <ul className="header__nav-items">
                {authedItems.map((item, i) => (
                    <li key={i} className="header__nav-item">
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
});

export default Navigation;

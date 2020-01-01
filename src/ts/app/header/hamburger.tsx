import React from "react";
import { useDarkTheme } from "Ts/utils/useDark";

interface IHamburger {
    toggleActive: () => void;
}

const Hamburger: React.FC<IHamburger> = ({ toggleActive }) => (
    <div className="header__hamburger">
        <input
            type="checkbox"
            id="checkbox"
            className="checkbox visuallyHidden"
        />
        <label htmlFor="checkbox">
            <div className={useDarkTheme("hamburger")} onClick={toggleActive}>
                <span className="bar bar1" />
                <span className="bar bar2" />
                <span className="bar bar3" />
                <span className="bar bar4" />
            </div>
        </label>
    </div>
);

export default Hamburger;

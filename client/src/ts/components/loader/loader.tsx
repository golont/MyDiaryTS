import React from "react";
import { useDarkTheme } from "Ts/utils/useDark";
import "./loader.scss";

const Loader: React.FC = React.memo(() => {
    const classes: string = useDarkTheme("lds-roller");
    return (
        <div className="loader-wrapper">
            <div className={classes}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
});

export default Loader;

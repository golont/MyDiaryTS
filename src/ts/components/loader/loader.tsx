import React from "react";
import "./loader.scss";
import { useDarkTheme } from "Ts/utils/useDark";

const Loader: React.FC = React.memo(() => {
    const classes: string = useDarkTheme("lds-roller");
    return (
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
    );
});

export default Loader;

import React from "react";
import cn from "classnames";
import Portal from "./../portal";
import "./background.scss";
import { useTheme } from "Ts/utils/app";

const Background: React.FC = React.memo(() => {
    const { isDark, toggleTheme } = useTheme();
    const classes: string = cn("background", { "background-dark": isDark });
    return <Portal className={classes} />;
});

export default Background;

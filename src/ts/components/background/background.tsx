import React from "react";
import cn from "classnames";
import Portal from "./../portal";
import "./background.scss";
import { useDarkTheme } from "Ts/utils/useDark";

const Background: React.FC = React.memo(() => {
    const classes: string = useDarkTheme(cn("background"));
    return <Portal className={classes} />;
});

export default Background;

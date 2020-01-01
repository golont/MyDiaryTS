import cn from "classnames";
import React from "react";
import { useDarkTheme } from "Ts/utils/useDark";
import Portal from "./../portal";
import "./background.scss";

const Background: React.FC = React.memo(() => {
    const classes: string = useDarkTheme(cn("background"));
    return <Portal className={classes} />;
});

export default Background;

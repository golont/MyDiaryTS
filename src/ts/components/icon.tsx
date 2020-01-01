import cn from "classnames";
import React from "react";

interface IconProps {
    name: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
    const classes: string = cn(`icon-${name}`, className);
    return <span className={classes} />;
};

export default Icon;

import React from "react";
import cn from "classnames";

interface IconProps {
    name: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
    const classes: string = cn(`icon-${name}`, className);
    return <span className={classes} />;
};

export default Icon;

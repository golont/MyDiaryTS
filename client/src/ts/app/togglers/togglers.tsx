import cn from "classnames";
import React from "react";
import Icon from "Ts/components/icon";
import Portal from "Ts/components/portal";
import { useLang, useTheme } from "Ts/utils/app";
import { useDarkTheme } from "Ts/utils/useDark";
import "./togglers.scss";

const ThemeToggler: React.FC = React.memo(() => {
    const { toggleTheme } = useTheme();
    const classes = useDarkTheme("toggler");
    return (
        <Portal className={classes} onClick={toggleTheme}>
            <Icon name="power" />
        </Portal>
    );
});

const LangToggler: React.FC = React.memo(() => {
    const { lang, toggleLang } = useLang();
    const classes = cn(`toggler toggler-lang`, lang);
    return <Portal className={classes} onClick={toggleLang} />;
});

const Togglers: React.FC = React.memo(() => (
    <>
        <LangToggler />
        <ThemeToggler />
    </>
));

export default Togglers;

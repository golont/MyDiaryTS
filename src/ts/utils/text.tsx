import React from "react";
import { useLang } from "./app";
interface Text {
    buttons: {
        toggleLanguage: string;
        toggleTheme: string;
    };
}

export let texts: Text;

const LanguageTexts = React.memo(() => {
    const { lang } = useLang();
    switch (lang) {
        case "eng":
            texts = {
                buttons: {
                    toggleLanguage: "Toggle Language",
                    toggleTheme: "Toggle Theme"
                }
            };
            break;
        case "rus":
            texts = {
                buttons: {
                    toggleLanguage: "Сменить язык",
                    toggleTheme: "Сменить тему"
                }
            };
            break;
    }

    return <></>;
});

export default LanguageTexts;

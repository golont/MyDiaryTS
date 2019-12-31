import React from "react";
import { useLang } from "./app";
interface Text {
    buttons: {
        about: string;
        logout: string;
        search: string;
        home: string;
        login: string;
        registration: string;
    };
}

export let texts: Text;

const LanguageTexts = () => {
    const { lang } = useLang();
    switch (lang) {
        case "eng":
            texts = {
                buttons: {
                    about: "About",
                    login: "Login",
                    logout: "Logout",
                    home: "Home",
                    registration: "Registration",
                    search: "Search"
                }
            };
            break;
        case "rus":
            texts = {
                buttons: {
                    about: "О проекте",
                    login: "Войти",
                    logout: "Выйти",
                    home: "Главная",
                    registration: "Регистрация",
                    search: "Поиск"
                }
            };
            break;
    }

    return <></>;
};

export default LanguageTexts;

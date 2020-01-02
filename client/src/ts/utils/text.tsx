import { Lang } from "./app";

export interface IText {
    buttons: {
        about: string;
        logout: string;
        search: string;
        home: string;
        login: string;
        registration: string;
    };
}

const text = (lang: Lang) => {
    switch (lang) {
        case "eng":
            return {
                buttons: {
                    about: "About",
                    login: "Login",
                    logout: "Logout",
                    home: "Home",
                    registration: "Signup",
                    search: "Search"
                }
            };
        case "rus":
            return {
                buttons: {
                    about: "О проекте",
                    login: "Войти",
                    logout: "Выйти",
                    home: "Главная",
                    registration: "Регистрация",
                    search: "Поиск"
                }
            };
    }
};

export default text;

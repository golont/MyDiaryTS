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
    inputs: {
        login: string[];
        signup: string[];
    };
    toast: {
        passwords: string;
    };
}

const text = (lang: Lang): IText => {
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
                },
                inputs: {
                    login: ["email / username / phone", "password"],
                    signup: [
                        "email",
                        "username",
                        "phone number",
                        "password",
                        "submit password"
                    ]
                },
                toast: {
                    passwords: "Passwords must be equals"
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
                },
                inputs: {
                    login: ["email / имя / телефон", "Пароль"],
                    signup: [
                        "email",
                        "Имя пользователя",
                        "Номер телефона",
                        "Пароль",
                        "Подтвердить пароль"
                    ]
                },
                toast: {
                    passwords: "Пароли должны совпадать"
                }
            };
    }
};

export default text;

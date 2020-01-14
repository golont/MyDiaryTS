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
        textarea: string;
        note: string;
    };
    toast: {
        passwords: string;
        successSingup: string;
        failureSignup: string;
        failureLogin: string;
    };
    checkbox: string;
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
                    ],
                    note: "Note",
                    textarea: "Note your thoughts here..."
                },
                toast: {
                    passwords: "Passwords must be equals",
                    successSingup: "Signup completed successfully",
                    failureSignup: "User credentials are unavailable",
                    failureLogin: "Wrong credentials"
                },
                checkbox: "Remember me"
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
                    ],
                    note: "Запись",
                    textarea: "Пишите свои мысли тут..."
                },
                toast: {
                    passwords: "Пароли должны совпадать",
                    failureSignup: "Данные пользователя недоступны",
                    successSingup: "Регистрация прошла успешно",
                    failureLogin: "Введенные данные неверны"
                },
                checkbox: "Запомнить"
            };
    }
};

export default text;

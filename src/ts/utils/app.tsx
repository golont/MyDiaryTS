import React, { useState, useContext } from "react";

export type Lang = "rus" | "eng";
export interface IApp {
    isDark: boolean;
    toggleTheme: () => void;
    lang: Lang;
    setLang: (l?: Lang) => void;
}

export const AppContext = React.createContext<IApp>({
    isDark: false,
    toggleTheme: () => {},
    lang: "eng",
    setLang: () => {}
});

interface IAppProvider {
    children: React.ReactNode;
}

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
    const [isDark, setDark] = useState<boolean>(
        window.localStorage.getItem("darkTheme") === "true"
    );
    const [language, setLanguage] = useState<Lang>(
        (window.localStorage.getItem("language") as Lang) || "eng"
    );
    const toggleTheme = (): void => {
        setDark(!isDark);
        window.localStorage.setItem("darkTheme", JSON.stringify(!isDark));
    };

    const setLang = (lang: Lang): void => {
        setLanguage(lang);
        window.localStorage.setItem("language", lang);
    };

    return (
        <AppContext.Provider
            value={{
                isDark,
                toggleTheme,
                lang: language,
                setLang
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export interface ITheme {
    isDark: boolean;
    toggleTheme: () => void;
}

export const useTheme = (): ITheme => {
    return useContext<IApp>(AppContext);
};

export interface ILang {
    lang: Lang;
    setLang: (l?: Lang) => void;
}

export const useLang = (): ILang => {
    return useContext<IApp>(AppContext);
};

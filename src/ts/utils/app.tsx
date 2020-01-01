import React, { useState, useContext, useEffect } from "react";

export type Lang = "rus" | "eng";
export interface IApp {
    isDark: boolean;
    toggleTheme: () => void;
    lang: Lang;
    setLang: (l?: Lang) => void;
    toggleLang: () => void;
}

export const AppContext = React.createContext<IApp>({
    isDark: false,
    toggleTheme: () => {},
    lang: "eng",
    setLang: () => {},
    toggleLang: () => {}
});

interface IAppProvider {
    children: React.ReactNode;
}

const localLang: string = "language";
const localTheme: string = "darkTheme";

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
    const [isDark, setDark] = useState<boolean>(
        window.localStorage.getItem(localTheme) === "true"
    );
    const [language, setLanguage] = useState<Lang>(
        (window.localStorage.getItem(localLang) as Lang) || "eng"
    );
    const toggleTheme = (): void => {
        setDark(!isDark);
        window.localStorage.setItem(localTheme, JSON.stringify(!isDark));
    };
    const setLang = (lang: Lang): void => {
        setLanguage(lang);
        window.localStorage.setItem(localLang, lang);
    };
    const toggleLang = () => {
        if (language === "eng") {
            setLanguage("rus");
            window.localStorage.setItem(localLang, "rus");
        } else {
            setLanguage("eng");
            window.localStorage.setItem(localLang, "eng");
        }
    };

    return (
        <AppContext.Provider
            value={{
                isDark,
                toggleTheme,
                lang: language,
                setLang,
                toggleLang
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
    toggleLang: () => void;
}

export const useLang = (): ILang => {
    return useContext<IApp>(AppContext);
};

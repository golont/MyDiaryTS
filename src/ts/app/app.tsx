import React from "react";
import Button from "Ts/components/button";
import { useTheme, useLang } from "Ts/utils/app";
import { texts } from "Ts/utils/text";

const App: React.FC = () => {
    const { toggleTheme } = useTheme();
    const { setLang, lang } = useLang();

    return (
        <div className="container">
            <Button onClick={toggleTheme}> {texts.buttons.toggleTheme}</Button>
            <Button
                onClick={() => {
                    if (lang === "eng") {
                        setLang("rus");
                    } else {
                        setLang("eng");
                    }
                }}
            >
                {texts.buttons.toggleLanguage}
            </Button>
        </div>
    );
};

export default App;

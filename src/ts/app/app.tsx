import React from "react";
import Button from "Ts/components/button";
import { useDarkTheme } from "Ts/utils/useDark";
import Header from "./header";
import Togglers from "./togglers";
import { useRoutes } from "./routes";

const App: React.FC = () => {
    return (
        <div className="container">
            <div className={useDarkTheme("wrapper")}>
                <Header />
                <div className="main">
                    {useRoutes(false)}
                </div>
            </div>
            <Togglers />
        </div>
    );
};

export default App;

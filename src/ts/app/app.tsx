import React from "react";
import Header from "./header";
import Togglers from "./togglers";
import Button from "Ts/components/button";
import { useDarkTheme } from "Ts/utils/useDark";

const App: React.FC = () => {
    return (
        <div className="container">
            <div className={useDarkTheme("wrapper")}>
                <Header />
                <div className="main">
                    <Button />
                    fdashjkfdhsajk
                    fhklasdhfkjdas
                </div>
            </div>
            <Togglers />
        </div>
    );
};

export default App;

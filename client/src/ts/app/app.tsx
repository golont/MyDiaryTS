import React, { useEffect } from "react";
import Button from "Ts/components/button";
import { useDarkTheme } from "Ts/utils/useDark";
import Header from "./header";
import Togglers from "./togglers";
import { useRoutes } from "./routes";
import axios from "axios";

const App: React.FC = () => {
    useEffect(() => {
        // axios.get("/bubilda").then(data => {
        //     console.log(data.data);
        // });
    }, []);
    return (
        <div className="container">
            <div className={useDarkTheme("wrapper")}>
                <Header />
                <div className="main">
                    {useRoutes(false)}
                    fdajlk
                </div>
            </div>
            <Togglers />
        </div>
    );
};

export default App;

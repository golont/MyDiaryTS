import React, { useEffect } from "react";
import Button from "Ts/components/button";
import { useDarkTheme } from "Ts/utils/useDark";
import Header from "./header";
import Togglers from "./togglers";
import { useRoutes } from "./routes";
import axios from "axios";
import service from "Ts/services/service";

const App: React.FC = () => {
    useEffect(() => {
        axios.get("http://localhost:5000/api/bubilda").then(data => {
            console.log(data.data);
        });

        service.getBubilda().then(console.log);
    }, []);
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

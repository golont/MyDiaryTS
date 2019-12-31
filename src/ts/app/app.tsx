import React from "react";
import Header from "./header";
import Togglers from "./togglers";
import Button from "Ts/components/button";

const App: React.FC = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <Header />
                <div className="main">
                    <Button />
                </div>
            </div>
            <Togglers />
        </div>
    );
};

export default App;

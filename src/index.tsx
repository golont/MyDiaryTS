import "./assets/scss/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "Ts/app/app";
import Background from "Ts/components/background";
import { AppProvider } from "Ts/utils/app";
import LanguageTexts from "Ts/utils/text";

const Index: React.FC = () => (
    <AppProvider>
        <LanguageTexts />
        <Router>
            <App />
            <Background />
        </Router>
    </AppProvider>
);

ReactDOM.render(<Index />, document.getElementById("root"));

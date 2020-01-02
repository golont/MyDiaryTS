import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "Ts/app/app";
import Background from "Ts/components/background";
import { AppProvider } from "Ts/utils/app";
import "./assets/scss/main.scss";

const Index: React.FC = () => (
    <AppProvider>
        <Router>
            <App />
            <Background />
        </Router>
    </AppProvider>
);

ReactDOM.render(<Index />, document.getElementById("root"));

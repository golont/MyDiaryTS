import "./assets/scss/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "Ts/app/app";

const Index: React.FC = () => (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(<Index />, document.getElementById("root"));

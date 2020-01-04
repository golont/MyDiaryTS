import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "Ts/app/app";
import Background from "Ts/components/background";
import store from "Ts/redux/store/store";
import timer from "Ts/redux/timer";
import { AppProvider } from "Ts/utils/app";
import "./assets/scss/main.scss";

const Index: React.FC = () => (
    <Provider store={store}>
        <AppProvider>
            <Router>
                <App />
                <Background />
            </Router>
        </AppProvider>
    </Provider>
);

timer();

ReactDOM.render(<Index />, document.getElementById("root"));

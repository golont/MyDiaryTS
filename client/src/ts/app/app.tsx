import React from "react";
import { useSelector } from "react-redux";
import Toast from "Ts/components/toast";
import { RootState } from "Ts/redux/store/store";
import { useInit } from "Ts/utils/authenticate";
import { useToast } from "Ts/utils/toast";
import { useDarkTheme } from "Ts/utils/useDark";
import Header from "./header";
import { useRoutes } from "./routes";
import Togglers from "./togglers";

const App: React.FC = () => {
    useInit();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const toast = useToast();
    return (
        <div className="container">
            <Toast toast={toast} />
            <div className={useDarkTheme("wrapper")}>
                <Header />
                <div className="main">{useRoutes(isAuthenticated)}</div>
            </div>
            <Togglers />
        </div>
    );
};

export default App;

import React, { useMemo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DataPage from "./pages/data";
import SearchPage from "./pages/search";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login";

export const useRoutes = (isAuthenticated: boolean): React.ReactNode => {
    const generalRoutes = useMemo(
        () => (
            <Route path="/about" exact={true}>
                <AboutPage />
            </Route>
        ),
        []
    );

    if (isAuthenticated) {
        return (
            <Switch>
                {generalRoutes}
                <Route path="/" exact={true}>
                    <DataPage />
                </Route>
                <Route path="/search" exact={true}>
                    <SearchPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        );
    }

    return (
        <Switch>
            {generalRoutes}
            <Route path="/login" exact={true}>
                <LoginPage />
            </Route>
            <Route path="/signup" exact={true}>
                <LoginPage />
            </Route>
            <Redirect to="/login" />
        </Switch>
    );
};

import React from "react";
import Button from "Ts/components/button";
import { useLang } from "Ts/utils/app";

export const useLinks = () => {
    const { text } = useLang();
    const baseItems: React.ReactNode[] = [
        <Button key="about" href="/about" className="button-header">
            {text.buttons.about}
        </Button>
    ];

    const authedItems: React.ReactNode[] = [
        <Button key="home" href="/" className="button-header">
            {text.buttons.home}
        </Button>,
        <Button key="search" href="/search" className="button-header">
            {text.buttons.search}
        </Button>,
        ...baseItems,
        <Button
            key="logout"
            onClick={() => {
                //TODO: logout
                console.log("logout");
            }}
            className="button-header"
        >
            {text.buttons.logout}
        </Button>
    ];

    const notAuthedItems: React.ReactNode[] = [
        ...baseItems,
        <Button key="reg" href="/signup" className="button-header">
            {text.buttons.registration}
        </Button>,
        <Button key="login" href="/login" className="button-header">
            {text.buttons.login}
        </Button>
    ];

    return { notAuthedItems, authedItems };
};

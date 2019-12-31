import React from "react";
import Button from "Ts/components/button";
import { texts } from "Ts/utils/text";
import { useLang } from "Ts/utils/app";

export const useLinks = () => {
    useLang();
    const baseItems: React.ReactNode[] = [
        <Button key="about" href="/about" className="button-header">
            {texts.buttons.about}
        </Button>
    ];

    const authedItems: React.ReactNode[] = [
        <Button key="home" href="/" className="button-header">
            {texts.buttons.home}
        </Button>,
        <Button key="search" href="/search" className="button-header">
            {texts.buttons.search}
        </Button>,
        ...baseItems,
        <Button
            key="logout"
            onClick={() => {
                //TODO: logout
            }}
            className="button-header"
        >
            {texts.buttons.logout}
        </Button>
    ];

    const notAuthedItems: React.ReactNode[] = [
        <Button key="login" href="/login" className="button-header">
            {texts.buttons.login}
        </Button>,
        <Button key="reg" href="/re"
    ];

    return { notAuthedItems, authedItems };
};

import { useMemo, useState, useEffect } from "react";
import { inputType } from "Ts/components/input/input";

export type validType = "phone" | "email" | "text";

export interface inputObject {
    value?: string;
    ref?: HTMLInputElement | HTMLTextAreaElement | null;
    validType?: validType;
    type?: inputType;
}

export function createInput(data?: inputObject): inputObject {
    if (data) {
        const {
            value = "",
            type = "text",
            validType = "text"
        } = data;
        return {
            ...data,
            value,
            type,
            validType
        };
    }
    return {
        value: "",
        ref: null,
        type: "text",
        validType: "text"
    };
}

export const useInput = (data?: inputObject): inputObject => {
    return useMemo(() => createInput(data), [data]);
};

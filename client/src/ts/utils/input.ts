import { useMemo } from "react";
import { inputType } from "Ts/components/input/input";

export type validType = "phone" | "email" | "text";

export interface inputObject {
    value: string;
    ref?: HTMLInputElement | HTMLTextAreaElement | null;
    validType: validType;
    type: inputType;
}

export function createInput(
    type: inputType = "text",
    validType: validType = "text"
): inputObject {
    const inputObject: inputObject = {
        value: "",
        ref: null,
        type,
        validType
    };
    return inputObject;
}

export const useInput = (
    type: inputType = "text",
    validType: validType = "text"
): inputObject => {
    return useMemo(() => createInput(type, validType), []);
};

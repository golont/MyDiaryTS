import { useMemo } from "react";

export interface inputObject {
    value: string;
}

export function createInput(): inputObject {
    const inputObject: inputObject = {
        value: ""
    };
    return inputObject;
}

export const useInput = (): inputObject => {
    return useMemo(createInput, []);
};

import { useMemo } from "react";

export interface toastObject {
    show: Function;
}

export function createToast(): toastObject {
    const toastObject: toastObject = {
        show: Function
    };
    return toastObject;
}

export const useToast = (): toastObject => {
    return useMemo(createToast, []);
};

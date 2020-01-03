import { useMemo } from "react";

export interface toastObject {
    show: (node: React.ReactNode) => any;
}

const toastObject: toastObject = {
    show: () => {}
};

export function createToast(): toastObject {
    return toastObject;
}

export const useToast = (): toastObject => {
    return useMemo(createToast, []);
};

import React, { useEffect, useState } from "react";
import { toastObject } from "Ts/utils/toast";
import Portal from "../portal";
import "./toast.scss";

interface IToast {
    children: React.ReactNode;
    toast: toastObject;
    showTime?: number;
}

const Toast: React.FC<IToast> = ({ children, toast, showTime = 2500 }) => {
    const [show, setShow] = useState<boolean>(false);
    const showToast = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, showTime);
    };
    useEffect(() => {
        toast.show = showToast;
    }, []);
    return (
        <>
            {show && (
                <Portal className="toast">
                    <div className="toast__wrapper">{children}</div>
                </Portal>
            )}
        </>
    );
};

export default Toast;

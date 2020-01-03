import React, { useEffect, useState } from "react";
import { toastObject } from "Ts/utils/toast";
import Portal from "../portal";
import "./toast.scss";

interface IToast {
    toast: toastObject;
    showTime?: number;
}

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const Toast: React.FC<IToast> = React.memo(({ toast, showTime = 2000 }) => {
    const [show, setShow] = useState<boolean>(false);
    const [node, setNode] = useState<React.ReactNode>(false);
    const showToast = async (inputNode: React.ReactNode) => {
        setNode(inputNode);
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, showTime);
        await timeout(showTime);
    };
    useEffect(() => {
        toast.show = showToast;
    }, []);
    return (
        <>
            {show && (
                <Portal className="toast">
                    <div className="toast__wrapper">{node}</div>
                </Portal>
            )}
        </>
    );
});

export default Toast;

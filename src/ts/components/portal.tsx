import { useEffect } from "react";
import ReactDOM from "react-dom";

export interface IPortal {
    children?: React.ReactNode;
    className?: string;
}

const Portal: React.FC<IPortal> = ({
    children,
    className = ""
}): React.ReactPortal => {
    const el: HTMLDivElement = document.createElement("div");
    useEffect(() => {
        document.body.appendChild(el);
        el.className += className;
        return () => {
            document.body.removeChild(el);
        };
    });

    return ReactDOM.createPortal(children, el);
};

export default Portal;

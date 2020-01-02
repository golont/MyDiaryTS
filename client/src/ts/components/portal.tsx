import { useEffect } from "react";
import ReactDOM from "react-dom";

export interface IPortal {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Portal: React.FC<IPortal> = ({
    children,
    className = "",
    onClick = () => {}
}): React.ReactPortal => {
    const el: HTMLDivElement = document.createElement("div");
    useEffect(() => {
        document.body.appendChild(el);
        el.className += className;
        el.addEventListener("click", onClick);
        return () => {
            document.body.removeChild(el);
        };
    });

    return ReactDOM.createPortal(children, el);
};

export default Portal;

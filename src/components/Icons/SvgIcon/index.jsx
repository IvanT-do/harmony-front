import classNames from "classnames";

import "./style.css";

export default function SvgIcon({ children, className, ...props }) {
    return (
        <svg
            preserveAspectRatio=""
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("svg-icon", className)}
            {...props}
        >
            { children }
        </svg>
    );
}
import {Link} from "react-router-dom";
import classNames from "classnames";
import "./style.scss";

export default function ButtonLink({className, ...props}) {
    return (
        <Link
            className={classNames("button", className)}
            {...props}
        />
    );
}
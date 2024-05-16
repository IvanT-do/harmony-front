import { Link } from "react-router-dom";
import Logo from "../../../Icons/Logo/index.jsx";
import Navbar from "../Navbar/index.jsx";
import classNames from "classnames";
import "./style.scss";

export default function Header({ large= false, className }) {
    return (
        <header className={classNames("header", className)}>
            <Link to="/" className="header__logo">
                <Logo className="header__logo-icon"/>
                Гармония роста
            </Link>

            <Navbar
                gap={large ? "large" : "normal"}
            />

            <a
                href="tel:+79656532426"
                className="header__phone"
            >
                +7 965 653 24 26
            </a>
        </header>
    );
}

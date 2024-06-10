import { Link } from "react-router-dom";
import Logo from "../../../Icons/Logo/index.jsx";
import Navbar from "../Navbar/index.jsx";
import MobileMenu from "./components/MobileMenu";
import classNames from "classnames";
import useMediaQuery from "../../../../utils/useMediaQuery.js";

import "./style.scss";

export default function Header({large= false, className, showMobileMenu=false }) {
    const { is } = useMediaQuery();

    return (
        <header className={classNames("header", className)}>
            <Link to="/" className="header__logo">
                <Logo className="header__logo-icon"/>
                Гармония роста
            </Link>

            {
                is("md") && (
                    <Navbar
                        gap={large ? "large" : "normal"}
                    />
                )
            }

            {
                (is("md") || !showMobileMenu) && (
                    <a
                        href="tel:+79656532426"
                        className="header__phone"
                    >
                        +7 965 653 24 26
                    </a>
                )
            }

            {
                showMobileMenu && (
                    <MobileMenu viewLower="md" />
                )
            }
        </header>
    );
}

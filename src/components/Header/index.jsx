import { Link } from "react-router-dom";
import Logo from "../Icons/Logo";
import Navbar from "../Navbar";
import "./style.scss";

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <Logo className="header__logo-icon"/>
                Гармония роста
            </Link>
            <Navbar />
            <a
                href="tel:+79656532426"
                className="header__phone"
            >
                +7 965 653 24 26
            </a>
        </header>
    );
}

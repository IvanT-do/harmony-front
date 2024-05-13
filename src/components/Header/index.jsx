import Logo from "../Icons/Logo";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./style.scss";

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <Logo
                    className="header__logo-icon"
                    style={{color: "#667AFB", fontSize: 16}}
                />
                Гармония роста
            </Link>
            <Navbar />
            <a href="tel:+79656532426">
                +7 965 653 24 26
            </a>
        </header>
    );
}

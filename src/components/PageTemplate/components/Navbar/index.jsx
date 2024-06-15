import { Link } from "react-router-dom";
import classNames from "classnames";
import "./style.scss";

const links = [
    {
        title: "О центре",
        url: "/about"
    },
    {
        title: "Специалисты",
        url: "/employee"
    },
    {
        title: "Услуги",
        url: "/services"
    },
    {
        title: "Контакты",
        url: "/contacts"
    }
];

// Компонент меню ссылок
export default function Navbar({ gap="normal", className }) {
    return (
        <nav className={classNames("navbar", "navbar_gap_"+gap, className)}>
            {
                links.map(link => (
                    <Link
                        to={link.url}
                        key={link.title}
                        className="navbar__link"
                    >
                        {link.title}
                    </Link>
                ))
            }
        </nav>
    );
}

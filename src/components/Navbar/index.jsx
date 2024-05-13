import { Link } from "react-router-dom";
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

export default function Navbar() {
    return (
        <nav className="navbar">
            {
                links.map(link => (
                    <Link to={link.url}>
                        {link.title}
                    </Link>
                ))
            }
        </nav>
    );
}

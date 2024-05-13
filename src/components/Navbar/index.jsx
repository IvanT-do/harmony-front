import { Link } from "react-router-dom";

const links = [
    {
        title: "О центре",
        url: "1"
    },
    {
        title: "Специалисты",
        url: "2"
    },
    {
        title: "Услуги",
        url: "3"
    },
    {
        title: "Контакты",
        url: "4"
    }
]

export default function Navbar() {
    return (
        <nav className="navbar">
            {
                links.map(link => (
                    <Link
                        to={link.url}
                        className="navbar__link"
                    >
                        {link.title}
                    </Link>
                ))
            }
        </nav>
    );
}

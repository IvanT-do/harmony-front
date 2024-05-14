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

export default function Navbar({ gap="normal" }) {
    return (
        <nav className={classNames("navbar", "navbar_gap_"+gap)}>
            {
                links.map(link => (
                    <Link to={link.url} key={link.title}>
                        {link.title}
                    </Link>
                ))
            }
        </nav>
    );
}

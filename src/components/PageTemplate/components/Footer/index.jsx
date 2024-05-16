import Header from "../Header/index.jsx";
import "./style.scss";

export default function Footer() {
    return (
        <div className="container">
            <footer className="footer">
                <Header
                    large
                    className="footer__row"
                />
                <div className="footer__info">
                    <span>ИНН 1278654231</span>

                    <a href="mailto:garmony@mail.ru">
                        garmony@mail.ru
                    </a>
                </div>
            </footer>
        </div>
    );
}

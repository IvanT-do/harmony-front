import VK from "../../components/Icons/VK";
import Mail from "../../components/Icons/Mail";
import Phone from "../../components/Icons/Phone";

import "./style.scss";
import useMediaQuery from "../../utils/useMediaQuery.js";

const ContactsLink = ({ icon, color, children }) => {
    return (
        <div className="contacts-link">
            <div
                className="contacts-link__icon"
                style={{
                    background: color
                }}
            >
                { icon }
            </div>
            <div className="contacts-link__text">
                { children }
            </div>
        </div>
    );
}

const YandexMap = () => {
    return (
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.655147%2C55.729566&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCggxMDA1MDEwORI70KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCh0LDRgNC40L3RgdC60LjQuSDQv9GA0L7QtdC30LQiCg0WoBZCFWbrXkI%2C&z=17.47"
            allowFullScreen={true}
            className="contacts__map"
        />
    );
}

export default function ContactsPage() {
    const {lower} = useMediaQuery();

    const mapInContent = lower("lg");

    return (
        <section className="contacts">
            <div className="contacts__content">
                <h2 className="section__title">
                    Как добраться?
                </h2>
                <p className="contacts__address">
                    Мы находимся по адресу г. Москва, Саринский проезд, д.49
                </p>

                {
                    mapInContent && <YandexMap />
                }

                <div className="contacts__links">
                    <ContactsLink color="#667AFB" icon={<Phone />}>
                        Телефон: <a href="tel:+79656532426">+7 965 653 24 26</a>
                    </ContactsLink>

                    <ContactsLink color="#F9367C" icon={<Mail />}>
                        Почта: <a href="mailto:garmony@mail.ru">garmony@mail.ru</a>
                    </ContactsLink>

                    <ContactsLink color="#4891FF" icon={<VK style={{ fontSize: 8 }} />}>
                        ВКонтакте: <a href="https://vk.com/garmony17284">https://vk.com/garmony17284</a>
                    </ContactsLink>
                </div>
            </div>
            {
                !mapInContent && <YandexMap />
            }
        </section>
    );
}
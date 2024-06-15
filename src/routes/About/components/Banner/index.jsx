import ButtonLink from "../../../../components/ButtonLink";
import FlowerMask from "../../../../components/FlowerMask";

import img1 from "./assets/d8e46bc3f166c2a34a8f92858972f8b4.png";
import img2 from "./assets/c8bffadbe44573b3793aa1f06e706b45.png";
import img3 from "./assets/a6e25cf8eb055d34592d68afec627671.png";

import "./style.scss";

// Баннер страницы "О центре"
export default function Banner() {
    return (
        <section className="about-banner">
            <div className="about-banner__pictures">
                <FlowerMask
                    type="b"
                    className="about-banner__picture about-banner__picture_a"
                    src={img1}
                />
                <FlowerMask
                    type="a"
                    className="about-banner__picture about-banner__picture_b"
                    src={img2}
                />
                <FlowerMask
                    type="c"
                    className="about-banner__picture about-banner__picture_c"
                    src={img3}
                />
            </div>
            
            <div className="about-banner__content">
                <h2 className="about-banner__title">
                    Приглашаем вас <br/>
                    на занятия!
                </h2>

                <p className="about-banner__text">
                    В центре “Гармония роста” мы занимаемся с детьми от двух лет и работаем не только над постановкой звуков, но также и над развитием всех речевых процессов, а также развитием внимания, памяти, мышления, общения.
                </p>
                <p className="about-banner__text">
                    Проблемы, с которыми мы работаем: неправильное произношение звуков, задержка речевого развития, поведение аутического спектра, заикание, страхки, агрессия, истерики, зависимость от мобильных устройств. Приходите на бесплатную консультацию!
                </p>

                <ButtonLink to="/contacts" className="about-banner__action">
                    Консультация
                </ButtonLink>
            </div>
        </section>
    );
}
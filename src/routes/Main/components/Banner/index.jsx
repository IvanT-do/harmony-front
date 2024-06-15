import {useEffect} from "react";
import Elephant from "../../../../components/Icons/Elephant";
import FlowerA from "../../../../components/Icons/FlowerA";
import FlowerB from "../../../../components/Icons/FlowerB/index.jsx";
import StarFilled from "../../../../components/Icons/StarFilled";
import ButtonLink from "../../../../components/ButtonLink";
import gsap from "gsap";

import "./style.scss";

// Компонент баннера главной страницы
export default function Banner() {
    useEffect(() => {
        const animate = (target) => {
            let animation = { current: null };
            //Анимация фигур на баннере
            const animationStart = () => {
                animation.current = gsap.to(target, {
                    x: "random(-30, 30)",
                    y: "random(-30, 30)",
                    scale: "random(0.8, 1.1)",
                    rotate: "random(-30, 30)",
                    duration: "random(3, 5)",
                    ease: "power1.out",
                    onComplete: animationStart
                });
            }

            animationStart();
            return animation;
        }

        const animations = [...(document.querySelectorAll(".banner__animated"))].map(animate);

        return () => {
            animations.forEach(anim => {
                anim.current && anim.current.kill();
            });
        }
    }, []);

    return (
        <div className="banner">
            <h1 className="banner__title">Центр речи</h1>
            <h1 className="banner__title">Гармония роста</h1>
            <p className="banner__text">Мы занимаемся постановкой звуков, развитием всех речевых процессов, внимания, памяти, мышления, общения.</p>
            <ButtonLink className="banner__button" to="/contacts">
                Связаться
            </ButtonLink>
            <div className="banner__images">
                <Elephant className="banner__elephant banner__img" />
                <FlowerA className="banner__flower-a banner__img banner__animated" />
                <FlowerB className="banner__flower-b banner__img banner__animated" />
                <StarFilled className="banner__star banner__img banner__animated" />
            </div>
        </div>
    );
}

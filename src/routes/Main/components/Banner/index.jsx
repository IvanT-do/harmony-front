import Elephant from "../../../../components/Icons/Elephant";
import FlowerA from "../../../../components/Icons/FlowerA";
import FlowerB from "../../../../components/Icons/FlowerB/index.jsx";
import StarFilled from "../../../../components/Icons/StarFilled";
import ButtonLink from "../../../../components/ButtonLink";
import "./style.scss";

export default function Banner() {
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
                <FlowerA className="banner__flower-a banner__img" />
                <FlowerB className="banner__flower-b banner__img" />
                <StarFilled className="banner__star banner__img" />
            </div>
        </div>
    );
}

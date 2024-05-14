import FlowerMask from "../../../../../../components/FlowerMask/index.jsx";
import "./style.scss";

export default function HowWorkCard({ image, maskType="A", title, text }) {
    return (
        <div className="how-card">
            <FlowerMask
                src={image}
                type={maskType}
                className="how-card__image"
            />
            <div className="how-card__content">
                <h4 className="how-card__title">
                    {title}
                </h4>
                <p className="how-card__text">
                    {text}
                </p>
            </div>
        </div>
    );
}

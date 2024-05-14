import FlowerMask from "../../../FlowerMask";
import "./style.scss";

export default function ProfCard({ maskType, image, name, text }) {
    return (
        <div className="prof-card">
            <FlowerMask
                type={maskType}
                src={image}
                className="prof-card__image"
            />
            <div className="prof-card__content">
                <h4 className="prof-card__name">
                    {name}
                </h4>
                <p className="prof-card__text">
                    {text}
                </p>
            </div>
        </div>
    );
}

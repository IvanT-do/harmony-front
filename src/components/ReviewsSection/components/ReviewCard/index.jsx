import "./style.scss";

export default function ReviewCard({ image, name, text }) {
    return (
        <div className="review-card">
            <div className="review-card__head">
                <img
                    alt={"Фотография клиента " + name}
                    src={image}
                    className="review-card__image"
                />
                <h4 className="review-card__name">
                    {name}
                </h4>
            </div>
            <div className="review-card__text">
                {text}
            </div>
        </div>
    );
}

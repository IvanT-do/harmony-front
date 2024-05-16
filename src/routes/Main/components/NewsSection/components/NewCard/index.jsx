import "./style.scss";

export default function NewCard({ image, title, text }) {
    return (
        <div className="new-card">
            <img
                alt={ "Фото новости " + title }
                className="new-card__image"
                src={image}
            />
            <h5 className="new-card__title">
                { title }
            </h5>
            <p className="new-card__text">
                { text }
            </p>
        </div>
    );
}
import BadgeNew from "../../../Icons/BadgeNew/index.jsx";

import "./style.scss";

//Компонент для отрисовки фото
export default function ServiceImage({ src, alt, isNew }) {
    return (
        <div className="service-image">
            {
                isNew && <BadgeNew className="service-image__badge" />
            }
            <img
                src={src}
                alt={alt}
                className="service-image__source"
            />
        </div>
    )
}

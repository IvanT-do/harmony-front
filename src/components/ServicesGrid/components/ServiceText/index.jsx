import "./style.scss";

//Компонент для отрисовки текстовых блоков
export default function ServiceText ({ title, text }) {
    return (
        <div className="service-text">
            <h4 className="service-text__title">
                {title}
            </h4>
            <p className="service-text__text">
                {text}
            </p>
        </div>
    );
}
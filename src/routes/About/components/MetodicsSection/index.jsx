import "./style.scss";

const MetodicCard = ({ image, name, text }) => {
    return (
        <div className="metodic-card">
            <img
                src={image}
                alt={name}
                className="metodic-card__image"
            />
            <div className="metodic-card__content">
                <h4 className="metodic-card__name">
                    {name}
                </h4>
                <p className="metodic-card__text">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default function MetodicsSection({ list }) {
    return (
        <section className="section metodics">
            <h4 className="section__title">
                Наши методики
            </h4>
            <div
                className="metodics__grid"
                style={{ "--pb-add": Math.abs((list.length % 2) - 1) }}
            >
                {
                    list.map(item => (
                        <MetodicCard
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </div>
        </section>
    );
}
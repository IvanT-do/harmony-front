import NewCard from "./components/NewCard/index.jsx";

import "./style.scss";

// Компонент раздела новостей
export default function NewsSection({ list }) {
    return (
        <section className="section news">
            <h2 className="section__title">
                Новости центра
            </h2>
            <div className="news__view">
                {
                    list.map(item => (
                        <NewCard
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </div>
        </section>
    );
}
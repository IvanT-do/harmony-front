import ReviewCard from "./components/ReviewCard";

import "./style.scss";

export default function ReviewsSection({ list }) {
    return (
        <section className="section reviews">
            <h2 className="section__title">
                Отзывы о центре
            </h2>
            <div className="reviews__view">
                {
                    list.map(item => (
                        <ReviewCard
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </div>
        </section>
    );
}

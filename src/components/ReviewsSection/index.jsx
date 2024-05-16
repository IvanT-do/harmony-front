import ReviewCard from "./components/ReviewCard";

import "./style.scss";

export default function ReviewsSection({ list }) {
    return (
        <section className="section reviews">
            <div className="section__title">
                Отзывы о центре
            </div>
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

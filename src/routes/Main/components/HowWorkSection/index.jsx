import img1 from "../../../../assets/57a3c74e2e04c54c23d67a26309a546a.png";
import img2 from "../../../../assets/20e524c6c8a5ea4c7ec7f8ca6d917224.png";
import img3 from "../../../../assets/0aeb11e8a775f4335a5c9544d14aa993.png";
import HowWorkCard from "./components/HowWorkCard";
import "./style.scss";

const items = [
    {
        image: img1,
        maskType: "a",
        title: "Консультируем",
        text: "Консультация и логопедическая диагностика главного логопеда-психолога центра"
    },
    {
        image: img2,
        maskType: "b",
        title: "Обучаем",
        text: "Проведение индивидуальных занятий и сеансов по выбранным направлениям"
    },
    {
        image: img3,
        maskType: "c",
        title: "Подводим итоги",
        text: "Проведение итоговых консультаций с пациентами"
    },
];

export default function HowWorkSection() {
    return (
        <div className="section how-work">
            <h2 className="section__title">
                Как мы работаем с детьми <br/>
                и родителями
            </h2>
            <div className="how-work__view">
                {
                    items.map((item, index) => (
                        <HowWorkCard
                            {...item}
                            key={String(index)}
                        />
                    ))
                }
            </div>
        </div>
    );
}


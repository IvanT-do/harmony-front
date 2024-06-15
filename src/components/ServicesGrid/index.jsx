import ServiceImage from "./components/ServiceImage/index.jsx";
import ServiceText from "./components/ServiceText/index.jsx";
import classNames from "classnames";

import "./style.scss";

import img1 from "./assets/a2d41afdd4b04c0123fcbb6598f9d995.png";
import img2 from "./assets/5234395a4093da42ac964be4ee325324.png";
import img3 from "./assets/447e9c725ad0155e5e3f4dacb6a90c36.png";
import img4 from "./assets/3396a51b8f8ce3d880da0d168992ef10.png";

// компонент списка услуг
export default function ServicesGrid({ className, showBadges = false }) {
    return (
        <div className={classNames("services-grid", className)}>
            <ServiceImage
                src={img1}
                alt="Развитие речи"
            />
            <ServiceText
                title="Развитие речи"
                text="Логопедия, логомассаж, запуск речи, нейрологопедия, логоритмика, вокал."
            />

            <ServiceImage
                src={img2}
                alt="Развитие интеллекта"
            />
            <ServiceText
                title="Развитие интеллекта"
                text="Нейропсихология, сенсомоторная коррекция, ментальная арифметика, шахматы, подготовка к школе"
            />

            <ServiceImage
                src={img3}
                alt="Всестороннее развитие"
            />
            <ServiceText
                title="Всестороннее развитие"
                text="Театр речи и мюзикла, музыка — гитара и фортепиано, речевой вокал, иностранные языки."
            />

            <ServiceImage
                src={img4}
                alt="Сенсорная интеграция"
                isNew={showBadges}
            />
            <ServiceText
                title="Сенсорная интеграция"
                text="Дельфинотерапия, иппотерапия, музыкотерапия, арттерапия"
            />
        </div>
    );
}

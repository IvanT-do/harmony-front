import ServicesGrid from "../../../../components/ServicesGrid/index.jsx";

import "./style.scss";

export default function ServicesSection() {
    return (
        <div className="section services-section">
            <h2 className="section__title">
                Услуги центра
            </h2>
            <ServicesGrid className="services-section__grid" />
        </div>
    );
}

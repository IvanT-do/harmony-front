import ServicesGrid from "../../components/ServicesGrid";
import "./style.scss";

export default function ServicesPage() {
    return (
        <section className="services">
            <h2 className="services__title">
                Услуги центра
            </h2>
            <p className="services__text">
                Стоимость услуг уточняйте по телефону
            </p>
            <ServicesGrid
                className="services__grid"
                showBadges
            />
        </section>
    );
}
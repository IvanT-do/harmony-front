import ServicesGrid from "../../components/ServicesGrid";
import useDocumentTitle from "../../utils/useDocumentTitle.js";
import "./style.scss";

// Компоеннт страницы Услуги
export default function ServicesPage() {
    useDocumentTitle("Услуги");

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
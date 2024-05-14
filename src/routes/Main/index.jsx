import Banner from "./components/Banner";
import HowWorkSection from "./components/HowWorkSection";
import ServicesSection from "../../components/ServicesSection/index.jsx";

import "./style.scss";

export default function MainPage() {
    return (
        <>
            <Banner />
            <HowWorkSection />
            <ServicesSection />
        </>
    );
}
import Banner from "./components/Banner";
import HowWorkSection from "./components/HowWorkSection";
import ServicesSection from "../../components/ServicesSection/index.jsx";
import ProfSection from "../../components/ProfSection/index.jsx";
import ReviewsSection from "./components/ReviewsSection/index.jsx";
import NewsSection from "./components/NewsSection/index.jsx";

import profi from "../../constants/profi.js";
import reviews from "../../constants/reviews.js";
import news from "../../constants/news";

import "./style.scss";

export default function MainPage() {
    return (
        <>
            <Banner />
            <HowWorkSection />
            <ServicesSection />
            <ProfSection list={profi} />
            <ReviewsSection list={reviews} />
            <NewsSection list={news} />
        </>
    );
}
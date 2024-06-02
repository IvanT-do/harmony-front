import {useLoaderData} from "react-router-dom";
import AwaitGroup from "../../components/AwaitGroup";

import Banner from "./components/Banner";
import HowWorkSection from "./components/HowWorkSection";
import ServicesSection from "./components/ServicesSection/index.jsx";
import ProfSection from "../../components/ProfSection/index.jsx";
import ReviewsSection from "./components/ReviewsSection/index.jsx";
import NewsSection from "./components/NewsSection/index.jsx";

import "./style.scss";

export default function MainPage() {
    const data = useLoaderData();

    return (
        <AwaitGroup resolve={data}>
            {
                ({experts, reviews, news}) => (
                    <>
                        <Banner />
                        <HowWorkSection />
                        <ServicesSection />
                        <ProfSection list={experts} />
                        <ReviewsSection list={reviews} />
                        <NewsSection list={news} />
                    </>
                )
            }
        </AwaitGroup>
    );
}
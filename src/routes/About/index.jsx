import {useLoaderData} from "react-router-dom";
import AwaitGroup from "../../components/AwaitGroup";
import Banner from "./components/Banner/index.jsx";
import MetodicsSection from "./components/MetodicsSection/index.jsx";
import useDocumentTitle from "../../utils/useDocumentTitle.js";

export default function AboutPage() {
    const data = useLoaderData();
    useDocumentTitle("О центре");

    return (
        <AwaitGroup resolve={data}>
            {
                ({ metodics }) => (
                    <>
                        <Banner />
                        <MetodicsSection list={metodics} />
                    </>
                )
            }
        </AwaitGroup>
    );
}
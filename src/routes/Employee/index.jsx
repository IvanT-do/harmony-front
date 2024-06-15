import {useLoaderData} from "react-router-dom";
import AwaitGroup from "../../components/AwaitGroup";
import ProfSection from "../../components/ProfSection/index.jsx";
import useDocumentTitle from "../../utils/useDocumentTitle.js";

import "./style.scss";

// Компонент страницы Специалисты
export default function EmployeePage() {
    const data = useLoaderData();
    useDocumentTitle("Специалисты");

    return (
        <AwaitGroup resolve={data}>
            {
                ({ experts }) => (
                    <ProfSection
                        showIcons
                        list={experts}
                        className="employee-list"
                    />
                )
            }
        </AwaitGroup>
    );
}
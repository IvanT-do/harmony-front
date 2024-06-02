import {useLoaderData} from "react-router-dom";
import AwaitGroup from "../../components/AwaitGroup";

import ProfSection from "../../components/ProfSection/index.jsx";

import "./style.scss";

export default function EmployeePage() {
    const data = useLoaderData();

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
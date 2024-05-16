import ProfSection from "../../components/ProfSection/index.jsx";

import profi from "../../constants/profi.js";

import "./style.scss";

export default function EmployeePage() {
    return (
        <ProfSection
            showIcons
            list={profi}
            className="employee-list"
        />
    );
}
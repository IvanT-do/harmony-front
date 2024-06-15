import ProfCard from "./components/ProfCard";
import IconCircleList from "./components/IconCircleList";
import classNames from "classnames";

import "./style.scss";

const maskTypes = ["B", "A", "C"];

// Компонент раздела специалистов
export default function ProfSection({ list, showIcons=false, className }) {
    return (
        <div className={classNames("section", "prof", className)}>
            <h2 className="section__title">
                Наши специалисты

                {
                    showIcons && <IconCircleList className="prof__icons"/>
                }
            </h2>
            <div
                className="prof__grid"
                style={{ "--pb-add": Math.abs((list.length % 2) - 1) }}
            >
                {
                    list.map((item, index) => (
                        <ProfCard
                            {...item}
                            key={item.id}
                            maskType={maskTypes[index % maskTypes.length]}
                            showIcons={showIcons}
                        />
                    ))
                }
            </div>
        </div>
    );
}
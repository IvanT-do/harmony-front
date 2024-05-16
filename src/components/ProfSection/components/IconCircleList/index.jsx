import {useMemo} from "react";
import IconCircle from "../IconCircle";
import {resolvePersonCircles} from "./helpers.js";
import classNames from "classnames";

import "./style.scss";

const iconsData = [
    {
        type: "case",
        tooltip: "Стаж работы"
    },
    {
        type: "award",
        tooltip: "Награды"
    },
    {
        type: "book",
        tooltip: "Повышение квалификации"
    },
    {
        type: "teach",
        tooltip: "Образование"
    },
];

export default function IconCircleList({ person, className }) {
    const icons = useMemo(() => {
        return !person ? iconsData : resolvePersonCircles(person, iconsData);
    }, [person]);

    return (
        <div className={classNames("icon-circle-list", className)}>
            {
                icons.map(item => (
                    <IconCircle
                        key={item.type}
                        {...item}
                    />
                ))
            }
        </div>
    );
}
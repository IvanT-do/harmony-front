import {useId, useMemo} from "react";
import {Tooltip} from "react-tooltip";

import Briefcase from "../../../Icons/Briefcase/index.jsx";
import Award from "../../../Icons/Award/index.jsx";
import Book from "../../../Icons/Book/index.jsx";
import Teacher from "../../../Icons/Teacher/index.jsx";

import "./style.scss";

const types = {
    case: {
        icon: Briefcase,
        color: "#D9D9D9"
    },
    award: {
        icon: Award,
        color: "#FFD148"
    },
    book: {
        icon: Book,
        color: "#667AFB"
    },
    teach: {
        icon: Teacher,
        color: "#F9367C"
    }
};

export default function IconCircle({ type: typeId, tooltip }) {
    const type = useMemo(() => {
        return types[typeId];
    }, [typeId]);

    const tooltipId = useId();

    if(!type){
        return null;
    }

    return (
        <>
            <div
                className="icon-circle"
                style={{"--ic-clr": type.color}}
                data-tooltip-id={tooltipId}
            >
                <type.icon className="icon-circle__icon"/>
            </div>

            <Tooltip
                id={tooltipId}
                style={{
                    padding: "8px 16px",
                    borderRadius: 16
                }}
                place="bottom"
            >
                <div className="icon-circle__tooltip">
                    { tooltip }
                </div>
            </Tooltip>
        </>
    );
}

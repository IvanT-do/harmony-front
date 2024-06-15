import FlowerMask from "../../../FlowerMask";
import IconCircleList from "../IconCircleList/index.jsx";
import useMediaQuery from "../../../../utils/useMediaQuery.js";

import "./style.scss";

// Компонент специалиста
export default function ProfCard({ maskType, image, name, text, showIcons, ...other }) {
    const {lower} = useMediaQuery();

    const circlesInName = lower("md");

    return (
        <div className="prof-card">
            <FlowerMask
                type={maskType}
                src={image}
                className="prof-card__image"
            />
            <div className="prof-card__content">
                <h4 className="prof-card__name">
                    {name}
                    {
                        showIcons && circlesInName && (
                            <IconCircleList
                                person={other}
                                className="prof-card__icons"
                            />
                        )
                    }

                </h4>
                <p className="prof-card__text">
                    {text}
                </p>

                {
                    showIcons && !circlesInName && (
                        <IconCircleList
                            person={other}
                            className="prof-card__icons"
                        />
                    )
                }
            </div>
        </div>
    );
}

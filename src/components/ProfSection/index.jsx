import "./style.scss";
import ProfCard from "./components/ProfCard";

const maskTypes = ["B", "A", "C"];

export default function ProfSection({ list, showIcons=false }) {
    return (
        <div className="section prof">
            <div className="section__title">
                Наши специалисты
            </div>
            <div className="prof__grid">
                {
                    list.map((item, index) => (
                        <ProfCard
                            {...item}
                            key={item.id}
                            maskType={maskTypes[index % maskTypes.length]}
                        />
                    ))
                }
            </div>
        </div>
    );
}
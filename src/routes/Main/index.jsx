import FlowerMask from "../../components/FlowerMask";
import "./style.scss";

import img from "../../assets/57a3c74e2e04c54c23d67a26309a546a.png";

export default function MainPage() {
    return (
        <div>
            <FlowerMask
                src={img}
                type="c"
                className="main-mask"
            />
        </div>
    );
}
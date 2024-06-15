import Logo from "../Icons/Logo";

import "./style.scss";

//компонент загрузчика
export default function LoaderPage() {
    return (
        <div className="loader-page">
            <Logo className="loader-page__logo" />
        </div>
    );
}
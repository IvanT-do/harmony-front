import Header from "../Header";
import { Outlet } from "react-router-dom";
import "./style.scss";

export default function PageTemplate() {
    return (
        <>
            <div className="container">
                <Header />
            </div>
            <Outlet />
        </>
    );
}
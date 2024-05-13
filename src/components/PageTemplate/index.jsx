import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./style.scss";

export default function PageTemplate() {
    return (
        <>
            <div className="container">
                <Header />
            </div>
            <main className="container page-body">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
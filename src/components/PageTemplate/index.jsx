import { Outlet } from "react-router-dom";
import { ReactLenis } from '@studio-freight/react-lenis'
import Header from "./components/Header";
import Footer from "./components/Footer";
import useMetrika from "../../utils/useMetrika.js";
import "./style.scss";

// компонент шаблона страниц
export default function PageTemplate() {
    useMetrika(import.meta.env.VITE_METRIKA_ID);

    return (
        <ReactLenis root>
            <div className="container">
                <Header showMobileMenu />
            </div>
            <main className="container page-body">
                <Outlet />
            </main>
            <Footer />
        </ReactLenis>
    );
}
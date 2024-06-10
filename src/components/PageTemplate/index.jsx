import { Outlet } from "react-router-dom";
import { ReactLenis } from '@studio-freight/react-lenis'
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.scss";

export default function PageTemplate() {
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
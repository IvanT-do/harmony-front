import {useCallback, useEffect, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import { Cross as Hamburger } from 'hamburger-react'
import Logo from "../../../../../Icons/Logo/index.jsx";
import Navbar from "../../../Navbar/index.jsx";
import useMediaQuery from "../../../../../../utils/useMediaQuery.js";
import {CSSTransition} from "react-transition-group";
import classNames from "classnames";

import "./style.scss";

//Компонент мобильного меню
export default function MobileMenu({ viewLower }) {
    const { lower } = useMediaQuery();
    const location = useLocation();
    const [show, setShow] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        setShow(false);
    }, [location]);

    const changeShow = useCallback(() => {
        setShow(!show);
    }, [show])

    if(!lower(viewLower)){
        return null;
    }

    return (
        <div className={classNames("mobile-menu__wrapper", {"mobile-menu__wrapper_view": show})}>
            <Hamburger
                size={27}
                onToggle={changeShow}
                toggled={show}
                rounded
            />
            <CSSTransition
                nodeRef={ref}
                in={show}
                timeout={300}
                unmountOnExit
                classNames="mobile-menu-transition"
            >
                <div className="mobile-menu" ref={ref}>
                    <Link to="/" className="mobile-menu__logo">
                        <Logo className="mobile-menu__logo-icon"/>
                        Гармония роста
                    </Link>

                    <Navbar className="mobile-menu__nav" />
                </div>
            </CSSTransition>
        </div>
    );
}

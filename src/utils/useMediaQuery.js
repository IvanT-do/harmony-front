import {useEffect, useState} from "react";

const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
}

const getMediaFunc = (width) => {
    const is = (bp) => {
        const point = breakpoints[bp] ?? 0;
        return width >= point;
    }
    const now = Object.keys(breakpoints).reverse().find(is);
    return {
        is,
        between: (first, second) => {
            const min = Math.min(breakpoints[first], breakpoints[second]);
            const max = Math.min(breakpoints[first], breakpoints[second]);

            return width >= min && width < max;
        },
        lower(bp) {
            const point = breakpoints[bp] ?? 0;
            return width < point;
        },
        current(bp) {
            const point = breakpoints[bp] ?? 0;
            const hasUpper = Object.keys(breakpoints).some(key => {
                return breakpoints[key] > point && is(key);
            });

            return width >= point && !hasUpper;
        },
        now
    };
};

export default function useMediaQuery(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        let lastWidth = window.innerWidth;
        const handleResize = () => {
            if(window.innerWidth !== lastWidth){
                setWidth(window.innerWidth);
                lastWidth = window.innerWidth
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return getMediaFunc(width);
}
import {useCallback, useId, useMemo} from "react";
import classNames from "classnames";
import {masks} from "./components/index.js";
import {gsap} from "gsap";
import "./style.scss";

export default function FlowerMask({ type, src, className }) {
    const Mask = useMemo(() => {
        if(masks[type.toUpperCase()]){
            return masks[type.toUpperCase()];
        }
        return null;
    }, [type]);

    const maskId = useId();

    const handleMouseEnter = useCallback(() => {
        const path = document.getElementById(maskId).querySelector("path");

        gsap.set(path, {
            transformOrigin: "center"
        })

        gsap.to(path, {
            rotate: 120,
            duration: 1,
            overwrite: true
        })
    }, [maskId]);

    const handleMouseLeave = useCallback(() => {
        gsap.to(document.getElementById(maskId).querySelector("path"), {
            rotate: 0,
            overwrite: true
        })
    }, [maskId]);

    if(!Mask){
        return null;
    }

    return (
        <Mask
            className={classNames("masked-image", className)}
            id={maskId}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <image
                href={src}
                mask={`url(#${maskId})`}
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
            />
        </Mask>
    )
}

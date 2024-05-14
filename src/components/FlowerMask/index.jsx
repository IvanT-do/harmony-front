import {useId, useMemo} from "react";
import classNames from "classnames";
import {masks} from "./components/index.js";
import "./style.scss";

export default function FlowerMask({ type, src, className }) {
    const Mask = useMemo(() => {
        if(masks[type.toUpperCase()]){
            return masks[type.toUpperCase()];
        }
        return null;
    }, [type]);

    const maskId = useId();

    if(!Mask){
        return null;
    }

    return (
        <Mask className={classNames("masked-image", className)} id={maskId}>
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

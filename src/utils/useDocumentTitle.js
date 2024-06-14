import {useEffect, useRef} from "react";
const SITE_NAME = "Центр речи \"Гармония роста\"";

export default function useDocumentTitle(title = ""){
    const defaultTitle = useRef(document.title);

    useEffect(() => () => {
        document.title = defaultTitle.current;
    }, []);

    useEffect(() => {
        document.title = title.trim() ? `${SITE_NAME} - ${title}` : SITE_NAME;
    }, [title]);
}
import {useCallback, useEffect} from "react";
import {useLocation} from "react-router-dom";

(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");


export default function useMetrika(id){
    const location = useLocation();

    const metrika = useCallback((...args) => {
        ym(id, ...args)
    }, [id]);

    useEffect(() => {
        metrika("init", {
            defer: true,
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
        });
    }, [metrika]);

    useEffect(() => {
        if(window.__referrer !== window.location.href){
            console.log( window.__referrer ?? document.referrer)
            metrika("hit", location.pathname, {
                title: document.title,
                referrer: window.__referrer ?? document.referrer
            });

            const locationHref = window.location.href
            return () => {
                window.__referrer = locationHref;
            }
        }
    }, [location, metrika]);
}
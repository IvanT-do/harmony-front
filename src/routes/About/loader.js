import {defer} from "react-router-dom";
import api from "../../api/index.js";

// загрузчик страницы О центре
export const aboutLoader = () => {
    return defer({
        metodics: api.fetchMetodics(),
    });
}
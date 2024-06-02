import {defer} from "react-router-dom";
import api from "../../api/index.js";

export const aboutLoader = () => {
    return defer({
        metodics: api.fetchMetodics(),
    });
}
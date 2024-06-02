import {defer} from "react-router-dom";
import api from "../../api/index.js";

export const expertLoader = () => {
    return defer({
        experts: api.fetchExperts(),
    });
}
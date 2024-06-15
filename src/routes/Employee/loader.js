import {defer} from "react-router-dom";
import api from "../../api/index.js";

//Загрузчик данных страницы специалистов
export const expertLoader = () => {
    return defer({
        experts: api.fetchExperts(),
    });
}
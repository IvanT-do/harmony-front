import {defer} from "react-router-dom";
import api from "../../api/index.js";

// Загрузчик данных главной страницы
export const mainLoader = () => {
    return defer({
        experts: api.fetchExperts(4),
        reviews: api.fetchReviews(3),
        news: api.fetchNews(3)
    });
}
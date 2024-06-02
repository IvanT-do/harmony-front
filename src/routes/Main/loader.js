import {defer} from "react-router-dom";
import api from "../../api/index.js";

export const mainLoader = () => {
    return defer({
        experts: api.fetchExperts(4),
        reviews: api.fetchReviews(3),
        news: api.fetchNews(3)
    });
}
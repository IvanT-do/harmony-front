import axios from "axios";

export const fetchExperts = (count) => {
    return axios.get("/experts", { params: count });
}

export const fetchMetodics = (count) => {
    return axios.get("/metodics", { params: count });
}

export const fetchNews = (count) => {
    return axios.get("/news", { params: count });
}

export const fetchReviews = (count) => {
    return axios.get("/reviews", { params: count });
}
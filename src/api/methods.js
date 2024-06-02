import axios from "axios";

export const fetchExperts = (count) => {
    return axios.get("/api/experts", { params: { count } }).then(({data}) => data);
}

export const fetchMetodics = (count) => {
    return axios.get("/api/metodics", { params: { count } }).then(({data}) => data);
}

export const fetchNews = (count) => {
    return axios.get("/api/news", { params: { count } }).then(({data}) => data);
}

export const fetchReviews = (count) => {
    return axios.get("/api/reviews", { params: { count } }).then(({data}) => data);
}
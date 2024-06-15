import axios from "axios";

//метод получения списка специалистов
export const fetchExperts = (count) => {
    return axios.get("/api/experts", { params: { count } }).then(({data}) => data);
}

//метод получение списка методик
export const fetchMetodics = (count) => {
    return axios.get("/api/metodics", { params: { count } }).then(({data}) => data);
}

//метод получения списка новостей
export const fetchNews = (count) => {
    return axios.get("/api/news", { params: { count } }).then(({data}) => data);
}

//метод получения списка отзывов
export const fetchReviews = (count) => {
    return axios.get("/api/reviews", { params: { count } }).then(({data}) => data);
}
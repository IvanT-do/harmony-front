import axios from "axios";
import {useImageInterceptor} from "./interceptors.js";
import * as api from "./methods.js"

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
useImageInterceptor(axios);

export default api;
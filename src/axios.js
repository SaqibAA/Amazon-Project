import axios from "axios";

const instance = axios.create({
    baseURL: '' // The API (Cloun Function using NodeJs)
});

export default instance;
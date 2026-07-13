import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
     timeout: 70000
});

export const saveLocation = async (data) => {
    return await API.post("/api/scan", data);
};
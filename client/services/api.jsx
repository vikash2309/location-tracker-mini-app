import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const saveLocation = async (data) => {
    return await API.post("/api/scan", data);
};
import type { AxiosInstance } from "axios";
import axios from "axios";

export function authMiddleware(baseURL: string): AxiosInstance {
    const api = axios.create({ baseURL })

    api.interceptors.request.use(config => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    })

    api.interceptors.response.use(
        response => response,
        error => {
            if (error.response?.status === 401) {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                window.location.href = "/login"
            }
            return Promise.reject(error)
        }
    )

    return api
}
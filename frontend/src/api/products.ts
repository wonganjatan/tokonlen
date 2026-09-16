import axios from "axios";
import type { Product } from "../types/Product";

const api = axios.create({
    baseURL: import.meta.env.VITE_PRODUCT_SERVICE_PORT || "http://localhost:5001/api"
})

export const productsApi = {
    getAll: async (): Promise<Product[]> => {
        const res = await api.get<Product[]>("/products")
        return res.data
    }
}
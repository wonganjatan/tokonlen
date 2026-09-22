import type { Product } from "../types/Product";
import { authMiddleware } from "../middlewares/authMiddleware";

const baseURL = import.meta.env.VITE_PRODUCT_SERVICE_PORT || "http://localhost:5001/api"
const api = authMiddleware(baseURL)

export const productsApi = {
    getAll: async (): Promise<Product[]> => {
        const res = await api.get<Product[]>("/products")
        return res.data
    },

    getById: async (id: number): Promise<Product> => {
        const res = await api.get<Product>(`/products/${id}`)
        return res.data
    }
}
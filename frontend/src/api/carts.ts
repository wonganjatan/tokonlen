import { authMiddleware } from "../middlewares/authMiddleware";
import type { CartItemRequest, CartItemResponse } from "../types/Cart";

const baseURL = import.meta.env.VITE_CART_SERVICE_PORT || "http://localhost:5002/api"
const api = authMiddleware(baseURL)

export const cartsApi = {
    getAll: async (): Promise<CartItemResponse[]> => {
        const res = await api.get<CartItemResponse[]>("/carts")
        return res.data
    },

    create: async (request: CartItemRequest): Promise<CartItemResponse> => {
        const res = await api.post<CartItemResponse>("/carts", request)
        return res.data
    }
}
import { authMiddleware } from "../middlewares/authMiddleware";
import type { Order } from "../types/Order";

const baseURL = import.meta.env.VITE_CART_SERVICE_PORT || "http://localhost:5003/api"
const api = authMiddleware(baseURL)

export const ordersApi = {
    getAll: async (): Promise<Order[]> => {
        const res = await api.get<Order[]>("/orders")
        return res.data
    },

    create: async (): Promise<void> => {
        const rest = await api.post<void>("/orders")
        return rest.data
    }
}
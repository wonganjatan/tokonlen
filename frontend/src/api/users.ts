import type { User } from "../types/User";
import { authMiddleware } from "../middlewares/authMiddleware";

const baseURL = import.meta.env.VITE_IDENTITY_SERVICE_PORT || "http://localhost:5000/api"
const api = authMiddleware(baseURL)

export const usersApi = {
  getAllUsers: async (): Promise<User[]> => {
    const response = await api.get<User[]>("/users");
    return response.data;
  },
};
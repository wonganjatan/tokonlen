import axios from "axios";
import type { User } from "../types/User";

const api = axios.create({
  baseURL: import.meta.env.VITE_IDENTITY_SERVICE_PORT || "http://localhost:5000/api"
})

export const usersApi = {
  getAllUsers: async (): Promise<User[]> => {
    const response = await api.get<User[]>("/users");
    return response.data;
  },
};
import type { User } from "../types/User";
import axios from "./axios";

export const usersApi = {
  getAllUsers: async (): Promise<User[]> => {
    const response = await axios.get<User[]>("/users");
    return response.data;
  },
};
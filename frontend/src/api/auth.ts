import axios from "axios";
import type { AuthResponse, SignUpForm } from "../types/Auth";

export const authApi = {
  register: async (input: SignUpForm): Promise<void> => {
    await axios.post<void>("/auth/register", input);
  },

  login: async (email: string, password: string): Promise<AuthResponse> => {
    const res = await axios.post<AuthResponse>("/auth/login", { email, password })
    return res.data
  }
};
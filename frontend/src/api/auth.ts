import type { AuthResponse, SignUpForm } from "../types/Auth";
import { authMiddleware } from "../middlewares/authMiddleware";

const baseURL = import.meta.env.VITE_IDENTITY_SERVICE_PORT || "http://localhost:5000/api"
const api = authMiddleware(baseURL)

export const authApi = {
  register: async (input: SignUpForm): Promise<void> => {
    await api.post<void>("/auth/register", input);
  },

  login: async (email: string, password: string): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>("/auth/login", { email, password })
    return res.data
  }
};
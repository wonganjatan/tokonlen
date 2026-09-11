import type { User } from "./User"

export interface SignInForm {
    email: string
    password: string
}

export interface SignUpForm {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    confirmPassword: string
}

export interface AuthResponse {
    userId: number
    firstName: string
    lastName: string
    username: string
    email: string
    role: "User" | "Admin"
    createdAt: Date
    token: string
}
export type Role = "User" | "Admin"

export interface User {
    userId: number
    firstName: string
    lastName: string
    username: string
    email: string
    role: Role
    createdAt: Date
}
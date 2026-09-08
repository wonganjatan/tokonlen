import React, { createContext, useContext, useEffect, useState } from "react";
import type { User } from "../types/User";
import { authApi } from "../api/auth";
import { useNavigate } from "react-router-dom";
import type { AuthResponse, SignUpForm } from "../types/Auth";

interface AuthContextType {
    loggedInUser: User | null
    loading: boolean
    signUp: (input: SignUpForm) => Promise<void>
    signIn: (email: string, password: string) => Promise<User>
    signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [loggedInUser, setLoggedInUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")

        if (token && user) {
            setLoggedInUser(JSON.parse(user))
        }

        setLoading(false)
    }, [loggedInUser])

    async function signUp(input: SignUpForm): Promise<void> {
        await authApi.register(input)
    }

    async function signIn(email: string, password: string): Promise<User> {
        const { user, token }: AuthResponse =  await authApi.login(email, password)

        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))

        setLoggedInUser(user)
        return user
    }

    function signOut(): void {
        localStorage.removeItem("token")
        localStorage.removeItem("user")

        setLoggedInUser(null)
        navigate("/")
    }

    return (
        <AuthContext.Provider value={{
            loggedInUser,
            loading,
            signUp,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider")
    }

    return context
}
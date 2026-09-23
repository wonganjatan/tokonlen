import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { loggedInUser, signOut } = useAuthContext()
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-indigo-600">
            <h1 className="text-white text-2xl">Tokonlen</h1>
            {loggedInUser ? (
                <div className="flex gap-4">
                    <Link to="/" className="flex flex-col text-white border-2 border-transparent hover:border-b-blue-500 transition-colors duration-300">
                        Home
                    </Link>
                    <Link to="/products" className="flex flex-col text-white border-2 border-transparent hover:border-b-red-500 transition-colors duration-300">
                        Products
                    </Link>
                    <Link to="/cart" className="flex flex-col text-white border-2 border-transparent hover:border-b-yellow-500 transition-colors duration-300">
                        Cart
                    </Link>
                    <Link to="/orders" className="flex flex-col text-white border-2 border-transparent hover:border-b-yellow-500 transition-colors duration-300">
                        Orders
                    </Link>
                    <button onClick={signOut} className="text-white border-2 border-transparent hover:border-b-green-500 transition-colors duration-300 cursor-pointer">
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="flex gap-4">
                    <Link to="/about" className="flex flex-col text-white border-2 border-transparent hover:border-b-red-500 transition-colors duration-300">
                        About
                    </Link>
                    <Link to="/login" className="flex flex-col text-white border-2 border-transparent hover:border-b-yellow-500 transition-colors duration-300">
                        Sign In
                    </Link>
                    <Link to="/register" className="text-white border-2 border-transparent hover:border-b-green-500 transition-colors duration-300">
                        Sign Up
                    </Link>
                </div>
            )}
            
        </nav>
    )
}
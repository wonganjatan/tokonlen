import type React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1 flex items-center justify-center">{children}</main>
            <Footer/>
        </div>
    )
}
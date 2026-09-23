import { useEffect, useState } from "react";
import type { CartItemResponse } from "../../types/Cart";
import { cartsApi } from "../../api/carts";

export default function Cart() {
    const [cart, setCart] = useState<CartItemResponse[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await cartsApi.getAll()
                setCart(res)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchCart()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    if (!cart || cart.length == 0) {
        return <p>Cart is empty</p>
    }
    
    return (
        <div className="min-h-screen bg-zinc-950 px-6 py-10">
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-100">
                    Your Cart
                </h1>

                <div className="divide-y divide-zinc-800 border border-zinc-800 bg-zinc-900">
                    {cart.map(item => (
                        <div key={item.cartItemId} className="flex items-center justify-between px-4 py-3">
                            <div>
                                <p className="text-sm text-zinc-100">Product #{item.productId}</p>
                                <p className="text-xs text-zinc-500">
                                    Added {new Date(item.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            <span className="text-sm text-zinc-400">Qty: {item.quantity}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
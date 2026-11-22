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

    const handlePayment = async () => {
        try {
            alert("Hello World!")
        } catch (error) {
            console.error(error)
        }
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (!cart || cart.length == 0) {
        return <p>Cart is empty</p>
    }
    
    return (
        <div className="mx-auto max-w-3xl px-6 py-10">
            <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-[#2b1fa8]">
                Your Cart
            </h1>

            <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
                {cart.map(item => (
                    <div key={item.cartItemId} className="flex items-center justify-between gap-4 px-5 py-4">
                        <div>
                            <p className="font-bold text-slate-900">Product #{item.productId}</p>
                            <p className="text-xs text-slate-500">
                                Added {new Date(item.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                        <span className="rounded-full bg-[#eeecff] px-3 py-1 text-sm font-semibold text-[#2b1fa8]">
                            Qty: {item.quantity}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex justify-end border-t-2 border-[#14284b] pt-6">
                <button
                    type="button"
                    onClick={handlePayment}
                    className="rounded-md bg-[#503cfa] px-6 py-3 font-semibold text-white shadow-[4px_4px_0_#2b1fa8] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#2b1fa8] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#503cfa] cursor-pointer"
                >
                    Pay
                </button>
            </div>
        </div>
    )
}
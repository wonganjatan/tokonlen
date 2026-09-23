import { useEffect, useState } from "react"
import type { Product } from "../../types/Product"
import { Link, useParams } from "react-router-dom"
import { productsApi } from "../../api/products"
import { useForm } from "react-hook-form"
import type { CartItemRequest } from "../../types/Cart"
import { cartsApi } from "../../api/carts"

export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (!id) {
            return
        }

        const fetchProduct = async (id: string) => {
            try {
                const product = await productsApi.getById(Number(id))
                setProduct(product)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProduct(id)
    }, [id])

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<CartItemRequest>({
        defaultValues: { quantity: 1 }
    })

    const quantity = watch("quantity")

    const addToCart = async (request: CartItemRequest) => {
        try {
            await cartsApi.create(request)
        } catch (error) {
            console.error(error)
            setError("root", { message: "Failed to add product to the cart. Please try again" })
        }
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (product == null) {
        return <p>Product not found</p>
    }

    return (
        <div className="mx-auto max-w-3xl px-6 py-10">
            <Link to="/products" className="text-sm text-zinc-400 hover:text-zinc-200">
                ← Back to catalog
            </Link>

            <div
                className="mt-4 flex aspect-video items-center justify-center bg-linear-to-br from-amber-400 to-amber-700 text-6xl font-bold text-zinc-950"
                aria-hidden="true"
            >
                {product.name.charAt(0)}
            </div>

            <div className="mt-6">
                <span className="text-xs font-semibold text-amber-400">
                    {product.category}
                </span>
                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-100">
                    {product.name}
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">
                    <span className="text-2xl font-bold text-zinc-100">
                        ${product.price.toFixed(2)}
                    </span>
                </div>

                <form onSubmit={handleSubmit(addToCart)} className="mt-4 space-y-4">
                    <div>
                        <label htmlFor="quantity" className="block text-sm text-zinc-400">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            className="mt-1 w-24 border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-zinc-100 focus:border-amber-500 focus:outline-none"
                            {...register("quantity", {
                                valueAsNumber: true,
                                min: { value: 1, message: "Quantity must be at least 1" }
                            })}
                        />
                        {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}

                    </div>

                    <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                        <span className="text-sm text-zinc-400">
                            Total:{" "}
                            <span className="text-lg font-bold text-zinc-100">
                                ${(product.price * (quantity || 0)).toFixed(2)}
                            </span>
                        </span>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-amber-500 px-5 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isSubmitting ? "Adding..." : "Add to Cart"}
                        </button>
                    </div>
                    {errors.root && <p className="text-red-500 text-xs mt-1">{errors.root.message}</p>}
                </form>
            </div>
        </div>
    )
}
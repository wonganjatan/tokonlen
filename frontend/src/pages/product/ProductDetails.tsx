import { useEffect, useState } from "react"
import type { Product } from "../../types/Product"
import { Link, useNavigate, useParams } from "react-router-dom"
import { productsApi } from "../../api/products"
import { useForm } from "react-hook-form"
import type { CartItemRequest } from "../../types/Cart"
import { cartsApi } from "../../api/carts"

export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()

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
            await cartsApi.create({...request, productId: Number(product?.productId)})
            navigate("/products")
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
        <div className="mx-auto max-w-5xl px-6 py-10">
            <Link
                to="/products"
                className="text-sm font-semibold text-[#503cfa] underline-offset-4 hover:underline"
            >
                ← Back to products
            </Link>

            <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div
                    className="flex aspect-4/3 items-center justify-center rounded-xl border border-slate-200 bg-[#eeecff] text-8xl font-extrabold text-[#503cfa]/40"
                    aria-hidden="true"
                >
                    {product.name.charAt(0)}
                </div>

                <div className="flex flex-col">
                    <span className="w-fit rounded-full bg-[#eeecff] px-2.5 py-0.5 text-xs font-semibold text-[#2b1fa8]">
                        {product.category}
                    </span>
                    <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#2b1fa8]">
                        {product.name}
                    </h1>
                    <p className="mt-4 leading-relaxed text-slate-600">
                        {product.description}
                    </p>
                    <p className="mt-6 text-3xl font-extrabold text-slate-900">
                        ${product.price.toFixed(2)}
                    </p>

                    <form
                        onSubmit={handleSubmit(addToCart)}
                        className="mt-8 space-y-4 border-t-2 border-[#14284b] pt-6"
                    >
                        <div>
                            <label htmlFor="quantity" className="block text-sm font-semibold text-slate-700">
                                Quantity
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                className="mt-1 w-24 rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#503cfa] focus:outline-none focus:ring-2 focus:ring-[#503cfa]/30"
                                {...register("quantity", {
                                    valueAsNumber: true,
                                    min: { value: 1, message: "Quantity must be at least 1" }
                                })}
                            />
                            {errors.quantity && (
                                <p className="mt-1 text-xs text-red-600">{errors.quantity.message}</p>
                            )}
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <span className="text-sm text-slate-600">
                                Total:{" "}
                                <span className="text-xl font-extrabold text-slate-900">
                                    ${(product.price * (quantity || 0)).toFixed(2)}
                                </span>
                            </span>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-md bg-[#503cfa] px-6 py-3 font-semibold text-white shadow-[4px_4px_0_#2b1fa8] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#2b1fa8] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#503cfa] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                            >
                                {isSubmitting ? "Adding..." : "Add to Cart"}
                            </button>
                        </div>

                        {errors.root && (
                            <p className="text-sm text-red-600">{errors.root.message}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
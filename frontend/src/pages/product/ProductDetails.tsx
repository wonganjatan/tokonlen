import { useEffect, useState } from "react"
import type { Product } from "../../types/Product"
import { Link, useParams } from "react-router-dom"
import { productsApi } from "../../api/products"

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
                    <button className="bg-amber-500 px-5 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-400">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
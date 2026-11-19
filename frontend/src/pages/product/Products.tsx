import { useEffect, useState } from "react"
import type { Product } from "../../types/Product"
import { productsApi } from "../../api/products"
import ProductCard from "../../components/ProductCard"

export default function Products() {
    const [products, setProducts] = useState<Product[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await productsApi.getAll()
                setProducts(products)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="mx-auto max-w-6xl px-6 py-10">
            <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-[#2b1fa8]">
                Products
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products?.map(product => (
                    <ProductCard key={product.productId} product={product} />
                ))}
            </div>
        </div>
    )
}
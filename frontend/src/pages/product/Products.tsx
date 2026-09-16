import { useEffect, useState } from "react"
import type { Product } from "../../types/Product"
import { productsApi } from "../../api/products"

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
        <div>
            {products?.map(product => (
                <div key={product.productId}>
                    <p>{product.name}</p>
                </div>
            ))}
        </div>
    )
}
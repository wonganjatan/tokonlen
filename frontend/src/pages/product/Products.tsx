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
        <div className="grid grid-cols-2 gap-5">            
            {products?.map(product => (
                <ProductCard key={product.productId} product={product}/>
            ))}
        </div>
    )
}
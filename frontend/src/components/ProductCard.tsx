import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    return (
        <div className="flex flex-col overflow-hidden border rounded-2xl border-zinc-800 bg-zinc-900 transition-colors hover:border-zinc-700">
            <div
                className="flex aspect-4/3 items-center justify-center bg-linear-to-br from-amber-400 to-amber-700 text-4xl font-bold text-zinc-950"
                aria-hidden="true"
            >
                {product.name.charAt(0)}
            </div>

            <div className="flex flex-col gap-1 px-4 pb-5 pt-4">
                <span className="text-xs font-semibold text-amber-400">
                    {product.category}
                </span>
                <h2 className="text-base font-semibold text-zinc-100">
                    {product.name}
                </h2>
                <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
                    {product.description}
                </p>

                <div className="mt-2 flex items-center justify-between border-t border-zinc-800 pt-2.5">
                    <span className="text-base font-bold text-zinc-100">
                        ${product.price.toFixed(2)}
                    </span>
                    <Link to={`/products/${product.productId}`}>View Details</Link>
                </div>
            </div>
        </div>
    )
}
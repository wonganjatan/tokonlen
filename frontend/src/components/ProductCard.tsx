import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[#503cfa] hover:shadow-[4px_4px_0_#503cfa]">
            <div
                className="flex aspect-4/3 items-center justify-center bg-[#eeecff] text-6xl font-extrabold text-[#503cfa]/40"
                aria-hidden="true"
            >
                {product.name.charAt(0)}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="w-fit rounded-full bg-[#eeecff] px-2.5 py-0.5 text-xs font-semibold text-[#2b1fa8]">
                    {product.category}
                </span>
                <h2 className="text-lg font-bold text-slate-900">{product.name}</h2>
                <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                    {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-xl font-extrabold text-slate-900">
                        ${product.price.toFixed(2)}
                    </span>
                    <Link
                        to={`/products/${product.productId}`}
                        className="rounded-md bg-[#503cfa] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2b1fa8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#503cfa]"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
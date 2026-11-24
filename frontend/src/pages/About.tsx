import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-10 sm:py-16">
            <h1 className="max-w-[18ch] text-4xl font-extrabold leading-[1.05] tracking-tight text-[#2b1fa8] sm:text-6xl">
                A neighborhood shop, now online.
            </h1>

            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-slate-600">
                Tokonlen comes from <em>toko</em>, the Indonesian word for shop,
                and <em>online</em>. We want buying things online to feel as
                easy as walking into the shop you already know: pick what you
                need, pay, and have it delivered.
            </p>

            <dl className="mt-12 grid gap-8 border-t-2 border-[#14284b] pt-8 sm:grid-cols-3">
                <div>
                    <dt className="font-bold text-slate-900">Simple</dt>
                    <dd className="mt-1 text-slate-600">
                        Browse, add to cart, check out. No clutter in between.
                    </dd>
                </div>
                <div>
                    <dt className="font-bold text-slate-900">Clear</dt>
                    <dd className="mt-1 text-slate-600">
                        Your order history keeps what you bought and what you paid.
                    </dd>
                </div>
                <div>
                    <dt className="font-bold text-slate-900">Local</dt>
                    <dd className="mt-1 text-slate-600">
                        Built around how people in Indonesia shop and pay.
                    </dd>
                </div>
            </dl>

            <Link
                to="/products"
                className="mt-12 inline-block rounded-md bg-[#503cfa] px-6 py-3 font-semibold text-white shadow-[4px_4px_0_#2b1fa8] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#2b1fa8] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#503cfa]"
            >
                Start shopping
            </Link>
        </div>
    )
}
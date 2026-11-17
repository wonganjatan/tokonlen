export default function Home() {
    return (
        <main className="min-h-[calc(100vh-79px)] bg-white text-slate-900">
            <section className="bg-[#eeecff]">
                <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
                    <h1 className="max-w-[16ch] text-5xl font-extrabold leading-[1.02] tracking-tight text-[#2b1fa8] sm:text-7xl">
                        Online shopping, with the feel of your neighborhood shop.
                    </h1>
                    <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-slate-700">
                        Pick your items, pay with QRIS or bank transfer, and we'll deliver
                        them to your door.
                    </p>
                    <a
                        href="/products"
                        className="mt-10 inline-block rounded-md bg-[#503cfa] px-6 py-3 font-semibold text-white shadow-[4px_4px_0_#2b1fa8] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#2b1fa8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#503cfa]"
                    >
                        Browse products
                    </a>
                </div>
            </section>

            <dl className="mx-auto grid max-w-5xl gap-8 px-6 py-14 sm:grid-cols-3">
                <div>
                <dt className="font-bold">Pay your way</dt>
                <dd className="mt-1 text-slate-600">QRIS, bank transfer, and e-wallets.</dd>
                </div>
                <div>
                <dt className="font-bold">Delivered anywhere</dt>
                <dd className="mt-1 text-slate-600">Choose your favorite courier at checkout.</dd>
                </div>
                <div>
                <dt className="font-bold">Track your order</dt>
                <dd className="mt-1 text-slate-600">See its status from payment to delivery.</dd>
                </div>
            </dl>
    </main>
    )
}
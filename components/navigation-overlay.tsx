"use client"

import Link from 'next/link'

export default function NavigationOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-10">
            <div className="w-full text-center mt-12 pointer-events-auto">
                <h1 className="flex justify-center mb-3 gap-0">
                    <span className="text-[100px] font-black text-black uppercase tracking-tight font-montserrat">
                        SY
                    </span>
                    <span className="text-[100px] font-semibold text-black uppercase tracking-tight font-montserrat">
                        ED
                    </span>
                    <span className="text-[100px] font-light text-black uppercase tracking-tight font-montserrat">
                        KH
                    </span>
                    <span className="text-[100px] font-black text-black uppercase tracking-tight font-montserrat">
                        US
                    </span>
                    <span className="text-[100px] font-semibold text-black uppercase tracking-tight font-montserrat">
                        H
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-8 font-serif italic max-w-2xl mx-auto px-4">
                    Reflections on Stoic philosophy, writing, and mindful growth.
                </p>

                <ul className="flex justify-center gap-5 list-none">
                    {[
                        { label: 'Home', href: '/' },
                        { label: 'Archive', href: '/archive' },
                        { label: 'Meditations', href: '/meditations' },
                        { label: 'Journal', href: '/journal' },
                    ].map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-base font-normal uppercase tracking-wide text-black no-underline hover:opacity-70 transition-opacity font-roboto"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

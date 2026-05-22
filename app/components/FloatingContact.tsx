"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center">
            {/* The Vertical Expanding Menu */}
            <div className={`flex flex-col gap-3 mb-3 items-center transition-all duration-300 origin-bottom ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'}`}>
                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/917980182986"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300"
                    aria-label="Start a Chat: +91 7980182986"
                >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                    </svg>
                    <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap">
                        Start a Chat: +91 7980182986
                        <span className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900"></span>
                    </span>
                </a>

                {/* Contact Us Button */}
                <Link
                    href="/contact"
                    className="group relative w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:bg-black transition-all duration-300"
                    aria-label="Contact Page"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap">
                        Contact Page
                        <span className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900"></span>
                    </span>
                </Link>
            </div>

            {/* The Main Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-14 h-14 bg-[#b88e2f] rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-[#a37e29] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none z-10"
                aria-label="Toggle contact menu"
                suppressHydrationWarning={true}
            >
                {/* Speech Bubble Icon */}
                <div className={`transition-all duration-300 ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </div>
                {/* Close (X) Icon */}
                <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </button>
        </div>
    );
}


"use client";

import Link from "next/link";

export default function FloatingContact() {
    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            {/* The Main Link Button */}
            <Link
                href="/contact"
                className="w-14 h-14 bg-[#b88e2f] rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-[#a37e29] hover:scale-105 transition-all duration-300 focus:outline-none"
                aria-label="Contact Us"
                suppressHydrationWarning={true}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
            </Link>
        </div>
    );
}

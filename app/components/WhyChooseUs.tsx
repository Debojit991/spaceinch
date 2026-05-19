"use client";

import ScrollReveal from "./ScrollReveal";

export default function WhyChooseUs() {
    return (
        <>
            {/* BEGIN: WhyChooseUs Section */}
            <section className="w-full bg-[#fafafa] py-20 font-sans text-gray-800" data-purpose="why-choose-us-section">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            
                            {/* Left Column: Typography & List */}
                            <div className="flex flex-col gap-8">
                                {/* Section Header */}
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-8 h-px bg-[#b88e2f]"></div>
                                        <span className="text-[#b88e2f] font-bold tracking-[0.2em] text-xs uppercase">Why Choose Us</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-6">
                                        A behind the scenes look at <span className="italic font-serif text-[#b88e2f]">our agency</span>
                                    </h2>
                                    <p className="text-gray-500 leading-relaxed max-w-lg font-light">
                                        From concept to completion, discover how we bring your vision to life with innovation, collaboration, and expert craftsmanship.
                                    </p>
                                </div>
                                
                                {/* Icon List */}
                                <div className="flex flex-col gap-6 mt-4">
                                    {/* List Item 1 */}
                                    <div className="flex gap-6 pb-6 border-b border-gray-100">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 text-[#b88e2f]">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Tailored Design Solutions</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed font-light">
                                                We provide personalized interior design services that reflect your unique vision and lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* List Item 2 */}
                                    <div className="flex gap-6 pb-6 border-b border-gray-100">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 text-[#b88e2f]">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Seamless Project Management</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed font-light">
                                                We handle the entire design process, from concept to completion, with flawless execution.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* List Item 3 */}
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 text-[#b88e2f]">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9" cy="9" r="4" />
                                                <circle cx="15" cy="15" r="4" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 013-3h3a3 3 0 013 3M6 12a3 3 0 003-3h3a3 3 0 003 3" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Client-Centered Collaboration</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed font-light">
                                                Your input is valued throughout the entire process, ensuring your vision is fully realized.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column: Asymmetrical Bento Image Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-12 gap-4 h-full pt-8 lg:pt-0" data-purpose="bento-grid">
                                {/* Image 1 */}
                                <div className="col-span-1 md:col-span-7 relative overflow-hidden group cursor-pointer rounded-xl shadow-sm aspect-[4/3]">
                                    <img 
                                        alt="Interior Design Concept 1" 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV2yDAjaHTV7rTo3Wj-_iBrmrKI3KH4c3WTToK8ZoGNbpF2lEO5r4U8OLkMEt8LQA8wtHeqXG1TMZ_piqCk6WnQAjJBbg9u3X2jL_lD2l21M3HqPmG1U0gFgHvIl0c_DWJ0YGzwXhkN-ZNDSWRpd4yqWibIH_79Fu5urZaN22zwuhyMe4Fagl8GmCGNSiFeSyGLCGO98OeVPh7Fj7aBDPsMBtmWJF_pcJLMV9KawEsaF4zqI4MvqtikeOQy-K2c3gvVlDsC8RLsqk" 
                                    />
                                    {/* Glass Shine Overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                </div>
                                {/* Image 2 */}
                                <div className="col-span-1 md:col-span-5 relative overflow-hidden group cursor-pointer rounded-xl shadow-sm aspect-[3/4]">
                                    <img 
                                        alt="Interior Design Concept 2" 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                        src="/assets/service-2.jpg" 
                                    />
                                    {/* Glass Shine Overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                </div>
                                {/* Image 3 */}
                                <div className="col-span-1 md:col-span-7 relative overflow-hidden group cursor-pointer rounded-xl shadow-sm aspect-[4/3]">
                                    <img 
                                        alt="Interior Design Concept 3" 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQuhEb5QzZ99fqa4EWnYZXY4uolZPYyLngBpyKgahb1sECMnt8JHFaAuh5oYYpv_KVEkbDnPtrdHCKhWOfTBfkbEmcHgmQB8cohAapv4oz6v3hMIx2zt5xetANbObrBpmQnnKkalEBb8s2YyCA2-eOMZd1tHtFo16EocOiQtjzLNUR9sFAFzw4VadtI4DiXcTU3u7JDPKIkKeO3iMywiJNt_-1xoG6KPtZkDYmfpMzuM5Q4l1EekeaQrprJktKLSKJ3-oT-rowklQ" 
                                    />
                                    {/* Glass Shine Overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                </div>
                                {/* Image 4 */}
                                <div className="col-span-1 md:col-span-5 relative overflow-hidden group cursor-pointer rounded-xl shadow-sm aspect-[3/4]">
                                    <img 
                                        alt="Interior Design Concept 4" 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuArEKdirXX2mtR9h1eJmNF9q4mxhJCL8Ap8xeGFFIpKkqLBRa5CL7yrYWOwpLrkfkzVE9F2KYdjDfNfRWWGKW_Vu0dQPy8522mY0jU6iH3bavADrRogewXx3BPBuqL_U_i8XGkjVT9nSzBwkR-YRZlXd_dH1me3KLYgvrdQBqamR_en8aoP69Zh1rCIH1lvztgE3kdZ4D8h8liJ91YF4eM5zWVvnVjT27A-A01agUzcTtxiUteS2IHKv-uCwhr2tODovybOZ9fk8TM" 
                                    />
                                    {/* Glass Shine Overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                </div>
                            </div>
                            
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            {/* END: WhyChooseUs Section */}
        </>
    );
}
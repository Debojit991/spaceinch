"use client";

import ScrollReveal from "./ScrollReveal";

export default function OurServices() {
    return (
        <>
            {/* BEGIN: OurServices Section */}
            <section id="services" className="w-full py-20 bg-white" data-purpose="services-section">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <ScrollReveal>
                        {/* Header Architecture */}
                        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
                            <div className="max-w-xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-px bg-[#b88e2f]"></div>
                                    <span className="text-[#b88e2f] font-bold tracking-[0.2em] text-xs uppercase font-sans">Our Services</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-sans font-semibold tracking-tight text-gray-900 leading-tight">
                                    Innovative design services <br />
                                    <span className="italic font-serif text-[#b88e2f]">for every need</span>
                                </h2>
                            </div>
                            <p className="text-gray-500 max-w-md font-sans text-base leading-relaxed font-light">
                                We provide a comprehensive suite of interior architecture services, meticulously tailored to transform your vision into an elegant, curated reality.
                            </p>
                        </div>
                        
                        {/* Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="relative group overflow-hidden w-full cursor-pointer aspect-[3/4] bg-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-500">
                                <img 
                                    alt="Space Planning Service" 
                                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                    src="/assets/service-1.jpg" 
                                />
                                {/* Glass Shine Overlay */}
                                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                                
                                {/* Bottom-left Content */}
                                <div className="absolute bottom-0 left-0 p-8 text-white w-full z-20">
                                    <h3 className="text-xl font-bold font-sans mb-2">Space Planning</h3>
                                    <p className="text-sm text-gray-300 opacity-90 font-sans font-light leading-relaxed">
                                        Optimizing flow and functionality for seamless living environments.
                                    </p>
                                </div>
                                
                                {/* Top-right Gold Circular Arrow Button */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-[#b88e2f] hover:bg-[#a37e29] rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 z-20 shadow-md">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Card 2 */}
                            <div className="relative group overflow-hidden w-full cursor-pointer aspect-[3/4] bg-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-500">
                                <img 
                                    alt="Material Sourcing Service" 
                                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                    src="/assets/service-2.jpg" 
                                />
                                {/* Glass Shine Overlay */}
                                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                                
                                {/* Bottom-left Content */}
                                <div className="absolute bottom-0 left-0 p-8 text-white w-full z-20">
                                    <h3 className="text-xl font-bold font-sans mb-2">Material Sourcing</h3>
                                    <p className="text-sm text-gray-300 opacity-90 font-sans font-light leading-relaxed">
                                        Curating bespoke finishes and premium textiles for tactile luxury.
                                    </p>
                                </div>
                                
                                {/* Top-right Gold Circular Arrow Button */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-[#b88e2f] hover:bg-[#a37e29] rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 z-20 shadow-md">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Card 3 */}
                            <div className="relative group overflow-hidden w-full cursor-pointer aspect-[3/4] bg-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-500">
                                <img 
                                    alt="Custom Furniture Service" 
                                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                    src="/assets/service-3 (2).jpg" 
                                />
                                {/* Glass Shine Overlay */}
                                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                                
                                {/* Bottom-left Content */}
                                <div className="absolute bottom-0 left-0 p-8 text-white w-full z-20">
                                    <h3 className="text-xl font-bold font-sans mb-2">Custom Furniture</h3>
                                    <p className="text-sm text-gray-300 opacity-90 font-sans font-light leading-relaxed">
                                        Designing unique, artisanal pieces tailored to specific architectural dimensions.
                                    </p>
                                </div>
                                
                                {/* Top-right Gold Circular Arrow Button */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-[#b88e2f] hover:bg-[#a37e29] rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 z-20 shadow-md">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {/* Action Button */}
                        <div className="mt-16 flex justify-center">
                            <button suppressHydrationWarning={true} className="bg-[#b88e2f] text-white font-sans text-sm font-semibold tracking-widest px-8 py-4 uppercase hover:bg-[#a37e29] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                                See All Services
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            {/* END: OurServices Section */}
        </>
    );
}
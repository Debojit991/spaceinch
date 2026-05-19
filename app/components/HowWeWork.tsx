"use client";

import ScrollReveal from "./ScrollReveal";

export default function HowWeWork() {
    return (
        <>
            {/* BEGIN: HowWeWork Section */}
            <section className="w-full bg-[#181818] py-20 text-white" data-purpose="how-we-work-section">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <ScrollReveal>
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
                            <div className="max-w-2xl">
                                <span className="block font-sans text-xs font-bold text-[#b88e2f] mb-4 tracking-[0.2em] uppercase">How We Work</span>
                                <h2 className="text-4xl md:text-5xl font-sans font-semibold tracking-tight leading-tight text-white">
                                    From concept to completion in <span className="italic font-serif text-[#b88e2f]">our work</span>
                                </h2>
                            </div>
                            <div className="max-w-sm mt-4 md:mt-0">
                                <p className="font-sans text-base text-gray-400 leading-relaxed font-light">
                                    Our methodology is rooted in precision and intention. We curate spaces that reflect the unique narratives of our clients, ensuring every detail is meticulously considered and expertly executed.
                                </p>
                            </div>
                        </div>
                        
                        {/* Process Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                            {/* Item 01 */}
                            <div className="flex flex-col group transition-all duration-300">
                                {/* Consultation SVG Icon */}
                                <div className="text-[#b88e2f] mb-6 transform group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                                    <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742h.008v.008h-.008v-.008zm.37 0h.008v.008H9.05v-.008zm.37 0h.008v.008h-.008v-.008zm.37 0h.008v.008h-.008v-.008zm1.884 1.158c0 1.258-1.25 2.278-2.791 2.278-.293 0-.573-.036-.838-.105l-1.37.822v-1.644c-.352-.35-.583-.822-.583-1.35 0-1.258 1.25-2.279 2.792-2.279s2.79 1.02 2.79 2.278zm9.584.81c0 1.936-1.923 3.504-4.295 3.504-.452 0-.882-.057-1.29-.162l-2.106 1.265v-2.528c-.543-.538-.897-1.265-.897-2.079 0-1.935 1.922-3.504 4.293-3.504 2.373 0 4.295 1.57 4.295 3.504z" />
                                    </svg>
                                </div>
                                <span className="font-sans text-xs font-bold text-[#b88e2f] mb-2 uppercase tracking-widest">01.</span>
                                <h3 className="text-lg font-bold text-white mb-3 font-sans">Initial Consultation</h3>
                                <p className="text-sm text-gray-400 font-sans leading-relaxed font-light">
                                    We begin by understanding your vision, lifestyle, and the structural possibilities of your space to form a foundational brief.
                                </p>
                            </div>
                            
                            {/* Item 02 */}
                            <div className="flex flex-col group md:mt-8 transition-all duration-300">
                                {/* Drafting SVG Icon */}
                                <div className="text-[#b88e2f] mb-6 transform group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                                    <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                </div>
                                <span className="font-sans text-xs font-bold text-[#b88e2f] mb-2 uppercase tracking-widest">02.</span>
                                <h3 className="text-lg font-bold text-white mb-3 font-sans">Design Development</h3>
                                <p className="text-sm text-gray-400 font-sans leading-relaxed font-light">
                                    Translating the brief into tangible concepts, producing detailed spatial layouts, mood boards, and material palettes.
                                </p>
                            </div>
                            
                            {/* Item 03 */}
                            <div className="flex flex-col group md:mt-16 transition-all duration-300">
                                {/* Execution SVG Icon */}
                                <div className="text-[#b88e2f] mb-6 transform group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                                    <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="font-sans text-xs font-bold text-[#b88e2f] mb-2 uppercase tracking-widest">03.</span>
                                <h3 className="text-lg font-bold text-white mb-3 font-sans">Execution &amp; Management</h3>
                                <p className="text-sm text-gray-400 font-sans leading-relaxed font-light">
                                    Overseeing construction and installation with rigorous attention to detail, coordinating with elite craftsmen.
                                </p>
                            </div>
                            
                            {/* Item 04 */}
                            <div className="flex flex-col group md:mt-24 transition-all duration-300">
                                {/* Key SVG Icon */}
                                <div className="text-[#b88e2f] mb-6 transform group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                                    <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-2 4a5 5 0 110-10 5 5 0 010 10zM8 21l9-9M12 17l1.5 1.5M10.5 15.5l1.5 1.5" />
                                    </svg>
                                </div>
                                <span className="font-sans text-xs font-bold text-[#b88e2f] mb-2 uppercase tracking-widest">04.</span>
                                <h3 className="text-lg font-bold text-white mb-3 font-sans">Final Handover</h3>
                                <p className="text-sm text-gray-400 font-sans leading-relaxed font-light">
                                    The reveal of a fully realized space, styled to perfection and ready to be experienced as a cohesive work of art.
                                </p>
                            </div>
                        </div>
                        
                        <hr className="border-gray-800 my-16 opacity-50" />
                        
                        {/* Logo Banner */}
                        <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <span className="font-sans text-sm font-bold tracking-widest">LOGOIPSUM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="font-sans text-sm font-bold tracking-widest">LOGOIPSUM</span>
                            </div>
                            <div className="flex items-center gap-2 hidden md:flex">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                                </svg>
                                <span className="font-sans text-sm font-bold tracking-widest">LOGOIPSUM</span>
                            </div>
                            <div className="flex items-center gap-2 hidden sm:flex">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <span className="font-sans text-sm font-bold tracking-widest">LOGOIPSUM</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            {/* END: HowWeWork Section */}
        </>
    );
}
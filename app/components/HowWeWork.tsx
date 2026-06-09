"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
    {
        num: "01",
        title: "Consultation",
        desc: "Understanding your space, lifestyle needs, style preferences, and budget to form a solid foundational brief.",
        icon: (
            <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        )
    },
    {
        num: "02",
        title: "Concept & Design",
        desc: "Translating ideas into comprehensive layout plans, mood boards, and initial 2D/3D visual concepts.",
        icon: (
            <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.24 3h4.76v4.76M4 20L20 4M4 8.76V4h4.76M19.24 20h-4.76M4 15.24V20h4.76" />
            </svg>
        )
    },
    {
        num: "03",
        title: "Design Finalization",
        desc: "Refining the aesthetic based on your feedback with final 3D renders, precise material selection, and lighting specs.",
        icon: (
            <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
        )
    },
    {
        num: "04",
        title: "Estimation & Planning",
        desc: "Providing a highly detailed cost breakdown, exact material lists, and a strict project execution timeline.",
        icon: (
            <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        num: "05",
        title: "Manufacturing & Procurement",
        desc: "Crafting custom bespoke furniture and procuring premium fixtures with rigorous quality checks at every stage.",
        icon: (
            <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        num: "06",
        title: "Execution & Installation",
        desc: "Flawless on-site execution by our skilled in-house team, ensuring regular updates and structural integrity.",
        icon: (
            <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        )
    },
    {
        num: "07",
        title: "Styling & Finishing",
        desc: "Curating the final layer of décor, luxury textiles, and lighting to perfect the atmospheric look and feel.",
        icon: (
            <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 0V21h-3.536v-3.457z" />
            </svg>
        )
    },
    {
        num: "08",
        title: "Handover & Aftercare",
        desc: "A comprehensive final walkthrough and complete handover, fully backed by our dedicated aftercare support.",
        icon: (
            <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-2 4a5 5 0 110-10 5 5 0 010 10zM8 21l9-9M12 17l1.5 1.5M10.5 15.5l1.5 1.5" />
            </svg>
        )
    }
];

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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step) => (
                                <div key={step.num} className="flex flex-col group transition-all duration-300">
                                    {/* SVG Icon */}
                                    <div className="text-[#b88e2f] mb-6 transform group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <span className="font-sans text-xs font-bold text-[#b88e2f] mb-2 uppercase tracking-widest">{step.num}.</span>
                                    <h3 className="text-lg font-bold text-white mb-3 font-sans">{step.title}</h3>
                                    <p className="text-sm text-gray-400 font-sans leading-relaxed font-light">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        <hr className="border-gray-800 my-16 opacity-50" />
                        
                        {/* Trust Badges Banner */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between items-center justify-center gap-8 w-full">
                            {/* Quality Assured */}
                            <div className="flex flex-col items-center text-center gap-2 max-w-[240px] mx-auto lg:mx-0">
                                <svg className="w-8 h-8 text-[#b88e2f] stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="font-sans text-sm font-semibold text-white tracking-wider">Quality Assured</span>
                                <span className="font-sans text-xs text-gray-400 font-light">Premium materials. Flawless execution.</span>
                            </div>

                            {/* Clients First */}
                            <div className="flex flex-col items-center text-center gap-2 max-w-[240px] mx-auto lg:mx-0">
                                <svg className="w-8 h-8 text-[#b88e2f] stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="font-sans text-sm font-semibold text-white tracking-wider">Clients First</span>
                                <span className="font-sans text-xs text-gray-400 font-light">Transparent process. Timely delivery.</span>
                            </div>

                            {/* Tailored Designs */}
                            <div className="flex flex-col items-center text-center gap-2 max-w-[240px] mx-auto lg:mx-0">
                                <svg className="w-8 h-8 text-[#b88e2f] stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 10.1c-.783-.57-.38-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
                                </svg>
                                <span className="font-sans text-sm font-semibold text-white tracking-wider">Tailored Designs</span>
                                <span className="font-sans text-xs text-gray-400 font-light">Made for your space and lifestyle.</span>
                            </div>

                            {/* Stress-Free Experience */}
                            <div className="flex flex-col items-center text-center gap-2 max-w-[240px] mx-auto lg:mx-0">
                                <svg className="w-8 h-8 text-[#b88e2f] stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span className="font-sans text-sm font-semibold text-white tracking-wider">Stress-Free Experience</span>
                                <span className="font-sans text-xs text-gray-400 font-light">We handle everything for you.</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            {/* END: HowWeWork Section */}
        </>
    );
}
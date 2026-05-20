"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import ScrollReveal from "./ScrollReveal";

export default function AboutUs() {
    const badgeRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);
    
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const icon1Ref = useRef<HTMLDivElement>(null);
    const icon2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Pulse animation for experience badge
        if (badgeRef.current) {
            animate(badgeRef.current, {
                scale: 1.04,
                duration: 1750,
                loop: true,
                alternate: true,
                easing: "easeInOutSine"
            });
        }

        // Entrance number counter animation for 95%
        if (!hasAnimated.current && counterRef.current) {
            hasAnimated.current = true;
            const counterObj = { val: 0 };
            animate(counterObj, {
                val: 95,
                round: 1,
                easing: "easeOutExpo",
                duration: 2500,
                onUpdate: () => {
                    if (counterRef.current) {
                        counterRef.current.textContent = `${Math.round(counterObj.val)}`;
                    }
                }
            });
        }

        // Entrance animation for cards
        if (card1Ref.current && card2Ref.current) {
            animate([card1Ref.current, card2Ref.current], {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (_el: unknown, i: number) => i * 200,
                easing: "easeOutQuad",
                duration: 800
            });
        }
    }, []);

    const handleMouseEnter = (iconElement: HTMLDivElement | null) => {
        if (iconElement) {
            animate(iconElement, {
                scale: 1.15,
                duration: 300,
                easing: "easeOutElastic(1, .8)"
            });
        }
    };

    const handleMouseLeave = (iconElement: HTMLDivElement | null) => {
        if (iconElement) {
            animate(iconElement, {
                scale: 1,
                duration: 300,
                easing: "easeOutElastic(1, .8)"
            });
        }
    };

    return (
        <>
            {/* BEGIN: About Us Section */}
            <section id="about" className="relative overflow-hidden w-full bg-[#fafafa]" data-purpose="about-section">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20">
                    <ScrollReveal>
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                            
                            {/* BEGIN: Left Column (Image Composition & Vertical Feedback Badge) */}
                            <div className="relative w-full max-w-lg mx-auto lg:aspect-square flex flex-col gap-6 lg:block" data-purpose="image-composition">
                                {/* Background Pattern */}
                                <div className="hidden lg:block absolute -bottom-10 -left-10 w-32 h-32 text-gray-200" style={{ zIndex: 1 }}>
                                    <svg height="100%" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern height="20" id="dots" patternUnits="userSpaceOnUse" width="20" x="0" y="0">
                                                <circle cx="5" cy="5" fill="currentColor" r="3"></circle>
                                            </pattern>
                                        </defs>
                                        <rect fill="url(#dots)" height="100%" width="100%" x="0" y="0"></rect>
                                    </svg>
                                </div>
                                
                                {/* Back Image */}
                                <div className="w-full lg:w-4/5 h-64 lg:h-[70%] relative overflow-hidden group rounded-sm shadow-md lg:absolute lg:top-0 lg:right-0">
                                    <img 
                                        alt="Living Room Design" 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOipmTfh2YBg3fz9ypSup-urKzFEcFtxAqPTJDQQtFNRxLc_EPc-z116ocKrf42N0wKeWASrKvKmvxzeXuV8egKgWy3b4cRw6tWzA9MsN-UZY713Q8ge6IbDxEzBgd38VGmzUlwqyCt6gTH9-dpF798PfmaoHRUAHIhtGVw-KyXOBwSwZyDRtixcOdyRtzOe6auQJ9IsX0gEO8W_vkExDWwQhTEMye_J2_w9_Ew8x0zQWC90dCa0ebd3FrLHPf2GsGoKItCy4kaTE" 
                                    />
                                    {/* Glass Shine Overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                </div>
                                
                                {/* Front Image */}
                                <div className="w-full lg:w-3/4 h-64 lg:h-[80%] relative overflow-hidden group rounded-sm shadow-xl z-10 lg:absolute lg:bottom-0 lg:left-0 lg:border-8 lg:border-white">
                                    <img 
                                        alt="Another Room Design" 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeUOia4eWhx2Ku6LMNVmalasnHNvGnlRxTgXvhqD7kg2rZkItX--1cmf1tqPA4bI2K5lm6y7PHpG_wN3B7dpFoqkXEPMCvRe7-8i59HpjrZUXMIeBRJ3VewasAsfeWu9QY_eBGpIbxSNAmDRLhuwhSzyVzTe-4WMfr9wbnLL2OXjB1L4wfkEKSS41OC4lTxl40liFTgWtbRRL6q26z73Qiz62Xh14QCJfWu9OykeJCTL9ng3pzfmhMIOC1DF7pAlnAn7OzNsOU1Ag" 
                                    />
                                    {/* Glass Shine Overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                </div>
                                
                                {/* Experience Badge */}
                                <div 
                                    ref={badgeRef}
                                    className="w-32 h-32 mx-auto -mt-16 relative z-10 bg-[#b88e2f] rounded-full flex flex-col items-center justify-center text-white border-4 border-white shadow-2xl p-6 lg:absolute lg:w-40 lg:h-40 lg:mt-0 lg:bottom-12 lg:-left-12" 
                                    data-purpose="experience-badge"
                                >
                                    <span className="text-3xl font-extrabold font-sans">15+</span>
                                    <span className="text-[10px] tracking-widest uppercase font-semibold text-center mt-1 font-sans">Years Of Experience</span>
                                </div>

                                {/* Vertical Feedback Badge */}
                                <div 
                                    className="hidden lg:flex absolute top-1/2 -right-16 md:-right-20 transform -translate-y-1/2 z-30 flex-col items-center gap-3" 
                                    data-purpose="vertical-feedback"
                                >
                                    <div className="w-14 h-14 bg-[#b88e2f] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                        <span ref={counterRef}>0</span>%
                                    </div>
                                    <div className="h-12 w-px bg-gray-300"></div>
                                    <span className="text-xs font-bold tracking-[0.2em] text-gray-900 uppercase [writing-mode:vertical-lr] whitespace-nowrap">
                                        Positive Feedback
                                    </span>
                                </div>
                            </div>
                            {/* END: Left Column */}
                            
                            {/* BEGIN: Right Column (Typography & Content) */}
                            <div className="flex flex-col gap-10">
                                
                                {/* Section Header */}
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-8 h-px bg-[#b88e2f]"></div>
                                        <span className="text-[#b88e2f] font-bold tracking-[0.2em] text-xs uppercase font-sans">About Us</span>
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-gray-900 leading-tight mb-6">
                                        Our passion for design, your <br />
                                        <span className="font-serif italic text-[#b88e2f]">vision realized</span>
                                    </h2>
                                    <p className="text-gray-500 font-sans leading-relaxed font-light">
                                        We believe that great design is a collaborative journey. Our team of experienced interior architects works closely with you to understand your aesthetic preferences and functional requirements, translating your lifestyle needs into uniquely personalized environments.
                                    </p>
                                </div>
                                
                                {/* Features list */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-6 border-b border-gray-100">
                                    {/* Feature 1 */}
                                    <div 
                                        ref={card1Ref}
                                        className="group cursor-pointer"
                                        onMouseEnter={() => handleMouseEnter(icon1Ref.current)}
                                        onMouseLeave={() => handleMouseLeave(icon1Ref.current)}
                                    >
                                        <div 
                                            ref={icon1Ref} 
                                            className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-[#b88e2f]/10 transition-colors duration-300"
                                        >
                                            <svg className="w-6 h-6 text-[#b88e2f]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans">Guaranteed Quality</h3>
                                        <p className="text-sm text-gray-500 font-sans leading-relaxed">
                                            Executing designs with precision using premium materials and expert craftsmanship.
                                        </p>
                                    </div>
                                    
                                    {/* Feature 2 */}
                                    <div 
                                        ref={card2Ref}
                                        className="group cursor-pointer"
                                        onMouseEnter={() => handleMouseEnter(icon2Ref.current)}
                                        onMouseLeave={() => handleMouseLeave(icon2Ref.current)}
                                    >
                                        <div 
                                            ref={icon2Ref} 
                                            className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-[#b88e2f]/10 transition-colors duration-300"
                                        >
                                            <svg className="w-6 h-6 text-[#b88e2f]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9" cy="9" r="5" stroke="currentColor" className="text-gray-900" />
                                                <circle cx="15" cy="15" r="5" stroke="currentColor" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans">Client-Centered Approach</h3>
                                        <p className="text-sm text-gray-500 font-sans leading-relaxed">
                                            Placing your desires at the core of our collaborative design journey.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* CTA Button and Contact/Founder details */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-4">
                                    <button suppressHydrationWarning={true} className="bg-[#b88e2f] text-white px-8 py-3.5 font-medium hover:bg-[#a37e29] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-sans w-fit">
                                        Read More &rarr;
                                    </button>
                                    
                                                                    <div className="flex items-center gap-4 font-sans border-t sm:border-t-0 sm:border-l border-gray-200 pt-6 sm:pt-0 sm:pl-8">
                                        <img 
                                            alt="Shubham Sinha" 
                                            className="w-14 h-14 rounded-full object-cover" 
                                            src="/assets/shubham-sinha.png" 
                                        />
                                        <div>
                                            <p className="text-lg font-bold text-gray-900 leading-tight">Shubham Sinha</p>
                                            <p className="text-sm text-gray-500">Co Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END: Right Column (Typography & Content) */}
                            
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            {/* END: About Us Section */}
        </>
    );
}
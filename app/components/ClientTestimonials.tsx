"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
    {
        id: "rev-1",
        name: "R.Kumar",
        role: "CEO, Co-Founder of a leading Indian tech firm",
        rating: 5,
        text: "The level of sophistication and attention to detail provided by Aurelian is unmatched. They transformed our space into a cohesive narrative of luxury and comfort. The entire process was seamless, professional, and deeply inspiring.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5rLQsYAkAFa9fKia1Ppydr59SasRs1IR8IxB-5DlStswxxU_JWPPxe5IjbRsuu11GZ5Gx9ng1xlf-TVL7oQZ6rHSl6dtE8rARdTxFQ2yHINLqwMLZUOXX06_0mrhzXCrFfrOmVYhO8Upr8CcnZcw8aT7F4Hf75U7NtQae6TlGcmNaDyvZvwl4QIPumarAOo4VnPbo_gg8cMdRbZ4NwZgepDJJmvVlUZtNrv3UQqhPXJZf6v76Sgo5m9FoQDnU99vHRN7U_yEVfLM",
        initials: "RK"
    },
    {
        id: "rev-2",
        name: "Ananya & Rohan S.",
        role: "Homeowners, Bangalore",
        rating: 5,
        text: "SpaceInch truly understood our vision and turned it into a space that's not just beautiful, but also incredibly functional. Their attention to detail, timely execution and design excellence made the entire experience seamless and stress-free.",
        avatar: null,
        initials: "AR"
    }
];

export default function ClientTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

    // Auto-cycling testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 8000); // 8 seconds per slide

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 50 : -50,
            opacity: 0
        })
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <>
            {/* BEGIN: ClientTestimonials Section */}
            <section className="w-full" data-purpose="testimonials-section">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">
                        
                        {/* Left Column: Image with ZERO padding */}
                        <div className="w-full h-full min-h-[500px] lg:min-h-[600px] relative overflow-hidden group">
                            <img 
                                alt="Testimonial Background" 
                                className="object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                src="/assets/testimonial-img.jpg" 
                            />
                            {/* Glass Shine Overlay */}
                            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                        </div>
                        
                        {/* Right Column: Off-white background with heavy padding */}
                        <div className="bg-[#fafafa] p-12 md:p-16 lg:p-20 relative flex flex-col justify-center overflow-hidden">
                            {/* Watermark Quote (SVG) */}
                            <svg className="absolute top-10 right-10 w-32 h-32 text-gray-200 opacity-30 z-0 select-none pointer-events-none fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            
                            {/* Content (z-10 relative) */}
                            <div className="relative z-10 max-w-lg mx-auto lg:mx-0 w-full flex flex-col">
                                {/* Subtitle / Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-px bg-[#b88e2f]"></div>
                                    <span className="text-[#b88e2f] font-bold tracking-[0.2em] text-xs uppercase font-sans">Testimonials</span>
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-sans font-semibold tracking-tight text-gray-900 mb-10 leading-tight">
                                    Trusted by thousand of <br />
                                    <span className="italic font-serif text-[#b88e2f]">people &amp; companies.</span>
                                </h2>
                                
                                {/* Testimonial Carousel Area */}
                                <div className="relative overflow-hidden min-h-[280px] md:min-h-[220px] flex flex-col justify-between">
                                    <AnimatePresence mode="wait" initial={false} custom={direction}>
                                        <motion.div
                                            key={currentTestimonial.id}
                                            custom={direction}
                                            variants={slideVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                x: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.2 }
                                            }}
                                            className="w-full"
                                        >
                                            {/* Review Stars & Text */}
                                            <div className="mb-8">
                                                <div className="flex flex-row gap-1.5 mb-6">
                                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 text-[#b88e2f] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-lg text-gray-600 leading-relaxed font-sans font-light italic">
                                                    "{currentTestimonial.text}"
                                                </p>
                                            </div>
                                            
                                            {/* User Profile */}
                                            <div className="flex flex-col gap-1 mt-8 pt-8 border-t border-gray-200/60">
                                                <div className="text-base font-bold text-gray-900 font-sans">{currentTestimonial.name}</div>
                                                <div className="text-sm text-gray-400 font-sans">{currentTestimonial.role}</div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Slider Controls */}
                                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200/60">
                                    {/* Navigation dots */}
                                    <div className="flex gap-2">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleDotClick(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${
                                                    index === currentIndex 
                                                        ? "w-6 bg-[#b88e2f]" 
                                                        : "w-2 bg-gray-300 hover:bg-[#b88e2f]/50"
                                                }`}
                                                aria-label={`Go to testimonial ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Navigation arrows */}
                                    <div className="flex gap-3">
                                        <button
                                            onClick={handlePrev}
                                            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#b88e2f] hover:border-[#b88e2f] transition-all duration-300 focus:outline-none cursor-pointer"
                                            aria-label="Previous testimonial"
                                        >
                                            <span className="material-symbols-outlined text-lg leading-none">chevron_left</span>
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#b88e2f] hover:border-[#b88e2f] transition-all duration-300 focus:outline-none cursor-pointer"
                                            aria-label="Next testimonial"
                                        >
                                            <span className="material-symbols-outlined text-lg leading-none">chevron_right</span>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Aggregate Rating */}
                                <div className="flex items-baseline gap-4 mt-8 pt-6 border-t border-gray-200/60 w-fit">
                                    <div className="text-4xl font-bold text-gray-900 leading-none tracking-tight font-sans">4.82</div>
                                    <div className="flex flex-col">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-3.5 h-3.5 text-[#b88e2f] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                            ))}
                                        </div>
                                        <div className="text-[11px] text-gray-400 font-sans mt-1">2,488 reviews</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
            {/* END: ClientTestimonials Section */}
        </>
    );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const heroImages = [
        "/assets/hero-bg.jpg",
        "/assets/hero-bg-2.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Triggers when section is near the middle of the screen
            threshold: 0,
        });

        const sections = ['home', 'about', 'services', 'projects', 'blog'];
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* BEGIN: Hero Section */}
            <section 
                id="home"
                className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col transition-all duration-1000 ease-in-out" 
                style={{ backgroundImage: `url('${heroImages[activeSlide]}')` }}
                data-purpose="hero-section"
            >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                
                {/* BEGIN: Navigation */}
                <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-all duration-300 py-4" data-purpose="main-navigation">
                    <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-5 flex items-center justify-between relative">
                        {/* Logo */}
                        <div className="flex items-center space-x-3 cursor-pointer">
                            <img src="/assets/logo.jpeg" alt="SpaceInch Logo" className="h-10 w-auto object-contain" />
                        </div>
                        
                        {/* Nav Links (Centered) */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a className={`font-medium transition-all duration-300 ${activeSection === 'home' ? 'text-[#b88e2f] drop-shadow-[0_0_8px_rgba(184,142,47,0.6)]' : 'text-gray-900 hover:text-[#b88e2f]'}`} href="#home">Home</a>
                            <a className={`font-medium transition-all duration-300 ${activeSection === 'about' ? 'text-[#b88e2f] drop-shadow-[0_0_8px_rgba(184,142,47,0.6)]' : 'text-gray-900 hover:text-[#b88e2f]'}`} href="#about">About Us</a>
                            <a className={`font-medium transition-all duration-300 ${activeSection === 'services' ? 'text-[#b88e2f] drop-shadow-[0_0_8px_rgba(184,142,47,0.6)]' : 'text-gray-900 hover:text-[#b88e2f]'}`} href="#services">Services</a>
                            <a className={`font-medium transition-all duration-300 ${activeSection === 'projects' ? 'text-[#b88e2f] drop-shadow-[0_0_8px_rgba(184,142,47,0.6)]' : 'text-gray-900 hover:text-[#b88e2f]'}`} href="#projects">Projects</a>
                            <a className={`font-medium transition-all duration-300 ${activeSection === 'blog' ? 'text-[#b88e2f] drop-shadow-[0_0_8px_rgba(184,142,47,0.6)]' : 'text-gray-900 hover:text-[#b88e2f]'}`} href="#blog">Blog</a>
                            <Link className="text-gray-900 font-medium hover:text-[#b88e2f] transition-colors" href="/contact">Contact</Link>
                        </nav>
                        
                        {/* CTA / Hamburger container */}
                        <div className="flex items-center gap-4">
                            {/* CTA Button (Desktop only) */}
                            <div className="hidden md:block">
                                <Link className="inline-flex items-center justify-center px-6 py-2.5 bg-[#b88e2f] text-white text-sm font-medium hover:bg-[#a37e29] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group rounded-sm font-sans" href="/contact">
                                    Get In Touch
                                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    </svg>
                                </Link>
                            </div>

                            {/* Mobile Hamburger Button */}
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden text-gray-900 hover:text-[#b88e2f] focus:outline-none transition-colors p-2"
                                aria-label="Toggle menu"
                                suppressHydrationWarning={true}
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Mobile Menu UI */}
                        {isMobileMenuOpen && (
                            <div className="fixed inset-0 z-[9999] h-[100dvh] w-full bg-white flex flex-col items-center justify-center gap-8 text-2xl font-bold text-gray-900">
                                {/* Close button (top right) */}
                                <button 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="absolute top-6 right-6 text-gray-900 hover:text-[#b88e2f] transition-colors p-2"
                                    aria-label="Close menu"
                                    suppressHydrationWarning={true}
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                                <Link href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#b88e2f] transition-colors font-sans">Home</Link>
                                <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#b88e2f] transition-colors font-sans">About Us</Link>
                                <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#b88e2f] transition-colors font-sans">Services</Link>
                                <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#b88e2f] transition-colors font-sans">Projects</Link>
                                <Link href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#b88e2f] transition-colors font-sans">Blog</Link>
                                <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#b88e2f] transition-colors font-sans" href="/contact">Contact</Link>
                                <Link onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center justify-center px-8 py-3 bg-[#b88e2f] text-white text-lg font-medium hover:bg-[#a37e29] rounded-sm font-sans" href="/contact">
                                    Get In Touch
                                </Link>
                            </div>
                        )}
                    </div>
                </header>
                {/* END: Navigation */}
                
                {/* BEGIN: Main Content */}
                <main className="relative z-10 flex-grow flex items-center" data-purpose="hero-content">
                    <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 pt-32 pb-24">
                        <ScrollReveal>
                            <div className="max-w-3xl">
                                {/* Label */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-px bg-[#b88e2f]"></div>
                                    <span className="text-xs font-bold tracking-[0.2em] text-[#b88e2f] uppercase font-sans">Inspired Interiors</span>
                                </div>
                                
                                {/* Heading */}
                                <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-md font-sans">
                                    Designing your<br /> dream spaces,<br /> one room at a time
                                </h2>
                                
                                {/* Subtext */}
                                <p className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed font-sans font-light">
                                    We specialize in creating personalized, functional, and stylish interiors that reflect your unique vision.
                                </p>
                                
                                {/* Buttons */}
                                <div className="flex flex-wrap items-center gap-4">
                                    <a className="inline-flex items-center justify-center px-8 py-3.5 bg-[#b88e2f] text-white text-sm font-medium hover:bg-[#a37e29] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group shadow-lg rounded-sm font-sans" href="#">
                                        Explore More
                                        <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                    </a>
                                    <Link className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-white text-sm font-medium hover:bg-white hover:text-gray-900 transition-all group shadow-lg border border-white/50 rounded-sm font-sans" href="/projects">
                                        View Projects
                                        <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </main>
                {/* END: Main Content */}
                
                {/* BEGIN: Slider Indicators */}
                <div className="absolute bottom-10 left-0 w-full z-10" data-purpose="slider-indicators">
                    <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex space-x-2">
                        <button 
                            aria-label="Slide 1" 
                            onClick={() => setActiveSlide(0)}
                            suppressHydrationWarning={true}
                            className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none ${activeSlide === 0 ? "bg-[#b88e2f]" : "bg-white opacity-50 hover:opacity-100"}`}
                        ></button>
                        <button 
                            aria-label="Slide 2" 
                            onClick={() => setActiveSlide(1)}
                            suppressHydrationWarning={true}
                            className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none ${activeSlide === 1 ? "bg-[#b88e2f]" : "bg-white opacity-50 hover:opacity-100"}`}
                        ></button>
                    </div>
                </div>
                {/* END: Slider Indicators */}
            </section>
            {/* END: Hero Section */}
        </>
    );
}
"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/* BEGIN: Footer Section */}
            <footer className="w-full bg-[#1a1814] text-white border-t border-gray-800" data-purpose="footer">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
                    
                    {/* Top Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-gray-800/60 gap-6">
                        {/* Brand Logo */}
                        <div className="flex items-center space-x-3 cursor-pointer">
                            <div className="bg-white inline-block p-3 rounded-lg shadow-sm">
                                <img src="/assets/logo.jpeg" alt="SpaceInch Logo" className="h-10 w-auto object-contain" />
                            </div>
                        </div>
                        
                        {/* Socials */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-sans text-gray-400 mr-2">Follow Our Socials</span>
                            <a 
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#b88e2f] text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-[#b88e2f]/20 transition-all duration-300" 
                                href="#"
                                aria-label="Facebook"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                                </svg>
                            </a>
                            <a 
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#b88e2f] text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-[#b88e2f]/20 transition-all duration-300" 
                                href="#"
                                aria-label="Web"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </a>
                            <a 
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#b88e2f] text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-[#b88e2f]/20 transition-all duration-300" 
                                href="https://www.instagram.com/spaceinch.in?igsh=MTh1dHY4MXA2endkOQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path>
                                </svg>
                            </a>

                        </div>
                    </div>
                    
                    {/* Main Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
                        {/* Column 1: Information */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white font-sans">Information</h3>
                            <ul className="flex flex-col gap-4 text-sm font-sans text-gray-400 font-light">
                                <li><Link className="hover:text-[#b88e2f] transition-colors" href="/#about">About Our Company</Link></li>
                                <li><Link className="hover:text-[#b88e2f] transition-colors" href="/#services">View Our Service</Link></li>
                                <li><Link className="hover:text-[#b88e2f] transition-colors" href="/contact">Careers At Company</Link></li>
                                <li><Link className="hover:text-[#b88e2f] transition-colors" href="/#blog">Read Our Blog</Link></li>
                                <li><Link className="hover:text-[#b88e2f] transition-colors" href="/projects">Our Latest Projects</Link></li>
                            </ul>
                        </div>
                        
                        {/* Column 2: Portfolio */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white font-sans">Portfolio</h3>
                            <ul className="flex flex-col gap-4 text-sm font-sans text-gray-400 font-light">
                                <li><a className="hover:text-[#b88e2f] transition-colors" href="#">Luxury Home Design</a></li>
                                <li><a className="hover:text-[#b88e2f] transition-colors" href="#">Residential Interior Design</a></li>
                                <li><a className="hover:text-[#b88e2f] transition-colors" href="#">Commercial Space Design</a></li>
                                <li><a className="hover:text-[#b88e2f] transition-colors" href="#">Residential Interior Design</a></li>
                                <li><a className="hover:text-[#b88e2f] transition-colors" href="#">Renovation And Restoration Design</a></li>
                            </ul>
                        </div>
                        
                        {/* Column 3: Contact Us */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white font-sans">Contact Us</h3>
                            <div className="flex flex-col gap-4 text-sm font-sans text-gray-400 font-light">

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="mt-1">hello@spaceinch.in</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="mt-1">SpaceInch Studio, Kolkata, West Bengal, India</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Column 4: Newsletter */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white font-sans">Get The Latest Trending News</h3>
                            <p className="text-sm font-sans text-gray-400 mb-6 leading-relaxed font-light">
                                Your Dream Space Starts Here. Get Exclusive Design Straight To Your Inbox!
                            </p>
                            
                            {/* Newsletter Input: functional flex container with absolute submit button */}
                            <div className="relative w-full mt-6">
                                <input 
                                    suppressHydrationWarning={true}
                                    className="w-full bg-white text-gray-900 pr-12 pl-4 py-3 outline-none font-sans text-sm placeholder:text-gray-400 rounded-sm" 
                                    placeholder="Email Address" 
                                    type="email" 
                                />
                                <button 
                                    suppressHydrationWarning={true}
                                    aria-label="Subscribe" 
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#b88e2f] hover:bg-[#a37e29] hover:scale-105 active:scale-95 text-white flex items-center justify-center transition-all duration-300"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="border-t border-gray-800/60 w-full"></div>
                    
                    {/* Bottom Bar */}
                    <div className="py-6 text-center text-sm font-sans text-gray-500 font-light">
                        Copyright © 2026 All Rights Reserved.
                    </div>
                </div>
            </footer>
            {/* END: Footer Section */}
        </>
    );
}
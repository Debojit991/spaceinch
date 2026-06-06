"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuotePopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        projectType: "",
        scope: "",
        timeline: ""
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `Hello SpaceInch Team! I would like to request a consultation. Here are my project details:
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Project Type:* ${formData.projectType}
*Scope:* ${formData.scope}
*Timeline:* ${formData.timeline}`;

        const url = `https://wa.me/917980182986?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
                >
                    {/* Backdrop click to close */}
                    <div 
                        className="absolute inset-0 cursor-default" 
                        onClick={() => setIsVisible(false)}
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        transition={{ 
                            type: "spring", 
                            damping: 25, 
                            stiffness: 350,
                            duration: 0.4
                        }}
                        className="bg-[#1a1a1a] border border-[#b88e2f]/30 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl relative overflow-hidden z-10 my-8"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        {/* Decorative Gold Radial Light */}
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#b88e2f]/10 rounded-full blur-2xl pointer-events-none" />
                        
                        {/* Close Button */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#b88e2f] rounded-full p-1.5 z-20 cursor-pointer"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Accent Icon/Dot */}
                            <div className="w-10 h-10 bg-[#b88e2f]/10 border border-[#b88e2f]/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-[#b88e2f] text-xl">
                                    architecture
                                </span>
                            </div>

                            <h2 id="modal-title" className="text-xl md:text-2xl font-bold text-white mb-1 leading-snug">
                                Let's design your dream space.
                            </h2>
                            <p className="text-gray-400 mb-5 text-xs md:text-sm leading-relaxed">
                                Luxury measured in inches. Book your free consultation today.
                            </p>

                            {/* Lead Capture Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="bg-[#2a2a2a] border border-gray-700 rounded-lg w-full text-white px-4 py-2 text-sm focus:outline-none focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-medium text-gray-400 mb-1">
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            required
                                            placeholder="Your phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="bg-[#2a2a2a] border border-gray-700 rounded-lg w-full text-white px-4 py-2 text-sm focus:outline-none focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] transition-all"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="projectType" className="block text-xs font-medium text-gray-400 mb-1">
                                            Project Type
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="projectType"
                                                required
                                                value={formData.projectType}
                                                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                                className="bg-[#2a2a2a] border border-gray-700 rounded-lg w-full text-white px-4 py-2 text-sm focus:outline-none focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] transition-all appearance-none cursor-pointer pr-10"
                                            >
                                                <option value="" disabled>Select project type</option>
                                                <option value="Residential">Residential</option>
                                                <option value="Commercial">Commercial</option>
                                                <option value="Hospitality">Hospitality</option>
                                            </select>
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                                <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="scope" className="block text-xs font-medium text-gray-400 mb-1">
                                            Scope of Work
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="scope"
                                                required
                                                value={formData.scope}
                                                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                                                className="bg-[#2a2a2a] border border-gray-700 rounded-lg w-full text-white px-4 py-2 text-sm focus:outline-none focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] transition-all appearance-none cursor-pointer pr-10"
                                            >
                                                <option value="" disabled>Select scope</option>
                                                <option value="Single Room">Single Room</option>
                                                <option value="Full Property Renovation">Full Property Renovation</option>
                                                <option value="New Construction">New Construction</option>
                                            </select>
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                                <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="timeline" className="block text-xs font-medium text-gray-400 mb-1">
                                            Timeline
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="timeline"
                                                required
                                                value={formData.timeline}
                                                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                                className="bg-[#2a2a2a] border border-gray-700 rounded-lg w-full text-white px-4 py-2 text-sm focus:outline-none focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] transition-all appearance-none cursor-pointer pr-10"
                                            >
                                                <option value="" disabled>Select timeline</option>
                                                <option value="Immediately">Immediately</option>
                                                <option value="1-3 Months">1-3 Months</option>
                                                <option value="Just Exploring">Just Exploring</option>
                                            </select>
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                                <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-[#b88e2f] hover:bg-[#a37e29] text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer mt-6 focus:outline-none focus:ring-2 focus:ring-[#b88e2f] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
                                >
                                    <svg 
                                        className="w-5 h-5 fill-current" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                                    </svg>
                                    <span>Get Quote via WhatsApp</span>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

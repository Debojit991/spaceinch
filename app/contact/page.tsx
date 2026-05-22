"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        const object = Object.fromEntries(data.entries());
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await response.json();
            if (result.success) {
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "General Inquiry",
                    message: ""
                });
            } else {
                console.error("Web3Forms submission failed:", result);
                alert("Something went wrong. Please check your access key or try again.");
            }
        } catch (error) {
            console.error("Web3Forms submit error:", error);
            alert("Failed to submit form. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="bg-[#fafafa] min-h-screen" suppressHydrationWarning={true}>
            {/* Header / Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/">
                        <img src="/assets/logo.jpeg" alt="SpaceInch Logo" className="h-10 w-auto object-contain cursor-pointer" />
                    </Link>
                    <Link href="/" className="text-sm font-medium text-gray-600 hover:text-[#b88e2f] transition-all font-sans flex items-center gap-2" suppressHydrationWarning={true}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Main Content Wrapper */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-sans font-semibold text-gray-900 tracking-tight">
                        Get In Touch
                    </h1>
                    <p className="text-gray-500 font-sans text-base mt-4 font-light leading-relaxed">
                        Ready to transform your space? Let's start the conversation about your dream interior.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16">
                    {/* Left Column: Contact info cards */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        {/* Contact Info Card */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold font-sans text-gray-900 mb-6">Contact Information</h2>
                            <div className="flex flex-col gap-6">
                                {/* Office */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#b88e2f] text-white flex items-center justify-center shrink-0 mr-4 shadow-sm shadow-[#b88e2f]/20">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                        </svg>
                                    </div>
                                    <div className="font-sans">
                                        <h4 className="font-bold text-gray-900 text-sm">Our Studio</h4>
                                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                            SpaceInch Studio, 4th Floor, Park Street, Kolkata, West Bengal, India
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#b88e2f] text-white flex items-center justify-center shrink-0 mr-4 shadow-sm shadow-[#b88e2f]/20">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div className="font-sans">
                                        <h4 className="font-bold text-gray-900 text-sm">Email Us</h4>
                                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                            hello@spaceinch.com<br />
                                            projects@spaceinch.com
                                        </p>
                                    </div>
                                </div>

                                {/* Call Us */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#b88e2f] text-white flex items-center justify-center shrink-0 mr-4 shadow-sm shadow-[#b88e2f]/20">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div className="font-sans">
                                        <h4 className="font-bold text-gray-900 text-sm">Call Us</h4>
                                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                            <a href="https://wa.me/917980182986" target="_blank" className="hover:text-[#b88e2f] transition-colors">+91 7980182986 (Call / WhatsApp)</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Card */}
                        <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100 flex flex-col h-80">
                            <div className="flex-grow w-full relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231254125!2d88.26495143561748!3d22.53540637475445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1779207631225!5m2!1sen!2sus"
                                    className="w-full h-full min-h-[250px] rounded-xl border-0 grayscale md:grayscale-0 transition-all duration-500 hover:grayscale-0"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="SpaceInch Studio Location"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="mt-3 text-center text-xs text-gray-500 font-sans font-medium">
                                Visit our studio in Kolkata, West Bengal, India
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 h-full relative">
                            <h2 className="text-2xl font-bold font-sans text-gray-900 mb-6">Send us a Message</h2>
                            {isSubmitted ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }} 
                                    animate={{ opacity: 1, scale: 1 }} 
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    {/* Large, gold, circular checkmark SVG */}
                                    <div className="w-20 h-20 bg-[#b88e2f]/10 text-[#b88e2f] rounded-full flex items-center justify-center mb-4 shadow-sm shadow-[#b88e2f]/20">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-4 font-sans">Message Sent Successfully!</h3>
                                    <p className="text-gray-500 mt-2 max-w-sm font-sans text-sm">
                                        Thank you for reaching out. Our design team will get back to you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-sans">
                                    <input type="hidden" name="access_key" value="fdc84164-647d-4b56-b53d-39d917fee2d6" />
                                    
                                    {/* Name and Email Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                required
                                                name="name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Enter your name"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] outline-none transition-all text-sm text-gray-800"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="Enter your email"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] outline-none transition-all text-sm text-gray-800"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone and Subject Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                name="phone"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="Enter phone number"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] outline-none transition-all text-sm text-gray-800"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Subject</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] outline-none transition-all text-sm text-gray-800 bg-white"
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Residential Design">Residential Design</option>
                                                <option value="Commercial Design">Commercial Design</option>
                                                <option value="Hospitality Design">Hospitality Design</option>
                                                <option value="Consultation">Consultation Request</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Message</label>
                                        <textarea
                                            required
                                            rows={5}
                                            name="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell us about your project requirements..."
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] outline-none transition-all text-sm text-gray-800 resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-[#b88e2f] hover:bg-[#a37e29] text-white rounded-lg py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg shadow-[#b88e2f]/20 hover:-translate-y-0.5 ${isSubmitting ? "animate-pulse opacity-75 cursor-not-allowed" : ""}`}
                                        suppressHydrationWarning={true}
                                    >
                                        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                        {!isSubmitting && (
                                            <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
                                            </svg>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Business Hours Row */}
                <div className="bg-white rounded-2xl shadow-sm p-8 max-w-4xl mx-auto mt-8 border border-gray-100">
                    <h3 className="text-center font-sans font-bold text-gray-900 text-lg mb-6">Business Operations Hours</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-sans">
                        <div className="border-r border-gray-100 last:border-0 py-2">
                            <span className="block text-xs font-bold text-[#b88e2f] uppercase tracking-wider mb-1">Monday - Friday</span>
                            <span className="text-gray-900 text-sm font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="border-r border-gray-100 last:border-0 py-2">
                            <span className="block text-xs font-bold text-[#b88e2f] uppercase tracking-wider mb-1">Saturday</span>
                            <span className="text-gray-900 text-sm font-medium">10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="py-2">
                            <span className="block text-xs font-bold text-[#b88e2f] uppercase tracking-wider mb-1">Sunday</span>
                            <span className="text-gray-500 text-sm">Emergency by Appointment</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

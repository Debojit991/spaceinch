"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: number;
    image: string;
    status: "completed" | "ongoing";
    rating: number;
    client: string;
    clientInitials: string;
    title: string;
    description: string;
    location: string;
    area: string;
    budget: string;
    category: "Residential" | "Commercial" | "Hospitality";
    tags: string[];
}

const projects: Project[] = [
    {
        id: 1,
        image: "/assets/service-1.jpg",
        status: "completed",
        rating: 4.9,
        client: "Robert Sterling",
        clientInitials: "RS",
        title: "Urban Minimalist Penthouse",
        description: "A sleek, high-end residential layout overlooking the downtown skyline, featuring smart home integration.",
        location: "New York, NY",
        area: "3,200 sq ft",
        budget: "$350,000",
        category: "Residential",
        tags: ["Smart Home", "Minimalist", "Penthouse"]
    },
    {
        id: 2,
        image: "/assets/service-2.jpg",
        status: "completed",
        rating: 4.8,
        client: "Sarah Jenkins",
        clientInitials: "SJ",
        title: "Vanguard Creative Offices",
        description: "An open-concept corporate space designed for collaborative productivity and biophilic luxury styling.",
        location: "Austin, TX",
        area: "12,500 sq ft",
        budget: "$850,000",
        category: "Commercial",
        tags: ["Biophilic", "Ergonomic", "Collaborative"]
    },
    {
        id: 3,
        image: "/assets/service-3 (2).jpg",
        status: "ongoing",
        rating: 5.0,
        client: "Aria Montrose",
        clientInitials: "AM",
        title: "The Golden Leaf Bistro",
        description: "A warm, intimate dining lounge featuring custom brass accents, custom lighting, and plush velvet seating.",
        location: "Chicago, IL",
        area: "4,800 sq ft",
        budget: "$420,000",
        category: "Hospitality",
        tags: ["Bespoke", "Lounge", "Lighting"]
    },
    {
        id: 4,
        image: "/assets/testimonial-img.jpg",
        status: "completed",
        rating: 4.7,
        client: "David Vance",
        clientInitials: "DV",
        title: "Mid-Century Modern Villa",
        description: "Restoring an architectural masterpiece with custom walnut joinery, terrazzo flooring, and vintage curation.",
        location: "Los Angeles, CA",
        area: "5,400 sq ft",
        budget: "$600,000",
        category: "Residential",
        tags: ["Restoration", "Mid-Century", "Walnut"]
    },
    {
        id: 5,
        image: "/assets/hero-bg.jpg",
        status: "ongoing",
        rating: 4.9,
        client: "Marcus Vance",
        clientInitials: "MV",
        title: "Aura Wellness Retreat",
        description: "A sanctuary-style spa space designed around natural stone finishes, soft indirect lighting, and acoustics.",
        location: "Miami, FL",
        area: "8,200 sq ft",
        budget: "$750,000",
        category: "Hospitality",
        tags: ["Wellness", "Stone", "Acoustics"]
    },
    {
        id: 6,
        image: "/assets/hero-bg-2.jpg",
        status: "completed",
        rating: 4.9,
        client: "Elena Rostova",
        clientInitials: "ER",
        title: "Apex Executive Suites",
        description: "Sleek, wood-paneled boardrooms and meeting spaces built with soundproofing and state-of-the-art tech.",
        location: "Seattle, WA",
        area: "6,500 sq ft",
        budget: "$500,000",
        category: "Commercial",
        tags: ["Executive", "Soundproof", "Sleek"]
    },
    {
        id: 7,
        image: "/assets/service-1.jpg",
        status: "completed",
        rating: 4.8,
        client: "Clarissa Finch",
        clientInitials: "CF",
        title: "The Coastal Horizon Estate",
        description: "An airy, sun-drenched beachside home blending organic linens, white-washed oak, and sea views.",
        location: "Malibu, CA",
        area: "7,100 sq ft",
        budget: "$980,000",
        category: "Residential",
        tags: ["Beachside", "Organic", "Oak"]
    },
    {
        id: 8,
        image: "/assets/service-2.jpg",
        status: "ongoing",
        rating: 4.6,
        client: "Jonathan Gray",
        clientInitials: "JG",
        title: "Pixel Perfect HQ Lobby",
        description: "A high-impact, geometric lobby area featuring floating staircase panels and custom LED mapping installations.",
        location: "San Jose, CA",
        area: "3,500 sq ft",
        budget: "$290,000",
        category: "Commercial",
        tags: ["Geometric", "LED Mapping", "Modern"]
    },
    {
        id: 9,
        title: "The Azure Oceanfront Villa",
        category: "Residential",
        status: "completed",
        rating: 4.9,
        client: "Ananya Desai",
        clientInitials: "AD",
        description: "A breathtaking coastal home featuring floor-to-ceiling glass, natural stone textures, and a seamless indoor-outdoor flow.",
        location: "Mumbai, MH",
        area: "6,200 sq ft",
        budget: "₹8.5 Cr",
        tags: ["Coastal", "Luxury", "Smart Home"],
        image: "/assets/service-1.jpg"
    },
    {
        id: 10,
        title: "Nexus Innovation Center",
        category: "Commercial",
        status: "ongoing",
        rating: 4.8,
        client: "TechFlow Inc.",
        clientInitials: "TF",
        description: "An ultra-modern corporate workspace designed to foster collaboration, featuring biophilic elements and acoustic zoning.",
        location: "Bangalore, KA",
        area: "15,000 sq ft",
        budget: "₹12.2 Cr",
        tags: ["Corporate", "Biophilic", "Acoustics"],
        image: "/assets/service-2.jpg"
    },
    {
        id: 11,
        title: "The Crimson Boutique Hotel",
        category: "Hospitality",
        status: "completed",
        rating: 5.0,
        client: "Crimson Group",
        clientInitials: "CG",
        description: "A heritage property transformed into a luxury boutique hotel, blending traditional Indian motifs with contemporary minimalist comfort.",
        location: "Jaipur, RJ",
        area: "22,000 sq ft",
        budget: "₹25 Cr",
        tags: ["Heritage", "Boutique", "Luxury"],
        image: "/assets/service-3 (2).jpg"
    },
    {
        id: 12,
        title: "Urban Zen Penthouse",
        category: "Residential",
        status: "ongoing",
        rating: 4.7,
        client: "Vikram Malhotra",
        clientInitials: "VM",
        description: "A high-altitude urban retreat prioritizing calm, featuring Japanese-inspired wabi-sabi aesthetics and muted earthy tones.",
        location: "Kolkata, WB",
        area: "4,100 sq ft",
        budget: "₹6.0 Cr",
        tags: ["Zen", "Minimalist", "Penthouse"],
        image: "/assets/hero-bg.jpg"
    }
];

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Types");

    const categories = ["All Types", "Residential", "Commercial", "Hospitality"];

    const filteredProjects = projects.filter((project) => {
        const matchesCategory =
            activeCategory === "All Types" || project.category === activeCategory;
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-[#fafafa] min-h-screen">
            {/* Header / Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/">
                        <img src="/assets/logo.jpeg" alt="SpaceInch Logo" className="h-10 w-auto object-contain cursor-pointer" />
                    </Link>
                    <Link href="/" className="text-sm font-medium text-gray-600 hover:text-[#b88e2f] transition-all font-sans flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl lg:text-5xl font-sans font-semibold text-gray-900 tracking-tight mb-4">
                        Our Projects
                    </h1>
                    <p className="text-gray-500 font-sans text-base max-w-xl mx-auto font-light leading-relaxed">
                        A curated showcase of luxury interior curation and space optimization across residential, commercial, and hospitality architectures.
                    </p>
                </div>

                {/* Controls Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 border-b border-gray-100 mb-6">
                    {/* Left: Minimalist Search */}
                    <div className="relative w-full md:max-w-xs">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search projects, clients, tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#b88e2f] focus:border-[#b88e2f] transition-all font-sans text-gray-800"
                        />
                    </div>

                    {/* Right: Filters */}
                    <div className="flex flex-wrap gap-2.5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 text-xs font-bold font-sans uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer ${
                                    activeCategory === cat
                                        ? "bg-[#b88e2f] text-white shadow-md shadow-[#b88e2f]/20"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Showing X Projects Bar */}
                <div className="mb-8 font-sans text-sm">
                    <span className="text-gray-500">
                        Showing <span className="font-bold text-gray-900">{filteredProjects.length}</span> projects
                    </span>
                </div>

                {/* Grid Layout with Framer Motion */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                            >
                                {/* Image Block */}
                                <div className="relative h-56 w-full overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110"
                                    />
                                    {/* Glass Shine Overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                    {/* Absolute Status Badge (Top-left) */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full font-sans shadow-sm ${
                                            project.status === "completed"
                                                ? "bg-emerald-100 text-emerald-800"
                                                : "bg-blue-100 text-blue-800"
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    {/* Absolute Rating Badge (Top-right) */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-gray-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 font-sans shadow-sm">
                                            <svg className="w-3 h-3 text-[#b88e2f] fill-[#b88e2f]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
                                            </svg>
                                            {project.rating.toFixed(1)}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Client Avatar Row */}
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 rounded-full bg-[#b88e2f] text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0 font-sans shadow-sm">
                                            {project.clientInitials}
                                        </div>
                                        <span className="text-xs text-gray-500 font-sans font-medium">Client: {project.client}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 font-sans leading-tight">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-500 mt-2 font-sans font-light leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Details Row */}
                                    <div className="flex items-center justify-between mt-4 py-3 border-y border-gray-100 text-xs text-gray-500 font-sans">
                                        <div className="flex items-center gap-1.5">
                                            {/* Map Pin SVG */}
                                            <svg className="w-3.5 h-3.5 text-[#b88e2f] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <circle cx="12" cy="11" r="3" strokeLinecap="round" strokeLinejoin="round"></circle>
                                            </svg>
                                            <span className="truncate max-w-[80px]">{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            {/* Area Ruler SVG */}
                                            <svg className="w-3.5 h-3.5 text-[#b88e2f] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                            </svg>
                                            <span>{project.area}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 font-semibold text-gray-900">
                                            {/* Dollar SVG */}
                                            <svg className="w-3.5 h-3.5 text-[#b88e2f] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>{project.budget}</span>
                                        </div>
                                    </div>

                                    {/* Footer Tag Pills */}
                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-100 text-gray-600 text-[10px] px-2.5 py-1 rounded-md font-sans"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>
        </div>
    );
}

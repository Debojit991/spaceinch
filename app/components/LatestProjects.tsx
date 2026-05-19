"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function LatestProjects() {
    return (
        <>
            {/* BEGIN: LatestProjects Section */}
            <section id="projects" className="w-full py-20 bg-white" data-purpose="projects-section">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <ScrollReveal>
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                            <div className="max-w-xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-8 h-px bg-[#b88e2f]"></span>
                                    <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#b88e2f] uppercase">Latest Projects</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-sans font-semibold tracking-tight text-gray-900 leading-tight">
                                    Creative projects that define <span className="italic font-serif text-[#b88e2f]">our style</span>
                                </h2>
                            </div>
                            <p className="max-w-md text-gray-500 text-base leading-relaxed font-sans font-light">
                                Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces to functional and stylish commercial interiors.
                            </p>
                        </div>
                        
                        {/* Filter Navigation */}
                        <div className="flex justify-center gap-8 mb-12 text-xs font-bold font-sans uppercase tracking-[0.2em]">
                            <button suppressHydrationWarning={true} className="text-[#b88e2f] border-b-2 border-[#b88e2f] pb-2 transition-all cursor-pointer">
                                All
                            </button>
                            <button suppressHydrationWarning={true} className="text-gray-400 hover:text-[#b88e2f] transition-all pb-2 cursor-pointer border-b-2 border-transparent hover:border-[#b88e2f]">
                                Architecture
                            </button>
                            <button suppressHydrationWarning={true} className="text-gray-400 hover:text-[#b88e2f] transition-all pb-2 cursor-pointer border-b-2 border-transparent hover:border-[#b88e2f]">
                                Interior
                            </button>
                        </div>
                        
                        {/* Grid Skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 1 */}
                            <div className="relative group overflow-hidden cursor-pointer aspect-[4/3] rounded-sm bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <img 
                                    alt="Urban Retreat Project" 
                                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg5pvNF18DnCk-9f7U9U4wNvWinTaKm2pJQstsUW9BYMCs0RCxs_AnyS8_n3BEQPupAujthsIatefWtZUCRVCK50dzggrlMX2K-amWmjEtv6sLwwb26yde0AyCAGk7PJrLb3aiqJrtp4l1ogFZVq1-IrGPIJxI-RApKeCvha3OyeE-opARUGV-taapXMKwDNcuWf4KfKEBiAxf_BeJGCiBOQNHm-KzDRm_TfTn72rqsxP07Pbd1oLGnuCu0s7cPTnd0T994bn6kpw" 
                                />
                                {/* Glass Shine Overlay */}
                                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                
                                {/* Bottom-left content */}
                                <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-20 pr-6">
                                    <p className="text-[10px] font-bold text-[#b88e2f] mb-2 uppercase tracking-[0.2em] font-sans">Residential Spaces</p>
                                    <h3 className="text-lg font-bold font-sans">Urban Retreat: Modern Design Meets Comfort</h3>
                                </div>
                            </div>
                            
                            {/* Card 2 */}
                            <div className="relative group overflow-hidden cursor-pointer aspect-[4/3] rounded-sm bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <img 
                                    alt="Luxurious Loft Project" 
                                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx0WYhvp3Fg-qAzG8tTiuU9bEG6JUIUt4jyFghif6s2AdSoO9v-sPjmdT8o4SkTe8-XyESB9DrltwP95v-hbxg3waspk-S5Ijz9dQo_2GZa7Tdo17CdYyfYEobkyKdSpxi-05MCIYF5VDKlSUBM_fVB0VVBvYBVqCZboa-3WwfeT0-GsIYXHLELbXBUDMTEB12x05O9ZMrhnU8Ob8Jkw8yvmyZcNhcXU0ROrkzJ5I_g5NvL2IQRtuB8n6ofVBZQqodLF-P4uEt3_c" 
                                />
                                {/* Glass Shine Overlay */}
                                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                
                                {/* Bottom-left content */}
                                <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-20 pr-6">
                                    <p className="text-[10px] font-bold text-[#b88e2f] mb-2 uppercase tracking-[0.2em] font-sans">Luxury Homes</p>
                                    <h3 className="text-lg font-bold font-sans">Luxurious Loft: Industrial Chic For Living</h3>
                                </div>
                            </div>
                            
                            {/* Card 3 */}
                            <div className="relative group overflow-hidden cursor-pointer aspect-[4/3] rounded-sm bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <img 
                                    alt="Coastal Vibes Project" 
                                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGrOGWM77BPIrzDfVYlV-ETM6H9pODlflltSzNGrBn7FiOClkSEpXIVjfrG0L2D69nmB2fUlhIuVmvSh_L8WuJc2EmhSfnHmt9Y6U4BdDFrx0Ob2myNQGhp_fO5-Xi9UaaZ67Jd-JcF2VzwZVzeEhPJeIBkdeUuohwyclAMP_W25hvL98pYr-hkQmKMNCK5gicOIwCnsFIUXH6FH5M8VjLw6n9EwWnrrEyTT3GPvdwhoEM7BgL_3cphtSEC5V_n9nt9tJNydJZXd4" 
                                />
                                {/* Glass Shine Overlay */}
                                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                
                                {/* Bottom-left content */}
                                <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-20 pr-6">
                                    <p className="text-[10px] font-bold text-[#b88e2f] mb-2 uppercase tracking-[0.2em] font-sans">Outdoor Living Spaces</p>
                                    <h3 className="text-lg font-bold font-sans">Coastal Vibes: Serenity By The Sea</h3>
                                </div>
                            </div>
                            
                            {/* Card 4 */}
                            <div className="relative group overflow-hidden cursor-pointer aspect-[4/3] rounded-sm bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <img 
                                    alt="Minimalist Haven Project" 
                                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvxP6LYN8Iur3ZeikFmCoGpE8BBv-lFe_rUDxMReJurwAd4opIQZwCF8bKguLDPTeJk4BH2xlHI9wbldpZznSvK5woSnsZOKfSYzZWIpviXjVA95d3KgCemT0d9O5o3c5O4yNs5F3EN0ZA5g-Wku6Mo44oIMQvCnJOR17t1CkM7GpOSbWx55A3NWAeazrIEcbvijnos7mc8fT2zQjw9voaehDMuEG0_KfW0ogHDxBpmYt_ur3TmLnvcKXuw1aNNENdDbJRvS_hyLs" 
                                />
                                {/* Glass Shine Overlay */}
                                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                
                                {/* Bottom-left content */}
                                <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-20 pr-6">
                                    <p className="text-[10px] font-bold text-[#b88e2f] mb-2 uppercase tracking-[0.2em] font-sans">Modern Designs</p>
                                    <h3 className="text-lg font-bold font-sans">Minimalist Haven: Simple, Clean, Inviting Spaces</h3>
                                </div>
                            </div>
                        </div>
                        
                        {/* Load More Action */}
                        <div className="mt-16 text-center">
                            <Link href="/projects" className="inline-block font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#b88e2f] hover:text-[#a37e29] hover:-translate-y-0.5 border-b-2 border-transparent hover:border-[#b88e2f] transition-all pb-1 cursor-pointer">
                                View Complete Portfolio
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            {/* END: LatestProjects Section */}
        </>
    );
}
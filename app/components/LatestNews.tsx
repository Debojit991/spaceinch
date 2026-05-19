"use client";

import ScrollReveal from "./ScrollReveal";

export default function LatestNews() {
    return (
        <>
            {/* BEGIN: LatestNews Section */}
            <section id="blog" className="w-full bg-[#fafafa] py-20" data-purpose="news-section">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <ScrollReveal>
                        {/* Header Layout */}
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-[1px] bg-[#b88e2f]"></span>
                                    <span className="font-sans text-xs font-bold text-[#b88e2f] uppercase tracking-[0.15em]">Latest News</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-sans font-semibold tracking-tight text-gray-900 leading-tight">
                                    <span className="italic font-serif text-[#b88e2f] mr-3">Your guide to</span>
                                    <span className="font-sans font-semibold">inspired interiors</span>
                                </h2>
                            </div>
                            <div className="max-w-md lg:text-right">
                                <p className="font-sans text-base text-gray-500 font-light leading-relaxed">
                                    Explore our latest thoughts, projects, and insights into the world of luxury interior design and architectural curation.
                                </p>
                            </div>
                        </div>
                        
                        {/* Grid Skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <article className="flex flex-col group cursor-pointer h-full">
                                <div className="w-full aspect-[4/3] overflow-hidden mb-6 bg-gray-200 rounded-sm relative">
                                    <img 
                                        alt="Blog Post 1" 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFCFby-sdu-W_y6Flk3l84DkfLLQQ_G9qHWMdfO6StnoF-yJW9-5qPd0dy3BK2K6AsSBCeVJR5rKgSByWtN-aMDE1itpOcL3AOet-Nr5NNfWvUq-eZ74_tbZ8MATnWNW2iQbUBFyMqx_hEcvlHCkd6gvIrBUz3K3Hi7ygz3v6XXDsJd_v3Is3yoIUMLH3IrZ3kQ3MMtiPBwyPiCjj3IwisUAYu3t7TcI22q-_t1sXaHNDUf8mZcrPa8ZZc39wBiZzMzgjvrJvmWgo" 
                                    />
                                    {/* Glass Shine Overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <p className="font-sans text-xs text-gray-400 mb-3 uppercase tracking-widest">Architecture · Oct 12</p>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug font-sans group-hover:text-[#b88e2f] transition-colors">The Art of Negative Space in Modern Homes</h3>
                                    <div className="mt-auto pt-4 flex items-center text-xs font-bold text-[#b88e2f] hover:text-[#a37e29] uppercase tracking-widest transition-colors">
                                        <span className="mr-2">Read More</span>
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                            
                            {/* Card 2 */}
                            <article className="flex flex-col group cursor-pointer h-full">
                                <div className="w-full aspect-[4/3] overflow-hidden mb-6 bg-gray-200 rounded-sm relative">
                                    <img 
                                        alt="Blog Post 2" 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr_nx9wWYfo9FYc70QdAXtgVdkLU2Ai00WulL-mIozAHxojqIXW4_GskzzCoEQgS9gN6jGsBL_m67MjAGaqmehmJlBy4-wycex5q_WxLu8xMxWgxNL1wXHhFKWbGYlk2Gjx4NJm5DWSvkcQCzNZFg8CaaSojOD7OxiAqvA6tqVWONf3K7VSwKH7IIAflf4z2h0g5lcY5uVNzs8zCiSf7EdUu5LpCPlwpUo5FRR8BqzhYNhny4mClWB2X9R5BY3LH6oscxVzaXjhVY" 
                                    />
                                    {/* Glass Shine Overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <p className="font-sans text-xs text-gray-400 mb-3 uppercase tracking-widest">Materials · Sep 28</p>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug font-sans group-hover:text-[#b88e2f] transition-colors">Selecting Timeless Finishes for High-Traffic Areas</h3>
                                    <div className="mt-auto pt-4 flex items-center text-xs font-bold text-[#b88e2f] hover:text-[#a37e29] uppercase tracking-widest transition-colors">
                                        <span className="mr-2">Read More</span>
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                            
                            {/* Card 3 */}
                            <article className="flex flex-col group cursor-pointer h-full">
                                <div className="w-full aspect-[4/3] overflow-hidden mb-6 bg-gray-200 rounded-sm relative">
                                    <img 
                                        alt="Blog Post 3" 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-active:scale-110" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmjOTY-36i3uNw4jEym52cuOX1drnhXvGIz6FMYyQH_QAnPrk7amp2MorSVVmZ324jedqjyJb7Nl2IBATaHC8V4jPZmkt4xntQMefAee5nAHbJZcze_GQIO1espyDLRkzW9bBFp_WH8_feRrsbBCV28rC7T47eLnXTQZffMpH6sI7xFxvkhw40y52WZriWI5f1gdz7w_xHkaNG_FBnBIZFaYY2w0EEiKdgP54t9P9kev9rkwRevh8_YNSsRlxqbkg4XhWxoaaxAQQ" 
                                    />
                                    {/* Glass Shine Overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] group-active:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <p className="font-sans text-xs text-gray-400 mb-3 uppercase tracking-widest">Curation · Sep 15</p>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug font-sans group-hover:text-[#b88e2f] transition-colors">Curating Objects of Meaning in Personal Spaces</h3>
                                    <div className="mt-auto pt-4 flex items-center text-xs font-bold text-[#b88e2f] hover:text-[#a37e29] uppercase tracking-widest transition-colors">
                                        <span className="mr-2">Read More</span>
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        </div>
                        
                        {/* Bottom Button */}
                        <div className="w-full flex justify-center mt-16">
                            <button suppressHydrationWarning={true} className="px-8 py-3.5 bg-[#b88e2f] text-white font-semibold text-xs uppercase tracking-widest hover:bg-[#a37e29] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-none">
                                See All Blogs
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            {/* END: LatestNews Section */}
        </>
    );
}
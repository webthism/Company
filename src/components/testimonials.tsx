export const TestimonialSection = () => {
    return (
        <section className="relative w-full bg-white py-20 md:py-32 px-5 sm:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#2a211c]">
                        What Our Clients Say
                    </h2>
                    <p className="text-[#2a211c]/70 my-4 text-balance text-lg max-w-2xl">
                        Discover why restaurant owners love working with us. See how we've helped them reclaim their margins and build a loyal customer base.
                    </p>
                </div>

                {/* Grid: 1 col → 2 cols → 3 cols */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center mb-16">
                    <div className="shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 transform -rotate-3 hover:-rotate-1 hover:scale-105 origin-center">
                        <img src="/IMG_20260708_142045.jpg" alt="Client Testimonial" className="w-full h-auto object-cover" />
                    </div>
                    <div className="shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 transform rotate-2 hover:rotate-1 hover:scale-105 origin-center mt-4 sm:mt-8">
                        <img src="/IMG_20260708_142108.jpg" alt="Client Testimonial" className="w-full h-auto object-cover" />
                    </div>
                    <div className="shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 transform -rotate-2 hover:rotate-0 hover:scale-105 origin-center sm:-mt-4 lg:mt-2">
                        <img src="/IMG_20260708_142136.jpg" alt="Client Testimonial" className="w-full h-auto object-cover" />
                    </div>
                </div>

                {/* Video Testimonial */}
                <div className="flex justify-center">
                    <div className="shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden border border-[#2a211c]/5 bg-[#2a211c] flex justify-center items-center h-[60vh]">
                        <video 
                            src="/proof-mahesh-DeKnlCIb.mp4" 
                            controls
                            className="h-full w-auto object-contain"
                            preload="metadata"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

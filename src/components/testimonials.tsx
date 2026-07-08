import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const TestimonialSection = () => {
    const testimonials = [
        {
            name: 'Sarah Jenkins',
            role: 'Cafe Owner',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
            content: "Working with this team has completely transformed how our cafe takes online orders. The new system is seamless, and our customers love it.",
        },
        {
            name: 'Michael Chen',
            role: 'Restaurant Manager',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
            content: 'We finally have control over our own customer data. Escaping the high commission fees of delivery apps was the best decision we ever made.',
        },
        {
            name: 'Elena Rodriguez',
            role: 'Head Chef',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
            content: 'Our brand finally stands out. The beautiful website showcases our food exactly how it deserves to be seen, driving more foot traffic than ever.',
        },
    ]

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
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[#fdf6ec] rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#2a211c]/5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
                        >
                            <p className="text-[#2a211c]/80 text-base leading-relaxed flex-grow">
                                "{testimonial.content}"
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                                    <AvatarImage
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                    />
                                    <AvatarFallback className="bg-[#e8792e]/10 text-[#e8792e] font-bold">
                                        {testimonial.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="text-[#2a211c] text-sm font-bold">{testimonial.name}</div>
                                    <div className="text-[#2a211c]/60 text-xs">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

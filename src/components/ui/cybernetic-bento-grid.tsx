"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Database, 
  MessageSquare, 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  Share2, 
  Megaphone, 
  Facebook, 
  Search, 
  Globe, 
  MapPin 
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Reusable BentoItem component
const BentoItem = ({ className, children, icon: Icon, title, description }: { className?: string, children?: React.ReactNode, icon?: any, title?: string, description?: string }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            ref={itemRef} 
            className={cn(
                "group relative overflow-hidden rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-6 md:p-8 transition-all duration-500 hover:border-[#BD9DFF]/30",
                "before:absolute before:inset-0 before:z-30 before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
                "before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(189,157,255,0.1),transparent_80%)]",
                className
            )}
        >
            <div className="relative z-40 flex h-full flex-col">
                <div className="mb-4 md:mb-6 h-10 w-10 md:h-12 md:w-12 rounded-lg md:rounded-xl bg-white/5 flex items-center justify-center text-[#BD9DFF] group-hover:bg-[#BD9DFF] group-hover:text-black transition-all duration-500">
                    <Icon size={20} className="md:hidden" strokeWidth={1} />
                    <Icon size={24} className="hidden md:block" strokeWidth={1} />
                </div>
                <h3 className="text-lg md:text-2xl font-heading font-black tracking-tighter text-white group-hover:text-[#BD9DFF] transition-colors">
                    {title}
                </h3>
                <p className="mt-2 md:mt-4 text-[#A1A1AA] font-sans font-extralight text-xs md:text-sm leading-relaxed group-hover:text-white transition-colors">
                    {description}
                </p>
                {children}
            </div>
            
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-24 -right-24 h-48 w-48 bg-[#BD9DFF]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );
};

// Main Component
export const CyberneticBentoGrid = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[18rem]">
                {/* Big Card 1: Review & Database */}
                <BentoItem 
                    className="sm:col-span-2 sm:row-span-1 md:row-span-2"
                    icon={Star}
                    title="Authority Engine"
                    description="Google Review Campaigns & Database Reactivation. We turn your existing reputation and lead-list into an immediate revenue-generating machine without spending a dollar on new ads."
                >
                    <div className="mt-4 md:mt-auto md:pt-10 grid grid-cols-2 gap-3 md:gap-4">
                        <div className="h-16 md:h-24 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 flex items-center justify-center text-[9px] md:text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold">
                            Review Pulse
                        </div>
                        <div className="h-16 md:h-24 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 flex items-center justify-center text-[9px] md:text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold">
                            Record Sync
                        </div>
                    </div>
                </BentoItem>

                {/* Standard Cards */}
                <BentoItem 
                    icon={MessageSquare}
                    title="Smart Chat"
                    description="24/7 Chatbots & AI Auto-Responding for Google Reviews."
                />
                
                <BentoItem 
                    icon={ShieldCheck}
                    title="Reputation"
                    description="Ongoing monitoring and authority protection."
                />

                <BentoItem 
                    className="md:row-span-2"
                    icon={BarChart3}
                    title="Live Tracking"
                    description="Absolute transparency across your entire conversion funnel."
                >
                    <div className="mt-4 md:mt-auto h-20 md:h-32 w-full bg-gradient-to-t from-[#BD9DFF]/10 to-transparent rounded-xl md:rounded-2xl border-t border-white/5" />
                </BentoItem>

                <BentoItem 
                    icon={Zap}
                    title="Lead Followup"
                    description="Instant missed-call text-back & booking."
                />

                {/* Wide Card: Advertising */}
                <BentoItem 
                    className="sm:col-span-2"
                    icon={Megaphone}
                    title="Advertising Services"
                    description="Full-stack management across Facebook, Google Ads, and Local Service Ads."
                />

                <BentoItem 
                    icon={Facebook}
                    title="Paid Social"
                    description="Strategic Facebook Ad infrastructure."
                />

                {/* Big Card 2: Search & SEO */}
                <BentoItem 
                    className="sm:col-span-2 sm:row-span-1 md:row-span-2"
                    icon={Search}
                    title="Search Domination"
                    description="Strategic SEO & Google Local Optimization. Architecture-driven search engine dominance to ensure you are the first choice in your market."
                />

                <BentoItem 
                    className="sm:col-span-2"
                    icon={Globe}
                    title="Expert PPC"
                    description="Precision-engineered Google Ads campaigns."
                />
                
                <BentoItem 
                    className="sm:col-span-2"
                    icon={Share2}
                    title="Social Presence"
                    description="Automated strategic social media posting to maintain market authority."
                />
                
                <BentoItem 
                    className="sm:col-span-2"
                    icon={MapPin}
                    title="Google Local"
                    description="Command the local map pack and local service ads."
                />
            </div>
        </div>
    );
};

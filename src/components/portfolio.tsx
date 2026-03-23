"use client";

import { motion } from "framer-motion";

export const Portfolio = () => {
  const projects = [
    {
      title: "Neural Dynamics",
      category: "Web App / AI",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPGs0SOrQWfbWqourfmDz55VlSsNm3xQKbTE84_El-bZaMpqpe0RbaizyBsiHlqEols6SsZG_LeWav4bXHYb570c7KsGCn1gjoH9Ud2fqWqfINyaRVIRQAeIiA-5a49iLHYQgLkwg4b9UsLycQ5uvJJqKVWhHNKRe1yB8qxxY0pka3DC7NTuwOJIQBHsPAsL9ieKlt4sCPQlm9RhUf1OkQN2BOrWmNd36Y9mRF7YMFG9Au6q1TV1-Z4v0a74fBV_wHvonTXqxu60g",
      span: "md:col-span-8",
      color: "text-primary",
      result: "Increased conversions by 340%",
    },
    {
      title: "Ethereal",
      category: "Design / Art",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAPeWE9gdlXl6tGYBg8Td2IyzxrDO0p_1UIovg_dN55op_W7Kr1pOulu_X9zOPIFjxOCTAix0O59FkHdijz01vY0pPoffbCXYAQfS8Cbb1XT1M5AdVMS8M87qATfL4OZp89S232y2qZNJVsWD11phWIt1FI8vrLlpiBrbNUpwR1o840EpmHDr6adTqxnwoq1i_mQgnlAm2H7tbYdEuhHrRuPYIb0GxOKJTY1TWVtY9-kJ_utU-vpMRC6uljblPbwaUxpJqh-Is0MU",
      span: "md:col-span-4",
      color: "text-secondary",
      result: "2.4s faster load-time",
    },
  ];

  return (
    <section id="work" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tighter mb-20 leading-tight">
          Case Studies & Selected Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, clipPath: "inset(10% 0 10% 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
              transition={{ duration: 1, ease: "circOut", delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${project.span} group relative overflow-hidden rounded-[2.5rem] bg-card hover:cursor-crosshair`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                <p className={`${project.color} font-sans font-bold text-xs uppercase tracking-[0.2em] mb-4`}>
                  {project.category}
                </p>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 w-fit px-4 py-1 rounded-full mb-4">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{project.result}</span>
                </div>
                <h4 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-white">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

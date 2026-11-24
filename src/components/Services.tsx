
import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_PRICING } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICE_DESCRIPTIONS: Record<string, string> = {
  'service-1': 'Modern, responsive websites designed for all devices and screen sizes.',
  'service-2': 'Personal portfolios that showcase your skills, achievements and work.',
  'service-3': 'Interactive, user-friendly interfaces with modern frontend technologies.',
  'service-4': 'Reliable backend systems, server-side logic and API integrations.',
  'service-5': 'Database setup, integration and efficient data management solutions.',
};

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
        .fromTo(
          titleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
        )
        .fromTo(
          '.service-item',
          { y: 25, opacity: 0, x: -10 },
          {
            y: 0,
            opacity: 1,
            x: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: 'back.out(1.4)',
          },
          '-=0.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full text-gray-100 py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Section Title */}
      <div
        ref={titleRef}
        className="flex flex-col items-center text-center mb-12 z-10"
      >
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img
            src="/assets/icon.svg"
            alt=""
            aria-hidden="true"
            className="w-4 h-4 object-contain"
          />
          What I Do
        </span>

        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
          WHAT I OFFER.
        </h2>

        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      {/* Service Cards */}
      <ul className="grid-blur relative list-none p-0 m-0 w-full max-w-4xl grid grid-cols-1 gap-3 md:flex md:flex-col md:gap-4 z-10">
        {SERVICES_PRICING.map((service, i) => {
          const featured = 'featured' in service && service.featured;

          return (
            <li key={service.id} className="service-item">
              <a
                href="#contact"
                className="glass glass-grid-card group relative flex h-full flex-col items-start gap-3 p-5 md:flex-row md:items-center md:gap-6 md:p-6 rounded-3xl outline-none transition-all duration-300"
              >
                {/* Index */}
                <span className="glass-chip shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center text-xs md:text-sm font-black tabular-nums text-gray-200 group-hover:text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Service Details */}
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-base md:text-xl text-gray-100 group-hover:text-[#ff334b] transition-colors">
                      {service.title}
                    </h3>

                    {featured && (
                      <span className="glass-chip-red inline-block text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white">
                        Specialty
                      </span>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    {SERVICE_DESCRIPTIONS[service.id] ||
                      'Custom development solutions based on your project requirements.'}
                  </p>

                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-red-400 transition-colors">
                    Discuss Your Project
                  </span>
                </div>

                {/* Action Arrow */}
                <span
                  aria-hidden="true"
                  className="glass-chip shrink-0 absolute right-4 top-4 md:static w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center text-gray-300 group-hover:[background-image:linear-gradient(145deg,rgba(255,51,75,0.6),rgba(163,21,21,0.45))] group-hover:border-[rgba(255,130,148,0.45)] group-hover:text-white"
                >
                  <ArrowUpRight
                    className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Custom Quotation Message */}
      <div className="mt-10 w-full max-w-4xl glass rounded-3xl p-6 md:p-8 text-center z-10">
        <h3 className="text-lg md:text-2xl font-black uppercase text-white mb-2">
          Have a Project in Mind?
        </h3>

        <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-xl mx-auto mb-5">
          Every project is different. Let's discuss your ideas, requirements
          and expectations to find the right solution for you.
        </p>

        <a
          href="#contact"
          className="glass-red inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300"
        >
          Get In Touch
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

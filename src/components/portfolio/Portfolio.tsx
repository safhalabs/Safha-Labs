'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/constants/portfolio';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      id="portofolio"
      className={`bg-[#070D18] py-24 transition-all duration-1000 ease-out section-lazy-render relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
      ref={sectionRef}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col min-[960px]:flex-row min-[960px]:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-400 block mb-3">
              Rekam Jejak Proyek
            </span>
            <h2 className="text-[2.25rem] min-[960px]:text-[2.75rem] font-bold text-white m-0 tracking-tight leading-tight">
              Proyek yang Telah Kami Kerjakan
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev && !emblaApi?.internalEngine().options.loop}
              aria-label="Previous Slide"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext && !emblaApi?.internalEngine().options.loop}
              aria-label="Next Slide"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-4 px-4 py-2" ref={emblaRef}>
          <div className="flex gap-6 min-[960px]:gap-8">
            {PORTFOLIO_DATA.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] min-w-0 min-[960px]:flex-[0_0_calc(50%-16px)] flex flex-col"
              >
                <PortfolioCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                selectedIndex === index
                  ? 'w-8 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]'
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

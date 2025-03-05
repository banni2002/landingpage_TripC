"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const partners = [
  { name: "GG", logo: "pn1.png" },
  { name: "GG", logo: "pn2.png" },
  { name: "GG", logo: "pn3.png" },
  { name: "GG", logo: "pn4.png" },
  { name: "GG", logo: "pn5.png" },
  { name: "GG", logo: "pn6.png" },
  { name: "GG", logo: "pn7.png" },
  { name: "GG", logo: "pn8.png" }
];

export default function PartnerShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(8);
  const [totalSlides, setTotalSlides] = useState(Math.ceil(partners.length / itemsPerSlide));
  
  const updateSlidesCount = useCallback(() => {
    let items = 8;
    
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        items = 3;
      } else if (window.innerWidth < 1024) {
        items = 6;
      }
    }
    
    setItemsPerSlide(items);
    setTotalSlides(Math.ceil(partners.length / items));
    setCurrentSlide(0);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    updateSlidesCount();
    window.addEventListener('resize', updateSlidesCount);
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', updateSlidesCount);
    };
  }, [nextSlide, updateSlidesCount]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-12 px-4 md:px-6 lg:px-8 overflow-hidden box-wp mx-auto partners">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          Đối tác đáng tin cậy của TripC
        </motion.h2>
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-4"
            aria-label="Previous slide"
          >
            <img src="/images/ic-carousel-left.svg" alt="Previous" className="h-8 w-8" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              animate={isInView ? { translateX: `-${currentSlide * 100}%` } : {}}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex"
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: slideIndex * 0.2 }}
                    className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6"
                  >
                    {partners
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((partner, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          className="flex items-center justify-center card p-[10px]"
                        >
                          <Image
                            src={`/images/partners/${partner.logo}`}
                            alt={partner.name}
                            width={150}
                            height={150}
                            style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                            className="object-contain"
                          />
                        </motion.div>
                      ))}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-4"
            aria-label="Next slide"
          >
            <img src="/images/ic-carousel-right.svg" alt="Next" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
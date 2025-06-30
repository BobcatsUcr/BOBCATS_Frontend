// components/HeroCarousel.tsx
"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "https://bobcats-backend.onrender.com/Carousel/carousel-1.png",
    title: "AVENTURA AL AIRE LIBRE",
    location: "COSTA RICA",
  },
  {
    image: "https://bobcats-backend.onrender.com/Carousel/carousel-2.png",
    title: "EXPLORACIÓN EN RÍO",
    location: "AGUAS TROPICALES",
  },
  {
    image: "https://bobcats-backend.onrender.com/Carousel/carousel-3.png",
    title: "SENDEROS DE MONTAÑA",
    location: "RUTAS ESCÉNICAS",
  },
];

export default function HeroCarousel() {
  const [, setCurrentSlide] = useState(0); // No usamos currentSlide directamente
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const next = () => {
    if (instanceRef.current) instanceRef.current.next();
  };

  const prev = () => {
    if (instanceRef.current) instanceRef.current.prev();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider w-full h-[60vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="keen-slider__slide relative flex items-center justify-center"
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative z-10 text-white text-center px-6">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-widest">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl mt-2 tracking-[0.3em]">
                {slide.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

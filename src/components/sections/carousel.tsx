"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Welcome to Excellence",
    subtitle: "Discover world-class education and innovation",
    image: "carousel/1.jpg",
    color: "from-blue-600/80 to-blue-900/80",
  },
  {
    id: 2,
    title: "Shape Your Future",
    subtitle: "Join thousands of successful graduates",
    image: "carousel/2.jpg",
    color: "from-purple-600/80 to-purple-900/80",
  },
  {
    id: 3,
    title: "Innovation Hub",
    subtitle: "Leading research and development",
    image: "carousel/3.jpg",
    color: "from-indigo-600/80 to-indigo-900/80",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 15 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          {/* <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`} /> */}

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-balance">
              {/* {slide.title} */}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl text-balance">
              {/* {slide.subtitle} */}
            </p>
            {/* <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Learn More
            </button> */}
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 right-1/2 translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setAutoPlay(false);
            }}
            className={`h-3 rounded-full transition-all ${
              index === current
                ? "bg-white w-8"
                : "bg-white/50 w-3 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  alt: string;
  clickable?: boolean;
  onImageClick?: (index: number) => void;
}

export default function ImageSlider({ images, alt, clickable = false, onImageClick }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    if (clickable && onImageClick) {
      onImageClick(currentIndex);
    }
  };

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <div 
        onClick={handleImageClick}
        className={clickable ? "cursor-pointer" : ""}
      >
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Bild ${currentIndex + 1}`}
          fill
          className="object-cover transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Navigation Buttons - Always visible */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
            aria-label="Vorheriges Bild"
          >
            <svg className="h-6 w-6 text-[#3D2817]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
            aria-label="Nächstes Bild"
          >
            <svg className="h-6 w-6 text-[#3D2817]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "w-6 bg-white" : "bg-white/50"
                }`}
                aria-label={`Gehe zu Bild ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

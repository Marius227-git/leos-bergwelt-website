"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollIcon() {
  const [rotation, setRotation] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 360° Drehung bei 500px Scroll
      setRotation((scrollY / 500) * 360);
      // Verstecke Icon nach 400px scrollen
      setVisible(scrollY < 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce md:hidden">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 backdrop-blur-md transition-all duration-300 hover:scale-110"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <Image
          src="/images/logo/leos_bergwelt_scrolling_symbol.png"
          alt="Scroll down"
          width={60}
          height={60}
          className="h-14 w-14"
        />
      </div>
      <p className="mt-3 text-center text-xs font-medium uppercase tracking-widest text-white/90">
        Scroll
      </p>
    </div>
  );
}

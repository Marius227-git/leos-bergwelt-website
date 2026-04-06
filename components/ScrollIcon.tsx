"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollIcon() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Smooth 360° rotation
      setRotation((scrollY / 500) * 360);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center py-8 md:hidden lg:hidden">
      <div
        className="flex h-16 w-16 items-center justify-center transition-transform duration-100 ease-linear"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <Image
          src="/images/logo/leos_bergwelt_scrolling_symbol.png"
          alt="Scroll Symbol"
          width={64}
          height={64}
          className="h-16 w-16"
        />
      </div>
    </div>
  );
}

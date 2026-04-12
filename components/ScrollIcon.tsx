"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ScrollIcon() {
  const [rotation, setRotation] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    let lastTime = Date.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      const deltaScroll = currentScrollY - lastScrollY.current;

      // Calculate velocity based on scroll distance
      const newVelocity = (deltaScroll / deltaTime) * 10;
      setVelocity(newVelocity);

      lastScrollY.current = currentScrollY;
      lastTime = currentTime;
    };

    // Smooth deceleration animation
    const animate = () => {
      setRotation((prev) => prev + velocity);
      setVelocity((prev) => prev * 0.95); // Smooth deceleration

      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [velocity]);

  return (
    <div className="flex justify-center pb-8 pt-4 md:pb-12 hidden">
      <div className="relative h-12 w-12">
        <Image
          src="/images/logo/leos_bergwelt_scrolling_symbol_neu.png"
          alt=""
          fill
          className="object-contain"
          style={{
            transform: `rotate(${rotation}deg)`,
            willChange: "transform",
          }}
          sizes="48px"
          priority
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/Oberstdorf_Allgäu_Oberallgäu_Ortsteile_Sommer_Wandern.jpg"
          alt="Leos Bergwelt - Wandern im Oberallgäu bei Oberstdorf"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center md:px-10">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-white/95">
          Leos Bergwelt · Tiefenbach bei Oberstdorf
        </p>

        <h1 className="mx-auto max-w-5xl font-serif text-5xl font-bold leading-[1.1] text-white md:text-7xl lg:text-8xl">
          Wo die Berge rufen und Ruhe einkehrt
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/95 md:text-xl">
          Drei liebevoll gestaltete Zimmer, ruhige alpine Atmosphäre und der
          perfekte Ausgangspunkt für deinen Urlaub im Oberallgäu.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/zimmer"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-bold text-[#3D2817] transition-all hover:scale-105 hover:bg-[#F5F3EF]"
          >
            Zimmer entdecken
          </Link>
          <Link
            href="/#buchung"
            className="rounded-full border-2 border-white px-8 py-4 text-center text-sm font-bold text-white transition-all hover:scale-105 hover:bg-white/15"
          >
            Jetzt buchen
          </Link>
        </div>
      </div>
    </section>
  );
}

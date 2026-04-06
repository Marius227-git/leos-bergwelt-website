import Image from "next/image";
import Link from "next/link";

export default function RegionSection() {
  const activities = [
    {
      title: "Wandern",
      description: "Allgäuer Höhenwege & Breitachklamm",
    },
    {
      title: "Skifahren",
      description: "Fellhorn, Ifen, Söllereck & Nebelhorn",
    },
    {
      title: "Entspannen",
      description: "Gemütliches Zimmer nahe der Breitach",
    },
  ];

  return (
    <section id="region" className="relative overflow-hidden bg-stone-900 py-32 md:py-40">
      {/* Hintergrundbild - Mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/images/section_activities/oberstdorf_mobil_leos_bergwelt_ferienwohnung.webp"
          alt="Oberallgäu Region"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>
      
      {/* Hintergrundbild - Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/section_activities/oberstdorf_desktop_leos_bergwelt_ferienwohnung.webp"
          alt="Oberallgäu Region"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Urlaub im Oberallgäu
          </p>
          <h2 className="mt-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Berge, Seen und echte Ruhe direkt vor der Tür
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/90 md:text-xl">
            Wandern, Skifahren, Natur erleben und gleichzeitig modern und
            entspannt wohnen – genau dafür ist Leos Bergwelt gedacht.
          </p>

          <div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
            {activities.map((item) => (
              <Link
                key={item.title}
                href="/allgaeu-erleben"
                className="group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/30 active:bg-white/30 md:active:bg-white/10"
              >
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#F2F7E4] group-active:text-[#F2F7E4] md:group-active:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

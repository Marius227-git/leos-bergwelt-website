import Image from "next/image";

export default function RegionSection() {
  return (
    <section id="region" className="relative overflow-hidden bg-stone-900 py-32 md:py-40">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/region/Oberstdorf_Allgäu_Oberallgäu_Ortsteile_Sommer_Hoch_Hinaus_Tandemflüge.webp"
          alt="Oberallgäu Region"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Urlaub im Oberallgäu
          </p>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Berge, Seen und echte Ruhe direkt vor der Tür
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/90 md:text-xl">
            Wandern, Skifahren, Natur erleben und gleichzeitig modern und
            entspannt wohnen – genau dafür ist Leos Bergwelt gedacht.
          </p>

          <div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
            {[
              {
                title: "Wandern",
                description: "Allgäuer Höhenwege & Breitachklamm",
              },
              {
                title: "Skifahren",
                description: "Fellhorn, Ifen & Söllereck",
              },
              {
                title: "Entspannen",
                description: "Balkon mit Bergblick",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

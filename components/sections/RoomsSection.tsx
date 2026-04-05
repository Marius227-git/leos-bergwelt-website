import Image from "next/image";

const rooms = [
  {
    title: "Zimmer 1",
    text: "Hell, ruhig und mit modernem alpinem Charakter gestaltet.",
    image: "/images/rooms/IMG_9586.webp",
    features: ["Doppelbett", "Bergblick", "Natürliche Materialien"],
  },
  {
    title: "Zimmer 2",
    text: "Gemütlicher Rückzugsort für Paare und aktive Urlaubstage.",
    image: "/images/rooms/IMG_9605.webp",
    features: ["Doppelbett", "Gemütlich", "Modern"],
  },
  {
    title: "Zimmer 3",
    text: "Klar, hochwertig und ideal als Ausgangspunkt für Bergabenteuer.",
    image: "/images/rooms/IMG_9633.webp",
    features: ["Doppelbett", "Hochwertig", "Ruhig"],
  },
];

export default function RoomsSection() {
  return (
    <section id="zimmer" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            Unsere Zimmer
          </p>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 md:text-5xl">
            Drei Zimmer für entspannte Tage im Allgäu
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
            Jedes Zimmer individuell gestaltet mit viel Liebe zum Detail und
            natürlichen Materialien.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {rooms.map((room, index) => (
            <article
              key={room.title}
              className="group relative overflow-hidden rounded-2xl bg-stone-50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={`${room.title} in Leos Bergwelt`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-900">
                  {room.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {room.text}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {room.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full bg-stone-200 px-3 py-1 text-xs font-medium text-stone-700"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

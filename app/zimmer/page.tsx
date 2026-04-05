import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsere Zimmer - Leos Bergwelt",
  description:
    "Drei liebevoll gestaltete Zimmer im Oberallgäu: Enzian, Steinbock und Zitronenfalter. Jedes Zimmer individuell eingerichtet mit natürlichen Materialien.",
};

const rooms = [
  {
    name: "Enzian",
    slug: "enzian",
    image: "/images/room_enzian/IMG_9605.JPG",
    description: "Gemütliches Doppelzimmer mit alpinem Charme",
    features: ["Doppelbett", "Natürliche Materialien", "Gemütlich"],
  },
  {
    name: "Steinbock",
    slug: "steinbock",
    image: "/images/room_steinbock/IMG_9619.JPG",
    description: "Modernes Zimmer mit Balkon und Bergblick",
    features: ["Doppelbett", "Balkon", "Bergblick"],
  },
  {
    name: "Zitronenfalter",
    slug: "zitronenfalter",
    image: "/images/room_zitronenfalter/IMG_9637.JPG",
    description: "Helles Zimmer mit Balkon und viel Licht",
    features: ["Doppelbett", "Balkon", "Hell & Freundlich"],
  },
];

export default function ZimmerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#3D2817]">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hallway/IMG_9666.JPG"
            alt="Leos Bergwelt Flur"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
          <h1 className="font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Unsere Zimmer
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Drei individuell gestaltete Zimmer mit viel Liebe zum Detail und
            natürlichen Materialien
          </p>
        </div>
      </section>

      {/* Zimmer Grid */}
      <section className="bg-[#FAF8F5] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-3">
            {rooms.map((room) => (
              <Link
                key={room.slug}
                href={`/zimmer/${room.slug}`}
                className="group"
              >
                <article className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={`Zimmer ${room.name} - Leos Bergwelt`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-bold text-[#3D2817]">
                      {room.name}
                    </h2>
                    <p className="mt-3 text-[#8B8B5C]">{room.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {room.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-full bg-[#F5F3EF] px-3 py-1 text-xs font-medium text-[#3D2817]"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#2B7A9B]">
                      Details ansehen
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Gemeinschaftsbereiche */}
          <div className="mt-20">
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-[#3D2817] md:text-4xl">
              Gemeinschaftsbereiche
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-[#3D2817]">
                  Küche
                </h3>
                <p className="mt-3 text-[#8B8B5C]">
                  Voll ausgestattete Gemeinschaftsküche mit allem, was du
                  brauchst
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-[#3D2817]">
                  Badezimmer
                </h3>
                <p className="mt-3 text-[#8B8B5C]">
                  Modernes Gemeinschaftsbad mit Dusche und Badewanne
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-[#3D2817]">
                  Gäste-WC
                </h3>
                <p className="mt-3 text-[#8B8B5C]">
                  Separates WC im Erdgeschoss für zusätzlichen Komfort
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

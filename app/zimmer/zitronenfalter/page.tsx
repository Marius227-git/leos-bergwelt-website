import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zimmer Zitronenfalter - Leos Bergwelt",
  description:
    "Helles Doppelzimmer Zitronenfalter mit Balkon und viel Licht. Freundlich und einladend im Oberallgäu.",
};

const images = [
  "/images/room_zitronenfalter/IMG_9637.JPG",
  "/images/room_zitronenfalter/IMG_9630.JPG",
  "/images/room_zitronenfalter/IMG_9631.JPG",
  "/images/room_zitronenfalter/IMG_9638.JPG",
  "/images/room_zitronenfalter/IMG_9640.JPG",
  "/images/room_zitronenfalter/IMG_9641.JPG",
];

export default function ZitronenfalterPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-[#3D2817]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/room_zitronenfalter/IMG_9637.JPG"
            alt="Zimmer Zitronenfalter - Leos Bergwelt hell und freundlich"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 py-16 md:px-10">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">
              Zimmer Zitronenfalter
            </h1>
            <p className="mt-4 text-xl text-white/90">
              Hell · Balkon · Freundlich
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#3D2817]">
                Lichtdurchflutet und einladend
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#8B8B5C]">
                Das Zimmer Zitronenfalter besticht durch seine helle und
                freundliche Atmosphäre. Viel natürliches Licht und der Zugang
                zum Balkon machen dieses Zimmer zu einem besonderen Ort.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#8B8B5C]">
                Genieße die Morgensonne auf dem Balkon mit Blick auf das
                Söllereck. Der Balkon wird mit dem Zimmer Steinbock geteilt und
                bietet Platz zum Entspannen.
              </p>

              <div className="mt-8">
                <h3 className="font-serif text-2xl font-bold text-[#3D2817]">
                  Ausstattung
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Doppelbett",
                    "Balkon (geteilt)",
                    "Viel Tageslicht",
                    "Helle Einrichtung",
                    "WLAN",
                    "Gemeinschaftsküche",
                    "Gemeinschaftsbad",
                    "Gäste-WC",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-[#2B7A9B]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#3D2817]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <Link
                  href="/#buchung"
                  className="inline-block rounded-full bg-[#2B7A9B] px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-[#236580]"
                >
                  Jetzt buchen
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={image}
                    alt={`Zimmer Zitronenfalter - Ansicht ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-[#3D2817]">
            Weitere Zimmer
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Link
              href="/zimmer/enzian"
              className="group rounded-2xl bg-[#F5F3EF] p-6 transition-all hover:shadow-xl"
            >
              <h3 className="font-serif text-2xl font-bold text-[#3D2817]">
                Enzian
              </h3>
              <p className="mt-2 text-[#8B8B5C]">
                Gemütliches Zimmer mit alpinem Charme
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2B7A9B]">
                Details ansehen →
              </span>
            </Link>
            <Link
              href="/zimmer/steinbock"
              className="group rounded-2xl bg-[#F5F3EF] p-6 transition-all hover:shadow-xl"
            >
              <h3 className="font-serif text-2xl font-bold text-[#3D2817]">
                Steinbock
              </h3>
              <p className="mt-2 text-[#8B8B5C]">
                Modernes Zimmer mit Balkon und Bergblick
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2B7A9B]">
                Details ansehen →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

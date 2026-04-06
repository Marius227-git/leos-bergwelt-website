import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import ImageSlider from "@/components/ImageSlider";
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
    description: "Preislich am attraktivsten - ohne auf Komfort, Stil und liebevolle Details zu verzichten.",
    images: [
      "/images/rooms_slideshows/slideshow_enzian/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_enzian_1.webp",
      "/images/rooms_slideshows/slideshow_enzian/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_enzian_2.webp",
      "/images/rooms_slideshows/slideshow_enzian/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_enzian_3.webp",
    ],
  },
  {
    name: "Zitronenfalter",
    slug: "zitronenfalter",
    description: "Stilvolles Zimmer mit Zugang zum Balkon und Blick auf die Berge.",
    images: [
      "/images/rooms_slideshows/slideshow_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_zitronenfalter_1.webp",
      "/images/rooms_slideshows/slideshow_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_zitronenfalter_2.webp",
      "/images/rooms_slideshows/slideshow_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_zitronenfalter_3.webp",
    ],
  },
  {
    name: "Steinbock",
    slug: "steinbock",
    description: "Gemütliches Zimmer mit Balkonzugang und schönem Bergblick.",
    images: [
      "/images/rooms_slideshows/slideshow_steinbock/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_steinbock_1.webp",
      "/images/rooms_slideshows/slideshow_steinbock/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_steinbock_2.webp",
      "/images/rooms_slideshows/slideshow_steinbock/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_steinbock_3.webp",
    ],
  },
];

export default function ZimmerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9faed]">
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
        <section className="bg-[#f9faed] py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-12 md:grid-cols-3">
              {rooms.map((room) => (
                <article key={room.slug} className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <ImageSlider images={room.images} alt={`Zimmer ${room.name}`} />
                  <div className="p-6">
                    <Link href={`/zimmer/${room.slug}`}>
                      <h3 className="font-serif text-2xl font-bold text-[#3D2817] transition-colors hover:text-[#2B7A9B] cursor-pointer">
                        {room.name}
                      </h3>
                    </Link>
                    <p className="mt-3 text-[#8B8B5C]">{room.description}</p>
                    <Link href={`/zimmer/${room.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F2F7E4] bg-[#F2F7E4] px-4 py-2 rounded-full transition-colors hover:bg-[#e5efd5]">
                      <span className="text-[#3D2817]">Details ansehen</span>
                      <svg
                        className="h-4 w-4 text-[#3D2817]"
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
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Gemeinschaftsbereiche */}
            <div className="mt-20">
              <h2 className="mb-10 text-center font-serif text-3xl font-bold text-[#3D2817] md:text-4xl">
                Gemeinschaftsbereiche
              </h2>
              <div className="grid gap-8 md:grid-cols-4">
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
                    Modernes Gemeinschaftsbad mit WC und Dusche
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <h3 className="font-serif text-xl font-bold text-[#3D2817]">
                    Zusätzliches Gäste-WC
                  </h3>
                  <p className="mt-3 text-[#8B8B5C]">
                    Weiteres Gäste-WC im Erdgeschoss für zusätzlichen Komfort
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <h3 className="font-serif text-xl font-bold text-[#3D2817]">
                    Balkon
                  </h3>
                  <p className="mt-3 text-[#8B8B5C]">
                    Zimmer Zitronenfalter und Steinbock teilen sich einen Balkon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

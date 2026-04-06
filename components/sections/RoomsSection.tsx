import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";

const rooms = [
  {
    name: "Enzian",
    slug: "enzian",
    description:
      "Preislich am attraktivsten - ohne auf Komfort, Stil und liebevolle Details zu verzichten.",
    images: [
      "/images/rooms_slideshows/slideshow_enzian/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_enzian_1.webp",
      "/images/rooms_slideshows/slideshow_enzian/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_enzian_2.webp",
      "/images/rooms_slideshows/slideshow_enzian/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_enzian_3.webp",
    ],
  },
  {
    name: "Zitronenfalter",
    slug: "zitronenfalter",
    description:
      "Stilvolles Zimmer mit Zugang zum Balkon und Blick auf die Berge.",
    images: [
      "/images/rooms_slideshows/slideshow_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_zitronenfalter_1.webp",
      "/images/rooms_slideshows/slideshow_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_zitronenfalter_2.webp",
      "/images/rooms_slideshows/slideshow_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_zitronenfalter_3.webp",
    ],
  },
  {
    name: "Steinbock",
    slug: "steinbock",
    description:
      "Gemütliches Zimmer mit Balkonzugang und schönem Bergblick.",
    images: [
      "/images/rooms_slideshows/slideshow_steinbock/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_steinbock_1.webp",
      "/images/rooms_slideshows/slideshow_steinbock/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_steinbock_2.webp",
      "/images/rooms_slideshows/slideshow_steinbock/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_steinbock_3.webp",
    ],
  },
];

export default function RoomsSection() {
  return (
    <section id="zimmer" className="bg-[#f5eac6] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8B8B5C]">
            Unsere Zimmer
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-[#3D2817] md:text-5xl">
            Drei Zimmer. Ein Zuhause auf Zeit.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              href={`/zimmer/${room.slug}`}
              className="group"
            >
              <article className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <ImageSlider images={room.images} alt={`Zimmer ${room.name}`} />
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#3D2817]">
                    {room.name}
                  </h3>
                  <p className="mt-3 text-[#8B8B5C]">{room.description}</p>
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
      </div>
    </section>
  );
}

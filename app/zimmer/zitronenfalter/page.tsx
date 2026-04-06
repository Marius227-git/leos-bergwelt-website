import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import ImageSlider from "@/components/ImageSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zimmer Zitronenfalter | Leos Bergwelt",
  description: "Preislich am attraktivsten - ohne auf Komfort, Stil und liebevolle Details zu verzichten. Gemütliches Zimmer in Tiefenbach bei Oberstdorf.",
};

const highlightImages = [
  "/images/room_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_zitronenfalter_1.webp",
  "/images/room_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_zitronenfalter_2.webp",
  "/images/room_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_zitronenfalter_3.webp",
  "/images/room_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_zitronenfalter_4.webp",
];

const galleryImages = Array.from({ length: 12 }, (_, i) => 
  `/images/room_zitronenfalter/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_zitronenfalter_${i + 5}.webp`
);

const otherRooms = [
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

export default function ZitronenfalterPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5eac6] pt-24">
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh]">
          <Image
            src={highlightImages[0]}
            alt="Zimmer Zitronenfalter"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-10">
            <h1 className="font-serif text-4xl font-bold md:text-6xl">Zimmer Zitronenfalter</h1>
            <p className="mt-2 text-lg md:text-xl">Gemütlich, individuell & nachhaltig</p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Text */}
            <div className="space-y-6 text-[#3D2817]">
              <p className="text-lg leading-relaxed">
                Ideal für Wanderer, Skifahrer & Naturfans! In Tiefenbach bei Oberstdorf vermieten wir eine komplette Etage mit 3 gemütlichen Doppelzimmern – perfekt für Freunde oder Paare. Jedes Zimmer hat ein komfortables Doppelbett. Eine Gemeinschaftsküche und ein gemeinsam genutztes Bad sowie ein zusätzliches Gäste-WC stehen euch zur Verfügung. Ruhige Lage nahe der Breitachklamm – perfekt als Ausgangspunkt für Bergtouren und Skitage!
              </p>

              <div>
                <h2 className="font-serif text-2xl font-bold">🦋 Zimmer Zitronenfalter – hell, gemütlich gemütlich, individuell & nachhaltig mit Bergblick</h2>
                <p className="mt-3 leading-relaxed">
                  Unser Zimmer Zitronenfalter vereint Natürlichkeit mit Komfort: Das Doppelbett und die Möbel wurden liebevoll aus recyceltem Holz selbst gebaut – jedes Stück ist ein Unikat mit Charakter.
                </p>
              </div>

              <p className="leading-relaxed">
                📺 Für entspannte Abende gibt's einen Flachbild-TV mit Netflix, dazu eine kuschelige Sitzecke, perfekt zum Lesen oder Abschalten.
              </p>

              <p className="leading-relaxed">
                💡 Plissees sorgen für angenehme Verdunkelung, und dank schnellem Glasfaser-WLAN bleibst du auch digital bestens verbunden.
              </p>

              <p className="leading-relaxed">
                🧥 Eine Garderobe bietet Platz für Jacken, Wanderschuhe & Co. Ein Ort zum Wohlfühlen – natürlich, schlicht und ganz entspannt.
              </p>

              <p className="leading-relaxed">
                🅿️ Kostenlose Parkplätze befinden sich 2-4 Gehminuten entfernt.
              </p>

              <p className="leading-relaxed">
                🔓 Der Zugang zum Haus erfolgt bequem über ein Codeschloss – den Zugangscode erhaltet ihr rechtzeitig vor eurer Anreise.
              </p>

              <div className="mt-8">
                <h3 className="font-serif text-xl font-bold">Während deines Aufenthaltes</h3>
                <p className="mt-3 leading-relaxed">
                  Wir sind selbst leidenschaftliche Outdoor-Fans und kennen die schönsten Touren, Gipfel und Einkehrmöglichkeiten der Region – egal ob Wandern, Skifahren oder einfach Natur genießen.
                </p>
                <p className="mt-3 leading-relaxed">
                  Gerne geben wir euch persönliche Tipps für eure Ausflüge oder helfen bei der Planung.
                </p>
                <p className="mt-3 leading-relaxed">
                  Ihr erreicht uns jederzeit per Nachricht, Anruf oder persönlich vor Ort – wir sind da, wenn ihr uns braucht, lassen euch aber gleichzeitig euren Freiraum.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-xl font-bold">Weitere wichtige Hinweise</h3>
                <p className="mt-3 leading-relaxed">
                  Für die Anmeldung bei Oberstdorf brauchen wir von allen Gästen die vollen Namen und Geburtsdaten sowie eine Adresse und eine Mailadresse. Die Informationen können uns im Airbnb Chat geschickt werden.
                </p>
                <p className="mt-3 leading-relaxed">
                  Es fällt pro Tag eine Kurtaxe von 4,15€ pro Person pro Nacht an.
                </p>
                <p className="mt-3 leading-relaxed">
                  Unsere Gäste erhalten den Oberstdorf Pass per Email. Dieser inkludiert kostenloses Busfahren und viele Vergünstigungen auf Attraktionen.
                </p>
              </div>

              <Link
                href="/#buchung"
                className="mt-8 inline-block rounded-full bg-[#2B7A9B] px-8 py-4 font-semibold text-white transition-all hover:bg-[#236580]"
              >
                Jetzt buchen
              </Link>
            </div>

            {/* Images */}
            <div>
              <ImageLightbox images={highlightImages} alt="Zimmer Zitronenfalter" />
            </div>
          </div>

          {/* Gallery Slider */}
          <div className="mt-16">
            <h3 className="mb-6 font-serif text-2xl font-bold text-[#3D2817]">Weitere Bilder</h3>
            <ImageSlider images={galleryImages} alt="Zimmer Zitronenfalter Galerie" />
          </div>

          {/* Other Rooms */}
          <div className="mt-24">
            <h3 className="mb-12 text-center font-serif text-3xl font-bold text-[#3D2817]">Weitere Zimmer</h3>
            <div className="grid gap-12 md:grid-cols-2">
              {otherRooms.map((room) => (
                <Link key={room.slug} href={`/zimmer/${room.slug}`} className="group">
                  <article className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <ImageSlider images={room.images} alt={`Zimmer ${room.name}`} />
                    <div className="p-6">
                      <h4 className="font-serif text-2xl font-bold text-[#3D2817]">{room.name}</h4>
                      <p className="mt-3 text-[#8B8B5C]">{room.description}</p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#2B7A9B]">
                        Details ansehen
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import RoomGallerySlider from "@/components/RoomGallerySlider";
import RoomBookingWidget from "@/components/RoomBookingWidget";
import ImageSlider from "@/components/ImageSlider";

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
    name: "Enzian",
    slug: "enzian",
    description: "Preislich am attraktivsten - ohne auf Komfort und Stil zu verzichten",
    images: [
      "/images/rooms_slideshows/slideshow_enzian/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_enzian_1.webp",
      "/images/rooms_slideshows/slideshow_enzian/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_enzian_2.webp",
      "/images/rooms_slideshows/slideshow_enzian/leos_bergwelt_ferienwohnung_oberstdorf_tiefenbach_slider_enzian_3.webp",
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const allImages = [...highlightImages, ...galleryImages];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const goToNext = () => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9faed]">
        {/* Hero Image */}
        <section className="relative h-[60vh] md:h-[70vh]">
          <Image
            src={highlightImages[0]}
            alt="Zimmer Zitronenfalter - Leos Bergwelt"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="mx-auto max-w-7xl">
              <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Zimmer Zitronenfalter
              </h1>
              <p className="mt-4 text-lg text-white/90 md:text-xl">
                Stilvolles Zimmer mit Zugang zum Balkon und Blick auf die Berge
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Text */}
              <div className="text-[#3D2817]">
                <p className="leading-relaxed">
                  Ideal für Wanderer, Skifahrer & Naturfans! In Tiefenbach bei Oberstdorf vermieten wir eine komplette Etage mit 3 gemütlichen Doppelzimmern – perfekt für Freunde oder Paare. Jedes Zimmer hat ein komfortables Doppelbett. Eine Gemeinschaftsküche und ein gemeinsam genutztes Bad sowie ein zusätzliches Gäste-WC stehen euch zur Verfügung. Ruhige Lage nahe der Breitachklamm – perfekt als Ausgangspunkt für Bergtouren und Skitage!
                </p>

                <p className="mt-6 leading-relaxed">
                  🦋 <strong>Zimmer Zitronenfalter – hell, gemütlich & mit Bergblick</strong> Unser Zimmer Zitronenfalter ist perfekt für alle, die Natur und Komfort schätzen. Das Doppelbett und die Möbel wurden liebevoll aus recyceltem Holz selbst gebaut – nachhaltig, schlicht und voller Charme.
                </p>

                <p className="mt-4 leading-relaxed">
                  📺 Mit Flachbild-TV & Netflix, einer gemütlichen Leseecke, Plissees zum Abdunkeln und schnellem Glasfaser-WLAN ist alles da, was du brauchst, um dich wie zuhause zu fühlen.
                </p>

                <p className="mt-4 leading-relaxed">
                  🧥 Eine Garderobe bietet Platz für deine Outdoor-Ausrüstung.
                </p>

                <p className="mt-4 leading-relaxed">
                  🌄 <strong>Das Beste:</strong> Du hast Zugang zum großen, gemeinsam genutzten Balkon mit Blick aufs Söllereck – perfekt, um das Alpenglühen bei Sonnenuntergang zu erleben, wenn die Berggipfel in warmem Rot leuchten und der Tag langsam zur Ruhe kommt.
                </p>

                <p className="mt-4 leading-relaxed">
                  🅿️ Kostenlose Parkplätze befinden sich 2-4 Gehminuten entfernt.
                </p>

                <p className="mt-4 leading-relaxed">
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

                <div className="mt-8 text-center">
                  <Link
                    href="https://www.oberstdorf.de/partner/leonie-pinn.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-[#2B7A9B] px-8 py-4 font-semibold text-white transition-all hover:bg-[#236580] hover:scale-105"
                  >
                    Jetzt buchen
                  </Link>
                </div>
              </div>

              {/* Highlight Images Grid */}
              <div className="grid grid-cols-1 gap-4">
                {highlightImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={image}
                      alt={`Zimmer Zitronenfalter - Bild ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <svg className="h-12 w-12 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Slider */}
            <div className="mt-16">
              <h3 className="mb-6 font-serif text-2xl font-bold text-[#3D2817]">Weitere Bilder</h3>
              <RoomGallerySlider 
                images={galleryImages} 
                alt="Zimmer Zitronenfalter Galerie"
                onImageClick={(index) => openLightbox(highlightImages.length + index)}
              />
              
              {/* Booking Button */}
              <div className="mt-8 text-center">
                <Link
                  href="https://www.oberstdorf.de/partner/leonie-pinn.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-[#2B7A9B] px-10 py-4 font-semibold text-white transition-all hover:bg-[#236580] hover:scale-105"
                >
                  Jetzt buchen
                </Link>
              </div>
            </div>

            {/* Other Rooms */}
            <div className="mt-24">
              <h3 className="mb-12 text-center font-serif text-3xl font-bold text-[#3D2817]">Weitere Zimmer</h3>
              <div className="grid gap-12 md:grid-cols-2">
                {otherRooms.map((room) => (
                  <article key={room.slug} className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <ImageSlider images={room.images} alt={`Zimmer ${room.name}`} />
                    <div className="p-6">
                      <Link href={`/zimmer/${room.slug}`}>
                        <h4 className="cursor-pointer font-serif text-2xl font-bold text-[#3D2817] transition-colors hover:text-[#2B7A9B]">
                          {room.name}
                        </h4>
                      </Link>
                      <p className="mt-3 text-[#8B8B5C] leading-relaxed">{room.description}</p>
                      <Link href={`/zimmer/${room.slug}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F2F7E4] px-6 py-3 text-sm font-semibold transition-all hover:bg-[#2B7A9B] hover:scale-105 group">
                        <span className="text-[#3D2817] group-hover:text-white transition-colors">Details ansehen</span>
                        <svg className="h-4 w-4 text-[#3D2817] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95" onClick={closeLightbox}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute right-4 top-4 z-[101] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Schließen"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative h-[90vh] w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={allImages[lightboxIndex]}
              alt={`Zimmer Zitronenfalter - Bild ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Vorheriges Bild"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Nächstes Bild"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
                {lightboxIndex + 1} / {allImages.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

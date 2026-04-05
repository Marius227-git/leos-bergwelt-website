import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgäu Erleben - Leos Bergwelt",
  description:
    "Entdecke das Oberallgäu: Wandern, Skifahren, Breitachklamm und vieles mehr. Dein perfekter Ausgangspunkt in Tiefenbach bei Oberstdorf.",
};

const activities = [
  {
    title: "Wandern & Bergtouren",
    description:
      "Die Allgäuer Höhenwege, das Nebelhorn und unzählige Wanderwege direkt vor der Haustür. Von gemütlichen Spaziergängen bis zu anspruchsvollen Gipfeltouren.",
    image: "/images/allgaeu_erleben/Oberstdorf_Nebelhorn_Wandern_Wanderwege_Tiefenbach.jpg",
    highlights: ["Nebelhorn", "Allgäuer Höhenwege", "Breitachklamm", "Rubihorn"],
  },
  {
    title: "Skifahren & Wintersport",
    description:
      "Erstklassige Skigebiete wie Fellhorn, Ifen und Söllereck in unmittelbarer Nähe. Perfekte Bedingungen für Skifahrer und Snowboarder aller Könnerstufen.",
    image: "/images/allgaeu_erleben/Skifahren_Oberstdorf_Kleinwalsertal_Fellhorn_Ifen.jpg",
    highlights: ["Fellhorn", "Ifen", "Söllereck", "Langlauf"],
  },
  {
    title: "Breitachklamm",
    description:
      "Die tiefste Felsenschlucht Mitteleuropas - ein beeindruckendes Naturschauspiel nur wenige Minuten entfernt. Im Winter verwandelt sie sich in eine märchenhafte Eiswelt.",
    image: "/images/allgaeu_erleben/Breitachklamm_Tiefenbach_Weidach_Preise_Unterkunft_Ferienwohnung.jpg",
    highlights: ["Ganzjährig geöffnet", "5 Min. entfernt", "Einzigartig"],
  },
  {
    title: "Radfahren & E-Bike",
    description:
      "Erkunde das Allgäu auf zwei Rädern. Vom gemütlichen Radweg durchs Lochbachtal bis zu anspruchsvollen Mountainbike-Touren in den Bergen.",
    image: "/images/allgaeu_erleben/Lochbachtal_Oberstdorf_Tiefenbach_Bike_E-Bike-Fahrradfahren_Touren.jpg",
    highlights: ["Lochbachtal", "Mountainbike-Trails", "E-Bike-Verleih"],
  },
  {
    title: "Paragliding & Tandemflüge",
    description:
      "Erlebe das Allgäu aus der Vogelperspektive! Tandemflüge vom Nebelhorn oder Söllereck bieten unvergessliche Ausblicke auf die Bergwelt.",
    image: "/images/allgaeu_erleben/Oberstdorf_Allgäu_Oberallgäu_Ortsteile_Sommer_Hoch_Hinaus_Tandemflüge.jpg",
    highlights: ["Tandemflüge", "Flugschule", "Traumhafte Aussicht"],
  },
];

export default function AllgaeuErlebenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#3D2817]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/allgaeu_erleben/Oberstdorf_Nebelhorn_Wandern_Wanderwege_Tiefenbach.jpg"
            alt="Allgäu erleben - Wandern im Oberallgäu"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
          <h1 className="font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Allgäu Erleben
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/95 md:text-xl">
            Dein Ausgangspunkt für unvergessliche Abenteuer in den Bergen
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 className="font-serif text-3xl font-bold text-[#3D2817] md:text-4xl">
            Dein Ausgangspunkt für echte Bergmomente
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#8B8B5C]">
            Tiefenbach bei Oberstdorf ist der perfekte Ort für deinen Urlaub im
            Oberallgäu. Ob Wandern, Skifahren oder einfach die Natur genießen –
            hier beginnt das Abenteuer direkt vor der Haustür.
          </p>
        </div>
      </section>

      {/* Aktivitäten */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="space-y-20">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="font-serif text-3xl font-bold text-[#3D2817]">
                    {activity.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-[#8B8B5C]">
                    {activity.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {activity.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
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
                        <span className="text-[#3D2817]">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3D2817] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Bereit für dein Abenteuer?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Buche jetzt dein Zimmer und erlebe das Oberallgäu von seiner
            schönsten Seite.
          </p>
          <div className="mt-10">
            <a
              href="/#buchung"
              className="inline-block rounded-full bg-[#2B7A9B] px-10 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-[#236580]"
            >
              Jetzt buchen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - Leos Bergwelt",
  description: "Impressum und Kontaktdaten von Leos Bergwelt",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <div className="bg-[#fcfcf7] min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h1 className="font-serif text-4xl font-bold text-[#3D2817] md:text-5xl">
          Impressum
        </h1>

        <div className="prose prose-stone mt-10 max-w-none">
          <h2 className="font-serif text-2xl font-bold text-[#3D2817]">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="text-[#8B8B5C]">
            [Hier die Daten von der alten Website einfügen]
          </p>
          <p className="text-[#8B8B5C]">
            Leos Bergwelt<br />
            [Name des Betreibers]<br />
            [Straße und Hausnummer]<br />
            [PLZ] Tiefenbach, Oberstdorf<br />
            Deutschland
          </p>

          <h2 className="mt-8 font-serif text-2xl font-bold text-[#3D2817]">
            Kontakt
          </h2>
          <p className="text-[#8B8B5C]">
            E-Mail: info@leos-bergwelt.de<br />
            Telefon: [Telefonnummer]
          </p>

          <h2 className="mt-8 font-serif text-2xl font-bold text-[#3D2817]">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="text-[#8B8B5C]">
            [Name]<br />
            [Adresse]
          </p>

          <h2 className="mt-8 font-serif text-2xl font-bold text-[#3D2817]">
            Haftungsausschluss
          </h2>
          <h3 className="mt-4 text-xl font-semibold text-[#3D2817]">
            Haftung für Inhalte
          </h3>
          <p className="text-[#8B8B5C]">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
          </p>

          <h3 className="mt-4 text-xl font-semibold text-[#3D2817]">
            Haftung für Links
          </h3>
          <p className="text-[#8B8B5C]">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen.
          </p>

          <p className="mt-8 text-sm italic text-[#8B8B5C]">
            Bitte ersetze diesen Platzhalter-Text mit den echten Daten von
            leos-bergwelt.de
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

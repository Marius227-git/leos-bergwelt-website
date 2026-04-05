import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Leos Bergwelt",
  description: "Datenschutzerklärung von Leos Bergwelt",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h1 className="font-serif text-4xl font-bold text-[#3D2817] md:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-stone mt-10 max-w-none">
          <h2 className="font-serif text-2xl font-bold text-[#3D2817]">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="mt-4 text-xl font-semibold text-[#3D2817]">
            Allgemeine Hinweise
          </h3>
          <p className="text-[#8B8B5C]">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen.
          </p>

          <h2 className="mt-8 font-serif text-2xl font-bold text-[#3D2817]">
            2. Hosting
          </h2>
          <p className="text-[#8B8B5C]">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            [Hosting-Anbieter]
          </p>

          <h2 className="mt-8 font-serif text-2xl font-bold text-[#3D2817]">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <h3 className="mt-4 text-xl font-semibold text-[#3D2817]">
            Datenschutz
          </h3>
          <p className="text-[#8B8B5C]">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h2 className="mt-8 font-serif text-2xl font-bold text-[#3D2817]">
            4. Datenerfassung auf dieser Website
          </h2>
          <h3 className="mt-4 text-xl font-semibold text-[#3D2817]">
            Cookies
          </h3>
          <p className="text-[#8B8B5C]">
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind
            kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
          </p>

          <h3 className="mt-4 text-xl font-semibold text-[#3D2817]">
            Server-Log-Dateien
          </h3>
          <p className="text-[#8B8B5C]">
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns übermittelt.
          </p>

          <h2 className="mt-8 font-serif text-2xl font-bold text-[#3D2817]">
            5. Kontaktformular
          </h2>
          <p className="text-[#8B8B5C]">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert.
          </p>

          <p className="mt-8 text-sm italic text-[#8B8B5C]">
            Bitte ersetze diesen Platzhalter-Text mit der vollständigen
            Datenschutzerklärung von leos-bergwelt.de
          </p>
        </div>
      </div>
    </div>
  );
}

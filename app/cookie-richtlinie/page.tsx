import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie - Leos Bergwelt",
  description: "Cookie-Richtlinie von Leos Bergwelt",
};

export default function CookieRichtliniePage() {
  return (
    <>
      <Header />
      <div className="bg-[#fcfcf7] min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h1 className="font-serif text-4xl font-bold text-[#3D2817] md:text-5xl">
          Cookie-Richtlinie
        </h1>

        <div className="prose prose-stone mt-10 max-w-none">
          <h2 className="font-serif text-2xl font-bold text-[#3D2817]">
            Was sind Cookies?
          </h2>
          <p className="text-[#8B8B5C]">
            Cookies sind kleine Textdateien, die auf Ihrem Computer oder
            Mobilgerät gespeichert werden, wenn Sie eine Website besuchen. Sie
            werden weitverbreitet eingesetzt, um Websites funktionsfähig zu
            machen oder ihre Effizienz zu verbessern, und um Informationen an
            die Eigentümer der Website zu übermitteln.
          </p>

          <h2 className="mt-8 font-serif text-2xl font-bold text-[#3D2817]">
            Wie verwenden wir Cookies?
          </h2>
          <p className="text-[#8B8B5C]">
            Wir verwenden Cookies aus verschiedenen Gründen, die im Folgenden
            aufgeführt sind. Leider gibt es in den meisten Fällen keine
            branchenüblichen Optionen zum Deaktivieren von Cookies, ohne die
            Funktionalität und Funktionen, die sie dieser Website hinzufügen,
            vollständig zu deaktivieren.
          </p>

          <h2 className="mt-8 font-serif text-2xl font-bold text-[#3D2817]">
            Welche Cookies verwenden wir?
          </h2>
          
          <h3 className="mt-4 text-xl font-semibold text-[#3D2817]">
            Notwendige Cookies
          </h3>
          <p className="text-[#8B8B5C]">
            Diese Cookies sind für den Betrieb der Website unbedingt
            erforderlich und können in unseren Systemen nicht deaktiviert
            werden.
          </p>

          <h3 className="mt-4 text-xl font-semibold text-[#3D2817]">
            Funktionale Cookies
          </h3>
          <p className="text-[#8B8B5C]">
            Diese Cookies ermöglichen es der Website, erweiterte Funktionen und
            Personalisierung bereitzustellen.
          </p>

          <h3 className="mt-4 text-xl font-semibold text-[#3D2817]">
            Analyse-Cookies
          </h3>
          <p className="text-[#8B8B5C]">
            Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website
            interagieren, indem Informationen anonym gesammelt und gemeldet
            werden.
          </p>

          <h2 className="mt-8 font-serif text-2xl font-bold text-[#3D2817]">
            Ihre Cookie-Einstellungen
          </h2>
          <p className="text-[#8B8B5C]">
            Sie können Cookies jederzeit über Ihre Browser-Einstellungen
            verwalten oder löschen. Bitte beachten Sie, dass das Deaktivieren
            von Cookies die Funktionalität dieser Website beeinträchtigen kann.
          </p>

          <p className="mt-8 text-sm italic text-[#8B8B5C]">
            Bitte ersetze diesen Platzhalter-Text mit der vollständigen
            Cookie-Richtlinie von leos-bergwelt.de
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

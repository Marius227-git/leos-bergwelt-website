import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F2F7E4] text-[#3D2817]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & Beschreibung */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo/leos_bergwelt_logo_freigestellt.png"
                alt="Leos Bergwelt Logo"
                width={50}
                height={50}
                className="h-12 w-12"
              />
              <span className="font-serif text-2xl font-bold">Leos Bergwelt</span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed opacity-70">
              Moderne Urlaubstage in den Bergen des Oberallgäu. Drei liebevoll
              gestaltete Zimmer für deinen perfekten Urlaub in Tiefenbach bei
              Oberstdorf.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
              Kontakt
            </h3>
            <ul className="mt-6 space-y-3 text-sm opacity-70">
              <li>Tiefenbach, Oberstdorf</li>
              <li>Oberallgäu, Deutschland</li>
              <li>
                <a
                  href="mailto:info@leos-bergwelt.de"
                  className="transition hover:opacity-100"
                >
                  info@leos-bergwelt.de
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
              Navigation
            </h3>
            <ul className="mt-6 space-y-3 text-sm opacity-70">
              <li>
                <Link href="/zimmer" className="transition hover:opacity-100">
                  Zimmer
                </Link>
              </li>
              <li>
                <Link href="/allgaeu-erleben" className="transition hover:opacity-100">
                  Allgäu Erleben
                </Link>
              </li>
              <li>
                <Link href="/#buchung" className="transition hover:opacity-100">
                  Buchung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#3D2817]/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm opacity-60 md:flex-row">
            <p>© {currentYear} Leos Bergwelt. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link href="/impressum" className="transition hover:opacity-100">
                Impressum
              </Link>
              <Link href="/datenschutz" className="transition hover:opacity-100">
                Datenschutz
              </Link>
              <Link href="/cookie-richtlinie" className="transition hover:opacity-100">
                Cookie-Richtlinie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

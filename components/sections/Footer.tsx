export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Über uns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-900">
              Leos Bergwelt
            </h3>
            <p className="mt-4 text-sm leading-6 text-stone-600">
              Moderne Urlaubstage in den Bergen des Oberallgäu. Drei liebevoll
              gestaltete Zimmer für deinen perfekten Urlaub.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-900">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-600">
              <li>Oberallgäu, Deutschland</li>
              <li>
                <a
                  href="mailto:info@leos-bergwelt.de"
                  className="transition hover:text-stone-900"
                >
                  info@leos-bergwelt.de
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-900">
              Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-600">
              <li>
                <a href="#zimmer" className="transition hover:text-stone-900">
                  Zimmer
                </a>
              </li>
              <li>
                <a href="#buchung" className="transition hover:text-stone-900">
                  Buchung
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
          <p>© {currentYear} Leos Bergwelt. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

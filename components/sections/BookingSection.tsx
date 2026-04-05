export default function BookingSection() {
  return (
    <section id="buchung" className="bg-stone-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              Direktbuchung
            </p>
            <h2 className="mt-4 text-4xl font-bold text-stone-900 md:text-5xl">
              Dein Urlaub in den Bergen wartet
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
              Buche direkt und sichere dir die besten Konditionen für deinen
              Aufenthalt in Leos Bergwelt.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border-2 border-stone-200 bg-white p-8 shadow-xl md:p-12">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-stone-900">
                Tramino-Buchungsmaske
              </h3>
              <p className="mt-2 text-sm text-stone-600">
                Integration folgt in Kürze
              </p>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 p-16 text-center">
              <div className="mx-auto max-w-md">
                <svg
                  className="mx-auto h-16 w-16 text-stone-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-4 text-sm font-medium text-stone-600">
                  Platzhalter für Buchungsmaske / iframe
                </p>
                <p className="mt-2 text-xs text-stone-500">
                  Hier wird die Tramino-Buchungsstrecke integriert
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-stone-600">
                Oder kontaktiere uns direkt:{" "}
                <a
                  href="mailto:info@leos-bergwelt.de"
                  className="font-semibold text-stone-900 hover:underline"
                >
                  info@leos-bergwelt.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

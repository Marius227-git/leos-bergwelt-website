export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 md:px-10">
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-500">
        Leos Bergwelt · Oberallgäu
      </p>

      <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
        Moderne Urlaubstage in den Bergen.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
        Drei liebevoll gestaltete Zimmer, ruhige alpine Atmosphäre und der
        perfekte Ausgangspunkt für deinen Urlaub im Oberallgäu.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#zimmer"
          className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
        >
          Zimmer ansehen
        </a>
        <a
          href="#buchung"
          className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-900 transition hover:bg-stone-100"
        >
          Jetzt buchen
        </a>
      </div>
    </section>
  );
}

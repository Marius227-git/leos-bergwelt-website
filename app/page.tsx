import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
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

      <section id="zimmer" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Unsere Zimmer
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Drei Zimmer für entspannte Tage im Allgäu
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Zimmer 1",
              text: "Hell, ruhig und mit modernem alpinem Charakter gestaltet.",
            },
            {
              title: "Zimmer 2",
              text: "Gemütlicher Rückzugsort für Paare und aktive Urlaubstage.",
            },
            {
              title: "Zimmer 3",
              text: "Klar, hochwertig und ideal als Ausgangspunkt für Bergabenteuer.",
            },
          ].map((room) => (
            <article
              key={room.title}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 overflow-hidden rounded-2xl">
  <Image
    src="/images/rooms/IMG_9586.webp"
    alt="Zimmer in Leos Bergwelt"
    width={800}
    height={600}
    className="aspect-[4/3] h-auto w-full object-cover"
  />
</div>
              <h3 className="text-xl font-semibold">{room.title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{room.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-3xl bg-stone-900 px-8 py-16 text-white md:px-12">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
            Urlaub im Oberallgäu
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Berge, Seen und echte Ruhe direkt vor der Tür
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Wandern, Skifahren, Natur erleben und gleichzeitig modern und
            entspannt wohnen – genau dafür ist Leos Bergwelt gedacht.
          </p>
        </div>
      </section>

      <section id="buchung" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Direktbuchung
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Hier kommt später eure Tramino-Buchungsmaske hinein
          </h2>
          <p className="mt-6 max-w-2xl leading-7 text-stone-600">
            Diese Sektion ist als hochwertiger Platzhalter für die spätere
            Einbindung der Buchungsstrecke vorbereitet.
          </p>

          <div className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-10 text-center text-stone-500">
            Platzhalter für Buchungsmaske / iframe
          </div>
        </div>
      </section>
    </main>
  );
}
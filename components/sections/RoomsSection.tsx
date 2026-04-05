import Image from "next/image";

const rooms = [
  {
    title: "Zimmer 1",
    text: "Hell, ruhig und mit modernem alpinem Charakter gestaltet.",
    image: "/images/rooms/IMG_9586.webp",
  },
  {
    title: "Zimmer 2",
    text: "Gemütlicher Rückzugsort für Paare und aktive Urlaubstage.",
    image: "/images/rooms/IMG_9605.webp",
  },
  {
    title: "Zimmer 3",
    text: "Klar, hochwertig und ideal als Ausgangspunkt für Bergabenteuer.",
    image: "/images/rooms/IMG_9633.webp",
  },
];

export default function RoomsSection() {
  return (
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
        {rooms.map((room) => (
          <article
            key={room.title}
            className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 overflow-hidden rounded-2xl">
              <Image
                src={room.image}
                alt={`${room.title} in Leos Bergwelt`}
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
  );
}

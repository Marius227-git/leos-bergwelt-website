export default function BookingSection() {
  return (
    <section id="buchung" className="bg-[#2B7A9B] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80">
            Verfügbarkeit prüfen
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Jetzt buchen
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Sichere dir deinen Platz in den Bergen. Wir freuen uns auf dich!
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-white p-2 shadow-2xl md:p-4">
          <iframe
            src="https://leonie-pinn.tramino.de/api/widgets/booking/"
            className="h-[600px] w-full rounded-lg border-0 md:h-[700px]"
            title="Buchungsmaske"
          />
        </div>
      </div>
    </section>
  );
}

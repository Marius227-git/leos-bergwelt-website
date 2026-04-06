"use client";

interface RoomBookingWidgetProps {
  roomName: string;
}

export default function RoomBookingWidget({ roomName }: RoomBookingWidgetProps) {
  // Tramino Widget URLs - basierend auf den bereitgestellten Links
  // Die URL scheint für alle Zimmer gleich zu sein, Tramino filtert intern nach Verfügbarkeit
  const bookingUrl = "https://leonie-pinn.tramino.de/api/widgets/booking/";

  return (
    <div className="mt-16">
      <h3 className="mb-6 font-serif text-2xl font-bold text-[#3D2817]">
        Zimmer {roomName} buchen
      </h3>
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <iframe
          src={bookingUrl}
          className="h-[600px] w-full border-0 md:h-[700px]"
          title={`Buchung Zimmer ${roomName}`}
          style={{ minWidth: '100%' }}
        />
      </div>
      <p className="mt-4 text-center text-sm text-[#8B8B5C]">
        Wähle im Kalender dein gewünschtes Zimmer "{roomName}" aus
      </p>
    </div>
  );
}

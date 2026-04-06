import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { vorname, nachname, email, nachricht } = body;

    // Validierung
    if (!vorname || !nachname || !email || !nachricht) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich" },
        { status: 400 }
      );
    }

    // Hier würde normalerweise der Email-Versand stattfinden
    // Für die Produktion sollte ein Email-Service wie SendGrid, Resend oder Nodemailer verwendet werden
    
    // Beispiel mit console.log (für Entwicklung):
    console.log("Neue Kontaktanfrage:", {
      vorname,
      nachname,
      email,
      nachricht,
      timestamp: new Date().toISOString(),
    });

    // TODO: Email-Versand implementieren
    // Beispiel mit Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'kontakt@leos-bergwelt.de',
    //   to: 'info@leos-bergwelt.de',
    //   subject: `Neue Kontaktanfrage von ${vorname} ${nachname}`,
    //   html: `
    //     <h2>Neue Kontaktanfrage</h2>
    //     <p><strong>Name:</strong> ${vorname} ${nachname}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Nachricht:</strong></p>
    //     <p>${nachricht}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: "Nachricht erfolgreich gesendet" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Senden der Kontaktanfrage:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}

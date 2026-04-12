"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    nachricht: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ vorname: "", nachname: "", email: "", nachricht: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fcfcf7] py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <h1 className="font-serif text-4xl font-bold text-[#3D2817] md:text-5xl">
            Kontakt
          </h1>
          <p className="mt-6 text-lg text-[#8B8B5C]">
            Hast du Fragen oder möchtest du mehr über Leos Bergwelt erfahren? Schreib uns gerne eine Nachricht!
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* Kontaktformular */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="vorname" className="block text-sm font-medium text-[#3D2817]">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="vorname"
                      required
                      value={formData.vorname}
                      onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-[#8B8B5C]/30 px-4 py-3 text-[#3D2817] focus:border-[#2B7A9B] focus:outline-none focus:ring-2 focus:ring-[#2B7A9B]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="nachname" className="block text-sm font-medium text-[#3D2817]">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="nachname"
                      required
                      value={formData.nachname}
                      onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-[#8B8B5C]/30 px-4 py-3 text-[#3D2817] focus:border-[#2B7A9B] focus:outline-none focus:ring-2 focus:ring-[#2B7A9B]/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#3D2817]">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-[#8B8B5C]/30 px-4 py-3 text-[#3D2817] focus:border-[#2B7A9B] focus:outline-none focus:ring-2 focus:ring-[#2B7A9B]/20"
                  />
                </div>

                <div>
                  <label htmlFor="nachricht" className="block text-sm font-medium text-[#3D2817]">
                    Nachricht *
                  </label>
                  <textarea
                    id="nachricht"
                    required
                    rows={6}
                    value={formData.nachricht}
                    onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-[#8B8B5C]/30 px-4 py-3 text-[#3D2817] focus:border-[#2B7A9B] focus:outline-none focus:ring-2 focus:ring-[#2B7A9B]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-[#2B7A9B] px-8 py-4 font-bold text-white transition-all hover:bg-[#236580] disabled:opacity-50"
                >
                  {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
                </button>

                {status === "success" && (
                  <p className="text-center text-green-600">
                    Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center text-red-600">
                    Es gab einen Fehler. Bitte versuche es später erneut oder schreibe uns direkt an info@leos-bergwelt.de
                  </p>
                )}
              </form>
            </div>

            {/* Kontaktinformationen */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="font-serif text-2xl font-bold text-[#3D2817]">
                Kontaktinformationen
              </h2>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-[#3D2817]">E-Mail</h3>
                  <a
                    href="mailto:info@leos-bergwelt.de"
                    className="text-[#2B7A9B] transition-colors hover:text-[#236580]"
                  >
                    info@leos-bergwelt.de
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3D2817]">Adresse</h3>
                  <p className="text-[#8B8B5C]">
                    Im Weidach 22<br />
                    87561 Oberstdorf-Tiefenbach<br />
                    Deutschland
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="font-semibold text-[#3D2817]">Anreise</h3>
                  <p className="mt-2 text-sm text-[#8B8B5C]">
                    Leos Bergwelt liegt im idyllischen Tiefenbach, nur wenige Minuten von Oberstdorf entfernt. Die Breitachklamm ist fußläufig erreichbar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

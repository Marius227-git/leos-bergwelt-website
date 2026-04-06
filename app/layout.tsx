import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leos Bergwelt – Moderne Urlaubstage im Oberallgäu",
  description:
    "Drei liebevoll gestaltete Zimmer, ruhige alpine Atmosphäre und der perfekte Ausgangspunkt für deinen Urlaub im Oberallgäu. Wandern, Skifahren und Natur erleben.",
  keywords: [
    "Oberallgäu",
    "Ferienwohnung",
    "Urlaub",
    "Allgäu",
    "Berge",
    "Wandern",
    "Skifahren",
    "Unterkunft",
  ],
  authors: [{ name: "Leos Bergwelt" }],
  openGraph: {
    title: "Leos Bergwelt – Moderne Urlaubstage im Oberallgäu",
    description:
      "Drei liebevoll gestaltete Zimmer, ruhige alpine Atmosphäre und der perfekte Ausgangspunkt für deinen Urlaub im Oberallgäu.",
    type: "website",
    locale: "de_DE",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

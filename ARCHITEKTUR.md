# Leos Bergwelt - Projekt-Architektur

## 📁 Projektstruktur

```
leos-bergwelt-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root Layout mit Metadata & Fonts
│   ├── page.tsx                 # Hauptseite (importiert alle Sections)
│   ├── globals.css              # Globale Styles
│   ├── robots.ts                # SEO: robots.txt
│   └── sitemap.ts               # SEO: sitemap.xml
│
├── components/                   # Wiederverwendbare Komponenten
│   ├── sections/                # Haupt-Sektionen der Website
│   │   ├── HeroSection.tsx      # Hero-Bereich
│   │   ├── RoomsSection.tsx     # Zimmer-Übersicht
│   │   ├── RegionSection.tsx    # Region-Information
│   │   ├── BookingSection.tsx   # Buchungsbereich
│   │   └── Footer.tsx           # Fußzeile
│   └── README.md                # Komponenten-Dokumentation
│
├── public/                       # Statische Assets
│   └── images/
│       ├── hero/                # Hero-Bilder
│       ├── rooms/               # Zimmer-Fotos
│       └── region/              # Regions-Fotos
│
├── package.json                  # Dependencies
├── tsconfig.json                # TypeScript-Konfiguration
├── next.config.ts               # Next.js-Konfiguration
└── tailwind.config.ts           # Tailwind CSS-Konfiguration
```

## 🎯 Architektur-Prinzipien

### 1. **Komponentenbasiert**
- Jede Sektion ist eine eigenständige, wiederverwendbare Komponente
- Klare Trennung von Verantwortlichkeiten
- Einfach zu warten und zu erweitern

### 2. **Mobile First**
- Alle Styles sind zuerst für mobile Geräte optimiert
- Responsive Breakpoints mit Tailwind (`md:`, `lg:`)
- Touch-freundliche Interaktionen

### 3. **SEO-optimiert**
- Semantisches HTML
- Optimierte Metadata in `layout.tsx`
- `robots.ts` und `sitemap.ts` für Suchmaschinen
- `next/image` für optimierte Bilder

### 4. **Einfach & Verständlich**
- Keine unnötigen Dependencies
- Klare Namensgebung
- Gut dokumentiert für Anfänger

## 🚀 Entwicklung

### Lokaler Development Server
```bash
npm run dev
```
Öffnet die Website auf `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🎨 Design-System

### Farben
- **Primär**: Stone-Palette (stone-50 bis stone-900)
- **Hintergrund**: stone-50 (helles Grau)
- **Text**: stone-900 (dunkel), stone-600 (sekundär)
- **Akzent**: stone-900 für Buttons

### Typografie
- **Font**: Geist Sans (Google Fonts)
- **Größen**: 
  - Hero: text-5xl bis text-7xl
  - Überschriften: text-3xl bis text-4xl
  - Body: text-base bis text-lg

### Spacing
- **Container**: max-w-6xl (maximale Breite)
- **Padding**: px-6 md:px-10 (responsive)
- **Sections**: py-20 (vertikaler Abstand)

## 📝 Wie man Inhalte bearbeitet

### Text ändern
1. Öffne die entsprechende Komponente in `components/sections/`
2. Ändere den Text direkt im JSX
3. Speichern - Hot Reload aktualisiert automatisch

### Zimmer hinzufügen/bearbeiten
In `components/sections/RoomsSection.tsx`:
```typescript
const rooms = [
  {
    title: "Zimmer 1",
    text: "Beschreibung...",
    image: "/images/rooms/bild.webp",
  },
  // Weitere Zimmer hier hinzufügen
];
```

### Neue Sektion hinzufügen
1. Erstelle neue Datei: `components/sections/NeueSektion.tsx`
2. Exportiere eine React-Komponente
3. Importiere in `app/page.tsx`
4. Füge `<NeueSektion />` an gewünschter Stelle ein

### Metadata ändern
In `app/layout.tsx` das `metadata` Objekt bearbeiten:
- `title`: Seitentitel
- `description`: Meta-Beschreibung
- `keywords`: SEO-Keywords
- `openGraph`: Social Media Sharing

## 🔧 Technologie-Stack

- **Framework**: Next.js 16.2.2 (App Router)
- **Sprache**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Bilder**: next/image (automatische Optimierung)

## 📦 Deployment

Die Website ist statisch und kann auf jeder Plattform gehostet werden:
- **Vercel** (empfohlen für Next.js)
- **Netlify**
- **GitHub Pages**
- Jeder statische Hosting-Service

## 🎓 Für Anfänger

### Was ist eine Komponente?
Eine Komponente ist ein wiederverwendbarer Baustein der Website. Wie ein LEGO-Stein, den du mehrfach verwenden kannst.

### Was ist TypeScript?
JavaScript mit Typen - hilft Fehler zu vermeiden und macht den Code sicherer.

### Was ist Tailwind CSS?
Utility-First CSS Framework - statt eigene CSS-Klassen zu schreiben, nutzt du vordefinierte Klassen wie `text-xl`, `bg-stone-50`, etc.

### Wo fange ich an?
1. Starte mit `npm run dev`
2. Öffne `components/sections/HeroSection.tsx`
3. Ändere einen Text
4. Sieh dir die Änderung im Browser an
5. Experimentiere weiter!

## 📞 Support

Bei Fragen zur Architektur, siehe:
- `components/README.md` - Komponenten-Dokumentation
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs

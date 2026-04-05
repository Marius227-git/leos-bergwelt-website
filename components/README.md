# Komponenten-Struktur

Diese Datei erklärt die Architektur der Website-Komponenten für Anfänger.

## Ordnerstruktur

```
components/
└── sections/          # Alle Haupt-Sektionen der Website
    ├── HeroSection.tsx       # Hero-Bereich (Startseite oben)
    ├── RoomsSection.tsx      # Zimmer-Übersicht
    ├── RegionSection.tsx     # Region-Information
    ├── BookingSection.tsx    # Buchungsbereich
    └── Footer.tsx            # Fußzeile
```

## Komponenten-Übersicht

### HeroSection
Der erste Bereich, den Besucher sehen. Enthält:
- Überschrift
- Beschreibungstext
- Call-to-Action Buttons

### RoomsSection
Zeigt die drei Zimmer in einem Grid-Layout:
- Verwendet `next/image` für optimierte Bilder
- Responsive Design (1 Spalte mobil, 3 Spalten Desktop)
- Zimmer-Daten sind in einem Array definiert (leicht erweiterbar)

### RegionSection
Informationen über die Region Oberallgäu:
- Dunkler Hintergrund für visuellen Kontrast
- Beschreibt die Umgebung und Aktivitäten

### BookingSection
Platzhalter für die Tramino-Buchungsmaske:
- Vorbereitet für iframe-Integration
- Kann später einfach erweitert werden

### Footer
Fußzeile mit:
- Über uns
- Kontaktinformationen
- Navigation
- Copyright (automatisches Jahr)

## Wie man Komponenten bearbeitet

1. **Text ändern**: Öffne die entsprechende Komponente und ändere den Text direkt
2. **Bilder ändern**: In `RoomsSection.tsx` das `rooms` Array bearbeiten
3. **Neue Sektion hinzufügen**: 
   - Neue Datei in `components/sections/` erstellen
   - In `app/page.tsx` importieren und einfügen

## Styling

- Alle Komponenten nutzen **Tailwind CSS**
- **Mobile First**: Styles sind zuerst für Mobilgeräte, dann Desktop (`md:`)
- **Farbschema**: Stone-Palette für alpine Ästhetik

## Bilder

Bilder liegen in `public/images/`:
- `/images/hero/` - Hero-Bilder
- `/images/rooms/` - Zimmer-Fotos
- `/images/region/` - Regions-Fotos

Immer `next/image` verwenden für automatische Optimierung!

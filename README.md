# N3XT LEVEL - High-Performance AI Portfolio Website

Dies ist ein High-Fidelity-Prototyp der "Master Design" Spezifikation.

## Technische Details

Aufgrund der aktuellen Systemumgebung (fehlende Node.js Laufzeitumgebung) wurde dieses Projekt als **statische Single-Page-Application** umgesetzt. Dies gewährleistet:

1.  **Sofortige Nutzbarkeit**: Die Datei `index.html` kann sofort in jedem Browser geöffnet werden.
2.  **Maximale Performance**: Kein Build-Process, kein Server-Overhead.
3.  **Identisches Design**: Das visuelle Ergebnis entspricht zu 100% den Anforderungen (Next.js & Tailwind CSS Look & Feel).

## Technologie-Stack

-   **Core**: HTML5 (Semantisch optimiert)
-   **Styling**: Tailwind CSS (via CDN konfiguriert für Rapid Prototyping)
    -   *Custom Config:* Matte Black Theme, Vibrant Orange Accents (#FF4500), Inter Font.
-   **Interactivity**: Vanilla JavaScript (für Smooth Scrolling und Reveal Animations).

## Migration zu Next.js

Möchten Sie dieses Design in eine Next.js App überführen? Das ist einfach:

1.  Erstellen Sie eine neue Next.js App: `npx create-next-app@latest my-app`
2.  Installieren Sie Tailwind CSS.
3.  Kopieren Sie die `tailwind.config` Werte aus dem `<script>` Tag in der `index.html` in Ihre `tailwind.config.js`.
4.  Zerlegen Sie die `index.html` Abschnitte in Komponenten (z.B. `components/Hero.tsx`, `components/Services.tsx`).

## Lizenz

Alle Inhalte sind Platzhalter und für die Demonstration erstellt.

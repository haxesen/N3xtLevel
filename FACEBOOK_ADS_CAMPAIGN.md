# 🚀 N3XT LEVEL - Facebook Ads Kampányterv (Launch Phase)

Ez a terv a "Fake Door" validációs stratégia alapján készült, célja a piaci érdeklődés felmérése és az első leadek generálása a "Launch Offer" (Bevezető Akció) keretében.

---

## 🎯 1. Kampány Célok
*   **Elsődleges:** Forgalomterelés a **Kalkulátorra** (`/` vagy `#calculator`). (A konverziós esemény a "Submit Config").
*   **Másodlagos:** Márkaépítés (Awareness) a bécsi KKV szektorban.
*   **Költségkeret:** Teszt indítása napi 5-10€-val.

---

## 👥 2. Célközönség (Targeting)
*   **Földrajzi hely:** Bécs (Vienna) + 40-50 km körzet (Alsó-Ausztria).
*   **Nyelv:** Német (és Magyar - ha a magyar közösséget célzod Ausztriában).
*   **Életkor:** 25 - 55 év (Döntéshozói korosztály).
*   **Érdeklődési körök:**
    *   Kisvállalkozás (Small business)
    *   Vállalkozás (Entrepreneurship)
    *   Adminisztrátorok (Facebook Page Admins -> Business Page owners)
    *   Marketing, Webdesign érdeklődés

---

## 🎨 3. Hirdetési Kreatívok (Ad Creatives)

### A) "A Kalkulátor" (Interaktív Megközelítés) - *Ez a legerősebb!*
*   **Vizuális:** Videó vagy Kép arról, ahogy a Kalkulátorban a felhasználó kattintgat (az új színes felület).
    *   *Felirat a képen:* "Mennyibe kerül egy AI weboldal? Számold ki 1 perc alatt!"
*   **Főcím (Headline):** Dein Web-Projekt: Preise online kalkulieren 🧮
*   **Szöveg (Primary Text):**
    > Schluss mit unklaren Angeboten! 🛑
    > Bei N3XT LEVEL erhältst du sofort einen fixen Preis für deine neue Website.
    >
    > ✅ AI-optimiertes Design
    > ✅ SEO & Google Maps inklusive
    > ✅ Fixer Launch-Preis (nur für kurze Zeit!)
    >
    > Probiere unseren Konfigurator aus und erhalte dein Angebot sofort & unverbindlich. 👇
*   **CTA Gomb:** Get Quote (Angebot einholen) / Learn More

### B) "A Launch Offer" (Ár-fókusz)
*   **Vizuális:** A 3 Árazási Kártya (Bronz, Arany, Ezüst) egymás mellett, a "Launch Offer" plecsnivel.
*   **Főcím:** Webseiten-Launch Aktion: -20% Rabatt 🚀
*   **Szöveg:**
    > Starten Sie digital durch – zum Startup-Preis! 💎
    > Wir bauen Ihre High-End Website mit modernster AI-Technologie. Schneller, schöner, effizienter.
    >
    > 🥉 Essential: €990 (statt €1.190)
    > 🥇 Professional: €1.790 (Bestseller!)
    > 🥈 Enterprise: €3.990
    >
    > Sichern Sie sich jetzt den Einführungspreis! ⏳
*   **CTA Gomb:** Book Now (Jetzt buchen)

### C) "A Probléma/Megoldás" (Pain Point)
*   **Vizuális:** Előtte/Utána (Régi lassú weboldal vs. Új N3XT LEVEL design). Vagy egy "Lassú weboldal = Elveszett vevők" grafika.
*   **Főcím:** Verliert Ihre Website Kunden? 🤔
*   **Szöveg:**
    > 80% der Kunden verlassen eine Seite, wenn sie nicht in 3 Sekunden lädt. 📉
    >
    > Mit N3XT LEVEL bekommen Sie:
    > 🚀 Ultra-schnelle Ladezeiten
    > 📱 Perfektes Mobile-Design
    > 🤖 24/7 AI Chatbot Verk
    >
    > Lassen Sie Ihre Konkurrenz hinter sich.
*   **CTA Gomb:** Learn More

---

## ⚙️ 4. Technikai Beállítások (Checklist)
1.  **Meta Pixel (Facebook Pixel):**
    *   Ellenőrizd, hogy a Pixel be van-e kötve a `LoadAnalytics()`-be vagy a GTM-be. (Jelenleg GA4 van, a FB Pixelt be kell szúrni a `<head>`-be).
2.  **Események (Events):**
    *   `ViewContent`: Főoldal megtekintése.
    *   `Lead` vagy `SubmitApplication`: Kalkulátor "Küldés" gomb megnyomása.
    *   `Contact`: Kapcsolati űrlap kitöltése.
3.  **UTM Paraméterezés:**
    *   Használj URL paramétereket a hirdetéseknél, hogy a GA4-ben lásd, melyik hirdetés hozta az embert.
    *   Pl.: `?utm_source=facebook&utm_medium=cpc&utm_campaign=launch_offer&utm_content=calculator_video`

---

## 🚀 Teendők a Startoláshoz:
1.  [ ] Hozz létre egy **Meta Business Manager** fiókot (ha nincs).
2.  [ ] Készítsd el a képeket (Canva / Photoshop) a fenti ideák alapján.
3.  [ ] Írd meg a szövegeket németül (fentiek alapnak jók).
4.  [ ] Állítsd be a kampányt "Forgalom" (Traffic) vagy "Leadek" (Leads) céllal.
5.  [ ] **INDÍTÁS!** 🟢

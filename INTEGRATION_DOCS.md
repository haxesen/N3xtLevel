# N3XT LEVEL - Integrációs Dokumentáció 🔗
*Utolsó frissítés: 2025. 12. 22.*

Ez a dokumentum leírja a weboldalhoz kapcsolódó külső rendszerek (Make, Google, Facebook) beállításait és működését.

---

## 1. Automatizáció (Make.com) 🤖

A weboldal kapcsolati és foglalási űrlapja egy központi **Make.com Scenariót** hív meg Webhook segítségével.

### 🌐 Webhook
- **URL:** `https://hook.eu1.make.com/ma2sksp64ucfz51s4imlu7qdkpc3un8i`
- **Módszer:** POST
- **Adatstruktúra:** JSON (`form_type`, `language`, `client_name`, `client_email`, `message`, `booking_date`, `booking_time`)

### ⚙️ Scenario Folyamat
A Make.com folyamat a következő lépésekből áll:
1.  **Webhook:** Fogadja az adatokat a weboldalról.
2.  **Google Sheets:** Minden beérkező megkeresést új sorként ment a `Munkalap1`-be.
3.  **Router:** Kettéválasztja a folyamatot.
    -   **Ág A (Email):** Nyelv (HU/DE/EN) alapján kiválasztja a sablont és elküldi az visszaigazoló emailt az ügyfélnek, valamint értesítőt az adminnak.
    -   **Ág B (Calendar):** Ha a `booking_date` mező ki van töltve, létrehoz egy eseményt a Google Naptárban.

### 🗓️ Google Calendar Beállítások
- **Naptár neve:** `N3XT LEVEL Meetings`
- **Esemény neve:** `Egyeztetés: {{client_name}}`
- **Időtartam:** 60 perc (Alapértelmezett)
- **Leírás:** Tartalmazza az ügyfél üzenetét és elérhetőségét.

---

## 2. Facebook Business Oldal 🟦

Az ügynökség hivatalos Facebook oldala létrehozva és bekötve.

- **Név:** N3XT LEVEL
- **URL:** [https://www.facebook.com/profile.php?id=61585405025431](https://www.facebook.com/profile.php?id=61585405025431)
- **Weboldal Integráció:**
    -   **Sidebar (Desktop):** Bal oldali fix sávban Facebook ikon.
    -   **Footer:** Láblécben közösségi média ikonok között.
- **Tartalom:**
    -   Profilkép: N3XT Logo.
    -   Borítókép: "Take your Business to the N3XT LEVEL".
    -   Bio: Többnyelvű (DE/HU) bemutatkozás.
    -   Pinned Post: Üdvözlő üzenet hashtagekkel.
    -   **Automata válasz:** Messengeren azonnal válaszol a bejövő üzenetekre (DE/HU).

---

## 3. Technikai Részletek (Fejlesztőknek) 🛠️

### 🔄 `main.js` Működése
A weboldal JavaScript kódja (`window.submitContactForm`) kizárólag a Make.com Webhook-ot használja.

- **Duplikáció elleni védelem:** A `window.setupContactForm` már nem csatol direkt event listenert, hanem a globális `initGlobals` delegált eseménykezelőjére bízza a `submit` eseményt.
- **Pre-fill Logic:** Ha a felhasználó a naptárból érkezik, a `bookingData` a `localStorage`-ban tárolódik (`n3xt_pending_booking`), amit a szkript automatikusan beilleszt az üzenet mezőbe és a payloadba.
- **Legacy Kód:** A régi Formspree és Google Apps Script hivatkozások eltávolításra kerültek.

### ⚠️ Hibaelhárítás
- **Hiba:** Dupla naptárbejegyzés.
    -   **Ok:** Valószínűleg a böngésző gyorsítótára a régi JS fájlt használja, vagy a `main.js`-ben maradt duplikált listener.
    -   **Megoldás:** Hard Refresh (Ctrl+F5). A `git push` után ellenőrizd, hogy a `form.addEventListener('submit')` ki lett-e véve a `setupContactForm`-ból.

---

## 📝 Teendők a jövőben
- **Google Calendar ↔️ Website Sync:** Jelenleg a weboldal nem tudja, ha egy időpont foglalt a Google Naptárban (csak beküldi az igényt). Kétirányú szinkronhoz a Google Calendar API-t közvetlenül kellene bekötni (vagy összetettebb Make flow).

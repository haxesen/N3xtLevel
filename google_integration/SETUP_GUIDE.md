# 🚀 Google Naptár Integráció Beállítása

Ez az útmutató segít összekötni a weboldaladat a Google Naptáradat. Ingyenes, és kb. 5 percet vesz igénybe.

## 1. Lépés: Google Apps Script létrehozása
1. Nyisd meg a böngészőben: [script.google.com](https://script.google.com/)
2. Kattints a bal felső sarokban az **"Új projekt"** gombra.
3. A szerkesztőben törölj ki mindent, ami ott van (`function myFunction() {...}`).
4. Nyisd meg a számítógépeden a `google_integration/Code.gs` fájlt.
5. Másold be a **TELJES tartalmát** a Google szerkesztőbe.
6. Adj nevet a projektnek (pl. "N3XT LEVEL Foglalás") a bal felső sarokban kattintva.
7. Nyomj egy Mentést (floppy ikon vagy Ctrl+S).

## 2. Lépés: Publikálás Web App-ként
Ez a legfontosabb lépés. Ezzel kapunk egy URL-t, amit a weboldalad hívni tud.

1. Jobb oldalon fent kattints a kék **"Bevezetés"** (Deploy) gombra -> **"Új bevezetés"** (New deployment).
2. A felugró ablakban a fogaskerék ikon mellett válaszd ki: **"Webalkalmazás"** (Web app).
3. Töltsd ki az adatokat:
   - **Leírás:** V1
   - **Végrehajtás másként (Execute as):** `Én (...)` (Hagyd a saját email címeden).
   - **Ki férhet hozzá (Who has access):** **`Bárki`** (Anyone). **FONTOS!** Ha nem ezt választod, a weboldalad nem fér hozzá.
4. Kattints a **"Bevezetés"** (Deploy) gombra.
5. A Google engedélyt fog kérni ("Review permissions").
   - Kattints rá, válaszd ki a fiókodat.
   - Ha azt írja "A Google nem ellenőrizte ezt az alkalmazást" (Goole hasn't verified this app), kattints a **"Haladó"** (Advanced) gombra, majd alul a **"Go to ... (unsafe)"** linkre. (Mivel te írtad a kódot, biztonságos).
   - Engedélyezd ("Allow").

## 3. Lépés: Az URL megszerzése
1. A sikeres bevezetés után kapsz egy **"Webalkalmazás URL-címe"** (Web app URL) linket.
2. Ez így néz ki: `https://script.google.com/macros/s/AKfycbx.../exec`
3. **MÁSOLD KI** ezt a linket.

## 4. Lépés: Beillesztés a Weboldalba
1. Küldd el nekem (az AI asszisztensnek) ezt a linket, vagy illeszd be a `main.js`-be a megadott helyre (ezt majd én megcsinálom neked, ha megvan a link).

---
**KÉSZ!** 🎉 Innentől kezdve, ha valaki foglal a weboldalon, az megjelenik a Google Naptáradban.

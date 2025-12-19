# 🏭 N3XT LEVEL - Ügyfél Weboldal Munkafolyamat (Workflow)

Ez a dokumentum lépésről lépésre végigvezet egy új ügyfél weboldalának elkészítésén a **N3xt_Template** alaprendszer használatával.

---

## 1. 🏁 Projekt Indítása
1. **Mappa másolása:** 
   - Másold át a `N3xt_Template` mappát egy új névre (pl. `Ugyfel_Neve_Web`).
2. **Megnyitás:** 
   - Nyisd meg a mappát VS Code-ban.
3. **Telepítés:** 
   - Nyiss egy terminált és futtasd: `npm install`
4. **Indítás:** 
   - `npm run dev` (Megnyílik a böngészőben).

---

## 2. 🎨 Branding & Design (Az Arculat)
Az első lépés az ügyfél színeinek és stílusának beállítása.

### 🔹 Színek (`style.css` & `tailwind.config.js`)
- **Fő szín (Accent):** Keresd a `text-accent`, `bg-accent`, `border-accent` osztályokat. 
  - A leggyorsabb módszer: Globális csere (CTRL+H vagy `Replace in Files`).
  - Cseréld a jelenlegi "Electric Blue" kódot (`#00f0ff` vagy `text-blue-500` jellegűt) az ügyfél színére.
- **Háttér (Dark Mode):** Ha az ügyfél világos témát akar, a `bg-black/95` és hasonlókat kell átírni `bg-white` vagy `bg-gray-50`-re. (Ez nagyobb munka, a sablon alapból Dark Mode-ra van optimalizálva).

### 🔹 Betűtípusok (`index.html`)
- A `<head>` részben található a Google Fonts link (Inter/Outfit).
- Cseréld le, ha az ügyfél mást szeretne, és frissítsd a `style.css`-ben a `font-family` sort.

---

## 3. 📝 Tartalom és Szövegezés
Haladj végig a komponenseken a `components/` mappában.

1. **Navbar (`components/Navbar.js`):**
   - Logó csere (`N3XT LEVEL` szöveg -> Ügyfél neve vagy `<img>`).
   - Menüpontok ellenőrzése (kell-e mind? pl. "Időpontfoglalás" gomb).

2. **Hero Szekció (`components/Hero.js`):**
   - **Címsor (H1):** A legfontosabb mondat. ("Weboldalak, amik eladnak").
   - **Alcím:** Rövid bemutatkozás.
   - **Gomb:** Hova vigyen? (Kapcsolat / Szolgáltatások).

3. **Szolgáltatások (`components/Services.js`):**
   - Írd át a kártyákat az ügyfél szolgáltatásaira.
   - Ikonok cseréje: FontAwesome osztályok (`fa-code`, `fa-rocket` stb.) módosítása.

4. **Rólunk / Bemutatkozás (`components/AboutMe.js`):**
   - Ügyfél története.
   - Kép cseréje (lásd 4. pont).

5. **Lábjéc & Kapcsolat (`Footer.js`, `Contact.js`):**
   - **Cím, Email, Telefon** átírása! (Kritikus).
   - Social Media linkek frissítése.

---

## 4. 🖼️ Képek és Média
A képeket a `public/` mappában találod.

1. **Csere:**
   - Töltsd le az ügyfél képeit.
   - Nevezd el őket ugyanúgy (pl. `profile.jpg`, `hero_bg.jpg`) és írd felül a régieket -> Így a kódhoz nem is kell nyúlni!
   - Vagy másold be új néven, és írd át az elérési utat (`src="/uj-kep.jpg"`) a JS fájlokban.

---

## 5. 🤖 Chatbot Testreszabás (`components/Chatbot.js` & `main.js`)
- Ha az ügyfélnek nem kell Chatbot, töröld a `main.js`-ből az `initChatbot()` hívást.
- Ha kell:
  - Nyisd meg a `main.js`-t.
  - Keresd a `handleAction` részt.
  - Írd át a válaszokat az ügyfél adataira (Árak, Helyszín, Garancia).

---

## 6. ⚙️ SEO és Technikai Beállítások (`index.html`)
1. **Title Tag:** `<title>Ügyfél Neve | Szlogen</title>`
2. **Meta Description:** `<meta name="description" content="Rövid leírás...">`
3. **Nyelv:** `<html lang="hu">` (Ha magyar oldal).
4. **Favicon:** Cseréld le a `public/favicon.ico`-t.

---

## 7. 🚀 Publikálás (Deploy)
1. Futtasd: `npm run build` (Ha van build script, nálunk jelenleg nincs, csak a statikus fájlokat kell feltölteni).
2. Töltsd fel a **teljes mappa tartalmát** (kivéve `node_modules`) a tárhelyre (FTP) vagy Netlify/Vercel-re.

---

**✅ KÉSZ!** Az új weboldal éles.

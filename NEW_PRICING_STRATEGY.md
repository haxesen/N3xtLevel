# N3XT LEVEL - Árazási Stratégia V2 (Tervezet)

A cél egy **magasabb profitabilitású**, prémiumabb, ugyanakkor a piac számára továbbra is vonzó struktúra kialakítása. Eltávolodunk az "olcsó" megoldásoktól, és a minőségre/értékre helyezzük a hangsúlyt.

---

## 1. Rész: Fix Webdesign Csomagok (Weboldal Szekció)

Az árakat enyhén emeljük ("Price Anchoring"), hogy a középső csomag tűnjön a legjobb ajánlatnak.

| Csomag Név | Régi Ár | **ÚJ ÁR** | Célcsoport & Tartalom |
| :--- | :--- | :--- | :--- |
| **1. ESSENTIAL** | €1.290 | **€1.490** | **Induló vállalkozások.**<br>• Prémium One-Pager (Egyoldalas)<br>• Jogi szövegek & Impresszum<br>• Alap SEO & Gyorsaság<br>• *Korlát:* Nincs CMS (nem szerkeszthető), nincs Blog. |
| **2. PROFESSIONAL**<br>*(Ajánlott)* | €2.490 | **€2.990** | **Stabil KKV-k.**<br>• Többoldalas (max 6) Corporate Weboldal<br>• **CMS Rendszer** (Szerkeszthető)<br>• **Blog / Hírek modul**<br>• Bővített SEO Setup<br>• *Ez a "Best Seller" termék.* |
| **3. ENTERPRISE AI** | €4.990+ | **€5.990+** | **Piacvezetők & Innovátorok.**<br>• Egyedi design & WebApp funkciók<br>• **AI Chatbot Integráció** (Saját adatokkal)<br>• Többnyelvűség<br>• CRM / API Integrációk |

---

## 2. Rész: Kalkulátor Logika (Egyedi Ajánlatok)

A kalkulátorban 4 fő kategóriát (Típust) különböztetünk meg. Az árak itt "Bázisárak", amire rájönnek az extrák.

### A) Kategóriák (Types)
1.  **Webszájt Építés (New Project)**
    *   *Bázisár:* **€1.490** (Essential szint)
    *   *Leírás:* Teljesen új projekt a nulláról.
### A) Kategóriák (Types) - Tervezet
1.  **Webszájt (New Project)**
    *   *Bázisár:* **€1.490**
    *   *Fókusz:* Bemutatkozó oldalak, portfóliók, céges jelenlét.
2.  **???? [VÁLASZTHATÓ HELYETTESÍTŐ] ????**
    *   *Opció A: **E-Commerce / Webshop*** (Ajánlott)
        *   *Ár:* **€3.490+**
        *   *Indok:* Külön kategória a sima webtől. Magas bevétel, tiszta feladat (termékek eladása).
    *   *Opció B: **Sales Funnel & Lead Gen***
        *   *Ár:* **€1.890+**
        *   *Indok:* Landing oldalak kifejezetten hirdetésekhez. Konverzió fókusz.
    *   *Opció C: **Egyedi Web App***
        *   *Ár:* **€4.500+**
        *   *Indok:* Belső céges szoftverek, dashboardok, SaaS. Magas szakmai presztízs.
3.  **AI & Automatizáció**
    *   *Bázisár:* **€1.200**
    *   *Fókusz:* Chatbotok, folyamat automatizálás.
4.  **Média & Tartalom**
    *   *Bázisár:* **€990**
    *   *Fókusz:* Fotó/Videó produkció.
3.  **AI & Automatizáció (Smart Biz)** (VISSZHOZVA!)
    *   *Bázisár:* **€1.200**
    *   *Leírás:* Chatbotok, Workflow automatizálás (pl. Zapier/Make), CRM összekötés weboldal nélkül is.
4.  **Média & Tartalom (Content)**
    *   *Bázisár:* **€990**
    *   *Leírás:* Félnapos profi fotózás/videózás + Utómunka + Jogdíjak. (Ez már fedez egy profitábilis napot).

---

## 3. Rész: Extrák & Funkciók (Add-ons)

Ezek az árak adódnak hozzá a bázishoz a kalkulátorban.

| Funkció | Régi Ár | **ÚJ ÁR** | Indoklás |
| :--- | :--- | :--- | :--- |
| **Többnyelvűség** | €450 | **€690** | A technikai setup mellett a karbantartás is macera. |
| **AI Chatbot** | €890 | **€990** | Lélektani határ alatt, de magasabb profit. |
| **Booking Rendszer** | €350 | **€490** | Az integrációk (naptár szinkron) gyakran bonyolultak. |
| **SEO Pro Csomag** | €350 | **€750** | A "Basis" helyett ez egy komolyabb, kulcsszókutatással egybekötött setup. |
| **Blog / CMS** | €600 | **€600** | Ez maradhat, reális ár a fejlesztésért. |
| **Drón Felvétel** | €400 | **€450** | Kiegészítő a Média csomaghoz. |

---

## Összegzés: Miért jobb ez?
1.  **Megszűnik a mikro-menedzsment lehetősége:** A Relaunch túl drága ahhoz, hogy apró javításokra kérjék -> Vagy komoly projekt lesz belőle, vagy inkább újat kérnek (ami neked jobb).
2.  **Profitábilis Content:** A €990-os média csomag már fedezi a felszerelést és az utómunkát.
3.  **AI visszatérése:** A kalkulátorban helye van az AI-nak, mert ez különböztet meg a konkurenciától ("N3XT LEVEL"), de nem zavarja a fő webdesign ajánlatokat a nyitólapon.

Engedélyezed ezt a struktúrát? Ha igen, átírom a `Pricing.js`-t és a `ProjectConfig.js`-t.

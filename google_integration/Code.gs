/**
 * ==========================================
 * N3XT LEVEL - GOOGLE CALENDAR INTEGRATION
 * ==========================================
 * 
 * Ezt a kódot másold be a Google Apps Script szerkesztőjébe.
 * (Részletes útmutató a SETUP_GUIDE.md fájlban)
 */

function doPost(e) {
  // CORS (Cross-Origin Resource Sharing) engedélyezése
  // Ez teszi lehetővé, hogy a weboldalad kommunikáljon a Google-lel
  
  // 1. Adatok feldolgozása
  try {
    var data = JSON.parse(e.postData.contents);
    var name = data.name;
    var email = data.email;
    var dateStr = data.date; // ÉÉÉÉ-HH-NN formátum elvárt
    var timeStr = data.time; // ÓÓ:PP formátum
    var message = data.message || "Nincs üzenet";

    // Dátum és Idő összeállítása
    // Figyelem: A dateStr és timeStr formátuma kritikus!
    // Feltételezzük: date="2025-12-18", time="14:00"
    var startTime = new Date(dateStr + 'T' + timeStr + ':00');
    var endTime = new Date(startTime.getTime() + (60 * 60 * 1000)); // +1 óra alapértelmezetten

    // 2. Naptár Esemény Létrehozása
    var calendar = CalendarApp.getDefaultCalendar();
    
    // Ellenőrizzük, szabad-e az időpont (ütközésvizsgálat)
    var conflicts = calendar.getEvents(startTime, endTime);
    if (conflicts.length > 0) {
      return responseJSON({ status: 'error', message: 'Ez az időpont sajnos már foglalt.' });
    }

    // Esemény létrehozása
    var event = calendar.createEvent(
      'Konultáció: ' + name,
      startTime,
      endTime,
      {
        description: 'Ügyfél email: ' + email + '\n\nÜzenet:\n' + message + '\n\nFoglalás forrása: N3XT LEVEL Weboldal'
      }
    );

    // Opcionális: Szín beállítása (pl. '11' = Paradicsom piros, '10' = Bazsalikom zöld)
    event.setColor(CalendarApp.EventColor.PALE_BLUE);

    return responseJSON({ status: 'success', message: 'Időpont sikeresen foglalva!' });

  } catch (error) {
    return responseJSON({ status: 'error', message: 'Hiba történt: ' + error.toString() });
  }
}

// Segédfüggvény a JSON válaszhoz
function responseJSON(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// Teszteléshez (hogy ne kelljen mindig POST-olni)
function doGet(e) {
  return responseJSON({ status: 'alive', message: 'A rendszer működik! Használd a POST metódust a foglaláshoz.' });
}

/**
 * ==========================================
 * N3XT LEVEL - GOOGLE CALENDAR INTEGRATION
 * ==========================================
 * 
 * BEÁLLÍTÁS:
 * Ha külön naptárba szeretnéd menteni a foglalásokat,
 * írd át az alábbi 'primary' szót a naptárad azonosítójára!
 * (Pl: 'hu.hungarian#holiday@group.v.calendar.google.com' vagy hasonló hosszú kód)
 */
var CALENDAR_ID = 'primary'; 

function doPost(e) {
  // CORS engedélyezése
  
  // 1. Adatok feldolgozása
  try {
    var data;
    // Megpróbáljuk JSON-ként, de ha stringként jön (text/plain miatt), azt is kezeljük
    try { 
      data = JSON.parse(e.postData.contents); 
    } catch(err) {
      // Ha esetleg url-encoded lenne vagy sima objektum (ritka Apps Scriptnél így, de biztos ami biztos)
      data = e.parameter || {}; 
    }

    var name = data.name;
    var email = data.email;
    var dateStr = data.date; 
    var timeStr = data.time; 
    var message = data.message || "Nincs üzenet";

    // Dátum validáció
    if(!dateStr || !timeStr) {
      return responseJSON({ status: 'error', message: 'Hiányzó dátum vagy idő!' });
    }

    var startTime = new Date(dateStr + 'T' + timeStr + ':00');
    var endTime = new Date(startTime.getTime() + (60 * 60 * 1000)); // +1 óra

    // 2. Naptár Kiválasztása
    var calendar = CalendarApp.getCalendarById(CALENDAR_ID);
    
    // Ha nem találja (pl. elírt ID), visszaváltunk az alapértelmezettre biztonságból
    if (!calendar) {
      calendar = CalendarApp.getDefaultCalendar();
      message += "\n\n(Megj: A rendszer az alapértelmezett naptárat használta, mert a megadott CALENDAR_ID nem található.)";
    }
    
    // Ellenőrizzük, szabad-e az időpont (ütközésvizsgálat)
    var conflicts = calendar.getEvents(startTime, endTime);
    if (conflicts.length > 0) {
      return responseJSON({ status: 'error', message: 'Ez az időpont ebben a naptárban már foglalt.' });
    }

    // Esemény létrehozása
    var event = calendar.createEvent(
      'Konzultáció: ' + name,
      startTime,
      endTime,
      {
        description: 'Ügyfél email: ' + email + '\n\nÜzenet:\n' + message + '\n\nForrás: N3XT LEVEL Weboldal'
      }
    );

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

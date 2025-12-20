@echo off
:: Beállítjuk a dátumot és időt a fájlnévhez
set "d=%date:~-4%-%date:~3,2%-%date:~0,2%"
set "t=%time:~0,2%-%time:~3,2%"
set "t=%t: =0%"

:: Almappa létrehozása ha nem létezik (A projekt gyökerében)
if not exist "BACKUP" mkdir "BACKUP"

:: A fájl neve ez lesz: BACKUP\N3xtLevel_Backup_EV-HO-NAP_ORA-PERC.zip
set "filename=BACKUP\N3xtLevel_Backup_%d%_%t%.zip"

echo ==========================================
echo   N3XT LEVEL - BIZTONSAGI MENTES (BACKUP)
echo ==========================================
echo.
echo Mentés folyamatban ide: %filename%
echo.

:: A git archive parancsot használjuk, mert az okosan kihagyja a felesleges node_modules mappát
git archive --format=zip --output="%filename%" HEAD

if %errorlevel% neq 0 (
    echo [HIBA] Valami nem sikerult. Ellenorizd, hogy van-e git telepitve. ❌
    goto :end
)

echo [SIKER] A biztonsagi mentes elkeszult! ✅

:: Régi mentések törlése (Max 5 marad)
echo.
echo Takaritas: A legrégebbi mentesek torlese a BACKUP mappabol (Max 5 marad)...
for /f "skip=5 delims=" %%F in ('dir /b /o-d "BACKUP\N3xtLevel_Backup_*.zip"') do (
    echo Torles: %%F
    del "BACKUP\%%F"
)

:end
echo.
echo Kilepes 3 masodperc mulva...
timeout /t 3 >nul

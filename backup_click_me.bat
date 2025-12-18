@echo off
:: Beállítjuk a dátumot és időt a fájlnévhez
set "d=%date:~-4%-%date:~3,2%-%date:~0,2%"
set "t=%time:~0,2%-%time:~3,2%"
set "t=%t: =0%"

:: A fájl neve ez lesz: N3xtLevel_Backup_EV-HO-NAP_ORA-PERC.zip
set "filename=..\N3xtLevel_Backup_%d%_%t%.zip"

echo ==========================================
echo   N3XT LEVEL - BIZTONSAGI MENTES (BACKUP)
echo ==========================================
echo.
echo Mentés folyamatban ide: %filename%
echo.

:: A git archive parancsot használjuk, mert az okosan kihagyja a felesleges node_modules mappát
git archive --format=zip --output="%filename%" HEAD

if %errorlevel% equ 0 (
    echo [SIKER] A biztonsagi mentes elkeszult! ✅
) else (
    echo [HIBA] Valami nem sikerult. Ellenorizd, hogy van-e git telepitve. ❌
)

echo.
echo A kilepeshez nyomj meg egy gombot...
pause

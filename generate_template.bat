@echo off
set "TARGET=..\N3xt_Template"

echo Creating Template in %TARGET%...

if not exist "%TARGET%" mkdir "%TARGET%"

:: Base Files
copy index.html "%TARGET%\"
copy style.css "%TARGET%\"
copy main.js "%TARGET%\"
copy tailwind.config.js "%TARGET%\"
copy postcss.config.js "%TARGET%\"
copy package.json "%TARGET%\"
copy .gitignore "%TARGET%\"
copy CLIENT_WORKFLOW.md "%TARGET%\"

:: Directories
xcopy components "%TARGET%\components" /E /I /Y
xcopy public "%TARGET%\public" /E /I /Y

:: Documentation
echo # N3XT CLIENT TEMPLATE > "%TARGET%\README.md"
echo. >> "%TARGET%\README.md"
echo Ez az alap sablon uj ugyfelek szamara. >> "%TARGET%\README.md"
echo. >> "%TARGET%\README.md"
echo ## Inditas >> "%TARGET%\README.md"
echo 1. \`npm install\` >> "%TARGET%\README.md"
echo 2. \`npm run dev\` >> "%TARGET%\README.md"
echo. >> "%TARGET%\README.md"
echo ## Teendok >> "%TARGET%\README.md"
echo - `Config.js` letrehozasa a szineknek/szovegeknek (Opcionalis) >> "%TARGET%\README.md"
echo - Kepek csereje a `public` mappaban >> "%TARGET%\README.md"
echo - Szovegek atirasa a `components` mappaban >> "%TARGET%\README.md"

echo [KESZ] Sablon letrehozva itt: %TARGET%
pause

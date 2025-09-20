@echo off
echo ====================================
echo    SMARTSEA Next.js
echo    포트: 3001
echo ====================================
echo.

cd C:\smartsea\smartsea-web

echo Next.js 개발 서버를 포트 3001에서 시작합니다...
echo.
set PORT=3001
npm run dev

pause
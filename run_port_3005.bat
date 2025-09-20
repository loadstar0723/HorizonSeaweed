@echo off
echo ====================================
echo    SMARTSEA Next.js
echo    포트: 3005
echo ====================================
echo.

cd C:\smartsea\smartsea-web

:: node_modules 체크
if not exist "node_modules" (
    echo 패키지 설치 중... (2-5분 소요)
    call npm install
    echo.
)

:: 포트 설정
set PORT=3005

echo 서버 시작 중...
echo.
echo ====================================
echo    http://localhost:3005
echo ====================================
echo.

:: 3초 후 브라우저 열기
timeout /t 3 >nul
start "" "http://localhost:3005"

:: 서버 실행
npm run dev

pause
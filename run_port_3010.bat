@echo off
echo ====================================
echo    SMARTSEA Next.js
echo    포트: 3010
echo ====================================
echo.

cd C:\smartsea\smartsea-web

:: 안정적인 package.json 사용
if exist package-stable.json (
    copy /Y package-stable.json package.json
    echo 안정적인 버전으로 설정됨
)

:: node_modules 체크
if not exist "node_modules" (
    echo 패키지 설치 중... (3-5분 소요)
    call npm install
    echo.
)

:: 포트 설정
set PORT=3010

echo.
echo ====================================
echo    서버 시작 중...
echo    http://localhost:3010
echo ====================================
echo.

:: 5초 후 브라우저 열기
timeout /t 5 >nul
start "" "http://localhost:3010"

:: 서버 실행
npm run dev

pause
@echo off
echo ====================================
echo    SMARTSEA 프로젝트 수정 및 실행
echo ====================================
echo.

cd C:\smartsea\smartsea-web

echo 1. 기존 파일 정리 중...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist .next rmdir /s /q .next

echo.
echo 2. 안정적인 package.json으로 교체...
copy /Y package-stable.json package.json

echo.
echo 3. 패키지 재설치 중... (3-5분 소요)
npm install

echo.
echo 4. 개발 서버 시작...
echo.
echo ====================================
echo    http://localhost:3000
echo    잠시 후 브라우저가 열립니다
echo ====================================
echo.

timeout /t 5 >nul
start "" "http://localhost:3000"

npm run dev

pause
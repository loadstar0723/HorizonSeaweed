@echo off
echo ====================================
echo    SMARTSEA 웹사이트 시작
echo    (오류 수정 버전)
echo ====================================
echo.

cd C:\smartsea\smartsea-web

:: 기존 파일 정리
if exist node_modules\three-stdlib rmdir /s /q node_modules\three-stdlib
if exist .next rmdir /s /q .next

:: 안정적인 버전 사용
if exist package-stable.json (
    copy /Y package-stable.json package.json
)

:: node_modules 확인
if not exist "node_modules" (
    echo 패키지 설치 중... (2-3분 소요)
    npm install --legacy-peer-deps
    echo.
)

:: 포트 설정
set PORT=3000

echo.
echo 서버 시작 중...
echo.
echo ====================================
echo    http://localhost:3000
echo ====================================
echo.

:: 5초 후 브라우저 열기
timeout /t 5 >nul
start http://localhost:3000

:: 개발 서버 실행
npm run dev

pause
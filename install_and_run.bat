@echo off
echo ====================================
echo    SMARTSEA Next.js 프로젝트
echo    설치 및 실행
echo ====================================
echo.

cd C:\smartsea\smartsea-web

echo 1. 패키지 설치 중...
echo    이 과정은 몇 분 걸릴 수 있습니다.
echo.
npm install

echo.
echo 2. 개발 서버 시작...
echo    http://localhost:3000 에서 확인하세요.
echo.
npm run dev

pause
@echo off
echo ====================================
echo    SMARTSEA 빠른 시작
echo ====================================
echo.

cd C:\smartsea\smartsea-web

:: 포트 확인
echo 사용 가능한 포트를 확인 중...
netstat -an | findstr :3000 > nul
if %errorlevel% == 0 (
    echo 포트 3000이 사용 중입니다.
    set PORT=3001
    echo 포트 3001을 사용합니다.
) else (
    set PORT=3000
    echo 포트 3000을 사용합니다.
)

:: node_modules 확인
if not exist "node_modules" (
    echo.
    echo 패키지 설치가 필요합니다. 설치를 시작합니다...
    echo 이 과정은 2-5분 정도 걸릴 수 있습니다.
    echo.
    call npm install
    echo.
    echo 설치 완료!
)

echo.
echo 서버를 시작합니다...
echo.
echo ========================================
echo    http://localhost:%PORT%
echo    브라우저가 자동으로 열립니다.
echo ========================================
echo.

:: 브라우저 자동 실행
start "" "http://localhost:%PORT%"

:: 개발 서버 실행
npm run dev

pause
@echo off
echo.
echo  =========================================
echo     SMARTSEA 웹사이트 자동 실행
echo  =========================================
echo.

cd C:\smartsea\smartsea-web

:: 안정적인 버전 사용
if exist package-stable.json (
    copy /Y package-stable.json package.json >nul 2>&1
)

:: node_modules 확인 및 설치
if not exist "node_modules" (
    echo  [1/3] 패키지 설치 중... (2-3분 소요)
    call npm install >nul 2>&1
    echo  [1/3] 설치 완료!
) else (
    echo  [1/3] 패키지 이미 설치됨
)

echo  [2/3] 서버 시작 중...

:: 새 창에서 서버 시작 (숨김)
start /min cmd /c "npm run dev"

echo  [3/3] 브라우저 준비 중...
echo.

:: 서버가 완전히 시작될 때까지 대기
timeout /t 8 /nobreak >nul

:: 브라우저 열기
echo  =========================================
echo     웹사이트를 엽니다!
echo  =========================================
start http://localhost:3000

echo.
echo  성공! 브라우저에서 SMARTSEA를 확인하세요.
echo.
echo  [종료하려면 아무 키나 누르세요]
pause >nul

:: 서버 프로세스 종료
taskkill /F /IM node.exe >nul 2>&1

exit
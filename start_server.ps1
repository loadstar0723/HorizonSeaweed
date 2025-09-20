# PowerShell 스크립트
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "   SMARTSEA Next.js 서버 시작" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

Set-Location C:\smartsea\smartsea-web

# node_modules 폴더 확인
if (-not (Test-Path "node_modules")) {
    Write-Host "패키지가 설치되지 않았습니다. 설치를 시작합니다..." -ForegroundColor Yellow
    Write-Host ""
    npm install
    Write-Host ""
    Write-Host "패키지 설치 완료!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "패키지가 이미 설치되어 있습니다." -ForegroundColor Green
}

# 포트 설정
$env:PORT = 3001

Write-Host ""
Write-Host "개발 서버를 포트 3001에서 시작합니다..." -ForegroundColor Yellow
Write-Host "브라우저에서 http://localhost:3001 접속하세요" -ForegroundColor Cyan
Write-Host ""

# 개발 서버 실행
npm run dev
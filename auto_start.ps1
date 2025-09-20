# SMARTSEA 자동 실행 스크립트
Write-Host "SMARTSEA 웹사이트를 자동으로 시작합니다..." -ForegroundColor Green

Set-Location C:\smartsea\smartsea-web

# 안정적인 package.json 복사
if (Test-Path "package-stable.json") {
    Copy-Item -Path "package-stable.json" -Destination "package.json" -Force
}

# node_modules가 없으면 설치
if (-not (Test-Path "node_modules")) {
    Write-Host "패키지 설치 중... (잠시만 기다려주세요)" -ForegroundColor Yellow
    & npm install
}

# 백그라운드에서 서버 시작
Write-Host "서버 시작 중..." -ForegroundColor Cyan
$job = Start-Job -ScriptBlock {
    Set-Location C:\smartsea\smartsea-web
    & npm run dev
}

# 서버가 시작될 때까지 대기
Write-Host "서버가 준비될 때까지 대기 중..." -ForegroundColor Yellow
Start-Sleep -Seconds 8

# 브라우저 열기
Write-Host "브라우저를 엽니다!" -ForegroundColor Green
Start-Process "http://localhost:3000"

Write-Host "`n웹사이트가 열렸습니다!" -ForegroundColor Green
Write-Host "종료하려면 아무 키나 누르세요..." -ForegroundColor Gray
Read-Host

# 서버 종료
Stop-Job $job
Remove-Job $job
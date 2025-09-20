@echo off
echo ====================================
echo    미디어 파일 복사
echo ====================================
echo.

cd C:\smartsea\smartsea-web

:: 비디오 파일 복사
echo 비디오 파일 복사 중...
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250917_161609523.mp4" "public\videos\smart-farming-main.mp4"
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250825_131110609.mp4" "public\videos\vertical-farm.mp4"
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250825_131122171.mp4" "public\videos\water-system.mp4"

:: 이미지 파일 복사
echo 이미지 파일 복사 중...
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250917_161602790.jpg" "public\images\smart-farming\overview1.jpg"
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250917_161606337.jpg" "public\images\smart-farming\overview2.jpg"
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250917_161606337_01.jpg" "public\images\smart-farming\gopchang-kim.jpg"
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250917_161606337_02.jpg" "public\images\smart-farming\normal-kim.jpg"
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250917_161606337_03.jpg" "public\images\smart-farming\parae-kim.jpg"
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250917_161613645.jpg" "public\images\smart-farming\facility1.jpg"
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250917_161613645_01.jpg" "public\images\smart-farming\facility2.jpg"
copy "C:\Users\USER\Desktop\스마트씨코리아\KakaoTalk_20250917_161613645_02.jpg" "public\images\smart-farming\facility3.jpg"

echo.
echo 모든 파일 복사 완료!
pause
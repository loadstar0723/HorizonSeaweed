# 이메일 전송 설정 가이드

문의 폼에서 실제로 이메일을 전송하려면 다음 중 하나의 방법을 선택하여 설정하세요.

## 방법 1: Gmail SMTP (추천)

### 1단계: Gmail 앱 비밀번호 생성
1. Google 계정에 로그인
2. [Google 계정 설정](https://myaccount.google.com/security)으로 이동
3. 보안 → 2단계 인증 활성화
4. 앱 비밀번호 생성:
   - "앱 비밀번호" 검색 또는 [직접 이동](https://myaccount.google.com/apppasswords)
   - 앱 선택: "메일"
   - 기기 선택: "기타(맞춤 이름)"
   - 이름 입력: "HorizonSeaweed Website"
   - 생성된 16자리 비밀번호 복사

### 2단계: 환경 변수 설정
`.env.local` 파일에서:
```
EMAIL_USER=loadstar0724@gmail.com
EMAIL_PASS=생성된 16자리 비밀번호 (공백 제외)
```

### 3단계: contact 페이지에서 API 엔드포인트 확인
```javascript
const response = await fetch('/api/send-email', {
  // 현재 설정됨
})
```

## 방법 2: Web3Forms (더 간단함)

### 1단계: API 키 받기
1. [Web3Forms](https://web3forms.com) 방문
2. 이메일 입력: loadstar0724@gmail.com
3. 받은 이메일에서 API 키 확인

### 2단계: 환경 변수 설정
`.env.local` 파일에 추가:
```
WEB3FORMS_ACCESS_KEY=받은-API-키
```

### 3단계: contact 페이지에서 API 엔드포인트 변경
```javascript
// src/app/contact/page.tsx 에서
const response = await fetch('/api/send-email-web3forms', {
  // send-email을 send-email-web3forms로 변경
})
```

## 테스트 방법

1. 개발 서버 재시작: `npm run dev`
2. 문의 페이지에서 테스트 메시지 전송
3. loadstar0724@gmail.com 메일함 확인

## 문제 해결

### Gmail 방법 오류
- "Less secure app access" 오류: 2단계 인증과 앱 비밀번호 사용 필요
- 인증 실패: 앱 비밀번호가 정확히 입력되었는지 확인 (공백 제거)

### Web3Forms 방법 오류
- API 키 확인
- 일일 전송 한도 초과 시 다음날 재시도

## 프로덕션 배포 시 주의사항

1. 환경 변수를 호스팅 플랫폼(Vercel, Netlify 등)에 설정
2. `.env.local` 파일은 절대 Git에 커밋하지 않기
3. API 엔드포인트에 rate limiting 추가 고려
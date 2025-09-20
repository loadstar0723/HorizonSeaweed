const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, '.next')));
app.use(express.static(path.join(__dirname, 'public')));

// 모든 경로를 Next.js로 전달
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.next', 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
  
  // 브라우저 자동 열기
  const url = `http://localhost:${PORT}`;
  const start = process.platform === 'win32' ? 'start' : 'open';
  exec(`${start} ${url}`);
});
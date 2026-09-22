// .env 파일에서 환경변수를 불러온다. (키를 코드에 하드코딩하지 않고 이렇게 쓴다)
require('dotenv').config();

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error('API_KEY가 없습니다. .env 파일을 확인하세요.');
  process.exit(1);
}

console.log('.env에서 불러온 API_KEY:', apiKey);
console.log('이 키로 외부 서비스에 인증한다고 가정합니다.');

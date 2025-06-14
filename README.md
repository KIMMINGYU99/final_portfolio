# KMG 포트폴리오

**Next.js 14**, **TypeScript**, **Tailwind CSS**로 제작한 개인 개발자 포트폴리오입니다.  
프로젝트, 기술 스택을 소개하고 **Supabase** 기반 실시간 리뷰 보드를 제공합니다.

## ✨ 특징

- 반응형 포트폴리오 페이지(About, Projects, Tech Stack)
- **리뷰 보드**
  - 페이지네이션이 적용된 무한 스크롤 리스트(`/review`)
  - 최신 5개 리뷰를 불러오고 좋아요 수를 즉시 반영하는 모달 뷰어
  - Supabase 채널을 통한 실시간 삽입 구독
- Framer Motion 애니메이션
- **Zustand** 기반 글로벌 상태 관리

## 🛠️ 기술 스택

| 분류          | 스택                         |
| ------------- | ---------------------------- |
| Framework     | Next.js 14 (App Router)      |
| Styling       | Tailwind CSS, CSS Modules    |
| Database      | Supabase Postgres & Realtime |
| State         | Zustand                      |
| Animations    | Framer Motion                |
| Lint / Format | ESLint, Prettier             |

## 🚀 로컬 실행

### 1) 클론

```bash
git clone https://github.com/KIMMINGYU99/final_portfolio.git
cd final_portfolio
```

### 2) 의존성 설치

```bash
npm install
```

### 3) 환경 변수 작성

루트에 `.env.local` 파일을 만들고 아래 예시대로 값을 입력하세요.

```bash
NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-public-key>
```

### 4) 개발 서버 실행

```bash
npm run dev
```

기본 포트는 **3000**이며 변경하려면 `PORT` 환경 변수를 지정하면 됩니다.

### 5) 프로덕션 빌드 / 실행

```bash
npm run build
npm start     # PORT=3000 기본, 이미 사용 중이면 set PORT=3001 && npm start
```

배포 버전은 Vercel 에서 확인할 수 있습니다 👉 https://final-portfolio-ruddy-five.vercel.app/

## 📂 프로젝트 구조 (일부)

```
components/
  client/     # Client-side interactive components
  server/     # Server / RSC components
store/        # Zustand stores
utils/        # API helpers (Supabase)
public/       # Static assets
```

## 📝 스크립트

| 명령어          | 설명               |
| --------------- | ------------------ |
| `npm run dev`   | 개발 서버 실행     |
| `npm run build` | 프로덕션 빌드      |
| `npm start`     | 프로덕션 서버 실행 |
| `npm run lint`  | ESLint 검사        |

## 🖤 라이선스

MIT © 2025 KMK

# KMK 포트폴리오

**Next.js 14**, **TypeScript**, **Tailwind CSS**로 제작한 개인 개발자 포트폴리오입니다.  
프로젝트, 기술 스택을 소개하고 **Supabase** 기반 실시간 리뷰 보드를 제공합니다.

![screenshot](./public/og.png)

## ✨ 특징

- 반응형 포트폴리오 페이지(About, Projects, Tech Stack)
- **리뷰 보드**
    - 페이지네이션이 적용된 무한 스크롤 리스트(`/review`)
    - 최신 5개 리뷰를 불러오고 좋아요 수를 즉시 반영하는 모달 뷰어
    - Supabase 채널을 통한 실시간 삽입 구독
- 다크 모드 지원 및 Framer Motion 애니메이션
- **Zustand** 기반 글로벌 상태 관리

## 🛠️ 기술 스택

| 분류 | 스택 |
|----------|-------|
| Framework | Next.js 14 (App Router) |
| Styling   | Tailwind CSS, CSS Modules |
| Database  | Supabase Postgres & Realtime |
| State     | Zustand |
| Animations| Framer Motion |
| Lint / Format | ESLint, Prettier |

## 🚀 로컬 실행

1. 저장소를 클론하고 의존성을 설치합니다

```bash
pnpm install   # or yarn / npm
```

2. 환경 변수 설정

Create `.env.local` with your Supabase keys:

```env
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxxxxx
```

3. 개발 서버 실행

```bash
pnpm dev
```

`http://localhost:3000`에서 확인하세요 ✨

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

| 명령어 | 설명 |
|----------------|-------------------------------------|
| `pnpm dev`     | 개발 서버 실행                    |
| `pnpm build`   | 프로덕션 빌드                    |
| `pnpm start`   | 프로덕션 서버 실행             |
| `pnpm lint`    | ESLint 실행                          |

## 🖤 라이선스

MIT © 2025 KMK

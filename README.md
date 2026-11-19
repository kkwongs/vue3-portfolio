# KKWONG'S Portfolio (Vue 3)

> [!IMPORTANT]
> 포트폴리오가 새 주소로 이전되었습니다.
> 👉 **https://gihyun-portfolio.vercel.app/**
>
> 이 저장소는 이전 버전이며, 기존 주소(kkwongs.github.io/vue3-portfolio)로 접속하면 새 주소로 자동 이동합니다.

Vue 3로 만든 개인 포트폴리오 웹 사이트입니다. 자기소개와 참여한 프로젝트(역할, 기술 스택, 화면 이미지)를 소개합니다.

## 기술 스택

- **Framework**: Vue 3, Vue Router 4, Vuex 4
- **Style**: SCSS
- **Library**: Swiper, lodash, vue-material-design-icons
- **Build / Deploy**: Vue CLI 5, GitHub Actions, GitHub Pages

## 시작하기

```bash
yarn install   # 의존성 설치
yarn serve     # 개발 서버 실행
yarn build     # 프로덕션 빌드
yarn lint      # 린트 검사
```

## 배포

`main` 브랜치에 push하면 GitHub Actions([ci-cd.yml](.github/workflows/ci-cd.yml))가 린트와 빌드를 거쳐 GitHub Pages에 배포합니다.

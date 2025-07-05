# Gemini CLI

[![Gemini CLI CI](https://github.com/google-gemini/gemini-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/google-gemini/gemini-cli/actions/workflows/ci.yml)

![Gemini CLI Screenshot](./docs/assets/gemini-screenshot.png)

이 저장소에는 명령행 기반 AI 워크플로 도구인 Gemini CLI가 포함되어 있습니다. 이 도구는 여러분의 각종 도구와 연결되어 코드를 이해하고 워크플로를 가속화합니다.

Gemini CLI로 할 수 있는 일은 다음과 같습니다:

- Gemini의 100만 토큰 컨텍스트 윈도를 넘나들며 대규모 코드베이스를 조회하고 편집합니다.
- Gemini의 멀티모달 기능을 활용하여 PDF나 스케치에서 새로운 앱을 생성합니다.
- 풀 리퀘스트 조회나 복잡한 리베이스 처리 등 운영 작업을 자동화합니다.
- Imagen, Veo, Lyria와 같은 [미디어 생성](https://github.com/GoogleCloudPlatform/vertex-ai-creative-studio/tree/main/experiments/mcp-genmedia)을 포함한 새로운 기능을 MCP 서버와 도구를 통해 연결합니다.
- [Google 검색](https://ai.google.dev/gemini-api/docs/grounding) 도구를 사용해 질문을 보강합니다.

## 빠른 시작

1. **사전 준비:** [Node.js 버전 20](https://nodejs.org/en/download) 이상이 설치되어 있는지 확인합니다.
2. **CLI 실행:** 터미널에서 다음 명령을 실행합니다:

   ```bash
   npx https://github.com/google-gemini/gemini-cli
   ```

   또는 다음과 같이 설치할 수 있습니다:

   ```bash
   npm install -g @google/gemini-cli
   gemini
   ```

3. **색상 테마 선택**
4. **인증:** 메시지가 나타나면 개인 Google 계정으로 로그인합니다. 그러면 Gemini를 이용하여 분당 최대 60회, 하루 최대 1,000회까지 모델 요청을 보낼 수 있습니다.

이제 Gemini CLI를 사용할 준비가 되었습니다!

### Gemini API 키 사용하기

Gemini API는 Gemini 2.5 Pro를 사용하여 하루 [100회 무료 요청](https://ai.google.dev/gemini-api/docs/rate-limits#free-tier)을 제공하며, 사용 모델을 선택하고 더 높은 속도 제한(유료 플랜)을 사용할 수 있습니다.

1. [Google AI Studio](https://aistudio.google.com/apikey)에서 API 키를 생성합니다.
2. 생성한 키를 터미널 환경 변수에 설정합니다. `YOUR_API_KEY`를 발급받은 키로 변경하세요.

   ```bash
   export GEMINI_API_KEY="YOUR_API_KEY"
   ```

3. (선택 사항) API 키 페이지에서 프로젝트를 유료 플랜으로 업그레이드하면 자동으로 [1단계 속도 제한](https://ai.google.dev/gemini-api/docs/rate-limits#tier-1)이 해제됩니다.

다른 인증 방법(Google Workspace 계정 등)은 [인증 가이드](./docs/cli/authentication.md)를 참고하세요.

## 예시

CLI가 실행되면 셸에서 Gemini와 상호작용할 수 있습니다.

새 디렉터리에서 프로젝트를 시작하려면:

```sh
cd new-project/
gemini
> Write me a Gemini Discord bot that answers questions using a FAQ.md file I will provide
```

기존 프로젝트에서 작업하려면:

```sh
git clone https://github.com/google-gemini/gemini-cli
cd gemini-cli
gemini
> Give me a summary of all of the changes that went in yesterday
```

### 다음 단계

- [소스에 기여하거나 직접 빌드하는 방법](./CONTRIBUTING.md)을 알아보세요.
- 사용할 수 있는 **[CLI 명령어](./docs/cli/commands.md)**를 살펴보세요.
- 문제가 발생하면 **[문제 해결 가이드](./docs/troubleshooting.md)**를 확인하세요.
- 보다 포괄적인 문서는 [전체 문서](./docs/index.md)를 참고하세요.
- 더 많은 아이디어를 얻으려면 [인기 있는 작업](#popular-tasks)을 확인하세요.

### 문제 해결

문제가 있는 경우 [문제 해결](docs/troubleshooting.md) 가이드를 참고하세요.

## 인기 있는 작업

### 새로운 코드베이스 탐색

기존 또는 새로 클론한 저장소로 이동한 뒤 `gemini`를 실행해 보세요.

```text
> Describe the main pieces of this system's architecture.
```

```text
> What security mechanisms are in place?
```

### 기존 코드와 함께 작업하기

```text
> Implement a first draft for GitHub issue #123.
```

```text
> Help me migrate this codebase to the latest version of Java. Start with a plan.
```

### 워크플로 자동화

MCP 서버를 사용하여 로컬 시스템 도구를 엔터프라이즈 협업 도구와 통합할 수 있습니다.

```text
> Make me a slide deck showing the git history from the last 7 days, grouped by feature and team member.
```

```text
> Make a full-screen web app for a wall display to show our most interacted-with GitHub issues.
```

### 시스템과 상호작용하기

```text
> Convert all the images in this directory to png, and rename them to use dates from the exif data.
```

```text
> Organise my PDF invoices by month of expenditure.
```

### 제거하기

[Uninstall](docs/Uninstall.md) 가이드에서 제거 방법을 확인하세요.

## 서비스 약관 및 개인정보 보호 고지

Gemini CLI 사용과 관련된 서비스 약관과 개인정보 보호 고지는 [Terms of Service and Privacy Notice](./docs/tos-privacy.md)에서 확인할 수 있습니다.

# 작업에 필요한 정보

- 폴더구조
  - components : React로 정의된 Component들
  - css : css 파일 (현재는 _app.tsx 파일에서 antd.css 만 import하는 것으로 되어 있음)
  - graphql : 서버 통신에 사용되는 GraphQL 쿼리문들을 정의
  - libs : 함수, Const값 등 공용으로 사용될 함수, Class 등을 정의
  - pages : 웹페이지들

- css 적용
  - 방법 1. css 파일에 class로 정의한 뒤 tag에서 `className='클래스명'`으로 사용 <- 이 방법을 선호
  - 방법 2. tag에서 직접 `style={{ minHeight: '100vh', background: '#FFFFFF' }}`와 같으 방법으로 선언

- 서버와의 통신 (GraphQL 사용)
  - loading은 true or false 값을 나타냄 -> indicator를 표시해야할 경우 `loading === true`일때 표시하면 된다.

```javascript
import { COMPANIES } from '../graphql/companies'
import { useQuery } from '@apollo/client'

const { loading, error, data } = useQuery(COMPANIES)
console.log(loading, error, data)
```

- Global State Management
  - Recoil을 사용 : `Menu.tsx`을 보면 선택된 메뉴값 저장을 위해 `useRecoilState(selectedMenuState)`를 사용하는 코드가 있음
    - 참고로 `selectedMenuState`은 `\libs\states.ts` 파일에 정의되어 있음


# Install Process

- Reference : <https://velog.io/@jakeseo_me/다시-프론트-틀잡기-1-타입스크립트-next.js-9>
```bash
npx create-next-app --example with-typescript react_boilerplate
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin-tslint @typescript-eslint/parser -D
yarn add prettier -D
yarn add husky -D
yarn add babel-plugin-module-resolver eslint-plugin-import eslint-import-resolver-babel-module -D
yarn add antd sass
yarn add graphql @apollo/client
yarn add recoil
yarn add react-quill
```

- <https://www.daleseo.com/graphql-react-apollo-hooks>

# Deploy & Connect

```bash
aws s3 sync ./.next s3://$BUCKET_NAME --acl public-read
```

<http://$BUCKET_NAME.s3-website.ap-northeast-2.amazonaws.com/>
# TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript with-typescript-app
# or
yarn create next-app --example with-typescript with-typescript-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.

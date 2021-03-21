# 어디서나 적용가능한 front 구성하기

<p>강의의 주차 별로, 다운 받는 라이브러리와 해당 내용에 대해 정리합니다. 슬랙 클론 강의가 CRA 없이 npm init 단계부터 시작이기 때문에 다운 받는 라이브러리에 대해 정리하고 공부하며, 스스로 라이브러리를 다운 받아 정리할 수 있도록 노력합니다.</p>

## 1. downloaded dependencies

- "@types/react"
- "@types/react-dom"
- "react"
- "react-dom"
- "typescript

- eslint // 코드 검사 도구
- eslint-plugin-prettier
- eslint-config-prettier
- prettier // 코드 정렬 도구

<hr/>

## 2. downloaded dependencies

- @babel/preset-env
- cross-env
- css-loader

> dev dependencies

- @babel/core
- @babel/preset-react
- @babel/preset-typescript
- @types/node
- @types/webpack
- babel-loader
- webpack
- webpack-cli

<hr/>

<p>babel과 webpack 설정을 위한 세팅</p>

## 꿀팁

### 👉🏼 package-lock.json??

<p>npm i/ yarn add 와 같은 명령어를 통해 라이브러리를 다운 받게 되면, 해당 라이브러리들이 node_modules 폴더에 저장됩니다. 독립적으로 해당 라이브러리만 사용하여 구현되는 기능들도 있지만, 일부 라이브러리들은 다른 라이브러리와 의존성 관계를 맺고 있습니다.(참고하여 만들어 짐) 그러한 라이브러리들의 관계를 나타낸 것이 <b>package-lock.json</b> 입니다.</p>

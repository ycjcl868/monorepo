# Monorepo

[Better practice npm Package Design in Monorepo](https://www.rustc.cloud/monorepo-pkg) with [pnpm](https://pnpm.io/) and [turborepo](https://turborepo.org/), deploying into [Vercel](https://vercel.com/).

## Quick Start

Install dependencies

```bash
$ npm i -g pnpm
$ pnpm -v
# should >= 6.20.0
$ pnpm install
```

### Apps

Preview:
- [Next.js App](https://monorepo-next-app.vercel.app/)
- [CRA](https://monorepo-react-app.vercel.app/)
- [Umi App](https://monorepo-umi-app.vercel.app/)
- [Express App](https://monorepo-express-app.vercel.app/)
- [Vite Vue 3 App](https://monorepo-vite-vue3-app.vercel.app/)
- [Vite React App](https://monorepo-vite-react-app.vercel.app/)
- [Vue 3 Cli App](https://monorepo-vue3-cli-app.vercel.app/)
- [Remix App](https://monorepo-remix-app.vercel.app/)

### React App

```bash
# Start React App
$ pnpm start --filter "react-app"
```

![](https://user-images.githubusercontent.com/13595509/146680807-a15b411e-075a-438e-b020-f3d88240c55d.png)

### Vite App

```bash
$ pnpm start --filter "vite-app"
```

![](https://user-images.githubusercontent.com/13595509/146680790-c5b506ae-5006-42a2-b9df-c379499dab3b.png)


#### Node.js App

```bash
$ pnpm start --filter "node-app"
```

![](https://user-images.githubusercontent.com/13595509/146680754-8b6798f4-fa4f-43ff-929e-911e1343ef88.png)

## Packages Development

### packages/shared

```bash
$ pnpm dev --filter "@infras/shared"
```

### packages/ui

```bash
$ pnpm dev --filter "@infras/ui"
```

### packages/native

```bash
$ pnpm build --filter "@infras/native"
```

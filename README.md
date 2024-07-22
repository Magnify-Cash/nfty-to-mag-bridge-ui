This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Development flow:

```bash
pnpm dev
```

Production flow:

```bash
pnpm build
```

```bash
pnpm start
```

Contract addresses are stored: src/api/web3/networkConfig.ts

For production it is necessary to edit the addresses in this object networksConfigProd

ENV:

NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID - To use [walletconnect](https://walletconnect.com/) you need to register and get a Project ID

NEXT_PUBLIC_ENVIRONMENT - develop | production


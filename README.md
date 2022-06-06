This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn

yarn dev
```

#### description 
  This is an example of how we can use server-side-rendering with apollo
  client by fetching all the queries of the requested page in the server.

#### bug reproduction
- If you went to the `/use-query` page and refreshed the page, you will notice that the page came pre-rendered with its ows data and that there is no loading state
- If you went to the `/use-query-standby` and did the same thing you will notice that the app does not compile and no errors are thrown

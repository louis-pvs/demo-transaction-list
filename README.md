# Front-end test for Pomelo pay

[live preview](http://louis-vincent.me)

The goal of this practical test is to create a very simple React SPA from scratch. You can use any boilerplate code, package managers and plugins.

## Introduction

This project setup using [expack](https://github.com/louis-pvs/expack), using express server + webpack.

### Dependencies to be aware of

- To avoid unneccessary error please align the node version `v8.11.1`, you can use [nvm](https://github.com/creationix/nvm) to swap between different node version. [(window version)](https://github.com/coreybutler/nvm-windows)
- Project is using react new API from @next version, `react-dom` required to align the version to avoid [this error](https://stackoverflow.com/questions/53024307/typeerror-dispatcher-usestate-is-not-a-function-when-using-react-hooks).

## Using this repo

clone the project to your local directory, do necessary adjustments or

### Run in development mode

```
yarn
yarn build-dev
yarn dev
```

### Create production build

```
yarn
yarn buil
// if you need to run production build locally instead of remote
yarn start
```

### Testing with jest

`yarn test`

### Goal

- [x] [d38c52c](https://github.com/louis-pvs/demo-transaction-list/commit/d38c52cf6e6ef1ba839275ce89f9325316af6454) Use an appropriate API mock tool that you’re familiar with to create a JSON file with what is in your opinion a good representation of a list of financial transactions (at least 4-5 attributes for a transaction).
- [x] [709de6c](https://github.com/louis-pvs/demo-transaction-list/commit/709de6c3ded58ae7988429b7ed229484eb09f5ee) Scaffold a simple ReactJS application that uses any dependencies you might want to include in your application
- [x] [94fc413](https://github.com/louis-pvs/demo-transaction-list/commit/94fc413e5b2d7b15c69bbc195c9d0debd892555f) Create a view for the list of transactions that you fetch from the mocked API. You can use Redux or any other tool for state management
- [x] [92cb10e](https://github.com/louis-pvs/demo-transaction-list/commit/92cb10ec6a577e05c32d681bb7a70c316b0b28b5) Add a button that on click updates the state of every other transaction to REFUNDED and make sure this is visually shown as well
- [x] [87d14c9](https://github.com/louis-pvs/demo-transaction-list/commit/87d14c928956837d4488d431d2302b480b0e149a) Create a webpack build script that builds the application on ‘yarn start’
- [x] [2ab7d38](https://github.com/louis-pvs/demo-transaction-list/commit/2ab7d38a4a6eb3551469456c933ac891a12c3f6d) Use styled-components to show the list of transactions in a nice way
- [x] If you are doing this test remotely please upload your work, with instructions on how to run it on your BitBucket or GitHub account and share the link directly with us or the recruiter.
- [x] [81aa0e4](https://github.com/louis-pvs/demo-transaction-list/commit/81aa0e4fded541959e03cba1565ca015cb59f3c4) Optional: create a test using your favourite js testing framework that in your opinion has value for this scenario

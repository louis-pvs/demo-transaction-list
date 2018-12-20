# Fronte-nd test for Pomelo pay

The goal of this practical test is to create a very simple React SPA from scratch. You can use any boilerplate code, package managers and plugins.

## using this repo

This project setup using [expack](https://github.com/louis-pvs/expack), using express server + webpack.
clone the project to your local directory, do necessary adjustments or

### run in development mode

```
yarn
yarn build-dev
yarn dev
```

### create production build

```
yarn
yarn buil
// if you need to run production build locally instead of remote
yarn start
```

### Goal

- [ ] Use an appropriate API mock tool that you’re familiar with to create a JSON file with what is in your opinion a good representation of a list of financial transactions (at least 4-5 attributes for a transaction).
- [ ] Scaffold a simple ReactJS application that uses any dependencies you might want to include in your application
- [ ] Create a view for the list of transactions that you fetch from the mocked API. You can use Redux or any other tool for state management
- [ ] Add a button that on click updates the state of every other transaction to REFUNDED and make sure this is visually shown as well
- [x] Create a webpack build script that builds the application on ‘yarn start’
- [ ] Use styled-components to show the list of transactions in a nice way
- [ ] If you are doing this test remotely please upload your work, with instructions on how to run it on your BitBucket or GitHub account and share the link directly with us or the recruiter.
- [ ] Optional: create a test using your favourite js testing framework that in your opinion has value for this scenario

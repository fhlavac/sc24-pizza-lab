# Red Hat Summer Camp 2024 - React App

This repository includes a template for Red Hat Summer Camp 2024 UI project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Deploying application to surge

Build your application

```
npm run build
```
or with yarn
```
yarn build
```

Login to surge (use one email address and one password per domain)
```
npx surge login
```

CD to build directory and deploy your app with surge where $YOUR_DOMAIN is assigned domain if you don't know it, please ping us on slack or email

```
npx surge --domain $YOUR_DOMAIN
```

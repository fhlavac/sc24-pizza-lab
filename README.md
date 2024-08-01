# Red Hat Summer Camp 2024 - UI

[Link to presentation](https://docs.google.com/presentation/d/1S0iKKqqhfFdo3DuUtDsDnYRC3Y9pcku0VxfwNV6EhOs/edit?usp=sharing)

[Team project assignment](https://docs.google.com/presentation/d/16Vuoljh1DyzeiKJp6cd9rEFIR-r7KNtMibhS7HQKn50/edit?usp=sharing)

---
# React app guidelines:

This repository includes a template for Red Hat Summer Camp 2024 UI project

`master` branch - sample pizza app for the class

`starter` branch - starter app for the project

[How to fork the repository?](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)

[How to manage access to the fork?](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories) (for the team project)

## Available Scripts

To install the necessary dependencies, run:

### `npm install`

To start the application run:

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

# Red Hat Summer Camp 2024 - UI

[Link to presentation](https://drive.google.com/file/d/1TydEjvW8YRV5OdlXgXGh1SZIsb4r1GJm/view?usp=sharing)
---
## How to collaborate on the project:
- The whole team should work on a single fork owned by one of the members.
- The owner of the selected repo has to create a base for the project (use `master` or `starter`) and grant his teammates write access to the fork (GitHub/Settings/Collaborators/Add).
    - owner adds upstream repo reference: `git remote add upstream https://github.com/fhlavac/sc24-pizza-lab.git`
    - `git fetch upstream`
    - on the master branch do: `git reset --hard upstream master` or `starter`
    - push the changes
- Collaborators need to add the owner's fork as their upstream: `git remote add upstream https://github.com/<owners-username>/sc24-pizza-lab.git`.
- Verify configuration using `git remote -v`.
- Everyone creates a new branch locally for the project work (use `master` or `starter` as a base, name it for example <your-name>). DO NOT COMMIT AND PUSH TO `master`, just to the new branch.
- When you commit and push changes (`git push upstream <your-branch>` for collaborators and `git push origin <your-branch>` for the owner) to your branch, open a PR against the owner's `master`.
- If you need to update your branch with the new changes from `master`, use `git fetch upstream` (`origin` for the owner), switch to your branch if you are not on it already and use `git rebase upstream/master` (`origin` for the owner).
- Generally, avoid modifying the same sections of the code to prevent conflicts from appearing.
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

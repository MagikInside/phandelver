# Phandelver


Demo project built from initial [StackBlitz implementation](https://stackblitz.com/edit/phandelver). It consists of a support tool used to carry out battles with many NPCs in D&D, without having to keep exhaustive account of each character sheet and rolls.

This project uses **Angular 12** alongside **Angular Material** with a responsive design. The unit tests are carried out with **Jasmine / Karma** and the e2e tests with **Cypress**. **Cloud Firestore** is used for persistence and real-time updates. The demo version is stored in **Firebase**.

##Demo

[Here](https://phandelver-e0f36.web.app/) you can see a demo version of the project, hosted on Firebase. 
Roll results persist between sessions, and can be checked in real time from another browser or in incognito mode.

## Development server

Run `npm run start` to launch a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests using [Cypress](https://www.cypress.io/).

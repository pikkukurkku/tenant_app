# The tenant app

This project is meant for tenants, who want to register with Buena and search for a fitting rental apartment.

## Technologies used

- React.js
- React dom
- React router dom
- TypeScript
- Bootstrap
- @testing-library
- web-vitals

## The structure of the app

The app consists of 5 pages:

- Home.tsx
- Name.tsx
- Email.tsx
- Phone.tsx
- Salary.tsx
- Summary.tsx

## Features

- reusable component

The pages Name, Email, Phone, Salary are reusing a component (InputForm.tsx), only replacing targeted elements of that component.

- context file

The useProgress context file is responsible for managing the progress state across multiple components, in this case Name.tsx, Email.tsx, Phone.tsx and Salary.tsx.
This context allows to easily share the progress value and the function to update it (setProgress) throughout the app without having to pass props manually down the component tree.

- responsive

For larger screens and mobile

- animation

There is a minor CSS animation on the Homepage, when hovering over the company logo.

- home button 

Wherever you click on the company logo, you will get sent back to the Home view

## Backlog

- automated testing
- 


## Deployment and Demo

The app has been successfully deployed using Netlify.

[click here](https://tenant-app-b.netlify.app)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

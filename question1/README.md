# Question 1

- Please create a web application following below specs.
- Angular framework is preferred, but you can also use your preferred framework, or pure javascript/HTML5
- Page consist of 3 columns, first column has fixed width of 200px, last column has fixed width of 300px, the middle column expand/shrink to fill the remaining space of the page, and should be at least 100px. If window is smaller than 600px, show the scrollbar.
- In the first column, create an input field, where user can enter any number. If the value entered by users are not integer, round it to the nearest integer. If user enter negative values, replace it with 1.
- In the second column, show a drop down, which user can choose what calculation between “isPrime” and “isFibonacci”  he wants to calculate, default the value to isPrime. 
  - isPrime: calculate whether the input is a prime number, show true in Col3 if the number is prime, and false in the other case
  - IsFibanacci: calculate whether the input is a fibonacci number, show true in Col3 if the number is a fibonacci number, and false in the other case.
- Whenever the value in input box in column1, or the dropdown in column2 changes, execute the calculation accordingly, and show the result in column 3.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

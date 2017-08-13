LIQID React Components
============

Library of reusable components we use.

## Notes to use the library
* Just add following to your package.json:

```
"liqid-react-components": "https://github.com/LIQIDTechnology/liqid-react-components.git"
```

* Just find the component you want to add and include it like this:

```js
const {
    Select,
    SelectItem
} = require('liqid-react-components');
```

## Setup & Integration
* Clone repository
* ```npm install```

## General notes
* Each component has its own folder in ```{root}/src```
* Each component is integration tested and has a storybook entry
* Each component has it's own css file which is imported as CSS module
* JS and CSS is linted with ESLint / CSSLint
* Be sure to use valid JSDoc comments - it is linted as well

## Run components
* Run ```$ npm run storybook```
* Visit the in the terminal shown URL - you are ready to go!

## Workflow for a new component
* Create a new folder in ```{root}/src``` and name it after the component
* Add an ```index.js``` which holds the code for your component - you may use several JS-files but your entry point should always be the index.js
* Add a ```story.js``` and add stories for your new component - to test your component you will always use the storybook
* Write your component and export it the ES6 way
* Add an ```styles.css``` and import it in your component as CSS module
* Add a ```.test``` folder and add your integration tests - to run your tests run ```$ npm run test```
* Wen your component is done and fully tested, push your changes to a new branch and create a PR
* When the PR is merged release a new version tag and write a changelog

## Hints for Testers
* When you run the project locally (which is very easy to set up) and you miss something in the storybook - just add your own cases. Visit ```{root}/src/{component-of-your-choice}/story.js``` and see the already placed cases.

## Testing
* Testing works with Mocha.

```bash
$ npm run test
```

## Storybook

```bash
$ npm run storybook
```

## Linting

```bash
$ npm run lint:js
```

```bash
$ npm run lint:css
```

## Build for production

```bash
$ npm run build
```

## License

[MIT](LICENSE). Copyright (c) 2017 LIQID Asset Management GmbH.

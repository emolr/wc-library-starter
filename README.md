# WC-library-starter

Web component library starter provides a starting point for creating a web component library with typescript, SCSS, browser testing, style guide (storybook) and a mono repo structure for publishing components individually.


## Getting started

### Install dependencies and bootstrap

Start by downloading this repository

```sh
git clone https://github.com/emolr/wc-library-starter.git
```

Bootstrap project and make the first build

```sh
npm run bootstrap
```
This command will install dependencies in subfolders located in `/packages/*/package.json`

### Watch for changes and update storybook

* Add components in `/packages/*`, see the [example button component](https://github.com/emolr/wc-library-starter/tree/master/packages/button) to learn the component structure.
* `/packages/*/src/*.scss` files automatically generates `/packages/*/src/*.css.ts` exposing `export const style = css`\`css_from_scss...`, to be imported in components.
* Add new storybook stories in `/stories/*.stories.js`, see the [example story](https://github.com/emolr/wc-library-starter/blob/master/stories/button.stories.js) and learn more about [storybook](https://storybook.js.org/).

Transpile typescript, and generate styles on file changes
```sh
npm start
```

Build all components
```sh
npm run build
```

*This also starts the storybook on http://localhost:9001/*

### Running tests
Tests should be written in `.js` and be located in `/test/**/*.test.js`. Read more about the test suite on [open-wc](https://open-wc.org/testing/#example-tests)

Run all tests
```sh
npm run test
```

Run tests on test file changes
```sh
npm run test:watch
```

Run all test in es5 mode
```sh
npm run test:es5
```

Run tests on test file changes in es5 mode
```sh
npm run test:es5:watch
```

## Publish components on NPM

Lerna is integrated with the project, make sure all `/packages/*/package.json` files look correct and run:
```sh
npm run publish
```


## Differences from eg. [PWA-starter-kit](https://github.com/Polymer/pwa-starter-kit)

This starter kit does not provide the tools and setup for building an application to run itself but is targeted component libraries similar to the [Material web components](https://github.com/material-components/material-components-web-components) repository, to build a set of components to be used in applications and published via npm with a storybook serving as documentation.


## How to Contribute

Everyone is welcome to contribute to this project. The best way to
start is by checking our [open issues](https://github.com/emolr/wc-library-starter/issues),
[submit a new issue](https://github.com/emolr/wc-library-starter/issues/new?labels=bug) or
[feature request](https://github.com/emolr/wc-library-starter/issues/new?labels=enhancement),
participate in discussions, upvote or downvote the issues you like or dislike, send pull requests.

## Under early development
This project is a personal project with the goals of a component driven workflow without hassle while supporting multiple frameworks without writing framework specific code, but instead use state of the art tools to transpile, test, and document components.

Compiling / bundling of the components to be consumed must happen by the consumer and it is not expected for the components to work without a module bundler of some sort until the browsers support implicit node_modules import paths.

Read more about building and consuming web components on [LitElement](https://lit-element.polymer-project.org/).

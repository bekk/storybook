[![CircleCI](https://circleci.com/gh/bekk/storybook/tree/master.svg?style=svg)](https://circleci.com/gh/bekk/storybook/tree/master)

This component library uses https://github.com/storybooks/storybook.

Welcome!

This package is maintained by employees at Bekk.
Check us out at [bekk.no](https://bekk.no)!

You can see the app live at [storybook.bekk.no](http://storybook.bekk.no)

# How to use it

In your project, run:

```
npm i --save @bekk/storybook
```

This is how you use it

# Run it

Clone the the repository  
Go to root of project  
Run:

```bash
npm install
npm run storybook
```

Changed made to code will automatically be reflected in the app.

You can also create a static build:

```bash
npm run build
```

Go to folder `storyboard-static` and open index.html in browser.

# NB: TSconfig

Storybook requires a `tsconfig.json` in the `.storybook` directory to correctly compile TS on `npm run storybook`, while most text editors requires it at the root directory for correct linting. Thus the `"compilerOptions"` are to be defined in [./tsconfig.json](./tsconfig.json) and [.storybook/tsconfig.json](.storybook/tsconfig.json) extends this file and contains the relative paths to the `"baseUrl"`, `"rootDir"` and `"outDir"` as well as the `"include"`and `"exclude"` options.

NNB!! The `.storybook/tsconfig` is the correct file to use when compiling to create a build!

# Local testing in dependent project

In the root folder of the Storybook run:

```bash
npm run link
```

Then in the directory containing the `package.json` of the dependent project run:

```bash
npm link @bekk/storybook
```

This creates a symlink of your local version of the Storybook to the `node_modules` of the dependent project. Changes done to the Storybook will then be automatically reflected in the project importing it.

# Deployment and npm publish

To deploy and publish a new version you have to create a release / tag.

- The release have to conform to this regex `[1-9]+\.(0|[1-9]+)\.(0|[1-9]+)`. (For example `2.3.1`.
  )
- The release must use semantic versioning. ( https://semver.org/ )

This is important because the release tag will be the version of the new npm package.

If everything works:

- A updated version is deployed to https://storybook.bekk.no
- A new version of the npm package is published to https://www.npmjs.com/package/@bekk/storybook with version number equal to the release tag.

# Contribute

Clone the repository and make a pull request

## Thanks!

This repository is forked from https://github.com/sw-yx/react-typescript-storybook-starter  
Using https://github.com/storybooks/storybook

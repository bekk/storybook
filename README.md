[![CircleCI](https://circleci.com/gh/bekk/storybook/tree/master.svg?style=svg)](https://circleci.com/gh/bekk/storybook/tree/master)

This component library uses https://github.com/storybooks/storybook.

Welcome!

This package is maintained by employees at Bekk.
Check us out at [bekk.no](https://bekk.no)!

You can see the app live at [storybook.bekk.no](http://storybook.bekk.no)

# Usage

In your project, run:

```
npm install @bekk/storybook
```

This will fetch and install the files in your `node_modules` folder. You can then import the files you require as you please.

## React Components

You can import the components you need as named imports.

```js
import { DatePicker, TextField } from '@bekk/storybook';
```

For a full list of available components, please refer to [the documentation](http://storybook.bekk.no) or [source code](https://github.com/bekk/storybook/blob/master/src/index.tsx)

## Usage with Webpack, Parcel et al

Most popular web application bundler provide ways to load CSS files into their dependency graphs. Parcel lets you do this by default, and Webpack requires a loader ([see this article on how to set that up](https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a)). If you're using `create-react-app`, this is already set up for you.

Once you can specify CSS files as dependencies, you might want to include the following ones:

### Color variables

```js
import '@bekk/storybook/build/lib/constants/styles.css';
```

This will set all our colors as CSS variables globally. To see which ones are available, please see [the source code](https://github.com/bekk/storybook/blob/master/src/constants/styles.css).

You can also access (at least some of) these variables from JavaScript (or TypeScript):

```js
import * as colors from '@bekk/storybook/build/lib/constants/styles';
```

### Fonts

```js
import '@bekk/storybook/build/lib/fonts/webfonts.css';
```

This will load our web fonts, and make them available to use in your CSS. Note that font weights aren't supported, so you have to specify different font-families instead. The ones that are available are:

- `FFDINWebProLight` - our basic body text font (sans-serif).
- `DINW01LightItalic` - same as above, but italic. Use instead of `font-style: italic`
- `DINW01Regular` - same as above, but bold. Use instead of `font-weight: bold`
- `DINW01Medium` - same as above, but black (super-bold).
- `NewZaldBook` - our large heading font (serif)

# Development

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

# Note: TSconfig

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

To remove the symlink from the dependent project run:

```bash
npm unlink --no-save @bekk/storybook
```

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

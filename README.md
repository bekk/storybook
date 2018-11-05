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

# Deployment and npm publish

To deploy and publish a new version you have to create a release / tag.     
 - The release have to conform to this regex ```[1-9]+\.(0|[1-9]+)\.(0|[1-9]+)```.  (For example ```2.3.1```.
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

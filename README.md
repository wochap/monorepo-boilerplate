# Monorepo example [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

> A Monorepo with multiple packages and a shared build, test, and release process. Inspired by https://github.com/Hy-Vee/lerna-yarn-workspaces-monorepo

-   🐉 [Lerna](https://lernajs.io/)  - The Monorepo manager
-   📦 [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)  -  Sane multi-package management
-   🚀 [Vue](https://vuejs.org/)  - The Progressive JavaScript Framework
-   🛠 [Babel](https://babeljs.io/)  -  Compiles next-gen JavaScript
-   📖 [Storybook](https://storybook.js.org/) - UI Component Environment
-   🃏 [Jest](https://jestjs.io/)  -  Unit/Snapshot Testing
-   🔦 [Eslint](https://eslint.org/) + [Prettier](https://prettier.io/)
-   🔦 [Commitlint](https://commitlint.js.org)
-   [Sass](https://sass-lang.com/) + [PostCSS](https://postcss.org/)
-   [Vue Test Utils](https://vue-test-utils.vuejs.org/)
-   [Vue CLI](https://cli.vuejs.org/)

## Usage

-   `yarn` - Install dependencies
-   `yarn bootstrap` - Link local packages together and install remaining package dependencies.
-   `yarn new` - Generate basic boilerplate for new package.
-   `yarn dev` - Run "yarn dev" in every package.
-   `yarn build` - Run "yarn build" in every package.
-   `yarn test:unit` - Run "yarn test:unit" in every package.
-   `yarn lint` - Lints and fixes files.
-   `yarn prettier` - Prettier and fixes files.
-   `yarn commit` - Commit your changes using [commitizen](https://github.com/commitizen/cz-cli).

## Releasing

-   `yarn new-version` - Bump version of packages changed since the last release and generate changelog.
-   `yarn release` - Publish packages to npm

## Lerna

-   `lerna changed` - Show which packages have changed.
-   `lerna diff` - Show specifically what files have cause the packages to change.

## Hooks

// TODO:

## Commit message format
```
feat(elements-table): add hat wobble
^--^ ^------------^   ^------------^
|    |                |
|    |                +-> Summary in present tense.
|    +------------------> Scope: folder name of package in kebab-case (e.g. elements-table)
|
+-----------------------> Type: chore, docs, feat, fix, refactor, style, or test.
```

## Troubleshooting

### Commit without validation
```
git commit -m "..." --no-verify
```

### Linking

When linking inside of the Monorepo, everything works as expected. If you are trying to consume packages from this Monorepo _in a different application_ locally, using `npm link` or `yarn link` [does not work as expected](https://github.com/yarnpkg/yarn/issues/5538). However, we have a workaround for the time being.

1. Run `yarn build`
1. Change the `package.json` of the consumer from `$YOUR_PACKAGE_NAME` (which lives inside the monorepo) to `file:./../monorepo/packages/$YOUR_PACKAGE_NAME`
1. Run `rm -rf node_modules && yarn` in the consumer
1. 🎉

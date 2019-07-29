# Monorepo example [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

> Monorepo example

## Usage

-   `npm install`
-   `lerna bootstrap` - Link local packages together and install remaining package dependencies.
-   `npm run commit` - Commit your changes using [commitizen](https://github.com/commitizen/cz-cli).

## Releasing

-   `npm run new-version` - Bump version of packages changed since the last release and generate changelog.
-   `npm run release` - Publish packages to npm

## Lerna

-   `lerna changed` - Show which packages have changed.
-   `lerna diff` - Show specifically what files have cause the packages to change.

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

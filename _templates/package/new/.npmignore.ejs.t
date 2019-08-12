---
to: packages/<%= h.changeCase.paramCase(packageName) %>/.npmignore
---
dist/*
!dist/<%= h.changeCase.paramCase(packageName) %>.umd.min.js
src/
.babelrc.js
.gitignore
CHANGELOG.md
jest.config.js
README.md
vue.config.js

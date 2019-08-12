---
to: packages/<%= h.changeCase.paramCase(packageName) %>/package.json
---
{
  "name": "@monorepo-boilerplate/<%= h.changeCase.paramCase(packageName) %>",
  "version": "0.0.1",
  "description": "",
  "main": "dist/<%= h.changeCase.paramCase(packageName) %>.umd.min.js",
  "scripts": {
    "dev": "vue-cli-service build --target lib --name <%= h.changeCase.paramCase(packageName) %> ./src/main.js --formats umd-min --mode development --watch",
    "build": "vue-cli-service build --target lib --name <%= h.changeCase.paramCase(packageName) %> ./src/main.js --formats umd-min --report --color",
    "test:unit": "vue-cli-service test:unit",
    "lint": "vue-cli-service lint",
    "commit": "git-cz"
  },
  "vuePlugins": {
    "resolveFrom": "../../"
  },
  "dependencies": {},
  "devDependencies": {},
  "keywords": [],
  "repository": {
    "type": "git",
    "url": "https://github.com/wochap/monorepo-boilerplate.git",
    "directory": "packages/<%= h.changeCase.paramCase(packageName) %>"
  },
  "author": "Gean <gean.marroquin@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/wochap/monorepo-boilerplate/issues"
  },
  "homepage": "https://github.com/wochap/monorepo-boilerplate/tree/master/packages/<%= h.changeCase.paramCase(packageName) %>#readme",
  "publishConfig": {
    "access": "public"
  }
}

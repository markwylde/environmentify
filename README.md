# environmentify
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/markwylde/environmentify?style=flat-square)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/markwylde/environmentify?style=flat-square)](https://github.com/markwylde/environmentify/blob/master/package.json)
[![GitHub](https://img.shields.io/github/license/markwylde/environmentify?style=flat-square)](https://github.com/markwylde/environmentify/blob/master/LICENSE)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)

Replace process.env environment variables when using browserify.

## Installation
```bash
npm install --save-dev environmentify
```

## Example
```bash
export TEST=hello
browserify -t environmentify -o bundled.js index.js
```

```javascript
// index.js
console.log(process.env.TEST)
console.log(process.env['TEST'])
console.log(process.env.NOTHING)
```

```javascript
// bundled.js
console.log("hello")
console.log("hello")
console.log(undefined)
```

# @libchrono/core

[![npm version](https://badge.fury.io/js/%40libchrono%2Fcore.svg)](https://badge.fury.io/js/%40libchrono%2Fcore)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
![](coverage/badge.svg)

@libchrono/core is a library for parsing and validating strings representing durations of time. It provides a convenient way to parse strings like "1w 2h" into `Duration` objects, and provides convenient functions for performing basic math operations on those objects. So whether you need to parse duration strings, or perform calculations on them, @libchrono/core is the perfect library for your project.
## Installation

To use @libchrono/core in your project, install it via npm:

```
npm install @libchrono/core
```

or yarn:

```
yarn add @libchrono/core
```

## Usage

Parse duration literal to Duration object:

```js
const { DurationUtils } = require('@libchrono/core');

const duration = DurationUtils.parse('1w 2h');

console.log(duration);
/**
 * Output:
 * {
 *    timestamp: 612000000,
 *    toPlainDuration: () => PlainDuration,
 *    toLiteral: () => string,
 * }
 */
```

Validate duration literal

```js
const { DurationUtils } = require('@libchrono/core');

const duration1 = DurationUtils.validate('1w 2h');

console.log(duration1.isValid); // Output: true

const duration2 = DurationUtils.validate('1w 1q');

console.log(duration2.isValid); // Output: false

const duration3 = DurationUtils.validate('1d 1w');

console.log(duration3.isValid); // Output: false
```

## Todo

- support for arithmetic operations in Duration object
- support for arithmetic operations in duration literal
- simple format function to display duration literal from timestamp

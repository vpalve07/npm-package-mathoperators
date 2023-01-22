# @vinayakpalve/mathoperators

## Package Link
https://www.npmjs.com/package/@vinayakpalve/mathoperators

"The package '@vinayakpalve/mathoperators' can perform ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION, and SORTING operations on n numbers at a time."

## Install

```
$ npm i @vinayakpalve/mathoperators
```

## Usage

```js
const operators = require("@vinayakpalve/mathoperators");

let numbers = [12,302,1,2,3,4,7]

//=> For Addition of n Numbers
let output = operators.add(numbers) 
console.log(output) //=> 331

//=> For Substraction of n Numbers
let output = operators.sub(numbers) 
console.log(output) //=> -307

//=> For Multiplication of n Numbers
let output = operators.mul(numbers) 
console.log(output) //=> 608832

//=> For Division of n Numbers
let output = operators.div(numbers) 
console.log(output) //=> 0.00023651844843897824

//=> For getting Remainder of two integers that have been divided
let numbers = [302,12]
let output = operators.modulus(numbers)
console.log(output) //=> 2

//=> For calculating first operand to the power of the second operand
let numbers = [2,12]
let output = operators.pow(numbers)
console.log(output) //=> 4096

//=> For Sorting of n Numbers
let output = operators.sort(numbers) 
console.log(output) //=> [1, 2, 3, 4, 7, 12, 302]


```
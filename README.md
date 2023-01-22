# @vinayakpalve/mathoperators


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

//=> For Substraction of n Numbers
let output = operators.sub(numbers) 

//=> For Multiplication of n Numbers
let output = operators.mul(numbers) 

//=> For Division of n Numbers
let output = operators.div(numbers) 

//=> For Sorting of n Numbers
let output = operators.sort(numbers) 

console.log(output)

```
# Lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install nathansmith-ux/lotide`

**Require it:**

`const _ = require('nathansmith-ux/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

### head Function
```javascript 
_.head([1, 2, 3, 4])
// Returns [1]
```
*
### tail Function
```javascript 
_.tail([1, 2, 3, 4])
// Returns [2, 3, 4]
```
*
### without Function
```javascript 
_.without(["hello", "world", "lighthouse"], ["lighthouse"])
// Returns ["hello", "world"]
```
*
### flatten Function
```javascript 
_.flatten([1, 2, [3, 4], 5, [6]])
// Returns [1, 2, 3, 4, 5, 6]
```
*
### middle Function
```javascript 
// Odd Numbered Arrays
_.middle([1, 2, 3, 4, 5])
// Returns [3]

// Even Numbered Arrays
_.middle([1, 2, 3, 4, 5, 6])
// Returns [3, 4]
```
*
### countOnly Function
```javascript 
_.countOnly([])
```
*
### countLetters Function
```javascript 
_.countLetters([])
```
*
### letterPositions Function
```javascript 
_.letterPositions([])
```
*
### findKeyByValue Function
```javascript 
_.findKeyByValue([])
```
*
### map Function
```javascript 
_.map([])
```
*
### takeUntil Function
```javascript 
_.takeUntil([])
```
*
### findKey Function
```javascript 
_.findKey([])
```
*
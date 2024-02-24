function solve(inputArray, indexNum) {
    'use strict'
    const outputArray = [];

    for (let index = 0; index < inputArray.length; index+=indexNum) {
         outputArray.push(inputArray[index])
    }
    return outputArray
}

function solve(inputNames) {
    'use strict';

    inputNames.sort((a, b) => a.localeCompare(b))

    for (let index = 1; index <= inputNames.length; index++) {
        console.log(`${index}.${inputNames[index - 1]}`) 
    }
}

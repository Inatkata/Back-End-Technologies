function solve(text, word) {
    let censored = text.replace(new RegExp(word, 'g'), repeat(word.length));
    console.log(censored);
}

function repeat(length) {
    return '*'.repeat(length);
}

solve('A small sentence with some words',

'small')
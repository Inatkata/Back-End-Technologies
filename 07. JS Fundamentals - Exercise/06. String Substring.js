function solve( word, sentence){
    const hasWord = sentence
    .toLowerCase()
    .split(' ')
    .includes(word)
    if(hasWord) {
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }

}
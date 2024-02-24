function solve(words, sentence){
     
    const separatedWords = words.split(', ')
    const sentenceWords = sentence.split(' ')
    let result = '';
    for(const sentenceWord of sentenceWords) {
        if (sentenceWord[0] ==='*') {
            const correspondingWord = separatedWords.find(x => x.length === sentenceWord.length)
            result += `${correspondingWord} ` 
        } else {
            result += `${sentenceWord} `
        }
    }
    console.log(result)
}
function solve(input){
    let total = 0;
     let AllDigitsAreTheSame = true
     let firstDigit = input % 10
    while (input > 0){
        let currDigit =(input % 10)
        if(firstDigit != currDigit){
            AllDigitsAreTheSame = false
        }
        input = Math.floor(input / 10)
        total += currDigit
    }
    console.log(AllDigitsAreTheSame)
    console.log(total)
}

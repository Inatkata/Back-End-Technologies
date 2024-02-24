function solve(input) {
        let evenSum = 0
        let oddSum = 0

    while(input > 0) {
      const element = input % 10;  
        
        
        if (element % 2 === 0) {
        evenSum += element
    } else {
        oddSum += element
    }
    input = Math.floor(input / 10)
}
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
solve(1000435)
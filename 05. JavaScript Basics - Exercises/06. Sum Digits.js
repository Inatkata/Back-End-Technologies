function solve(num){
    let temp = 0
    while(num > 0){
        temp += num % 10
        num = Math.floor(num / 10)
    }
    console.log(temp)
}

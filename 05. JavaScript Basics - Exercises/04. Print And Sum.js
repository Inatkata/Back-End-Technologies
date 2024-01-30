function solve(start, end){
    let total = 0
    let message = ''
    for(let i = start; i <= end; i++){
        total += i
message += `${i} `
      
    }
    console.log(message)
    console.log(`Sum: ${total}`)
}

function solve(input) {
    input.sort((a, b) => a - b)

    const result = []

    while(input.length > 0) {
        const firstElement = input.shift()
        const lastElement = input.pop()

        result.push(firstElement)
        if(lastElement) {
            result.push(lastElement)
        }
    }
    return result
}
function sum(n, input)
{
    let reverseArray = []
    for(let i = 0; i < n; i++)
    {
        reverseArray.unshift(input[i])
    }
    console.log(reverseArray.join(" "))
}
function solve(input){
    if(input % 4 == 0){
        if(input % 100 == 0 && input % 400 != 0){
            console.log("no")
        }
        else{
            console.log("yes")
        }
    }
    else{
        console.log("no")
    }
}

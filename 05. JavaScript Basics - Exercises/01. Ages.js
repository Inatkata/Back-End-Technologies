function solve(input){
    let typeOfHuman
    if(input >= 0 && input <= 2){
    typeOfHuman = "baby"
    }
    else if(input > 2 && input <= 13){
        typeOfHuman = "child"
    }
    else if(input > 13 && input <= 19){
        typeOfHuman = "teenager"
    }
    else if(input > 19 && input <= 65){
        typeOfHuman = "adult"
    }
    else if(input > 65){
        typeOfHuman = "elder"
    }
    else{
        typeOfHuman = "out of bounds"
    }
    console.log(typeOfHuman)
}

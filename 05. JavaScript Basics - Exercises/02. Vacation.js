function solve(numOfPeople, typeOfPeople, dayOfTheWeek){
    let pricePP 
    let totalPrice
    let discount
    if(typeOfPeople == "Students"){
        if( dayOfTheWeek == "Friday"){
            pricePP = 8.45
        }
        else  if( dayOfTheWeek == "Saturday"){
            pricePP = 9.80
        }
        else  if( dayOfTheWeek == "Sunday"){
            pricePP = 10.46
        }
        if(numOfPeople >= 30){
            totalPrice = (numOfPeople * pricePP) * 0.85
        }
        else{
            totalPrice = numOfPeople * pricePP
        }
    }
    else if(typeOfPeople == "Business"){
        if( dayOfTheWeek == "Friday"){
            pricePP = 10.90
        }
        else  if( dayOfTheWeek == "Saturday"){
            pricePP = 15.60
        }
        else  if( dayOfTheWeek == "Sunday"){
            pricePP = 16
        }
        if(numOfPeople >= 100){
            numOfPeople = numOfPeople - parseInt(numOfPeople / 10)
            totalPrice = numOfPeople * pricePP
        }
        else{
            totalPrice = numOfPeople * pricePP
        }
}
else if(typeOfPeople == "Regular"){
    if( dayOfTheWeek == "Friday"){
        pricePP = 15
    }
    else  if( dayOfTheWeek == "Saturday"){
        pricePP = 20
    }
    else  if( dayOfTheWeek == "Sunday"){
        pricePP = 22.50
    }
    if(numOfPeople >= 10 && numOfPeople <= 20){
        totalPrice = (numOfPeople * pricePP) * 0.95
    }
    else{
        totalPrice = numOfPeople * pricePP
    }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

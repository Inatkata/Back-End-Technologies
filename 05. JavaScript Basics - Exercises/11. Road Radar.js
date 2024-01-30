function solve( km, area){
    let maxSpeed = 0
    switch(area){
        case 'motorway':
            maxSpeed = 130
            if(km <= maxSpeed){
                console.log(`Driving ${km} km/h in a ${maxSpeed} zone`)
            }
            else if(km > maxSpeed && km <= maxSpeed + 20){
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`)
            }
            else if(km > maxSpeed && km <= maxSpeed + 40){
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`)
            }
            else {
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`)
            }
            break
            case 'interstate':
            maxSpeed = 90
            if(km <= maxSpeed){
                console.log(`Driving ${km} km/h in a ${maxSpeed} zone`)
            }
            else if(km > maxSpeed && km <= maxSpeed + 20){
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`)
            }
            else if(km > maxSpeed && km <= maxSpeed + 40){
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`)
            }
            else {
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`)
            }
            break
            case 'city':
            maxSpeed = 50
            if(km <= maxSpeed){
                console.log(`Driving ${km} km/h in a ${maxSpeed} zone`)
            }
            else if(km > maxSpeed && km <= maxSpeed + 20){
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`)
            }
            else if(km > maxSpeed && km <= maxSpeed + 40){
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`)
            }
            else {
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`)
            }
            break
            case 'residential':
            maxSpeed = 20
            if(km <= maxSpeed){
                console.log(`Driving ${km} km/h in a ${maxSpeed} zone`)
            }
            else if(km > maxSpeed && km <= maxSpeed + 20){
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`)
            }
            else if(km > maxSpeed && km <= maxSpeed + 40){
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`)
            }
            else {
                console.log(`The speed is ${km - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`)
            }
            break
    }
    
}

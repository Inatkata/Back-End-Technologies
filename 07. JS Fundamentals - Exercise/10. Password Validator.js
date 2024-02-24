function solve(pass) {

    let isValidLength = checkValidPassLength(pass)
    let isOnlyLettersAndDigits = checkOnlyLettersDigits(pass)
    let isMin2digits = checkIfHasTwoDigits(pass)

    if(isValidLength && isOnlyLettersAndDigits && isMin2digits){
        console.log('Password is valid')
    }

     function checkValidPassLength(pass) {
        if(pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log('Password must be between 6 and 10 characters')
            return false;
        }
     }
     function checkOnlyLettersDigits(pass) {
        for( let curChar of pass) {
            let code = curChar.charCodeAt(0);
            if (
                !((code >= 48 && code <= 57) ||
                (code >= 65 && code <= 90) ||
                (code >= 97 && code <= 122))
                ){
                    console.log('Password must consist only of letters and digits')
                    return false;
                }
        }
        return true;
     }
     function checkIfHasTwoDigits(pass) {
        let digit = 0
        for (let curChar of pass)
        {
            let code = curChar.charCodeAt(0)
            if(code >= 48 && code <= 57) {
                digit++;
            }
        }
        if (digit < 2) {
            console.log('Password must have at least 2 digits')
            return false;
        } else {
            return true;
        }
     }  

} 
function solve(num1, num2, operator, result){
    if(operator == '+'){
result = num1 + num2
    }
    else if(operator == '-'){
        result = num1 - num2
            }
            else if(operator == '*'){
                result = num1 * num2
                    }
                    else if(operator == '/'){
                        result = num1 / num2
                            }
                            else if(operator == '%'){
                               result = num1 % num2
                                    }
                                    else if(operator == '**'){
                                        result = num1 ** num2
                                             }
                                    console.log(result)
}

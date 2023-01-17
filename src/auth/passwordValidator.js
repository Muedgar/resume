function CheckPassword(val) {
    /*
    Password must be more than 6 characters and include a capital letter, small letter and a number.
    */
                let allowedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
                let allowedNumbers = ['1','2','3','4','5','6','7','8','9','0']
    
                
                if(val.length<=6) {
                    return ["line-through",0];
                }else {
                    
                    // check capital letter
                    let foundCapital = 0;
                    for(let i=0;i<val.length;i++) {
                        if(foundCapital===0) {
                            for(let j=0;j<allowedLetters.length;j++) {
                            if(String(val[i])===allowedLetters[j].toUpperCase()) {
                                foundCapital = 1;
                                break;
                            }
                        }
                        }else {
                            break;
                        }
                    }
                    if(foundCapital === 0) {
                        return ["line-through",0];
                    }else {
                         // check small letter
                         let foundSmall = 0;
                        for(let i=0;i<val.length;i++) {
                            if(foundSmall===0) {
                                for(let j=0;j<allowedLetters.length;j++) {
                                if(String(val[i])===allowedLetters[j]) {
                                    foundSmall = 1;
                                    break;
                                }
                            }
                            }else {
                                break;
                            }
                        }
                        if(foundSmall === 0) {
                            return ["line-through",0];
                        }else {
                          // check number
                         let foundNumber = 0;
                         for(let i=0;i<val.length;i++) {
                            if(foundNumber===0) {
                                for(let j=0;j<allowedNumbers.length;j++) {
                                if(String(val[i])===allowedNumbers[j]) {
                                    foundNumber = 1;
                                    break;
                                }
                            }
                            }else {
                                break;
                            }
                        }
                        if(foundNumber === 0) {
                            return ["line-through",0];
                        }else {
                            return ["none",1];
                        }
                        }
                    }
    
                   
                }
    
            }

            export default CheckPassword;
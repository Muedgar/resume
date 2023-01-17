function CheckUsername(valString) {
    let val = valString.split('');
        ///Username can only include alphabets, a period and underscore.
        // usernameElements[1].style.textTransform = "line-through";
        // usernameElements[1].style.textTransform = "none";
        let allowedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.','_']
        let result = 0;
        for(let i=0;i<val.length;i++) {
            let match = 0;
            for(let j=0;j<allowedCharacters.length;j++) {
                if(String(val[i]).toLowerCase() === allowedCharacters[j].toLowerCase()) {
                    match++;
                    break;
                }
            }
            if(match===1) {
                result++;
            }
        }
        if(result !== val.length) {
            return ["line-through",0];
        }else {
            
            return ["none",1];
        }
   }

   export default CheckUsername;
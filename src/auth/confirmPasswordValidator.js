function CheckConfirmPassword(password, confirmPassword) {
    if(password !== confirmPassword) {
        return ["line-through",0]
    }else {
        return ["none",1]
    }
}


export default CheckConfirmPassword;
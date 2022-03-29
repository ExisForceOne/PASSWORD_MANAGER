const validators = {
    validateEmail(email){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    },
    validatePassword(password){
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*.,?&])[A-Za-z\d@$!%.,*?&]{10,}/.test(password)
        
    }
}

export default validators
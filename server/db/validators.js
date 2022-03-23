const validators = {
    validateEmail(email){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    },
}

export default validators
const validators = {
  validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  },
  validatePassword(password) {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*.,?&])[A-Za-z\d@$!%.,*?&]{10,}/.test(
      password
    );
  },
  validateHSL(hsl) {
    return /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/.test(hsl);
  },
  maxNameLenght(name) {
    return name.length <= 18;
  },
};

export default validators;

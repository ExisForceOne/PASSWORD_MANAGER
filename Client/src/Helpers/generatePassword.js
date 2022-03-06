function getRandom(maxValue){
    return Math.floor(Math.random()*maxValue);
}

function setCharacters(includeChars){
    let availableCharacters = '';

    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = lower.toUpperCase();
    const number = '0123456789';
    const special = '!@#$%*,.?';

    availableCharacters=`
                        ${includeChars.lower ? lower : ''}
                        ${includeChars.upper ? upper : ''}
                        ${includeChars.number ? number : ''}
                        ${includeChars.special ? special : ''}
                        `


    return availableCharacters.replace(/\s/g, "") //remove whitespace
}



export default function generatePassword(includeChars, passLength){

    const availableCharacters = setCharacters(includeChars)

    let password = '';

    for (let i=0; i<passLength; i++){
        password+= availableCharacters[getRandom(availableCharacters.length)];
    }

    return password
}
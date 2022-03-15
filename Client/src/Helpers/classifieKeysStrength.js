



function lengthWeekness(password){
    if (password.length <=5){
        return {
            message: 'Password is to short!',
            value: 40,
        }
    }
    else if (password.length <=10){

        return {
            message: 'Password should be longer',
            value: 15,
        }
    }
}

function commonPasswordWeekness(password){
    const commonPasswordList = ['123456','123456789','picture1','password','12345678','111111','123123','12345','1234567890','senha','1234567','qwerty','abc123','Million2','000000','1234','iloveyou','aaron431','password1','QWER123!@#']
    if (commonPasswordList.includes(password)){
        return {
            message: 'Password is one of the most common password!',
            value: 40,
        }
    }
}

function charTypeWeekness(password){
    const typesList = [
        {
            reg: /[a-z]/g,
            type: 'lowercase letters',
        },
        {
            reg: /[A-Z]/g,
            type: 'uppercase letters',
        },
        {
            reg: /[0-9]/g,
            type: 'numbers',
        },
        {
            reg: /[!@#$%*,.?]/g,
            type: 'special characters'
        },
    ];

    const charWeekness = [];
    typesList.forEach(item => {   
          charWeekness.push(lookForChar(password,item.reg,item.type));  
        });
    
    return charWeekness;
}

function lookForChar(password,reg,charType){
    const match = password.match(reg) || [];
    if (match.length === 0){
        return {
            message: `Password dont have ${charType}!`,
            value: 20,
        }
    } else if (match.length<=2){
        return {
            message : `Password should have more ${charType}`,
            value: 5,
        }
    }
}

function charRepeatWeekness(password){
    const reg = /(.)\1{1,1}/g
    const match = password.match(reg) || [];

    if (match.length > 0){
        return {
            message: 'Password have reapeated character!',
            value: match.length*10,
        }
    }
}


function setStrengthRating(strengthPoints) {

    if(strengthPoints===100)  {
        return 'strong'
    } else if (strengthPoints>=80){
        return 'good'
    } else if (strengthPoints>=40){
        return 'moderate'
    } else {
        return 'weak'
    }
}


function setStrength(key, weeknessList){
    let strengthPoints = 100;
    const weekness = [];


    weeknessList.forEach(x => {
        if (x == null) return;
        weekness.push(x.message)
        strengthPoints -= x.value;
    });

    key.strength = {
        points: strengthPoints,
        rating: setStrengthRating(strengthPoints),
        weekness: weekness, 
    }
}


function checkPasswordStrength(item){
    const weeknessList = []
    weeknessList.push(commonPasswordWeekness(item.password));
    weeknessList.push(lengthWeekness(item.password));
    weeknessList.push(charRepeatWeekness(item.password));
    weeknessList.push(...charTypeWeekness(item.password));

    setStrength(item,weeknessList);
}


function classifieKeysStrength(data){

    data.forEach(item=> checkPasswordStrength(item))

    return {
        weakKeys: data.filter(item => item.strength.rating === 'weak'),
        moderateKeys: data.filter(item => item.strength.rating === 'moderate'),
        goodKeys: data.filter(item => item.strength.rating === 'good'),
        strongKeys: data.filter(item => item.strength.rating === 'strong'),

    }
}

export default classifieKeysStrength
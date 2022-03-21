



function lengthWeekness(password){
    if (password.length <=5){
        return {
            message: 'Too short!',
            value: 40,
        }
    }
    else if (password.length <=10){

        return {
            message: 'Should be longer',
            value: 15,
        }
    }
}

function commonPasswordWeekness(password){
    const commonPasswordList = ['123456','123456789','picture1','password','12345678','111111','123123','12345','1234567890','senha','1234567','qwerty','abc123','Million2','000000','1234','iloveyou','aaron431','password1','QWER123!@#']
    if (commonPasswordList.includes(password)){
        return {
            message: 'One of the most popular password!',
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
            message: `No ${charType}!`,
            value: 20,
        }
    } else if (match.length<=2){
        return {
            message : `More ${charType}`,
            value: 5,
        }
    }
}

function charRepeatWeekness(password){
    const reg = /(.)\1{1,1}/g
    const match = password.match(reg) || [];

    if (match.length > 0){
        return {
            message: 'Reapeated character!',
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
        Weak: data.filter(item => item.strength.rating === 'weak'),
        Moderate: data.filter(item => item.strength.rating === 'moderate'),
        Good: data.filter(item => item.strength.rating === 'good'),
        Strong: data.filter(item => item.strength.rating === 'strong'),

    }
}

export default classifieKeysStrength
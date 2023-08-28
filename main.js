// 1 задание
function equal(massiv1, massiv2) {
    if (massiv1.length !== massiv2.length) {
        console.log(false);
        return false;
    }

    for (let i = 0; i < massiv1.length; i++) {
        if (massiv1[i] !== massiv2[i]) {
            console.log(false);
            return false;
        }
    }

    console.log(true);
    return true;
}

let massiv1 = [1, 3, 5, 8];
let massiv2 = [1, 3, 5, 2];
equal(massiv1, massiv2);
// 2 задание
function pow(number, degree) {
    return Math.pow(number, degree)
}
const result = pow (2, 3);
console.log(result);

// 3 задание

function countChar(inputString){
const length = inputString.length;
console.log(`Длина строки: ${length}`);
}
const myString = "hello";
countChar(myString);

// доп 1 
const inputArray = [1, 1, 1, 2, 3, 5, 5, 7, 8, 3];


const uniqueSet = new Set(inputArray);


const uniqueArray = Array.from(uniqueSet);


uniqueArray.sort((a, b) => a - b);

console.log(uniqueArray); // Выведет: [1, 2, 3, 5, 7, 8]
 // доп 2
 const sendSMS = (phoneNumber, message) => {
    // Здесь можно добавить логику для отправки SMS-сообщения
    console.log(`Отправлено SMS на номер ${phoneNumber}: "${message}"`);
};

// 2 доп 
 const sms = (phone,text) => {
    alert(phone, text)
}

sms("+996500200806  Naelya")

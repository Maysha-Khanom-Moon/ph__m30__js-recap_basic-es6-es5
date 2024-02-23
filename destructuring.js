// -------- object destructuring --------

const actor = {
    name: 'Moon',
    age: 21,
    phone: '01874898973',
    money: 1234565434565
}

// if right side is an object left side of destructuring will be object as well

// use property name as a variable that contains the property value
const {phone, name: nam} = actor;

console.log(phone);
console.log(nam);
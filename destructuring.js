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



// -------- array destructuring ---------
// if right side is an array left side of destructuring will be array as well

const numbers = [45, 99];
const [first, second] = numbers;

// to skip elements
const [x, , y] = [4, 5, 4];

console.log(first);
console.log(second);

//
function doubleThem(a, b) {
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(x, y);
console.log(prothom, ditiyo);
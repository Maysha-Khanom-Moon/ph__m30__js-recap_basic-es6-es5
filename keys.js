const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

console.log(glass, '\n');

// return property names of object as an array
const keys = Object.keys(glass);
console.log(keys, '\n');


// return property values of object as an array
const values = Object.values(glass);
console.log(values, '\n');


// return pairs of object as an array --> 2D array
// [key, value] --> pair
const pairs = Object.entries(glass);
console.log(pairs, '\n');


// delete object property
console.log(glass);
delete glass.isCleaned;
console.log(glass, '\n');


// delete property and store at the new object by destructuring
const {name, ...shortGlass} = glass;
console.log(shortGlass, '\n');


// freeze --> after that no change will occurred in the object
// no updating, inserting, deleting
glass.name = 'glass';
console.log(glass);
Object.freeze(glass);

glass.name = 'Glass';
delete glass.color;
glass.source = 'Bangladesh';
console.log(glass, '\n');


// seal --> after that no inserting, no deleting but can be updated
console.log(shortGlass);
Object.seal(shortGlass);

shortGlass.name = 'shortGlass';
delete shortGlass.color;
shortGlass.color = 'blue';
console.log(shortGlass);
const numbers = [1, 6, 8, 4];

// for(let i = 0; i<numbers.length; i++)
// while

// for-of: array, string
for (const i of numbers) {
    console.log(i);
}

for (const i of 'abcdef') {
    console.log(i);
}


const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
// for-in: object --> keys
/**
 * here:
 *  i --> is a variable which contain the key name
 *        so, we used []
 * 
 * 1. obj[key name]
 * 2. obj.key
 */
for (const i in glass) {
    console.log(i, ':', glass[i]);
}
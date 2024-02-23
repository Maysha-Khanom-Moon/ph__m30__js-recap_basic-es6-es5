/**
 * var: no reason to use var
 * let: allow it to reassign
 * const: do not allow it to reassign
 */

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

const array = [1, 2, 3, 4];
// array = [4, 5, 6, 7];

array[1] = 55;
console.log(array);

array.push(3, 4, 5);
console.log(array);
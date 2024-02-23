// explicit --> return keyword thakbe
const who = (name) => {return name};
console.log(who('maysha khanom moon'));


// implicit --> return keyword na dileo return er kaj kore
const getThird = (arr) => arr[2];
console.log(getThird([1, 2, 3, 4, 5, 6]));


// single parameter --> no need to give any '()'
const getOne = arr => arr[0];
console.log(getOne(['moon', 'mk', 'khanom']));


// no parameter
const getPI = () => console.log(Math.PI);
getPI();


// multiline works --> explicit return
const doMath = (a, b) => {
    const sum = a+b;
    const multi = a*b;
    const result = sum + multi;
    return result;
}
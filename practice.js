// 1.
let multi = (n1, n2, n3) => n1*n2*n3;

console.log(multi(3, 4, 5));


// 2.
const str = `I am a web developer.
I love to code.
I love to eat biryani.`
console.log(str);


// 3. 
const add = (n1, n2=5) => n1 + n2;
console.log(add(5));


// 4.
const arr1 = ['moon', 'mkm', 'tithy', 'nitu', 'andalib'];

const even = (arr) => {
    const arr2 = [];
    for (const i of arr) {
        if(i.length % 2 == 0)
            arr2.push(i);
    }

    return arr2;
}

console.log(even(arr1));


// 5.
let nums = [1, 2, 3, 4];
const avg = (num) => {
    let sum = 0;
    for (const i of num) {
        sum += i*i;
    }

    return sum / num.length;
}
console.log(avg(nums));


// 6.
let num1 = [1, 2, 3, 4];
let num2 = [5, 4, 6, 7];

let max = (num1, num2) => {
    // let num = num1.concat(num2);
    let num = [...num1];
    num.push(...num2);

    return Math.max(...num);
}
console.log('max: ', max(num1, num2));
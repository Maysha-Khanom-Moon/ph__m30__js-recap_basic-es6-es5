// function add(num1, num2) {

//     const result = num1 + num2;

//     console.log(num1, num2, result);

//     return result;
// }

// const sum1 = add(3, 4);

// const sum2 = add();


function add(num1, num2 = 0) {

    const result = num1 + num2;

    console.log(num1, num2, result);

    return result;
}

const sum1 = add(3, 4);

// default --> if value is not provided, take this as a default
const sum2 = add(3, );

const sum3 = add();
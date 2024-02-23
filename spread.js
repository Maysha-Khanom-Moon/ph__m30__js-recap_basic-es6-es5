const max = Math.max(6, 23, 45, 1, 89, 23);
console.log(max);


// find the greater element form array
const nums = [3, 5, 2, 45, 5, 43, 90, 32, 15];
console.log(Math.max(nums));

// spread --> extract element serially from element
console.log(Math.max(...nums));
console.log(...nums);

/**
 * ----- use spread operator to copy -----
 * 
 * ==> why: direct assign works as reference, not as copy.
 *          arr1 = arr2; means if i change arr1 then arr2 will changed automatically
 * 
 * ==> we use spread function so that just it's copied not reference.
 *          arr1 = [...arr2]; means if i change arr1 then arr2 will not changed
 */

const nums2 = [...nums];
console.log(nums2);
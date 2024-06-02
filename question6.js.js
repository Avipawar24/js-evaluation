function rearrangeArray(arr){

const removeEle= arr.splice(0,3);
arr.push(...removeEle)

return arr;

}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(rearrangeArray(numbers));


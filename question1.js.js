function extractSubArray(arr){
    return arr.slice(3,7);
}

const animals = ["Dog", "Cat", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo", "Panda", "Monkey"];

const subArr= extractSubArray(animals);
console.log(subArr)
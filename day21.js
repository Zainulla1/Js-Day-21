

//Question: Flateen an array of Arrays

let arr = [ [0, 1], [2, 3], [4, 5] ];

const flattendArr = arr.reduce(
    (previousValue, currentValue) => previousValue.concat(currentValue), []
);

console.log(flattendArr);


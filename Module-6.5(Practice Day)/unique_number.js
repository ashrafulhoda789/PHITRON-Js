var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const uniqueNum = numbers.filter((value, idx, array) => {
    return array.indexOf(value) === idx;
});

console.log(...uniqueNum);


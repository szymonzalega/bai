const reverse = function(arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function(arr) {
    return arrSorted = [...arr].sort();
}

const even = function(arr) {
    let arrEven = [];
    for (number of arr) {
        if (number % 2 == 0) {
            arrEven.push(number);
        }
    }
    return arrEven;
}

numbers = [8,3,2,1,5,4,6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));

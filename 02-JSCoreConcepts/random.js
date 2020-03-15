const generateNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = [];

const fillArray = () => {
    for (let i = 0; i < 10; i++) {
        arr.push(generateNumber(5, 20));
    }
    return arr;
}

const showArray = (arr) => {
    for (elem of arr) {
        console.log(elem)
    }
}

showArray(fillArray());

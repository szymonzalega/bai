// boki trójkąta
const a = 3;
const b = 4;
const c = 5;
const h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

const heronsFormula = (a, b, c) => {
    const p = (a + b + c) / 2
    const result = p * Math.sqrt((p - a) * (p - b) * (p - c))
    return `Pole trojkata o bokach ${a}, ${b} oraz ${c} wynosi ${result.toFixed(2)}`;
}

console.log(heronsFormula(a, b, c));
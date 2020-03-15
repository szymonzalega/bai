const calculateTrapezoidSurfaceArea = (a, b, h) => {
    return ((a + b) * h) / 2;
}

console.log(calculateTrapezoidSurfaceArea(8, 6, 4))

// a mozna tez tak, natychmiastowe wywolanie funkcji

console.log(((a, b, h) => ((a + b) * h) / 2)(8, 6, 4))
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    firstMethod() {
        let name = `${this.name.charAt(0).toUpperCase()}${this.name.substring(1)}`
        let surname = `${this.surname.charAt(0).toUpperCase()}${this.surname.substring(1)}`
        return `${name} ${surname}`
    }

    secondMethod() {
        return `${this.name.charAt(0).toUpperCase()}.${this.surname.charAt(0).toUpperCase()}.`
    }
}

let firstPerson = new Person('jan', 'kowalski');
console.log(firstPerson.firstMethod())
console.log(firstPerson.secondMethod())

let secondPerson = new Person('Szymon', 'Załęga');
console.log(secondPerson.firstMethod())
console.log(secondPerson.secondMethod())
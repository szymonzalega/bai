names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    //jako ze tablica w jsie to wartosc referencyjna, konieczne jest uzycie spread operator jesli nie chcemy na stale modyfikowac przekazywanej tablicy
    // w innym przypadku bedziemy modyfikowac na stale przekazana tablice, zamiast zwracac zmodyfikowana tablice tylko poprzez metode

    startWith(letter){
        return this.names.filter(name => name.charAt(0) === letter);
    }

    sort() {
        return this.names.sort();
    }

    get() {
        return this.names;
    }

    getFirst(n) {
        return this.names.slice(0, n);
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());

//taka operacja nie zadziala i zwroci blad: 'getFirt is not a function, poniewaz metoda sort zwroci posortowana tablice, 
//a nie obiekt klasy Student na ktorym moglibysmy wywolac metode getFirst
//w tym przypadku probujemy wywolac metode getFirst na Array.prototype, ktory nie posiada takiej metody jak getFirst
console.log(students.sort().getFirst(4));

//tutaj taka sama sytuacja jak w metodzie powyzej, dostaniemy 'getFirst is not a function'
console.log(students.startWith('M').sort().getFirst(2));

//powodem dlaczego wartosc zwrocona przez ta metode jest inna niz wartosc zwrocona przez ta sama metode na poczatku programu jest to,
//ze w jsie tablice sa typem referencyjnym, przez co w tym momencie klasa Students caly czas pracuje na jednej kopii tablicy
//i modyfikuje ja na stale, zamiast zwracac zmodyfikowana kopie tablicy,
//aby temu zaradzic mozemy zaimplementowac ta klase np w taki sposob jak ponizej, z uzyciem spread operatora.
console.log(students.get());


class StudentsExample {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        return [...this.names].filter(name => name.charAt(0) === letter);
    }

    sort() {
        return [...this.names].sort();
    }

    get() {
        return this.names;
    }

    getFirst(n) {
        return [...this.names].slice(0, n);
    }
}

names2 = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

studentsExample = new StudentsExample(names2);
console.log(studentsExample.get());
console.log(studentsExample.sort());
console.log(studentsExample.startWith('P'));
console.log(studentsExample.startWith('M').sort());
console.log(studentsExample.get());



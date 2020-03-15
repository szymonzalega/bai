const title = "dr";
const name = "Mateusz";
const surname = 'Kubicki';
const street = 'Długa 15';
const city = 'Kraków';
const zip = '30-781';
const country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

const withoutTemplateStrings = title + " " + name + " " + surname + "\n" + "ul. " + street + "\n" + zip + " " + city + "\n" + country.toUpperCase();
console.log(withoutTemplateStrings);

const withTemplateStrings = `
${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country.toUpperCase()}
`;
console.log(withTemplateStrings);
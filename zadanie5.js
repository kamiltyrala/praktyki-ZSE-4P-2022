const arr1 = ["Anna","Maria"];
const arr2 = ["Adam","Marek","Bartek","Tomek"];
const numbers = [1,2,3,4,5];

// zad1 ... / .concat()   -  łączenie tablic arr1 oraz arr
const suma = (arr1, arr2) => arr3 = arr1.concat(arr2);
console.log(suma(arr1,arr2));

// zad2 ... i .reverse()  -  ostatni element w tablicy
console.log([...arr3].reverse()[0]);

// zad3 .filter()         -  zastosuj filter w tablicy arr2
console.log(arr2.filter(word => word.length <= 5))

// zad4 .reduce()         -  suma elementów w tablicy numbers
console.log(numbers.reduce((values,values2) => values + values2))

// zad5 .map()            -  .map() po tablicy numbers i każdy element n^2+3
console.log(numbers.map(x => (x*x)+3))
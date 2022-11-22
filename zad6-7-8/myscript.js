const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];
/*
//PRZYKŁADY:
//tworzymy funkcje
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)
//tworzymy kompozycje
const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
//tworzymy funkcję używającą kompozycji
const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);
//wypisujemy dla książek
console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));
*/

//ZADANIA:
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

//zad6
const evenPages = (obj) => [...obj].filter(book => book.pages%2==0)
const genreEndsWithY = (obj) => [...obj].filter(book => book.genre.match(/y$/))
const onlyTitles = (obj) => [...obj].map(book => book.title)
const trimEveryElement = (arr) => arr.map(str => str.replace(/\s/gm,""))

const xd = compose(trimEveryElement, onlyTitles, genreEndsWithY, evenPages)
console.log(xd(books))

//zad7
const positiveReviews = (obj) => [...obj].filter(book => book.rating > 5)
const unevenPages = (obj) => [...obj].filter(book => book.pages%2==1)
const TitleHasANumber = (obj) => [...obj].filter(book => book.title.match(/\d/gm))
const count = (obj) => [...obj].length // ¯\_(ツ)_/¯

const xd2 = compose(count, TitleHasANumber, positiveReviews, unevenPages)
console.log(xd2(books))

//zad8
// onlyTitles z wyżej >> onlyTitles = (obj) => [...obj].map(book => book.title)
const sortByLength = (arr) => [...arr].sort((a, b) => a.length - b.length)
const notFirst = (arr) => [...arr].filter(str => str.length != arr[0].length) // nie optymalne ale funkcyjne
const onlyFirst = (arr) => [...arr].filter(str => str.length == arr[0].length) // to też

const xd3 = compose(onlyFirst, notFirst, sortByLength, onlyTitles)
console.log(xd3(books))
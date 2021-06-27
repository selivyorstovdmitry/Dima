
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", 10);

alert( "вы посмтрели " + numberOfFilms);


let personslMovieDB = {
count: numberOfFilms,
movies:  {},
actors: {},
genres: [],
privat: false,

};
const a = prompt("Один из последних фильмов?", ""),
       b = prompt("На сколько оцените его?", 10),
       c =prompt("Один из последних фильмов?", ""),
       v = prompt("На сколько оцените его?", 10);

personslMovieDB.movies[a]=b;
personslMovieDB.movies[c]=v;

console.log(personslMovieDB);





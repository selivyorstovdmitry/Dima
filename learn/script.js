

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null ||  isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    }

}
start();




const personslMovieDB = {
count: numberOfFilms,
movies:  {},
actors: {},
genres: [],
privat: false,

};


function rememberMyFilms(){
    for(let i = 0; i < 2 ;i++  ){
        const a = prompt("Один из последних фильмов?", ""),
              b = prompt("На сколько оцените его?", 10);
              personslMovieDB.movies[a]=b;
        if (a != null && b != null && a != "" && b != "" && a.length <  50){
            console.log(personslMovieDB);
        }else{
            i--;
        }
    
    }
}
/* rememberMyFilms(); */

function detectPersonalMovie (){
    if (personslMovieDB.count < 10 ){
        alert("Просмотрено довольно мало фильмов");
    }else if (personslMovieDB.count >= 10 && personslMovieDB.count < 30){
        alert("Вы классический зритель");
    }else if(personslMovieDB.count>= 30){
        alert("Вы киноман");
    }else{
        alert("Произошла ошибка");
    }
}
/* detectPersonalMovie ();
 */
function showMyDB (){
    if(personslMovieDB.privat == false){
        console.log(personslMovieDB)
    }
}
showMyDB();
function writeYourGeneres(){
 for(let i = 1; i <=3 ; i++){
     const ganre = prompt(`Ваш любимый жанр под номером ${i}`);
     personslMovieDB.genres[i -1] = ganre;
 }
}
writeYourGeneres();
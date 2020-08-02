let numberOfFillms;

function start() {
    numberOfFillms = +prompt("Сколько фильмов вы посмотрели?", "");
    while (numberOfFillms == "" || numberOfFillms == null || isNaN(numberOfFillms)){
        numberOfFillms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFillms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const firstQuestion = prompt("Один из последних просмотренных фильмов", ""),
              secondQuestion = prompt("На сколько оцените его по десятибальной шкале?","");
     
         if (firstQuestion != null && secondQuestion != null && firstQuestion != "" && secondQuestion != "" && firstQuestion.length < 50 && secondQuestion.length < 50) {
             personalMovieDB.movies[firstQuestion] = secondQuestion;
             console.log("Done!");
         } else {
             console.log("Error");
             i--;
         }
     }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.coun >= 10 && personalMovieDB.count < 30) {
        console.log("Вы - классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы - киноман!");
    } else {
        console.log("error");
    }
}

detectPersonalLevel();

function showMyDB (personalStatus) {
    if(!personalStatus)  {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i} `, "");
    }
}


writeYourGenres();
const numberOfFillms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFillms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const firstQuestion = prompt("Один из последних просмотренных фильмов", ""),
        secondQuestion = prompt("На сколько оцените его по десятибальной шкале?",""),
        thirdQuestion = prompt("Один из последних просмотренных фильмов", ""),
        fourthQuestion = prompt("На сколько оцените его по десятибальной шкале?","");

personalMovieDB.movies[firstQuestion] = secondQuestion;
personalMovieDB.movies[thirdQuestion] = fourthQuestion;

console.log(personalMovieDB);
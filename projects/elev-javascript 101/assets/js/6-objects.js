


var movies = {
    title = "Narnia",
    rating = "7.5",
    seen = true
},
{
    title = "shrek",
    rating = "8",
    seen = true
},
{
    title = "rambo",
    rating = "9.5",
    seen = false
},
{
    title = "lights out",
    rating = "8.5",
    seen = true
}


movies.forEach(function(movie) {
    if (movie.seen == true){
        console.log("You have seen " + movie.title + " - " + movie.rating)
    }
    else {
        console.log("You have not seen " + movie.title + " - " + movie.rating)
    }

});







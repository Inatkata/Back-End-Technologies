function storeMovies(input) {
    const movies = [];

    for (let command of input) {
        if (command.includes('addMovie')) {
            const movieName = command.replace('addMovie ', '');
            movies.push({ name: movieName });
        } else if (command.includes('directedBy')) {
            const [movieName, director] = command.split(' directedBy ');
            const movie = movies.find(movie => movie.name === movieName);
            if (movie) movie.director = director;
        } else if (command.includes('onDate')) {
            const [movieName, date] = command.split(' onDate ');
            const movie = movies.find(movie => movie.name === movieName);
            if (movie) movie.date = date;
        }
    }

    const validMovies = movies.filter(movie => movie.name && movie.director && movie.date);
    validMovies.forEach(movie => console.log(JSON.stringify(movie)));
}
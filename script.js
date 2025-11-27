// Dummy movie dataset
const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 5 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 5 },
    { title: "The Dark Knight", genre: "Action", rating: 5 },
    { title: "John Wick", genre: "Action", rating: 4 },
    { title: "The Hangover", genre: "Comedy", rating: 4 },
    { title: "Superbad", genre: "Comedy", rating: 5 },
    { title: "Forrest Gump", genre: "Drama", rating: 5 },
    { title: "The Shawshank Redemption", genre: "Drama", rating: 5 },
    { title: "The Conjuring", genre: "Horror", rating: 4 },
    { title: "It", genre: "Horror", rating: 3 }
];

// Update rating display
document.getElementById("ratingRange").addEventListener("input", function () {
    document.getElementById("ratingValue").textContent = this.value;
});

function getRecommendations() {
    const selectedGenre = document.getElementById("genreSelect").value;
    const userRating = parseInt(document.getElementById("ratingRange").value);
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";

    if (!selectedGenre) {
        resultList.innerHTML = "<li>Please select a genre!</li>";
        return;
    }

    // Content-based filtering (Genre + rating)
    const filteredMovies = movies.filter(movie =>
        movie.genre === selectedGenre && movie.rating >= userRating
    );

    if (filteredMovies.length === 0) {
        resultList.innerHTML = "<li>No movies found. Try lowering the rating.</li>";
        return;
    }

    filteredMovies.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} ⭐${movie.rating}`;
        resultList.appendChild(li);
    });
}

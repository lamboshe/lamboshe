// real movie images (you can replace with API later)
const trendingMovies = [
  "https://via.placeholder.com/200x300?text=Movie+1",
  "https://via.placeholder.com/200x300?text=Movie+2",
  "https://via.placeholder.com/200x300?text=Movie+3",
  "https://via.placeholder.com/200x300?text=Movie+4"
];

const topMovies = [
  "https://via.placeholder.com/200x300?text=Top+1",
  "https://via.placeholder.com/200x300?text=Top+2",
  "https://via.placeholder.com/200x300?text=Top+3",
  "https://via.placeholder.com/200x300?text=Top+4"
];

// Function to display movies
function displayMovies(list, elementId) {
  const container = document.getElementById(elementId);

  list.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);
  });
}

// Load movies
displayMovies(trendingMovies, "trending");
displayMovies(topMovies, "top");

// Email button
function getStarted() {
  const email = document.getElementById("email").value;

  if (email === "") {
    alert("Please enter your email!");
  } else {
    alert("Welcome! " + email);
  }
}
// Fake movie database
const movies = [
  "Avengers",
  "Batman",
  "Spiderman",
  "Interstellar",
  "Titanic",
  "Joker"
];

function searchMovie() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");

  // filter movies
  const results = movies.filter(movie =>
    movie.toLowerCase().includes(input)
  );

  // show results
  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No movies found ❌</p>";
  } else {
    resultsDiv.innerHTML = results
      .map(movie => `<p>🎬 ${movie}</p>`)
      .join("");
  }
}

function searchMovie() {
  const input = document.getElementById("searchInput").value;

  // save in browser memory
  localStorage.setItem("lastSearch", input);

  alert("Saved: " + input);
}

const last = localStorage.getItem("lastSearch");
console.log("Last search was:", last);

function goToSearch() {
  const query = document.getElementById("searchInput").value;

  // send user to another page with query
  window.location.href = `search.html?q=${query}`;
}

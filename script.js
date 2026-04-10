// Fake movie images (you can replace with API later)
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
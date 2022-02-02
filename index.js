// console.log("Hello World")
const message = document.querySelector("#message");
const addMovie = (event) => {
  event.preventDefault();
  let inputField = document.querySelector("input");

  let movie = document.createElement("li");

  let movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  let list = document.querySelector("ul");
  list.appendChild(movie);
  inputField.value = "";
};
document.querySelector("form").addEventListener("submit", addMovie);

const deleteMovie = (event) => {
  event.target.parentNode.remove();
  message.textContent = "Movie murdered.";
};

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked") === true) {
    message.textContent =
      "You've checked this movie off. Go outside for a change.";
  } else {
    message.textContent = "Movie added";
  }
};

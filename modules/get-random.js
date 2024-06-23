import { buttonEventListeners } from "./listener.js";
import { getJokes, getRandomJoke } from "./api.js";

function displayRandomJoke(randomJoke) {
  let html = "";
  html += `
  <div class="mainCol">
  <h3>${randomJoke.id}</h3>
  <p>Type of Joke:${randomJoke.type}</p>
  <p>${randomJoke.setup}</p>
  <button class="btn" id="${randomJoke.id}" data-id="${randomJoke.id}">Get Punchline</button>
  <p class="punchline" id="punchline-${randomJoke.id}" style="display: none">${randomJoke.punchline}</p>
  </div>
  `;
  document.getElementById("random-joke-container").innerHTML = html;
}

const button = document.querySelector(".btn-random");

button.addEventListener("click", async () => {
  try {
    let randomJoke = await getRandomJoke();
    displayRandomJoke(randomJoke);
    buttonEventListeners([randomJoke]);
  } catch (error) {
    console.error("Error fetching random joke:", error);
  }
});

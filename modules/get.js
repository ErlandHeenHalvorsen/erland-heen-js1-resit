import { getJokes } from "./api.js";
import { buttonEventListeners } from "./listener.js";

let jokes;
// async function getJokes() {
//   const response = await fetch("https://v2.api.noroff.dev/jokes");
//   let res = await response.json();
//   if (!response.ok) {
//     throw new Error(res.status);
//   }
//   jokes = res.data;
//   dislpayJokes(jokes);
// }

function dislpayJokes(jokesToDisplay) {
  let html = "";
  jokesToDisplay.forEach((joke) => {
    html += `
    <div class="mainCol">
    <h3>${joke.id}</h3>
    <p>Type of Joke:${joke.type}</p>
    <p>${joke.setup}</p>
    <button class="btn" id="${joke.id}" data-id="${joke.id}">Get Punchline</button>
    <p class="punchline" id="punchline-${joke.id}" style="display: none">${joke.punchline}</p>
    </div>    
    `;
  });
  document.getElementById("joke-container").innerHTML = html;
  buttonEventListeners(jokesToDisplay);
}

function filterJokes() {
  const selectedValue = document.getElementById("filter").value;
  if (selectedValue === "all") {
    dislpayJokes(jokes);
  } else {
    const filteredJokes = jokes.filter((joke) => joke.type === selectedValue);
    dislpayJokes(filteredJokes);
  }
}
async function renderJokes() {
  jokes = await getJokes();
  dislpayJokes(jokes);
}
renderJokes();

document.getElementById("filter").addEventListener("change", filterJokes);

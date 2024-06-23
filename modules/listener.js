import { getJokes } from "./api.js";

function buttonEventListeners(abc) {
  abc.forEach((joke) => {
    document.getElementById(joke.id).addEventListener("click", () => {
      document.getElementById(`punchline-${joke.id}`).style.display = "block";
    });
  });
}

export { buttonEventListeners };

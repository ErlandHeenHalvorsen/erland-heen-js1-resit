async function fetchRandomJoke() {
  const response = await fetch("https://v2.api.noroff.dev/jokes/random");
  let res = await response.json();
  if (!response.ok) {
    throw new Error(res.status);
  }
  let randomJoke = res.data;
  const button = document.querySelector(".btn-random");
  button.addEventListener("click", () => {
    console.log(randomJoke);
  });
}
fetchRandomJoke();

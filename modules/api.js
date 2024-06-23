const baseUrl = "https://v2.api.noroff.dev/jokes";

async function getJokes() {
  const response = await fetch(baseUrl);
  let res = await response.json();
  if (!response.ok) {
    throw new Error(res.status);
  }
  let jokes = res.data;
  return jokes;
}

async function getRandomJoke() {
  const response = await fetch(`${baseUrl}/random`);
  let res = await response.json();
  if (!response.ok) {
    throw new Error(res.status);
  }
  let randomJoke = res.data;
  return randomJoke;
}

export { getJokes, getRandomJoke };

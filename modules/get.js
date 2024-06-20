async function getJokes() {
  const response = await fetch("https://v2.api.noroff.dev/jokes");
  let res = await response.json();
  if (!response.ok) {
    throw new Error(res.status);
  }
  let html = "";
  res.data.map((joke) => {
    html += `
        <div class="mainCol">
            <h3>${joke.id}</h3>
            <p>Type of Joke:${joke.type}</p>
            <p>${joke.setup}</p>
            <button class="btn" id="${joke.id}">Get Punchline</button>
            <p>${joke.punchline}</p>
        </div>    
      `;
  });
  document.getElementById("joke-container").innerHTML = html;
}
getJokes();

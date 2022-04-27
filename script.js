document.getElementById("generator-button").addEventListener("click", Cards);

// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((data) => Cards(data.results));

function Cards(characters) {
  fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => Cards(data.results));

  let output = "";
  characters.forEach((character) => {
    output += `
        <div class="col">
        <div class="card text-center border-0">
          <div class="card-img-top" style="
            background-image: url(${character.image});
            background-size: cover;
            width: 100%;
            height: 500px;
          "></div>
          <h4 class="card-header">
            ${character.name}
          </h4>
          <ul class="list-group list-group-flush">
          <li class="list-group-item"><span class="fw-bold">Gender:</span> ${character.gender}</li>
            <li class="list-group-item"><span class="fw-bold">Origin:</span> ${character.origin.name}</li>
            <li class="list-group-item"><span class="fw-bold">Species:</span> ${character.species}</li>
          </ul>
        </div>

          <div class="card shadow-sm">
          </div>
        </div>
        
        `;
  });
  document.getElementById("output").innerHTML = output;
}

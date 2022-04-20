const url = "https://ghibliapi.herokuapp.com/films";
const apiResults = document.querySelector(".api-results");
const loader = document.querySelector(".loader");

async function fetchAPI() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    loader.innerHTML = "";
    loader.style.height = "0";

    for (let i = 0; i < json.length; i++) {
      const title = json[i].title;
      const releaseDate = json[i].release_date;
      const id = json[i].id;
      const image = json[i].image;

      apiResults.innerHTML += `<a href="details.html?id=${id}" class="api-container">
            <div class="image" style="background-image: url(${image});"></div>
            <div class="info">
                <h2>${title}</h2>
                <p>${releaseDate}</p>
                </div>
        </a>`;
    }
  } catch (error) {
    apiResults.innerHTML = "An error occurred";
  }
}

fetchAPI();

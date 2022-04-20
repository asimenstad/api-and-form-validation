const apiDetails = document.querySelector(".api-results_details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://ghibliapi.herokuapp.com/films/" + id;
const loader = document.querySelector(".loader");

async function fetchDetails() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    document.title = json.title;

    loader.innerHTML = "";
    loader.style.height = "0";

    apiDetails.innerHTML += `<h1>${json.title}</h1>
    <div class="info_details"><p>Release year: <span class="bold-text">${json.release_date}</span></p>
    <p>Original title: <span class="bold-text">${json.original_title}</span></p>
    <p>${json.description}</p>
    </div>
    <div class="image_details" style="background-image: url(${json.image})"></div>
   `;
  } catch (error) {
    apiResults.innerHTML = "An error occurred";
  }
}
fetchDetails();

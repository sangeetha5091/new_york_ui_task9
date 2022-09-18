const api_url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key`;
async function startAPI(api) {
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  displayCard(data);
}
startAPI(api_url);

function homeurl() {
  const api = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key`;
  getAPI(api);
}
function worldurl() {
  const api = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key`;
  getAPI(api);
}
function politicsurl() {
  const api = `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key`;
  getAPI(api);
}

function technologyurl() {
  const api = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key`;
  getAPI(api);
}

function scienceurl() {
  const api = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key`;
  getAPI(api);
}

function sportsurl() {
  const api = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key`;
  getAPI(api);
}
function artsurl() {
  const api = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key`;
  getAPI(api);
}
function fashionurl() {
  const api = `https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key`;
  getAPI(api);
}
function foodurl() {
  const api = `https://api.nytimes.com/svc/topstories/v2/food.json?api-key`;
  getAPI(api);
}

async function getAPI(api) {
  document.querySelector("#card_container").innerHTML = "";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  displayCard(data);
}

function displayCard(data) {
  //   console.log(data.results.multimedia.url);
  console.log(data.section);
  const todayDate = document.getElementById("todayDate");
  todayDate.innerText = new Date(data.last_updated).toDateString();

  console.log(data);
  const all_data = data.results;
  for (let i = 0; i <= all_data.length; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card mb-3");
    card.style.maxWidth = "1000px";
    card.innerHTML += `  
<div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title text-uppercase">${data.section}</h4>
              <p class="card-text"> <b>${data.results[i].title} </b></p>
              <p class="card-text">${data.results[i].abstract} </p>
              <p class="card-text"> <small class="text-muted">${new Date(
                data.results[i].created_date
              ).toDateString()}</small> </p>
              <a href="${
                data.results[i].short_url
              }" class="text-primary text-decoration-none">Continue Reading</a>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-center justify-content-center px-2">
            <img src="${
              data.results[i].multimedia[0].url
            }" class="img-fluid rounded-start px-2 " alt="..." />
          </div>
</div>`;
    document.querySelector("#card_container").append(card);
  }
}

// import { games } from "./db.js";
import { games } from "./games.js";

// VARIABLES
const gamesContainer = document.getElementById("games-container");
let searchTerm = "";
const filter = document.getElementById("filters");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const searchQuery = params.get("query");
const form = document.getElementById("search-form");
const input = form.querySelector("input[name='query']");
setTimeout(() => {
  if (searchQuery) {
    if (searchQuery) {
      searchTerm = searchQuery;
      console.log(`SearchTerm is: ${searchTerm}`);
    } else {
      searchTerm = document.querySelector("#search").value;
      console.log(`SearchTerm is: ${searchTerm}`);
    }
    gamesContainer.innerHTML = "";
    let filteredGames =
      searchQuery.length === 0
        ? games
        : games.filter((game) => game.itemName.toLowerCase().includes(searchTerm.toLowerCase()));

    filteredGames.forEach((game) => {
      filter.addEventListener("change", function () {
        const selectedPlatform = filter.value;
        const target = event.target; /// HERE I MUST DO SOMETHING
        const gameID = target.dataset.id; /// HERE I MUST DO SOMETHING
        console.log("gameID is: ", gameID); /// HERE I MUST DO SOMETHING
        const game = games.find((game) => game.id === gameID); /// HERE I MUST DO SOMETHING
        if(game.isWishlisted) {
          const heartIcon = parseInt(game.isWishlisted) === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
        } else {
          const heartIcon = "images/ico_heart_+.svg";
        };
        const typeIcon = game.type === "Key" ? "images/ico_key.svg" : "images/ico_disc.svg";

        gamesContainer.innerHTML = "";
        let filteredGames =
          searchTerm.length === 0
            ? games
            : games.filter((game) => game.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
        if (selectedPlatform !== "all") {
          filteredGames = filteredGames.filter((game) => game.platform === selectedPlatform);
        }
        // filteredGames.forEach((game) => {
        //   // append game to gamesContainer
        // });
      });
      const heartIcon = parseInt(game.isWishlisted) === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
      const typeIcon = game.type === "Key" ? "images/ico_key.svg" : "images/ico_disc.svg";
      gamesContainer.innerHTML += `
        <div class="container game-cards" data-filter="${game.platform}-${game.type}">
          <div class="items ${game.itemName}">
            <div class="psnleft game-title">
              <h2 class="h4 type">${game.itemName}</h2><span class="gametitle-info">${game.platformShort} | ${game.type} Version</span>
            </div>
            <div class="game-cover">
            <a href="details.html?id=${game.id}" class="results-list">
              <img src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
            </a>
            </div>
            <div class="small psnleft release-date">Release Date:</div>
            <div class="small psnright reldate">${game.releaseDate}</div>
            <div class="small psnleft">Type:</div>
            <div class="small psncenter type-ico">
              <img src="${typeIcon}" alt="${game.type}">
            </div>
            <div class="small psnright type-text">${game.type}</div>
            <div class="small psnleft region">Region:</div>
            <div class="small psncenter region-ico">
              <img src="images/ico_europe.svg" alt="Region | Europe">
            </div>
            <div class="small psnright region-text">${game.region}</div>
            <div class="small psnleft platform">Platform:</div>
            <div class="small psncenter platform-ico">
              <img src="images/ico_psn.svg" alt="Playstation 5">
            </div>
            <div class="small psnright platform-text">${game.platform}</div>
            <div class="psnleft gsrating">Gamespot Rating:</div>
            <div class="psnright rating">${game.gamespotRating}</div>
            <div class="small psnleft readreview">
              <a href="https://www.gamespot.com/games/reviews/">Read review</a>
            </div>
            <div class="togglewishlist add-to-wishlist">
              <span class="small psnright" href="wishlist.html">
                <img class="remove small psnright add-to-wishlist" src="${heartIcon}" alt="Add to wishlist" data-id="${game.id}">
              </span>
            </div>
            <div class="price psnright">
              <span class="dollar yellow">.</span><span class="currentPrice price">${game.currentPrice}</span>
            </div>
            <div class="price__before psnright">
              <span class="dollar yellow">.</span>${game.beforePrice}
            </div>
          </div>
          <div class="psn__buttons">
            <div class="cta add-to-cart" data-id="${game.id}">Add to cart</div>
            <a href="details.html?id=${game.id}" class="results-list" role="button">
            <div class="cta">View Details</div></a>
          </div>
        </div>`;
      const productsElement = document.querySelector(".number-of-products");
      let searchWord;
      if (searchTerm) {
        searchWord = searchTerm;
      } else {
        searchWord = queryString;
      }
      productsElement.textContent = `Games with ${searchWord} in the title: ${filteredGames.length}`;
    });
  } else {
    const searchForm = document.querySelector("#search-form");
    // Searchform with eventlistener on submit
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      searchTerm = document.querySelector("#search").value;
      console.log(`SearchTerm is: ${searchTerm}`);
      gamesContainer.innerHTML = "";

      input.value = "";
      let filteredGames =
        searchTerm.length === 0
          ? games
          : games.filter((game) => game.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
      filteredGames.forEach((game) => {
        gamesContainer.innerHTML += `
          <div class="container game-cards" data-filter="${game.platform}-${game.type}">
            <div class="items ${game.itemName}">
              <div class="psnleft game-title">
                <h2 class="h4 type">${game.itemName}</h2><span class="gametitle-info">${game.platformShort} | ${game.type} Version</span>
              </div>
              <div class="game-cover">
              <a href="details.html?id=${game.id}" class="results-list">
                <img src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
              </a>
              </div>
              <div class="small psnleft release-date">Release Date:</div>
              <div class="small psnright reldate">${game.releaseDate}</div>
              <div class="small psnleft">Type:</div>
              <div class="small psncenter type-ico">
                <img src="${typeIcon}" alt="${game.type}">
              </div>
              <div class="small psnright type-text">${game.type}</div>
              <div class="small psnleft region">Region:</div>
              <div class="small psncenter region-ico">
                <img src="images/ico_europe.svg" alt="Region | Europe">
              </div>
              <div class="small psnright region-text">${game.region}</div>
              <div class="small psnleft platform">Platform:</div>
              <div class="small psncenter platform-ico">
                <img src="images/ico_psn.svg" alt="Playstation 5">
              </div>
              <div class="small psnright platform-text">${game.platform}</div>
              <div class="psnleft gsrating">Gamespot Rating:</div>
              <div class="psnright rating">${game.gamespotRating}</div>
              <div class="small psnleft readreview">
                <a href="https://www.gamespot.com/games/reviews/">Read review</a>
              </div>
              <div class="togglewishlist">
                <a class="small psnright" href="wishlist.html"><img class="remove small psnright" src="images/ico_heart.svg" alt="Add to wishlist"></a>
              </div>
              <div class="price psnright">
              <span class="dollar yellow">.</span><span class="currentPrice price">${game.currentPrice}</span>
              </div>
              <div class="price__before psnright">
              <span class="dollar yellow">.</span>${game.beforePrice}
              </div>
              </div>
              <div class="psn__buttons">
              <div class="cta add-to-cart" data-id="${game.id}">Add to cart</div>
              <a href="details.html?id=${game.id}" class="results-list" role="button">
              <div class="cta">View Details</div></a>
              </div>
              </div>`;

        const productsElement = document.querySelector(".number-of-products");
        productsElement.textContent = `Number of games: ${filteredGames.length}`;
      });
    });
  }
}, 1000);

// FILTER SECTION
const filterSelect = document.getElementById("filters");
filterSelect.addEventListener("change", (event) => {
  const selectedFilter = event.target.value;
  // let filteredGames = games;
  let filteredGames =
    searchQuery.length === 0
      ? games
      : games.filter((game) => game.itemName.toLowerCase().includes(searchTerm.toLowerCase()));

  if (selectedFilter === "Playstation 4" || selectedFilter === "Playstation 5") {
    filteredGames = filteredGames.filter((game) => game.platform === selectedFilter);
  } else if (selectedFilter === "Full Disc Versions" || selectedFilter === "Key only Versions") {
    filteredGames = filteredGames.filter((game) => {
      if (selectedFilter === "Full Disc Versions" && game.type === "Disc") {
        return true;
      } else if (selectedFilter === "Key only Versions" && game.type === "Key") {
        return true;
      } else {
        return false;
      }
    });
  }

  // Regenerate the HTML for the filtered games
  const filteredHtml = filteredGames
    .map((game) => {
      const heartIcon = parseInt(game.isWishlisted) === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
      const typeIcon = game.type === "Key" ? "images/ico_key.svg" : "images/ico_disc.svg";

      return `
    <div class="container game-cards" data-filter="${game.platform}-${game.type}">
    <div class="items ${game.itemName}">
      <div class="psnleft game-title">
        <h2 class="h4 type">${game.itemName}</h2><span class="gametitle-info">${game.platformShort} | ${game.type} Version</span>
      </div>
      <div class="game-cover">
        <a href="details.html?id=${game.id}" class="results-list">
        <img class="game-img" src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
        </a>
      </div>
      <div class="small psnleft release-date">Release Date:</div>
      <div class="small psnleft reldate">${game.releaseDate}</div>
      <div class="small psnleft">Type:</div>
      <div class="small psncenter type-ico">
        <img src="${typeIcon}" alt="${game.type}">
      </div>
      <div class="small psnleft type-text">${game.type}</div>
      <div class="small psnleft region">Region:</div>
      <div class="small psncenter region-ico">
        <img src="images/ico_europe.svg" alt="Region | Europe">
      </div>
      <div class="small psnleft region-text">${game.region}</div>
      <div class="small psnleft platform">Platform:</div>
      <div class="small psncenter platform-ico">
        <img src="images/ico_psn.svg" alt="Playstation 5">
      </div>
      <div class="small psnleft platform-text">${game.platform}</div>
      <div class="psnleft gsrating">Gamespot Rating:</div>
      <div class="psnright rating">${game.gamespotRating}</div>
      <div class="small psnleft readreview">
        <a href="https://www.gamespot.com/games/reviews/">Read review</a>
      </div>
      <div class="togglewishlist add-to-wishlist">
        <span class="small psnright" href="wishlist.html">
          <img class="remove small psnright add-to-wishlist" src="${heartIcon}" alt="Add to wishlist" data-id="${game.id}">
        </span>
      </div>
      <div class="price psnright">
        <span class="dollar yellow">.</span>
        <span class="price currentPrice">${game.currentPrice}</span>
      </div>
      <div class="price__before psnright">
        <span class="dollar yellow">.</span>${game.beforePrice}
      </div>
    </div>
      <div class="psn__buttons">
        <div class="cta add-to-cart" data-id="${game.id}">Add to cart</div>
        <a href="details.html?id=${game.id}" class="results-list" role="button">
          <div class="cta">View Details</div>
        </a>
      </div>
    </div>
    `;
    })
    .join("");

  // Set the HTML of the gamesContainer element to the filtered HTML
  gamesContainer.innerHTML = filteredHtml;
});



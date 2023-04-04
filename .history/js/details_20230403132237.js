// import { games } from "./db.js";
import { games } from "./games.js";
console.log("games import from line 1: ", games);
// const gamesContainer = document.getElementById("games-container");
const apiUrl = "https://wordpress.runeunhjem.no/wp-json/wc/store/products?per_page=50";
const gamesContainer = document.getElementById("games-container");
const games = [];





setTimeout(() => {
  // CREATE HTML WITH DEATILS FROM API
  function createDetails() {

    console.log("games on line 12 with games.js is: ", games);
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const gameID = parseInt(params.get("id"));
    console.log("gameID on line 16 with games.js is: ", gameID);

    // Find the game object with the matching ID
    setTimeout(() => {
      const game = games.find((game) => game.id === gameID);
      console.log("game on line 20 with games.js is: ", game);
      // Set the game title as the page title
      document.title = game.itemName;
    }, 1000);

    gamesContainer.innerHTML = `
    <div class="main__wrapper">
      <section class="product_details" aria-label="Product Details | Main Section">
        <h1>${game.itemName}</h1>
      </section>
    </div>
    `;
  };
  createDetails();
}, 2000);

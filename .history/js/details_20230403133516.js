// // import { games } from "./db.js";
import { games } from "./games.js";
console.log(games[0].itemName);
console.log(games[0].itemName);
setTimeout(() => {
  // CREATE HTML WITH DETAILS FROM API
  function createDetails() {
    console.log("games on line 12 with games.js is: ", games);
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const gameID = parseInt(params.get("id"));
    console.log("gameID on line 16 with games.js is: ", gameID);

    // Find the game object with the matching ID
    console.log("games line above const game: ", games);
    const game = games.find((game) => game.id === gameID);
    console.log("game on line 20 with games.js is: ", game);

    // Set the game title as the page title
    document.title = game.itemName;

    gamesContainer.innerHTML = `
    <div class="main__wrapper">
      <section class="product_details" aria-label="Product Details | Main Section">
        <h1>${game.itemName}</h1>
      </section>
    </div>
    `;
  }
  setTimeout(() => {
    createDetails();
  }, 3000);
}, 2000);

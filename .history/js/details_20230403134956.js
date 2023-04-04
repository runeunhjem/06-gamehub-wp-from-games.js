// // import { games } from "./db.js";
// import { games } from "./games.js";
const apiUrl = "https://wordpress.runeunhjem.no/wp-json/wc/store/products?per_page=50";
const gamesContainer = document.getElementById("games-container");
const games = [];

// Send a GET request to the API endpoint
fetch(apiUrl)
  .then((response) => {
    // If the response is successful, parse the JSON data
    if (response.ok) {
      return response.json();
    }
    // If the response is not successful, throw an error
    throw new Error("Network response was not ok");
  })
  .then((data) => {
    // Loop through each object in the data array and extract attributes
    for (const item of data) {
      const attributes = item.attributes.map((attr) => ({ [attr.name]: attr.terms[0].name }));
      const game = {
        id: attributes[0].gameId,
        itemName: attributes[1].itemName,
        platform: attributes[2].platform,
        platformShort: attributes[3].platformShort,
        type: attributes[4].type,
        region: attributes[5].region,
        releaseDate: attributes[6].releaseDate,
        currentPrice: attributes[7].currentPrice,
        beforePrice: attributes[8].beforePrice,
        gamespotRating: attributes[9].gamespotRating,
        isWishlisted: attributes[10].isWishlisted,
        coverImage: attributes[11].coverImage,
        productOverview: attributes[12].productOverview,
        productDescription: attributes[13].productDescription,
        productPlot: attributes[14].productPlot,
        productGameplay: attributes[15].productGameplay,
        productKeyFeatures: attributes[16].productKeyFeatures,
      };
      games.push(game);
    }
  })
  .catch((error) => {
    // Log any errors to the console
    console.error("Error:", error);
  });

console.log("All games??? after the fetch on games.js: ", games);
console.log("typeof games after the fetch on games.js: ", typeof games);



setTimeout(() => {
  console.log(games[6].id);
  console.log(games[6].itemName);
}, 2000);

const games.map((game) => {

};
setTimeout(() => {
  // CREATE HTML WITH DETAILS FROM API
  function createDetails() {
    // setTimeout(() => {
      console.log(games[14].id);
      console.log(games[14].itemName);
    // }, 2000);
    console.log("games on line 12 with games.js is: ", games);
    const queryString = document.location.search;
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

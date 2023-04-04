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
    console.log(games[6].id);
    console.log(games[6].itemName);
  })
  .catch((error) => {
    // Log any errors to the console
    console.error("Error:", error);
  });



// const gamesContainer = document.getElementById("games-container");

// // Generate the HTML for all the games
// const html = games
//   .map((game) => {
//     // Determine which heart icon to display based on isWishlisted
//     const heartIcon = game.isWishlisted === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
//     const typeIcon = game.type === "Key" ? "images/ico_key.svg" : "images/ico_disc.svg";
//     console.log("game before creating gamesContainer HTML: ", game);
//     return `
//   <div class="container game-cards" data-filter="${game.platform}-${game.type}">
//     <div class="items ${game.itemName}">
//       <div class="psnleft game-title">
//         <h2 class="h4 type">${game.itemName}</h2><span class="gametitle-info">${game.platformShort} | ${game.type} Version</span>
//       </div>
//       <div class="game-cover">
//         <a href="details.html?id=${game.id}" class="results-list">
//         <img class="game-img" src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
//         </a>
//       </div>
//       <div class="small psnleft release-date">Release Date:</div>
//       <div class="small psnleft reldate">${game.releaseDate}</div>
//       <div class="small psnleft">Type:</div>
//       <div class="small psncenter type-ico">
//         <img src="${typeIcon}" alt="${game.type}">
//       </div>
//       <div class="small psnleft type-text">${game.type}</div>
//       <div class="small psnleft region">Region:</div>
//       <div class="small psncenter region-ico">
//         <img src="images/ico_europe.svg" alt="Region | Europe">
//       </div>
//       <div class="small psnleft region-text">${game.region}</div>
//       <div class="small psnleft platform">Platform:</div>
//       <div class="small psncenter platform-ico">
//         <img src="images/ico_psn.svg" alt="Playstation 5">
//       </div>
//       <div class="small psnleft platform-text">${game.platform}</div>
//       <div class="psnleft gsrating">Gamespot Rating:</div>
//       <div class="psnright rating">${game.gamespotRating}</div>
//       <div class="small psnleft readreview">
//         <a href="https://www.gamespot.com/games/reviews/">Read review</a>
//       </div>
//       <div class="togglewishlist add-to-wishlist">
//         <span class="small psnright" href="wishlist.html">
//           <img class="remove small psnright add-to-wishlist" src="${heartIcon}" alt="Add to wishlist" data-id="${game.id}">
//         </span>
//       </div>
//       <div class="price psnright">
//         <span class="dollar yellow">.</span>
//         <span class="price currentPrice">${game.currentPrice}</span>
//       </div>
//       <div class="price__before psnright">
//         <span class="dollar yellow">.</span>${game.beforePrice}
//       </div>
//     </div>
//       <div class="psn__buttons">
//         <div class="cta add-to-cart" data-id="${game.id}">Add to cart</div>
//         <a href="details.html?id=${game.id}" class="results-list" role="button">
//           <div class="cta">View Details</div>
//         </a>
//       </div>
//     </div>
//        `;
//   })
//   .join("");

//   if (gamesContainer) {
//     gamesContainer.innerHTML = html;
//   }










console.log("All games??? after the fetch on games.js: ", games);
console.log("typeof games after the fetch on games.js: ", typeof games);


const html = games.map((game) => {
  console.log("game is: ", game);
  console.log("html is: ", html);

      return `
    <div class="container game-cards" data-filter="${game.platform}-${game.type}">
    `;
})
  .join("");

if (gamesContainer) {
    gamesContainer.innerHTML = html;
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
    // document.title = game.itemName;

    // gamesContainer.innerHTML = html;
    // gamesContainer.innerHTML = `
    // <div class="main__wrapper">
    //   <section class="product_details" aria-label="Product Details | Main Section">
    //     <h1>${game.itemName}</h1>
    //   </section>
    // </div>
    // `;
  }
  setTimeout(() => {
    createDetails();
  }, 3000);
}, 2000);

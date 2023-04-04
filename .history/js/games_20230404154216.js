// const apiUrl = "https://wordpress.runeunhjem.no/wp-json/wc/store/products?per_page=50";
// const gamesContainer = document.getElementById("games-container");
// const games = [];

// // Send a GET request to the API endpoint
// fetch(apiUrl)
//   .then((response) => {
//     // If the response is successful, parse the JSON data
//     if (response.ok) {
//       return response.json();
//     }
//     // If the response is not successful, throw an error
//     throw new Error("Network response was not ok");
//   })
//   .then((data) => {
//     // Loop through each object in the data array and extract attributes
//     for (const item of data) {
//       const attributes = item.attributes.map((attr) => ({ [attr.name]: attr.terms[0].name }));
//       const game = {
//         id: attributes[0].gameId,
//         itemName: attributes[1].itemName,
//         platform: attributes[2].platform,
//         platformShort: attributes[3].platformShort,
//         type: attributes[4].type,
//         region: attributes[5].region,
//         releaseDate: attributes[6].releaseDate,
//         currentPrice: attributes[7].currentPrice,
//         beforePrice: attributes[8].beforePrice,
//         gamespotRating: attributes[9].gamespotRating,
//         isWishlisted: attributes[10].isWishlisted,
//         coverImage: attributes[11].coverImage,
//         productOverview: attributes[12].productOverview,
//         productDescription: attributes[13].productDescription,
//         productPlot: attributes[14].productPlot,
//         productGameplay: attributes[15].productGameplay,
//         productKeyFeatures: attributes[16].productKeyFeatures,
//       };
//       games.push(game);
//     }
//   })
//   .catch((error) => {
//     // Log any errors to the console
//     console.error("Error:", error);
//   });

// console.log("All games??? after the fetch on games.js: ", games);
// console.log("typeof games after the fetch on games.js: ", typeof games);

// export { games };

const apiUrl = "https://wordpress.runeunhjem.no/wp-json/wc/store/products?per_page=50";
const gamesContainer = document.getElementById("games-container");
const games = [];

// Check if game is wishlisted based on local storage
function isWishlisted(gameId) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  setTimeout(() => {
    return wishlist.includes(gameId);
    console.log("wishlist before fetch is: ", wishlist);
  }, 1000);
}


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
        id: parseInt(attributes[0].gameId),
        itemName: attributes[1].itemName,
        platform: attributes[2].platform,
        platformShort: attributes[3].platformShort,
        type: attributes[4].type,
        region: attributes[5].region,
        releaseDate: attributes[6].releaseDate,
        currentPrice: parseFloat(attributes[7].currentPrice),
        beforePrice: parseFloat(attributes[8].beforePrice),
        gamespotRating: attributes[9].gamespotRating,
        isWishlisted: isWishlisted(parseInt(attributes[0].gameId)) ? 1 : 0, // Check if game is wishlisted
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
setTimeout(() => {

  console.log("All games after the fetch on games.js: ", games);
  console.log("typeof games after the fetch on games.js: ", typeof games);
}, 1000);

export { games };

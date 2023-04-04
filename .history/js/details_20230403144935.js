// import { games } from "./db.js";
// import { games } from "./games.js";
// console.log("games import from line 1: ", games);
// const gamesContainer = document.getElementById("games-container");
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
    const detailsId = 14;
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
      console.log(game.id: "game.id);
      const queryString = document.location.search;
      const params = new URLSearchParams(queryString);
      const gameID = parseInt(params.get("id"));
      console.log("URL gameID fetch is: ", gameID);
      // if (game.id === detailsId) {
      if (game.id === gameID) {
        games.push(game);
      }
    }
  });
  console.log("games is: ", games);
//     // setTimeout(() => {
//     // CREATE HTML WITH DEATILS FROM API
//     function createDetails() {
//       console.log("games on line 57 inside after createDetails with NO games.js is: ", games);
//       const queryString = window.location.search;
//       const params = new URLSearchParams(queryString);
//       const gameID = parseInt(params.get("id"));
//       console.log("gameID on line 16 with games.js is: ", gameID);

//       // Find the game object with the matching ID
//       // setTimeout(() => {
//       const game = games.find((game) => game.id === gameID);
//       console.log("game on line 20 with games.js is: ", game);
//       // Set the game title as the page title
//       document.title = game.itemName;
//       // }, 1000);

//       gamesContainer.innerHTML = `
//         <div class="main__wrapper">
//           <section class="product_details" aria-label="Product Details | Main Section">
//             <h1>${game.itemName}</h1>
//             <div class="details">
//               <div class="image-mockup psn__wrapper psn__wrapper_wide">
//                 <div class="container game-cards" data-filter="${game.platform}-${game.type}">
//                   <div class="game-details">
//                     <div class="psnleft game-title">
//                       <h2 class="h4 yellow type">${game.platformShort} ${game.type} Version</h2>
//                     </div>
//                     <div class="game-cover">
//                       <a href=${game.coverImage} target="_blank" alt="Click to open image in new window" aria-label="Click to open image in new window">
//                         <img src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
//                       </a>
//                     </div>
//                     <div class="small psnleft release-date">Release Date:</div>
//                     <div class="small psnleft reldate">${game.releaseDate}</div>
//                     <div class="small psnleft">Type:</div>
//                     <div class="small psncenter type-ico">
//                       <img src="${typeIcon}" alt="${game.type}">
//                     </div>
//                     <div class="small psnleft type-text">${game.type}</div>
//                     <div class="small psnleft region">Region:</div>
//                     <div class="small psncenter region-ico">
//                       <img src="images/ico_europe.svg" alt="Region | Europe">
//                     </div>
//                     <div class="small snleft region-text">${game.region}</div>
//                     <div class="small psnleft platform">Platform:</div>
//                     <div class="small psncenter platform-ico">
//                       <img src="images/ico_psn.svg" alt="${game.platform}">
//                     </div>
//                     <div class="small psnleft platform-text">${game.platform}</div>
//                     <div class="psnleft gsrating">Gamespot Rating:</div>
//                     <div class="psnright rating">${game.gamespotRating}</div>
//                     <div class="small psnleft readreview">
//                       <a href="https://www.gamespot.com/games/reviews/">Read review</a>
//                     </div>
//                     <div class="togglewishlist add-to-wishlist">
//                       <span class="small psnright" href="wishlist.html">
//                         <img class="remove small psnright add-to-wishlist wishlist-icon" src="${heartIcon}" alt="Add to wishlist" data-id="${game.id}">
//                       </span>
//                     </div>
//                     <label for="quantity" class="ourprice psnright">Quantity:</label>
//                     <div class="number psnleft">
//                       <input class="howmany" type="number" id="quantity" name="quantity" value="1">
//                     </div>
//                     <div class="price psnright">
//                     <span class="dollar yellow">.</span>${game.currentPrice}
//                     </div>
//                     <a href="checkout.html" role="button" class="checkout-event psnright">Checkout</a>
//                     <div class="price__before psnright">
//                       <span class="dollar yellow">.</span>${game.beforePrice}
//                     </div>
//                   </div>
//                   <div class="psn__buttons">
//                     <div class="cta add-to-cart">Add to cart</div>
//                     <a href="cart.html" role="button">
//                       <div class="cta">Go to cart</div>
//                     </a>
//                   </div>
//                 </div>
//                 <div class="summary__wrapper">
//                   <p class="summary">
//                     ${game.productOverview}
//                   </p>
//                   <a href="images/gamedetails/forgelegenddetails2.jpg" aria-label="Click to see high resolution version">
//                     <span class="detail-image" role="img" aria-label="Glowing mushroms under big tree"></span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div class="description">
//               <h2 class="h4">Product Description</h2>
//               <div class="divider"></div>
//               <p>
//                 ${game.productDescription}
//               </p>
//               <div class="details-img">
//                 <a href="images/gamedetails/forgelegenddetails1.jpg" aria-label="Click to see high resolution version" target="_new">
//                   <img src="images/gamedetails/forgelegenddetails1_small.jpg" alt="Beautiful boat on a beach in Forge Legend">
//                 </a>
//                 <div class="plot">
//                   <h3 class="h6">Plot</h3>
//                   <p>
//                     ${game.productPlot}
//                   </p>
//                 </div>
//               </div>
//               <div class="gameplay">
//                 <h3 class="h6">Gameplay</h3>
//                 <p>
//                   ${game.productGameplay}
//                 </p>
//               </div>
//               <div class="features">
//                 <h3 class="h6">Key Features</h3>
//                 <p>
//                   ${game.productKeyFeatures}
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//         `;

//       // Calculate Price
//       const quantityInput = document.getElementById("quantity");
//       const price = game.currentPrice;
//       quantityInput.addEventListener("input", () => {
//         const quantity = parseInt(quantityInput.value);
//         const total = price * quantity;
//         const formattedTotal = total.toFixed(2);
//         console.log(`Total price: $${formattedTotal}`);
//       });

//       // ADD TO CART FUNCTION
//       function addToCart() {
//         const quantity = parseInt(quantityInput.value);
//         console.log("game is: ", game);
//         const coverImage = game.coverImage;
//         // const isWishlisted = 1;
//         console.log("game.id is: ", game.id);
//         console.log("game.isWishlisted is: ", game.isWishlisted);
//         console.log("coverImage is: ", coverImage);
//         const itemName = game.itemName;
//         const currentPrice = game.currentPrice;
//         const beforePrice = game.beforePrice;
//         const platformShort = game.platformShort;
//         const type = game.type;
//         const releaseDate = game.releaseDate;
//         const isWishlisted = game.isWishlisted;
//         const region = game.region;
//         const platform = game.platform;
//         const gamespotRating = game.gamespotRating;
//         const total = currentPrice * quantity;
//         const formattedTotal = total.toFixed(2);
//         const product = {
//           id: game.id,
//           itemName: itemName,
//           coverImage: coverImage,
//           isWishlisted: isWishlisted,
//           releaseDate: releaseDate,
//           type: type,
//           region: region,
//           platform: platform,
//           gamespotRating: gamespotRating,
//           quantity: 1,
//           currentPrice: currentPrice,
//           beforePrice: beforePrice,
//           platformShort: platformShort,
//           name: itemName,
//           coverImage: coverImage,
//           quantity: quantity,
//           price: currentPrice,
//           platformShort: `${platformShort} | ${type} Version`,
//           total: formattedTotal,
//         };

//         let cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const existingProductIndex = cart.findIndex((p) => p.id === gameID);
//         if (existingProductIndex !== -1) {
//           cart[existingProductIndex].quantity += quantity;
//           cart[existingProductIndex].total = (
//             cart[existingProductIndex].quantity * cart[existingProductIndex].price
//           ).toFixed(2);
//         } else {
//           cart.push(product);
//         }
//         localStorage.setItem("cart", JSON.stringify(cart));
//         console.log("cart is: ", cart);
//       }
//       // Add event listeners to the buttons
//       document.querySelector(".add-to-cart").addEventListener("click", addToCart);
//       document.querySelector(".checkout-event").addEventListener("click", () => {
//         localStorage.removeItem("cart");
//         // Other checkout logic goes here
//         console.log(localStorage.cart);
//       });
//     }
//     createDetails();

//     // }, 500);
//   })
//   .catch((error) => {
//     // Log any errors to the console
//     console.error("Error:", error);
//   });

// console.log("games on line 51 outside before createDetails with NO games.js is: ", games);

// // ADD TO WISHLIST FUNCTION
// function addToWishlist(event) {
//   const target = event.target;
//   if (!target.classList.contains("add-to-wishlist")) {
//     return; // ignore clicks on non-add-to-wishlist elements
//   }
//   console.log("target.dataset.id is: ", target.dataset.id);
//   const gameID = target.dataset.id;
//   console.log("gameID is: ", gameID);
//   let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//   const existingIndex = wishlist.findIndex((game) => game.id === gameID);
//   if (existingIndex >= 0) {
//     // game is already in wishlist, remove it
//     wishlist.splice(existingIndex, 1);
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     console.log(`Game with ID ${gameID} removed from wishlist`);
//   } else {
//     const game = games.find((g) => parseInt(g.id, 10) === parseInt(gameID, 10));

//     console.log("game is: ", game);
//     const coverImage = game.coverImage;
//     const isWishlisted = 1;

//     console.log("game.id is: ", game.id);
//     console.log("game.isWishlisted is: ", game.isWishlisted);
//     console.log("coverImage is: ", coverImage);
//     const container = target.closest(".container");
//     const itemName = game.itemName;
//     const currentPrice = game.currentPrice;
//     const beforePrice = game.beforePrice;
//     const platformShort = game.platformShort;
//     const type = game.type;
//     const releaseDate = game.releaseDate;
//     const region = game.region;
//     const platform = game.platform;
//     const gamespotRating = game.gamespotRating;
//     const total = currentPrice;
//     const formattedTotal = total.toFixed(2);
//     const product = {
//       id: gameID,
//       itemName: itemName,
//       coverImage: coverImage,
//       isWishlisted: isWishlisted,
//       releaseDate: releaseDate,
//       type: type,
//       region: region,
//       platform: platform,
//       gamespotRating: gamespotRating,
//       quantity: 1,
//       currentPrice: currentPrice,
//       beforePrice: beforePrice,
//       total: formattedTotal,
//       platformShort: platformShort,
//     };

//     wishlist.push(product);
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     console.log("wishlist is: ", wishlist);

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartGame = cart.find((game) => game.id === gameID);
//     console.log("cartGame is: ", cartGame);
//     if (cartGame) {
//       cartGame.isWishlisted = 1;
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//     console.log("cart is: ", cart);
//   }
// }
// if (gamesContainer) {
//   gamesContainer.addEventListener("click", addToWishlist);
// }

// }, 5000);

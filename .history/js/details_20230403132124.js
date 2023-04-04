// import { games } from "./db.js";
// import { games } from "./games.js";
// console.log("games import from line 1: ", games);
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

    // // Calculate Price
    // const quantityInput = document.getElementById("quantity");
    // const price = game.currentPrice;
    // quantityInput.addEventListener("input", () => {
    //   const quantity = parseInt(quantityInput.value);
    //   const total = price * quantity;
    //   const formattedTotal = total.toFixed(2);
    //   console.log(`Total price: $${formattedTotal}`);
    // });

    // // ADD TO CART FUNCTION
    // function addToCart() {
    //   const quantity = parseInt(quantityInput.value);
    //   console.log("game is: ", game);
    //   const coverImage = game.coverImage;
    //   // const isWishlisted = 1;
    //   console.log("game.id is: ", game.id);
    //   console.log("game.isWishlisted is: ", game.isWishlisted);
    //   console.log("coverImage is: ", coverImage);
    //   const itemName = game.itemName;
    //   const currentPrice = game.currentPrice;
    //   const beforePrice = game.beforePrice;
    //   const platformShort = game.platformShort;
    //   const type = game.type;
    //   const releaseDate = game.releaseDate;
    //   const isWishlisted = game.isWishlisted;
    //   const region = game.region;
    //   const platform = game.platform;
    //   const gamespotRating = game.gamespotRating;
    //   const total = currentPrice * quantity;
    //   const formattedTotal = total.toFixed(2);
    //   const product = {
    //     id: game.id,
    //     itemName: itemName,
    //     coverImage: coverImage,
    //     isWishlisted: isWishlisted,
    //     releaseDate: releaseDate,
    //     type: type,
    //     region: region,
    //     platform: platform,
    //     gamespotRating: gamespotRating,
    //     quantity: 1,
    //     currentPrice: currentPrice,
    //     beforePrice: beforePrice,
    //     platformShort: platformShort,
    //     name: itemName,
    //     coverImage: coverImage,
    //     quantity: quantity,
    //     price: currentPrice,
    //     platformShort: `${platformShort} | ${type} Version`,
    //     total: formattedTotal,
    //   };

    //   let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //   const existingProductIndex = cart.findIndex((p) => p.id === gameID);
    //   if (existingProductIndex !== -1) {
    //     cart[existingProductIndex].quantity += quantity;
    //     cart[existingProductIndex].total = (cart[existingProductIndex].quantity * cart[existingProductIndex].price).toFixed(
    //       2
    //     );
    //   } else {
    //     cart.push(product);
    //   }
    //   localStorage.setItem("cart", JSON.stringify(cart));
    //   console.log("cart is: ", cart);
    // };
    // // Add event listeners to the buttons
    // document.querySelector(".add-to-cart").addEventListener("click", addToCart);
    // document.querySelector(".checkout-event").addEventListener("click", () => {
    // localStorage.removeItem("cart");
    // // Other checkout logic goes here
    // console.log(localStorage.cart);
    // });
  };
  createDetails();
}, 500);

  // ADD TO WISHLIST FUNCTION
  function addToWishlist(event) {
    const target = event.target;
    if (!target.classList.contains("add-to-wishlist")) {
      return; // ignore clicks on non-add-to-wishlist elements
    }
    console.log("target.dataset.id is: ", target.dataset.id);
    const gameID = target.dataset.id;
    console.log("gameID is: ", gameID);
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const existingIndex = wishlist.findIndex((game) => game.id === gameID);
    if (existingIndex >= 0) {
      // game is already in wishlist, remove it
      wishlist.splice(existingIndex, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      console.log(`Game with ID ${gameID} removed from wishlist`);
    } else {
      const game = games.find((g) => parseInt(g.id, 10) === parseInt(gameID, 10));

      console.log("game is: ", game);
      const coverImage = game.coverImage;
      const isWishlisted = 1;

      console.log("game.id is: ", game.id);
      console.log("game.isWishlisted is: ", game.isWishlisted);
      console.log("coverImage is: ", coverImage);
      const container = target.closest(".container");
      const itemName = game.itemName;
      const currentPrice = game.currentPrice;
      const beforePrice = game.beforePrice;
      const platformShort = game.platformShort;
      const type = game.type;
      const releaseDate = game.releaseDate;
      const region = game.region;
      const platform = game.platform;
      const gamespotRating = game.gamespotRating;
      const total = currentPrice;
      const formattedTotal = total.toFixed(2);
      const product = {
        id: gameID,
        itemName: itemName,
        coverImage: coverImage,
        isWishlisted: isWishlisted,
        releaseDate: releaseDate,
        type: type,
        region: region,
        platform: platform,
        gamespotRating: gamespotRating,
        quantity: 1,
        currentPrice: currentPrice,
        beforePrice: beforePrice,
        total: formattedTotal,
        platformShort: platformShort,
      };

      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      console.log("wishlist is: ", wishlist);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartGame = cart.find((game) => game.id === gameID);
      console.log("cartGame is: ", cartGame);
      if (cartGame) {
        cartGame.isWishlisted = 1;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      console.log("cart is: ", cart);
    }
  }

  if (gamesContainer) {
    gamesContainer.addEventListener("click", addToWishlist);
  }
// }, 5000);
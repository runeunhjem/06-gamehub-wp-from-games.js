// import { games } from "./db.js";
import { games } from "./games.js";
const gamesContainer = document.getElementById("games-container");

// Save the updated wishlist to localStorage
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
localStorage.setItem("wishlist", JSON.stringify(wishlist));
console.log("wishlist is: ", wishlist);

setTimeout(() => {
  // Iterate over the wishlisted games array and create a new HTML element for each game
  wishlist.forEach((e, index) => {
    const gameID = parseInt(e.id);
    let game = games.find((e) => parseInt(e.id, 10) === parseInt(gameID, 10));

    const coverImage = e.coverImage;
    const heartIcon = e.isWishlisted === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
    const typeIcon = e.type === "Key" ? "images/ico_key.svg" : "images/ico_disc.svg";
    // const typeIcon = games.type === "Key" ? ["images/ico_key.svg", "Key"] : ["images/ico_disc.svg", "Disc"];

    const itemName = e.itemName;
    const price = parseFloat(e.currentPrice);
    const platformShort = e.platformShort;
    const platform = e.platform;
    const type = e.type;
    const releaseDate = e.releaseDate;
    const total = price;
    const formattedTotal = total.toFixed(2);
    const isWishlisted = parseInt(e.isWishlisted);
    const product = {
      id: gameID,
      // index: index, // NOT NEEDED?
      name: itemName,
      coverImage: coverImage,
      isWishlisted: isWishlisted,
      releaseDate: releaseDate,
      platform: platform,
      type: type,
      quantity: 1,
      price: price,
      total: formattedTotal,
      platformShort: platformShort,
    };

    gamesContainer.innerHTML += `
  <div class="container game-cards" data-filter="${game.platform}-${game.type}">
    <div class="items ${itemName}">
      <div class="psnleft game-title">
        <h2 class="h4 type">${itemName}</h2><span class="gametitle-info">${platformShort} | ${type} Version</span>
      </div>
      <div class="game-cover">
        <a href="details.html?id=${parseInt(e.id)}" class="results-list">
          <img class="game-img" src=${coverImage} alt="${itemName} ${e.platform} | ${type} Version">
        </a>
      </div>
      <div class="small psnleft release-date">Release Date:</div>
      <div class="small psnleft reldate">${e.releaseDate}</div>
      <div class="small psnleft">Type:</div>
      <div class="small psncenter type-ico">
        <img src="${typeIcon}" alt="${e.type}">
      </div>
      <div class="small psnleft type-text">${e.type}</div>
      <div class="small psnleft region">Region:</div>
      <div class="small psncenter region-ico">
        <img src="images/ico_europe.svg" alt="Region | Europe">
      </div>
      <div class="small psnleft region-text">${e.region}</div>
      <div class="small psnleft platform">Platform:</div>
      <div class="small psncenter platform-ico">
        <img src="images/ico_psn.svg" alt="Playstation 5">
      </div>
      <div class="small psnleft platform-text">${e.platform}</div>
      <div class="psnleft gsrating">Gamespot Rating:</div>
      <div class="psnright rating">${e.gamespotRating}</div>
      <div class="small psnleft readreview">
        <a href="https://www.gamespot.com/games/reviews/">Read review</a>
      </div>
      <div class="togglewishlist add-to-wishlist">
        <span class="small psnright">
          <img class="remove small psnright add-to-wishlist wishlist-icon" src="${heartIcon}" alt="Add to wishlist" data-id="${parseInt(e.id)}">
        </span>
      </div>
      <div class="price psnright">
        <span class="dollar yellow">.</span>
        <span class="price currentPrice">${parseFloat(e.currentPrice)}</span>
      </div>
      <div class="price__before psnright">
        <span class="dollar yellow">.</span>${parseFloat(e.beforePrice)}
      </div>
    </div>
      <div class="psn__buttons">
        <div class="cta add-to-cart" data-id="${parseInt(e.id)}">Add to cart</div>
        <a href="details.html?id=${parseInt(e.id)}" class="results-list" role="button">
          <div class="cta">View Details</div>
        </a>
      </div>
    </div>
`;
  });
  // // Add event listener to heart icon in each game card
  // const heartIcons = document.querySelectorAll(".wishlist-icon");
  // heartIcons.forEach((icon) => {
  //   icon.addEventListener("click", () => {
  //     const gameID = parseInt(icon.dataset.id, 10);
  //     const gameIndex = wishlist.findIndex((game) => parseInt(game.id) === gameID);
  //     console.log("gameIndex typeof is: ", typeof gameIndex);
  //     wishlist.splice(gameIndex, 1);
  //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
  //     icon.closest(".container").remove();
  //     // location.reload();
  //     console.log("wishlist is: ", wishlist);
  //   });
  // });
  // Add event listener to heart icon in each game card
  const heartIcons = document.querySelectorAll(".wishlist-icon");
  heartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const gameID = parseInt(icon.dataset.id, 10);
      const gameIndex = wishlist.findIndex((game) => parseInt(game.id) === gameID);
      wishlist.splice(gameIndex, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      icon.closest(".container").remove();
      wishlist = JSON.parse(localStorage.getItem("wishlist")) || []; // Update wishlist array
      console.log("wishlist is: ", wishlist);
      location.reload();
    });
  });
}, 500);
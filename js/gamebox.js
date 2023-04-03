const gameContainer = document.getElementById("game-container");
innerHTML.gameContainer = `
            <div class="container game-cards" data-filter="${game.platform}-${game.type}">
              <div
                class="items ps5-forge-legend-disc"
                id="ps5-forge-legend-disc"
              >
                <div class="psnleft game-title">
                  <h2 class="h4 yellow type">Forge Legend</h2>
                </div>
                <div class="game-cover">
                  <img
                    src="images/covers/cover-ps5-forge-legend.png"
                    alt="PS5 Forge Legend | Disc Version"
                 >
                </div>
                <div class="psnleft backtogames">
                  <a href="checkout.html">Go to checkout</a>
                </div>
                <div class="small psnleft release-date">Release Date:</div>
                <div class="small psnright reldate">2022/09/16</div>
                <div class="small psnleft type">Type:</div>
                <div class="small psncenter type-ico">
                  <img src="${typeIcon}" alt="${game.type}">
                </div>
                <div class="small psnright type-text">Disc</div>
                <div class="small psnleft region">Region:</div>
                <div class="small psncenter region-ico">
                  <img src="images/ico_europe.svg" alt="Region | Europe">
                </div>
                <div class="small psnright region-text">Europe</div>
                <div class="small psnleft platform">Platform:</div>
                <div class="small psncenter platform-ico">
                  <img src="images/ico_psn.svg" alt="Playstation 5">
                </div>
                <div class="small psnright platform-text">Playstation 5</div>
                <div class="small yellow psnleft useroffers">
                  Offer from 3 sellers
                </div>
                <div class="psnleft gsrating">Gamespot Rating:</div>
                <div class="psnright rating">8/10</div>
                <div class="small psnleft readreview">
                  <a href="https://www.gamespot.com/games/reviews/"
                    >Read review</a
                  >
                </div>
                <div class="togglewishlist">
                  <a class="small psnright" href="wishlist.html"
                    ><img
                      class="remove small psnright"
                      src="images/ico_heart.svg"
                      alt="Add to wishlist"
                 ></a>
                </div>
                <div class="ourprice psnright">Our Price:</div>
                <div class="number psnleft">
                  -
                  <div class="howmany">1</div>
                  +
                </div>
                <div class="price psnright">
                  <span class="dollar yellow">.</span>79.95
                </div>
                <div class="price__before psnright">
                  <span class="dollar yellow">.</span>89.95
                </div>
              </div>
              <div class="psn__buttons">
                <a href="cart.html" role="button"
                  ><div class="cta">Add to cart</div></a
                >
                <a
                  href="product_details_ps5-forge-legend-disc.html"
                  role="button"
                  ><div class="cta">View Details</div></a
                >
              </div>
            </div>`;

            export {gameContainer};
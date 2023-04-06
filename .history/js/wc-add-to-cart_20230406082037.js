// Replace <your-store-url> with your WooCommerce store URL and <your-consumer-key> and <your-consumer-secret> with your WooCommerce API keys.
const baseUrl = "https://<your-store-url>/wp-json/wc/v3";
const consumerKey = "<your-consumer-key>";
const consumerSecret = "<your-consumer-secret>";

// Replace <game-id> with the ID of the game you want to add to the basket (cart).
const gameId = "<game-id>";

// Fetch the game data from your headless site's API.
fetch(`https://<your-headless-site-url>/api/games/${gameId}`)
  .then((response) => response.json())
  .then((game) => {
    // Send a POST request to the WooCommerce API to add the game to the basket (cart).
    fetch(`${baseUrl}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
      },
      body: JSON.stringify({
        product_id: game.id,
        quantity: 1,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect the user to the WooCommerce basket (cart) page.
          window.location.href = `${baseUrl}/cart`;
        } else {
          console.error(response.statusText);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });

  
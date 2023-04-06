// Replace <your-store-url> with your WooCommerce store URL and <your-consumer-key> and <your-consumer-secret> with your WooCommerce API keys.
const baseUrl = "https://<your-store-url>/wp-json/wc/v3";
const consumerKey = "<your-consumer-key>";
const consumerSecret = "<your-consumer-secret>";

// Fetch the basket (cart) items from the WooCommerce API.
fetch(`${baseUrl}/cart`, {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
  },
})
  .then((response) => response.json())
  .then((cart) => {
    // Display the basket (cart) items to the user.
    console.log(cart);
  })
  .catch((error) => {
    console.error(error);
  });

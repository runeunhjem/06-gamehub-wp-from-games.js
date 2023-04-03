import { games } from "./db.js";


// add event listener to the clear cart button
document.querySelector(".clear-cart").addEventListener("click", clearCart);

//function to update the cart count:
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cart.length;
};

//Call the updateCartCount() function after adding a product to the cart:
function addToCart() {      
  const quantity = 1;      
  console.log(target.dataset.id);
  const gameID = target.dataset.id;
  const game = games.find(game => game.id === gameID);
  const container = target.closest('.container');
  const itemName = container.querySelector('.game-title .type').textContent;
  const price = parseFloat(container.querySelector(".currentPrice").textContent);
  const coverImage = container.querySelector(".game-img").getAttribute("src");
  console.log(coverImage);
  const total = price;
  const formattedTotal = total.toFixed(2);
  const product = {
    ID: gameID,
    name: itemName,
    quantity: 1,
    price: price,
    total: formattedTotal,
    image: coverImage
  };
  console.log(product);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
};

// retrieve the cart from local storage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// get the cart container element
const cartContainer = document.getElementById("cart-container");



// generate HTML code for each item in the cart and add it to the cart container
console.log(cart);
// cart.forEach(game => console.log(game.id));
cart.forEach((item, index) => {
  // const game = games.find((g) => g.itemName === item.name);
  // const game = games.find((g) => g.id === item.ID);
  // const game = games.id === item.id;

  const game = games.find(g => g.name === item.name);

  // console.log(item.platformShort);
  cartContainer.innerHTML += `
  <div class="cart-item">
    <div class="cart-item__image"><img src="${game.coverImage}" alt="${game.itemName}"></div>
    <div class="cart-info">
    <div class="cart-item__name">${item.name}</div>
    <div class="cart-item__name">${game.platformShort} ${game.type} version</div>
    <div class="cart-item__priceText">Total price:</div>
    </div>
    <div class="cart-prices">
    <div class="cart-item__price">$${item.price}</div>
    <div class="cart-item__quantity">${item.quantity} pcs</div>
    <div class="cart-item__total">$${item.total}</div>
    </div>
    <div class="remove-item">
      <button class="remove-button" data-index="${index}">Remove</button>
    </div>
  </div>
  `;
});

// calculate total price and quantity
let totalQuantity = 0;
let totalPrice = 0;
cart.forEach((item) => {
  totalQuantity += item.quantity;
  totalPrice += parseFloat(item.total);
});

// add a new element at the bottom of the cart container to display the sum
cartContainer.innerHTML += `
  <div class="cart-total">
    <p class="total">A total of</p>
    <div class="cart-total__quantity">${totalQuantity} items: </div>
    <div class="cart-total__price">$${totalPrice.toFixed(2)}</div>
  </div>
`;

// add event listeners to the remove buttons
const removeButtons = document.querySelectorAll(".remove-item");
removeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const index = event.target.dataset.index;
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  });
});

// clear cart function
function clearCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
  updateCartCount();
}
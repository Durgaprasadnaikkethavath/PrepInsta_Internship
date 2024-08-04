const addToBagButtons = document.querySelectorAll(".addToBag");
const addToWishlistButtons = document.querySelectorAll(".addToWishlist");
const bagItems = document.getElementById("bagItems");
const wishlistItems = document.getElementById("wishlistItems");
const totalPriceElement = document.getElementById("totalPrice");

let totalPrice = 0;

addToBagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const itemName = button.getAttribute("data-name");
    const itemPrice = parseFloat(button.getAttribute("data-price"));
    const itemImg = button.getAttribute("data-img");

    // Add item to bag list
    const listItem = document.createElement("li");
    listItem.innerHTML = `<img src="${itemImg}" alt="${itemName}" width="50" height="50"> ${itemName} - $${itemPrice.toFixed(
      2
    )}`;
    bagItems.appendChild(listItem);

    // Update total price
    totalPrice += itemPrice;
    totalPriceElement.textContent = totalPrice.toFixed(2);
  });
});

addToWishlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const itemName = button.getAttribute("data-name");
    const itemPrice = parseFloat(button.getAttribute("data-price"));
    const itemImg = button.getAttribute("data-img");

    // Add item to wishlist
    const listItem = document.createElement("li");
    listItem.innerHTML = `<img src="${itemImg}" alt="${itemName}" width="50" height="50"> ${itemName} - $${itemPrice.toFixed(
      2
    )}`;
    wishlistItems.appendChild(listItem);
  });
});

/////////////////////////////////////////////////////
let bag = [];

function addToBag(item) {
  bag.push(item);
  updateBagCount();
}

function updateBagCount() {
  const bagCount = document.getElementById("bag-count");
  bagCount.textContent = bag.length;
}

function showBagItems() {
  const bagItemsDiv = document.getElementById("bag-items");

  const bagList = document.getElementById("bagItems");
  bagItemsDiv.classList.toggle("bag");
  bagList.classList.toggle("bag");
}

let wishList = [];

function addWishList(item) {
  bag.push(item);
}

function showWishListItem() {
  const wishListItemsDiv = document.getElementById("wishlistItem");

  const wishList = document.getElementById("wishlistItems");
  wishListItemsDiv.classList.toggle("wishlist");
  wishList.classList.toggle("wishlist");
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    var preloader = document.getElementById("preloader");
    // var content = document.getElementById("content");
    preloader.style.display = "none";
    // content.style.display = "block";
  });
});

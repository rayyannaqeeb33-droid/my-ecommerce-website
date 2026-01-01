const products = [
  { id:1, name:"Premium Headphones", price:60, img:"https://via.placeholder.com/250" },
  { id:2, name:"Smart Watch", price:120, img:"https://via.placeholder.com/250" },
  { id:3, name:"Sports Shoes", price:80, img:"https://via.placeholder.com/250" },
  { id:4, name:"Gaming Mouse", price:45, img:"https://via.placeholder.com/250" }
];

const productContainer = document.getElementById("products");
const cartDisplay = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
let cart = [];

// Display Products
products.forEach(p=>{
  productContainer.innerHTML += `
  <div class="card">
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  </div>`;
});

// Add to Cart
function addToCart(id){
  const item = products.find(p=>p.id===id);
  cart.push(item);
  updateCart();
}

// Show Cart
function updateCart(){
  cartDisplay.innerHTML = "";
  let total = 0;

  cart.forEach(item=>{
    cartDisplay.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    total += item.price;
  });

  totalDisplay.innerHTML = "Total: $" + total;
}

// Open / Close Cart
function openCart(){
  document.getElementById("cart").style.display = "flex";
}

function closeCart(){
  document.getElementById("cart").style.display = "none";
}



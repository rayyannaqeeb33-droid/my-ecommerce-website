const products = [
  { id:1, name:"Headphones", price:30, img:"https://via.placeholder.com/200" },
  { id:2, name:"Smart Watch", price:50, img:"https://via.placeholder.com/200" },
  { id:3, name:"Shoes", price:40, img:"https://via.placeholder.com/200" }
];

const productContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total");

let cart = [];

products.forEach(p=>{
  productContainer.innerHTML += `
  <div class="card">
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  </div>`;
});

function addToCart(id){
  const item = products.find(p=>p.id===id);
  cart.push(item);
  displayCart();
}

function displayCart(){
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(c=>{
    cartItems.innerHTML += `<p>${c.name} - $${c.price}</p>`;
    total += c.price;
  });
  totalPrice.innerHTML = `Total: $${total}`;
}

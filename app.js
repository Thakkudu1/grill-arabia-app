/*
  GRILL ARABIA FOOD ORDERING APP
  1) Change RESTAURANT_WHATSAPP to your restaurant WhatsApp number.
     Use country code + number, digits only. Example India: 919876543210
  2) Edit the MENU list below with your actual items and prices (in rupees).
*/
const RESTAURANT_WHATSAPP = "917736094215"; // Grill Arabia WhatsApp number

const MENU = [
  const MENU = [
  {
    id: 1,
    name: "Alfaham Mandhi Full",
    category: "Mandhi",
    price: 1100,
    emoji: "🍗",
    desc: "Full Alfaham Mandhi. Peri pepper flavour available."
  },
  {
    id: 2,
    name: "Alfaham Mandhi Half",
    category: "Mandhi",
    price: 600,
    emoji: "🍗",
    desc: "Half Alfaham Mandhi. Peri pepper flavour available."
  },
  {
    id: 3,
    name: "Alfaham Mandhi Quarter",
    category: "Mandhi",
    price: 300,
    emoji: "🍗",
    desc: "Quarter Alfaham Mandhi. Peri pepper flavour available."
  },
  {
    id: 4,
    name: "Alfaham Full",
    category: "Grill",
    price: 650,
    emoji: "🔥",
    desc: "Full grilled Alfaham chicken."
  },
  {
    id: 5,
    name: "Alfaham Half",
    category: "Grill",
    price: 325,
    emoji: "🔥",
    desc: "Half grilled Alfaham chicken."
  },
  {
    id: 6,
    name: "Alfaham Quarter",
    category: "Grill",
    price: 200,
    emoji: "🔥",
    desc: "Quarter grilled Alfaham chicken."
  },
  {
    id: 7,
    name: "Grill Mandhi Full",
    category: "Mandhi",
    price: 1100,
    emoji: "🍛",
    desc: "Full Grill Mandhi."
  },
  {
    id: 8,
    name: "Grill Mandhi Half",
    category: "Mandhi",
    price: 600,
    emoji: "🍛",
    desc: "Half Grill Mandhi."
  },
  {
    id: 9,
    name: "Grill Mandhi Quarter",
    category: "Mandhi",
    price: 300,
    emoji: "🍛",
    desc: "Quarter Grill Mandhi."
  },
  {
    id: 10,
    name: "Grill Full",
    category: "Grill",
    price: 650,
    emoji: "🔥",
    desc: "Full grilled chicken."
  },
  {
    id: 11,
    name: "Grill Half",
    category: "Grill",
    price: 325,
    emoji: "🔥",
    desc: "Half grilled chicken."
  },
  {
    id: 12,
    name: "Grill Quarter",
    category: "Grill",
    price: 200,
    emoji: "🔥",
    desc: "Quarter grilled chicken."
  },
  {
    id: 13,
    name: "Chicken Biryani",
    category: "Biryani",
    price: 230,
    emoji: "🍚",
    desc: "Chicken biryani with aromatic rice."
  },
  {
    id: 14,
    name: "Chicken Masala",
    category: "Curries",
    price: 230,
    emoji: "🍛",
    desc: "Chicken masala."
  },
  {
    id: 15,
    name: "Porotta",
    category: "Sides",
    price: 25,
    emoji: "🫓",
    desc: "Soft, flaky porotta."
  }
  ];

const cart = {};
let activeCategory = "All";
let activeCategory = "All";
const money = n => "₹" + Number(n).toLocaleString("en-IN");
const grid = document.getElementById("menu-grid");
const categoriesEl = document.getElementById("categories");
const cartPanel = document.getElementById("cart-panel");
const overlay = document.getElementById("overlay");
document.getElementById("year").textContent = new Date().getFullYear();

function renderCategories(){
  const categories = ["All", ...new Set(MENU.map(item => item.category))];
  categoriesEl.innerHTML = categories.map(cat => `<button class="category ${cat===activeCategory?"active":""}" data-category="${cat}">${cat}</button>`).join("");
  categoriesEl.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    activeCategory = btn.dataset.category; renderCategories(); renderMenu();
  }));
}
function renderMenu(){
  const items = MENU.filter(item => activeCategory==="All" || item.category===activeCategory);
  grid.innerHTML = items.map(item => `<article class="food-card">
    <div class="food-art"><span>${item.emoji}</span>${item.badge?`<span class="badge">${item.badge}</span>`:""}</div>
    <div class="food-info"><h3>${item.name}</h3><p>${item.desc}</p>
    <div class="food-bottom"><span class="price">${money(item.price)}</span><button class="add-button" data-add="${item.id}" aria-label="Add ${item.name} to cart">+</button></div></div>
    </article>`).join("");
  grid.querySelectorAll("[data-add]").forEach(btn => btn.addEventListener("click", () => addItem(Number(btn.dataset.add))));
}
function addItem(id){cart[id]=(cart[id]||0)+1;renderCart();showToast("Added to your cart");}
function changeQty(id,delta){cart[id]=(cart[id]||0)+delta;if(cart[id]<=0)delete cart[id];renderCart();}
function getTotal(){return MENU.reduce((sum,item)=>sum+item.price*(cart[item.id]||0),0);}
function renderCart(){
  const count=Object.values(cart).reduce((a,b)=>a+b,0);
  document.getElementById("cart-count").textContent=count;
  document.getElementById("subtotal").textContent=money(getTotal());
  const entries=MENU.filter(item=>cart[item.id]);
  document.getElementById("cart-items").innerHTML=entries.length?entries.map(item=>`<div class="cart-item">
    <div><h4>${item.emoji} ${item.name}</h4><small>${money(item.price)} each</small><div class="qty-controls"><button data-qty="${item.id}" data-delta="-1" aria-label="Remove one">−</button><strong>${cart[item.id]}</strong><button data-qty="${item.id}" data-delta="1" aria-label="Add one">+</button></div></div>
    <div class="cart-item-price">${money(item.price*cart[item.id])}</div></div>`).join(""):`<p class="empty-cart">Your cart is empty. Add something delicious!</p>`;
  document.querySelectorAll("[data-qty]").forEach(btn=>btn.addEventListener("click",()=>changeQty(Number(btn.dataset.qty),Number(btn.dataset.delta))));
}
function openCart(){cartPanel.classList.add("open");overlay.classList.add("show");cartPanel.setAttribute("aria-hidden","false");}
function closeCart(){cartPanel.classList.remove("open");overlay.classList.remove("show");cartPanel.setAttribute("aria-hidden","true");}
function showToast(message){const toast=document.getElementById("toast");toast.textContent=message;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800);}
document.getElementById("open-cart").addEventListener("click",openCart);
document.getElementById("close-cart").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
document.getElementById("checkout").addEventListener("click",()=>{
  const entries=MENU.filter(item=>cart[item.id]);
  if(!entries.length){showToast("Add at least one item to your cart first.");return;}
  const name=document.getElementById("customer-name").value.trim();
  const address=document.getElementById("customer-address").value.trim();
  const notes=document.getElementById("customer-notes").value.trim();
  if(!name||!address){showToast("Please enter your name and delivery address.");return;}
  if(!RESTAURANT_WHATSAPP){showToast("Restaurant WhatsApp number must be added in app.js.");return;}
  const lines=entries.map(item=>`• ${item.name} x ${cart[item.id]} = ${money(item.price*cart[item.id])}`);
  const message=`Hello Grill Arabia! I'd like to place an order:\n\n${lines.join("\n")}\n\nSubtotal: ${money(getTotal())}\n\nCustomer: ${name}\nDelivery address: ${address}${notes?`\nOrder notes: ${notes}`:""}\n\nPlease confirm availability, delivery charges and final total.`;
  window.open(`https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
});
renderCategories();renderMenu();renderCart();

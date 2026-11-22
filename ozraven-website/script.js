// OZRAVEN storefront — edit the product catalogue and contact settings here.
const BUSINESS_EMAIL = "hello@ozraven.com"; // Replace with your real business email.
const products = {
  portfolio: {name:"Student Portfolio Pro", price:199, type:"HTML + CSS TEMPLATE", description:"A responsive personal portfolio template for students and beginners. Includes a polished home page, about section, skills, project cards and contact area. Edit the HTML and CSS to make it your own."},
  social: {name:"Creator Social Kit", price:149, type:"DESIGN RESOURCE", description:"A starter collection of social content layouts to help creators establish a consistent visual identity. Replace the sample text, colours and imagery with your own brand assets."},
  study: {name:"Focus Dashboard", price:99, type:"PRODUCTIVITY TOOL", description:"A minimal planning dashboard concept for organising tasks and focused work sessions. Designed to help you keep your next action visible and your workspace clear."},
  launch: {name:"Startup Launch Planner", price:249, type:"NOTION / PLANNING", description:"A practical launch-planning framework for shaping an early idea, defining an audience, mapping priorities and keeping track of your next steps."}
};
let cart = JSON.parse(localStorage.getItem("ozravenCart") || "{}");
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const formatPrice = n => "₹" + n.toLocaleString("en-IN");

function saveCart(){ localStorage.setItem("ozravenCart", JSON.stringify(cart)); renderCart(); }
function renderCart(){
  const entries = Object.entries(cart).filter(([id,q]) => products[id] && q > 0);
  const count = entries.reduce((sum,[,q])=>sum+q,0);
  const total = entries.reduce((sum,[id,q])=>sum+products[id].price*q,0);
  $("#cartCount").textContent = count;
  $("#drawerCount").textContent = `(${count})`;
  $("#cartSubtotal").textContent = formatPrice(total);
  if(!entries.length){
    $("#cartItems").innerHTML = `<div class="empty-cart"><span>◌</span><h3>YOUR BAG IS EMPTY.</h3><p>Find something that moves you forward.</p><button class="text-link" id="continueShopping">EXPLORE PRODUCTS →</button></div>`;
    $("#continueShopping").addEventListener("click", closeCart);
    return;
  }
  $("#cartItems").innerHTML = entries.map(([id,q])=>`<div class="cart-item">
    <div><h4>${products[id].name}</h4><small>${products[id].type}</small>
      <div class="quantity-row"><button data-qty="${id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${q}</span><button data-qty="${id}" data-change="1" aria-label="Increase quantity">+</button><button class="remove-item" data-remove="${id}">REMOVE</button></div>
    </div><strong>${formatPrice(products[id].price*q)}</strong>
  </div>`).join("");
}
function addToCart(id){
  if(!products[id]) return;
  cart[id]=(cart[id]||0)+1; saveCart();
  const button = $(`[data-add="${id}"]`);
  if(button){ const old=button.innerHTML; button.innerHTML="ADDED ✓"; setTimeout(()=>button.innerHTML=old,1100); }
}
function openCart(){ $("#cartOverlay").classList.add("open"); $("#cartDrawer").classList.add("open"); $("#cartDrawer").setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; }
function closeCart(){ $("#cartOverlay").classList.remove("open"); $("#cartDrawer").classList.remove("open"); $("#cartDrawer").setAttribute("aria-hidden","true"); document.body.style.overflow=""; }
function showDetails(id){
  const p=products[id]; if(!p)return;
  $("#modalType").textContent=p.type; $("#modalTitle").textContent=p.name;
  $("#modalDescription").textContent=p.description; $("#modalPrice").textContent=formatPrice(p.price);
  $("#modalAdd").dataset.id=id; $("#modalBackdrop").classList.add("open"); document.body.style.overflow="hidden";
}
function closeDetails(){ $("#modalBackdrop").classList.remove("open"); document.body.style.overflow=""; }

document.addEventListener("click", e=>{
  const add=e.target.closest("[data-add]"); if(add) addToCart(add.dataset.add);
  const detail=e.target.closest("[data-details]"); if(detail) showDetails(detail.dataset.details);
  const qty=e.target.closest("[data-qty]");
  if(qty){const id=qty.dataset.qty;cart[id]=Math.max(0,(cart[id]||0)+Number(qty.dataset.change));if(!cart[id])delete cart[id];saveCart();}
  const remove=e.target.closest("[data-remove]");if(remove){delete cart[remove.dataset.remove];saveCart();}
});
$("#openCart").addEventListener("click",openCart);
$("#closeCart").addEventListener("click",closeCart);
$("#cartOverlay").addEventListener("click",closeCart);
$("#modalClose").addEventListener("click",closeDetails);
$("#modalBackdrop").addEventListener("click",e=>{if(e.target===$("#modalBackdrop"))closeDetails();});
$("#modalAdd").addEventListener("click",e=>{addToCart(e.currentTarget.dataset.id);closeDetails();openCart();});
$("#checkoutBtn").addEventListener("click",()=>{
  const entries=Object.entries(cart).filter(([id,q])=>products[id]&&q>0);
  if(!entries.length){alert("Your bag is empty. Add a product before checkout.");return;}
  const lines=entries.map(([id,q])=>`${products[id].name} × ${q} — ${formatPrice(products[id].price*q)}`);
  const total=entries.reduce((sum,[id,q])=>sum+products[id].price*q,0);
  const subject=encodeURIComponent("OZRAVEN digital product order enquiry");
  const body=encodeURIComponent(`Hello OZRAVEN,\n\nI would like to enquire about purchasing:\n${lines.join("\n")}\n\nSubtotal: ${formatPrice(total)}\n\nPlease share the next steps for payment and digital delivery.\n\nThank you.`);
  if(BUSINESS_EMAIL==="hello@ozraven.com"){alert("Demo checkout: open script.js and replace BUSINESS_EMAIL with your real business email to receive order enquiries.");return;}
  window.location.href=`mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
$("#filters").addEventListener("click",e=>{
  const btn=e.target.closest("[data-filter]");if(!btn)return;
  $$(".filter-btn").forEach(b=>b.classList.toggle("selected",b===btn));
  const filter=btn.dataset.filter;
  $$(".product-card").forEach(card=>card.hidden=filter!=="all"&&card.dataset.category!==filter);
});
$("#menuToggle").addEventListener("click",()=>{
  const isOpen=$("#nav").classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded",String(isOpen));
});
$$(".nav-link").forEach(link=>link.addEventListener("click",()=>$("#nav").classList.remove("open")));
$("#contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=$("#contactName").value.trim(), email=$("#contactEmail").value.trim(), message=$("#contactMessage").value.trim();
  if(!name||!email||!message){$("#formStatus").textContent="PLEASE COMPLETE ALL FIELDS.";return;}
  const subject=encodeURIComponent("OZRAVEN website enquiry");
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  if(BUSINESS_EMAIL==="hello@ozraven.com"){
    $("#formStatus").textContent="DEMO MODE: SET YOUR REAL EMAIL IN SCRIPT.JS TO RECEIVE MESSAGES.";
    return;
  }
  $("#formStatus").textContent="OPENING YOUR EMAIL APP…";
  window.location.href=`mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
$("#year").textContent=new Date().getFullYear();
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();closeDetails();}});
renderCart();

// Reveal elements gently as they enter the viewport.
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("revealed");revealObserver.unobserve(entry.target);}
}),{threshold:.12});
$$(".product-card,.service-row,.section-heading,.manifesto-main,.manifesto-bottom").forEach(el=>{el.classList.add("reveal");revealObserver.observe(el);});

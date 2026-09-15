/* =========================
   PRODUCT DATABASE (Detailed with specs)
========================= */
const products = [
  // --- SMARTPHONES (10 items) ---
  {
    id: "s1",
    name: "Samsung Galaxy S24 Ultra",
    price: 74500,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller",
    spec: "256GB",
    rating: 4.9,
    stock: 5,
    details: { ram: "12GB", rom: "256GB", camera: "200MP Quad Camera", size: "6.8 inches", battery: "5000 mAh" }
  },
  {
    id: "s2",
    name: "Apple iPhone 15 Pro Max",
    price: 92000,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=80",
    badge: "Premium",
    spec: "256GB",
    rating: 4.9,
    stock: 3,
    details: { ram: "8GB", rom: "256GB", camera: "48MP Triple Camera", size: "6.7 inches", battery: "4422 mAh" }
  },
  {
    id: "s3",
    name: "Google Pixel 8 Pro",
    price: 68000,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
    badge: "New",
    spec: "256GB",
    rating: 4.7,
    stock: 4,
    details: { ram: "12GB", rom: "256GB", camera: "50MP Triple Camera", size: "6.7 inches", battery: "5050 mAh" }
  },
  {
    id: "s4",
    name: "Samsung Galaxy Z Fold 5",
    price: 115000,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=500&q=80",
    badge: "Foldable",
    spec: "512GB",
    rating: 4.8,
    stock: 2,
    details: { ram: "12GB", rom: "512GB", camera: "50MP Main Camera", size: "7.6 inches (Folded: 6.2\")", battery: "4400 mAh" }
  },
  {
    id: "s5",
    name: "Apple iPhone 14",
    price: 59000,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80",
    badge: "Popular",
    spec: "128GB",
    rating: 4.8,
    stock: 7,
    details: { ram: "6GB", rom: "128GB", camera: "12MP Dual Camera", size: "6.1 inches", battery: "3279 mAh" }
  },
  {
    id: "s6",
    name: "Xiaomi 14 Ultra",
    price: 65000,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
    badge: "Leica Optics",
    spec: "512GB",
    rating: 4.6,
    stock: 4,
    details: { ram: "16GB", rom: "512GB", camera: "50MP Quad Leica", size: "6.73 inches", battery: "5000 mAh" }
  },
  {
    id: "s7",
    name: "OnePlus 12",
    price: 58000,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=500&q=80",
    badge: "Fast",
    spec: "256GB",
    rating: 4.7,
    stock: 6,
    details: { ram: "12GB", rom: "256GB", camera: "50MP Hasselblad", size: "6.82 inches", battery: "5400 mAh" }
  },
  {
    id: "s8",
    name: "Samsung Galaxy A55",
    price: 29000,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
    badge: "Value",
    spec: "128GB",
    rating: 4.5,
    stock: 10,
    details: { ram: "8GB", rom: "128GB", camera: "50MP Triple Camera", size: "6.6 inches", battery: "5000 mAh" }
  },
  {
    id: "s9",
    name: "Google Pixel 7a",
    price: 36000,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=500&q=80",
    badge: "AI Camera",
    spec: "128GB",
    rating: 4.6,
    stock: 5,
    details: { ram: "8GB", rom: "128GB", camera: "64MP Dual Camera", size: "6.1 inches", battery: "4385 mAh" }
  },
  {
    id: "s10",
    name: "Apple iPhone 13",
    price: 48000,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?auto=format&fit=crop&w=500&q=80",
    badge: "Reliable",
    spec: "128GB",
    rating: 4.7,
    stock: 8,
    details: { ram: "4GB", rom: "128GB", camera: "12MP Dual Camera", size: "6.1 inches", battery: "3240 mAh" }
  },

  // --- AUDIO (10 items) ---
  {
    id: "a1",
    name: "Sony WH-1000XM5",
    price: 22500,
    category: "audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller",
    spec: "WIRELESS",
    rating: 4.8,
    stock: 12,
    details: { type: "Over-Ear", connectivity: "Bluetooth 5.2", battery: "30 Hours", mic: "Built-in ANC Mic", size: "Standard" }
  },
  {
    id: "a2",
    name: "Apple AirPods Pro 2",
    price: 15500,
    category: "audio",
    image: "https://images.unsplash.com/photo-1588423771077-d8903fbb48f8?auto=format&fit=crop&w=500&q=80",
    badge: "Popular",
    spec: "2ND GEN",
    rating: 4.9,
    stock: 8,
    details: { type: "In-Ear TWS", connectivity: "Apple H2 Chip", battery: "6 Hours + 30h case", mic: "Beamforming Mics", size: "Compact" }
  },
  {
    id: "a3",
    name: "Bose QuietComfort Ultra",
    price: 24000,
    category: "audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    badge: "ANC",
    spec: "HEADPHONES",
    rating: 4.9,
    stock: 5,
    details: { type: "Over-Ear", connectivity: "Bluetooth 5.3", battery: "24 Hours", mic: "Immersive Audio Mics", size: "Adjustable" }
  },
  {
    id: "a4",
    name: "JBL Flip 6",
    price: 8900,
    category: "audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
    badge: "Waterproof",
    spec: "SPEAKER",
    rating: 4.7,
    stock: 14,
    details: { type: "Portable Speaker", connectivity: "Bluetooth 5.1", battery: "12 Hours", rating: "IP67 Waterproof", size: "17.8 x 6.8 cm" }
  },
  {
    id: "a5",
    name: "Sony WF-1000XM5",
    price: 18500,
    category: "audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    badge: "Hi-Res",
    spec: "EARBUDS",
    rating: 4.8,
    stock: 7,
    details: { type: "In-Ear TWS", connectivity: "Bluetooth 5.3", battery: "8 Hours + 16h case", mic: "Noise Sensor Mics", size: "Compact" }
  },
  {
    id: "a6",
    name: "Apple AirPods 3",
    price: 12000,
    category: "audio",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=500&q=80",
    badge: "Spatial Audio",
    spec: "EARBUDS",
    rating: 4.6,
    stock: 9,
    details: { type: "In-Ear", connectivity: "Apple H1 Chip", battery: "6 Hours", mic: "Dual Beamforming", size: "One Size" }
  },
  {
    id: "a7",
    name: "JBL Charge 5",
    price: 12500,
    category: "audio",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80",
    badge: "Powerbank Built-in",
    spec: "SPEAKER",
    rating: 4.8,
    stock: 6,
    details: { type: "Portable Speaker", connectivity: "Bluetooth 5.1", battery: "20 Hours", feature: "Acts as Powerbank", size: "22 x 9.6 cm" }
  },
  {
    id: "a8",
    name: "Beats Studio Pro",
    price: 21000,
    category: "audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    badge: "Lossless",
    spec: "HEADPHONES",
    rating: 4.5,
    stock: 4,
    details: { type: "Over-Ear", connectivity: "Class 1 Bluetooth", battery: "40 Hours", mic: "Active Noise Cancelling", size: "Foldable" }
  },
  {
    id: "a9",
    name: "Anker Soundcore Life Q30",
    price: 5900,
    category: "audio",
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    badge: "Value",
    spec: "ANC",
    rating: 4.7,
    stock: 15,
    details: { type: "Over-Ear", connectivity: "Bluetooth 5.0", battery: "40 Hours (ANC On)", mic: "Dual Mic Noise Reduction", size: "Standard" }
  },
  {
    id: "a10",
    name: "Marshall Emberton II",
    price: 11000,
    category: "audio",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=500&q=80",
    badge: "Classic Design",
    spec: "SPEAKER",
    rating: 4.8,
    stock: 8,
    details: { type: "Portable Speaker", connectivity: "Bluetooth 5.1", battery: "30+ Hours", rating: "IP67 Dust/Water", size: "6.8 x 16 x 7.6 cm" }
  },

  // --- CASES (10 items) ---
  {
    id: "c1",
    name: "Pitaka MagEZ Case 4",
    price: 4800,
    category: "cases",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=500&q=80",
    badge: "Slim",
    spec: "CARBON FIBER",
    rating: 4.8,
    stock: 15,
    details: { material: "Aramid Fiber", magSafe: "Compatible", thickness: "0.95mm", protection: "Scratch & Light Drop" }
  },
  {
    id: "c2",
    name: "Apple Silicone Case with MagSafe",
    price: 3500,
    category: "cases",
    image: "https://images.unsplash.com/photo-1601593346740-925619e59d6e?auto=format&fit=crop&w=500&q=80",
    badge: "Original",
    spec: "SILICONE",
    rating: 4.7,
    stock: 12,
    details: { material: "Liquid Silicone", magSafe: "Built-in Magnets", lining: "Soft Microfiber", protection: "Daily Impact" }
  },
  {
    id: "c3",
    name: "Spigen Tough Armor",
    price: 2800,
    category: "cases",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=500&q=80",
    badge: "Drop Proof",
    spec: "HEAVY DUTY",
    rating: 4.9,
    stock: 20,
    details: { material: "TPU + Polycarbonate", kickstand: "Included", protection: "Military Grade Drop Tested", tech: "Foam Technology" }
  },
  {
    id: "c4",
    name: "Samsung Clear View Case",
    price: 3200,
    category: "cases",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=500&q=80",
    badge: "Smart Cover",
    spec: "FLIP CASE",
    rating: 4.5,
    stock: 8,
    details: { material: "Polycarbonate", feature: "Interactive Display Panel", protection: "360 Degree Coverage" }
  },
  {
    id: "c5",
    name: "UAG Monarch Series",
    price: 4500,
    category: "cases",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=500&q=80",
    badge: "Rugged",
    spec: "MIL-SPEC",
    rating: 4.9,
    stock: 10,
    details: { material: "Armor Frame + Top Grain Leather", layers: "5-Layer Protection", standard: "2X Mil-Spec Drop Tested" }
  },
  {
    id: "c6",
    name: "Caudabe Sheith",
    price: 3800,
    category: "cases",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=500&q=80",
    badge: "Minimalist",
    spec: "MATTE",
    rating: 4.8,
    stock: 7,
    details: { material: "Shock-absorbing Polymer", texture: "Micro-textured Matte", thickness: "Ultra Slim" }
  },
  {
    id: "c7",
    name: "Apple Clear Case MagSafe",
    price: 3600,
    category: "cases",
    image: "https://images.unsplash.com/photo-1573148197779-b7b4486c9977?auto=format&fit=crop&w=500&q=80",
    badge: "Transparent",
    spec: "POLYCARBONATE",
    rating: 4.4,
    stock: 14,
    details: { material: "Clear Polycarbonate", coating: "Anti-Yellowing", magSafe: "Built-in Magnets" }
  },
  {
    id: "c8",
    name: "RhinoShield SolidSuit",
    price: 3400,
    category: "cases",
    image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=500&q=80",
    badge: "Impact Protection",
    spec: "CUSTOMIZABLE",
    rating: 4.7,
    stock: 9,
    details: { material: "ShockSpread Polymer", protection: "Exceeds Military Standards", finish: "Premium Matte" }
  },
  {
    id: "c9",
    name: "Nomad Modern Leather Case",
    price: 4200,
    category: "cases",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
    badge: "Horween Leather",
    spec: "LEATHER",
    rating: 4.8,
    stock: 6,
    details: { material: "Genuine Horween Leather", patina: "Develops rugged patina over time", dropTest: "10-foot drop protection" }
  },
  {
    id: "c10",
    name: "Ringke Fusion-X",
    price: 1900,
    category: "cases",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=80",
    badge: "Bumper",
    spec: "CAMO/CLEAR",
    rating: 4.6,
    stock: 18,
    details: { material: "PC Back + TPU Bumper", grip: "Anti-slip ridges", lanyardHoles: "Dual QuikCatch holes" }
  },

  // --- POWER & CHARGING (10 items) ---
  {
    id: "p1",
    name: "Anker 737 PowerBank",
    price: 8500,
    category: "power",
    image: "https://images.unsplash.com/photo-1609592424840-1c0e5d2b1f36?auto=format&fit=crop&w=500&q=80",
    badge: "Fast Charge",
    spec: "24,000 mAh",
    rating: 4.9,
    stock: 6,
    details: { capacity: "24,000 mAh", output: "140W Max Output", display: "Smart Digital Display", ports: "2 USB-C, 1 USB-A" }
  },
  {
    id: "p2",
    name: "Apple 35W Dual USB-C Adapter",
    price: 3200,
    category: "power",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=500&q=80",
    badge: "Original",
    spec: "WALL CHARGER",
    rating: 4.8,
    stock: 12,
    details: { wattage: "35W", ports: "Dual USB-C", plug: "Compact Foldable Prns" }
  },
  {
    id: "p3",
    name: "Samsung 45W Super Fast Charger",
    price: 2900,
    category: "power",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=500&q=80",
    badge: "PPS Fast",
    spec: "WALL CHARGER",
    rating: 4.9,
    stock: 15,
    details: { wattage: "45W Super Fast Charging 2.0", compatibility: "Galaxy S24/S23 Ultra, Tablets", port: "Single USB-C" }
  },
  {
    id: "p4",
    name: "Anker MagGo Wireless Charger",
    price: 4100,
    category: "power",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=500&q=80",
    badge: "MagSafe Stand",
    spec: "3-IN-1",
    rating: 4.7,
    stock: 8,
    details: { type: "3-in-1 Charging Station", output: "15W MagSafe Fast Wireless", devices: "Phone, Watch, Earbuds simultaneously" }
  },
  {
    id: "p5",
    name: "Baseus 100W GaN Charger",
    price: 4900,
    category: "power",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    badge: "High Power",
    spec: "4-PORT USB",
    rating: 4.8,
    stock: 10,
    details: { wattage: "100W GaN Technology", ports: "2 USB-C, 2 USB-A", compatibility: "Laptops, Tablets, Phones" }
  },
  {
    id: "p6",
    name: "Belkin BoostCharge Pro",
    price: 5500,
    category: "power",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80",
    badge: "Certified",
    spec: "MAGSAFE PAD",
    rating: 4.8,
    stock: 7,
    details: { type: "Official MagSafe Pad", output: "15W Fast Wireless", cable: "Included AC Adapter" }
  },
  {
    id: "p7",
    name: "Xiaomi 20000mAh Power Bank",
    price: 3800,
    category: "power",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
    badge: "Reliable",
    spec: "22.5W FAST",
    rating: 4.6,
    stock: 14,
    details: { capacity: "20,000 mAh", output: "22.5W Fast Charging", ports: "Triple Output (USB-C & USB-A)" }
  },
  {
    id: "p8",
    name: "Anker PowerCore 10000",
    price: 2500,
    category: "power",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=500&q=80",
    badge: "Compact",
    spec: "PORTABLE",
    rating: 4.7,
    stock: 16,
    details: { capacity: "10,000 mAh", weight: "Ultra Lightweight", safety: "MultiProtect Safety System" }
  },
  {
    id: "p9",
    name: "UGREEN Nexode 65W GaN",
    price: 3900,
    category: "power",
    image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?auto=format&fit=crop&w=500&q=80",
    badge: "Compact GaN",
    spec: "3-PORT",
    rating: 4.9,
    stock: 9,
    details: { wattage: "65W GaNFast", ports: "2 USB-C, 1 USB-A", plug: "Foldable design" }
  },
  {
    id: "p10",
    name: "Apple MagSafe Battery Pack",
    price: 6500,
    category: "power",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80",
    badge: "Magnetic",
    spec: "WIRELESS PACK",
    rating: 4.4,
    stock: 5,
    details: { type: "Snap-on Magnetic Battery", compatibility: "iPhone MagSafe models", charging: "5W On-the-go wireless" }
  }
];

/* =========================
   STATE
========================= */
let cart = JSON.parse(localStorage.getItem("heyMobileCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("heyMobileWishlist")) || [];
let currentCategory = "all";
let currentProducts = [...products];

/* =========================
   HELPERS
========================= */
function money(number) {
  return number.toLocaleString("en-US") + " ETB";
}

function saveData() {
  localStorage.setItem("heyMobileCart", JSON.stringify(cart));
  localStorage.setItem("heyMobileWishlist", JSON.stringify(wishlist));
}

function getProduct(id) {
  return products.find(p => p.id === id);
}

/* =========================
   PRODUCT CARD COMPONENT
========================= */
function productCard(product) {
  const liked = wishlist.includes(product.id);
  
  return `
    <div class="card">
      <div class="card-img-wrapper" onclick="openProductModal('${product.id}')" title="Click to view details">
        ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
        <button class="card-wishlist ${liked ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${product.id}')">
          ${liked ? "♥" : "♡"}
        </button>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      
      <div class="card-info">
        <span class="card-spec">${product.spec}</span>
        <h3 class="card-title" onclick="openProductModal('${product.id}')">${product.name}</h3>
        
        <div class="card-rating">
          ★★★★★ <span>${product.rating}</span>
        </div>
        
        <div class="card-bottom">
          <div class="price-box">
            <span class="card-price">${money(product.price)}</span>
            <span class="card-stock">${product.stock} in stock</span>
          </div>
          <button class="add-btn" onclick="addToCart('${product.id}')">+</button>
        </div>
      </div>
    </div>
  `;
}

/* =========================
   PRODUCT DETAILS MODAL LOGIC
========================= */
function openProductModal(id) {
  const p = getProduct(id);
  if (!p) return;

  let specsHTML = "";
  if (p.details) {
    for (const [key, val] of Object.entries(p.details)) {
      specsHTML += `
        <div class="spec-item">
          <span>${key.toUpperCase()}</span>
          <span>${val}</span>
        </div>
      `;
    }
  }

  const modalBody = document.getElementById("productModalBody");
  modalBody.innerHTML = `
    <div class="detail-body">
      <div class="detail-img-box">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div>
        <span class="sub-heading">${p.category.toUpperCase()}</span>
        <h2 style="font-size:1.4rem; margin-top:2px;">${p.name}</h2>
        <div class="card-rating" style="margin: 6px 0;">★★★★★ <span>${p.rating} (${p.stock} in stock)</span></div>
        <p style="font-size:1.3rem; font-weight:bold; color:var(--cyan);">${money(p.price)}</p>
      </div>

      <div style="margin-top:0.5rem;">
        <h4 style="margin-bottom:8px; font-size:0.95rem;">Key Specifications & Details:</h4>
        <div class="specs-grid">
          ${specsHTML}
        </div>
      </div>

      <button class="btn-primary w-100 mt-2" onclick="addToCart('${p.id}'); closeModal('productModal');">Add to Cart</button>
    </div>
  `;

  document.getElementById("productModal").classList.remove("hidden");
}

/* =========================
   RENDERING
========================= */
function renderTrending() {
  const trending = products.slice(0, 4);
  document.getElementById("trendingProducts").innerHTML = trending.map(productCard).join("");
}

function renderCategories() {
  const categories = [
    ["all", "All"],
    ["smartphones", "Smartphones"],
    ["audio", "Audio"],
    ["cases", "Cases"],
    ["power", "Power & Charging"]
  ];
  document.getElementById("categoryButtons").innerHTML = categories.map(cat => `
    <button class="${currentCategory === cat[0] ? "active" : ""}" onclick="filterCategory('${cat[0]}')">
      ${cat[1]}
    </button>
  `).join("");
}

function renderShop() {
  let list = [...products];
  if (currentCategory !== "all") {
    list = list.filter(p => p.category === currentCategory);
  }
  currentProducts = list;
  document.getElementById("shopProducts").innerHTML = list.length
    ? list.map(productCard).join("")
    : "<p style='color:var(--text-muted)'>No products found.</p>";
}

/* =========================
   NAVIGATION & FILTERS
========================= */
function showPage(page, category = "all") {
  const home = document.getElementById("homePage");
  const shop = document.getElementById("shopPage");
  
  if (page === "home") {
    home.classList.remove("hidden");
    shop.classList.add("hidden");
  } else {
    home.classList.add("hidden");
    shop.classList.remove("hidden");
    filterCategory(category);
  }
  
  document.getElementById("mobileMenu").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterCategory(category) {
  currentCategory = category;
  
  if(document.getElementById("homePage").classList.contains("hidden") === false) {
     showPage("home-products", category);
     return;
  }
  
  const titles = {
    all: "All Products",
    smartphones: "Smartphones",
    audio: "Audio",
    cases: "Cases",
    power: "Power & Charging"
  };
  document.getElementById("shopTitle").textContent = titles[category] || "Products";
  
  renderCategories();
  renderShop();
}

function sortProducts() {
  const val = document.getElementById("sortSelect").value;
  let list = [...currentProducts];
  if (val === "low") list.sort((a, b) => a.price - b.price);
  if (val === "high") list.sort((a, b) => b.price - a.price);
  if (val === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  document.getElementById("shopProducts").innerHTML = list.map(productCard).join("");
}

/* =========================
   CART & WISHLIST LOGIC
========================= */
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.quantity++;
  else cart.push({ id, quantity: 1 });
  
  saveData();
  updateCounters();
  showToast("Added to cart");
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveData();
  renderCart();
  updateCounters();
}

function changeQty(id, amount) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) removeFromCart(id);
  else {
    saveData();
    renderCart();
    updateCounters();
  }
}

function showCart() {
  renderCart();
  document.getElementById("cartModal").classList.remove("hidden");
}

function renderCart() {
  const container = document.getElementById("cartItems");
  if (!cart.length) {
    container.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:2rem;">Cart is empty.</p>`;
    document.getElementById("cartTotal").textContent = "0 ETB";
    return;
  }
  
  let total = 0;
  container.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return "";
    total += p.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}">
        <div class="cart-item-info">
          <h4>${p.name}</h4> 
          <p>${money(p.price)}</p>
        </div>
        <div class="qty">
          <button onclick="changeQty('${p.id}', -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty('${p.id}', 1)">+</button>
        </div>
        <button onclick="removeFromCart('${p.id}')" style="background:none;border:none;color:#ef4444;margin-left:10px;font-size:1.2rem;">✕</button>
      </div>
    `;
  }).join("");
  
  document.getElementById("cartTotal").textContent = money(total);
}

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(i => i !== id);
    showToast("Removed from wishlist");
  } else {
    wishlist.push(id);
    showToast("Added to wishlist ♥");
  }
  saveData();
  updateCounters();
  renderTrending();
  renderShop();
  if (!document.getElementById("wishlistModal").classList.contains("hidden")) renderWishlist();
}

function showWishlist() {
  renderWishlist();
  document.getElementById("wishlistModal").classList.remove("hidden");
}

function renderWishlist() {
  const container = document.getElementById("wishlistItems");
  const list = products.filter(p => wishlist.includes(p.id));
  container.innerHTML = list.length 
    ? list.map(productCard).join("") 
    : `<p style="color:var(--text-muted);padding:2rem;">Wishlist is empty.</p>`;
}

/* =========================
   UI HELPERS
========================= */
function closeModal(id) { document.getElementById(id).classList.add("hidden"); }
function toggleMobileMenu() { document.getElementById("mobileMenu").classList.toggle("hidden"); }
function toggleSearch() { 
  const box = document.getElementById("searchBox");
  box.classList.toggle("hidden");
  if (!box.classList.contains("hidden")) document.getElementById("searchInput").focus();
}

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

function updateCounters() {
  document.getElementById("cartCount").textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("wishlistCount").textContent = wishlist.length;
}

function checkout() {
  if (!cart.length) return showToast("Cart is empty");
  let msg = "Hello Hey Mobile!%0A%0AI would like to order:%0A";
  let total = 0;
  cart.forEach(item => {
    const p = getProduct(item.id);
    if (!p) return;
    const sub = p.price * item.quantity;
    total += sub;
    msg += `%0A• ${p.name} x${item.quantity} — ${money(sub)}`;
  });
  msg += `%0A%0ATotal: ${money(total)}`;
  window.open("https://wa.me/251998470389?text=" + msg, "_blank");
}

/* =========================
   INITIALIZE
========================= */
renderTrending();
renderCategories();
renderShop();
updateCounters();
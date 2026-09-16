/* ==========================================================================
   VIGA NATURALS — shared data & Vue 3 app logic
   One file, used by every page. Each page mounts its own Vue app onto
   <div id="app" data-page="..."> based on the data-page attribute.
   ========================================================================== */

/* ---------------------------- Product catalog ---------------------------- */
const PRODUCTS = [
  {
    id: "herbal-hair-oil",
    name: "Herbal Hair Oil",
    category: "hair-care",
    categoryLabel: "Hair Care",
    icon: "🌿",
    img: "images/hair-oil.jpg",
    price: 399,
    oldPrice: 499,
    rating: 4.8,
    reviews: 214,
    bestSeller: true,
    tagline: "Deep nourishment for stronger, thicker hair",
    description: "A traditional blend of cold-pressed herbal oils infused with 12 Ayurvedic ingredients to strengthen roots, reduce hair fall and add a natural shine. Made in small batches with no mineral oil.",
    ingredients: ["Coconut Oil", "Bhringraj", "Amla", "Curry Leaves", "Hibiscus", "Fenugreek"],
    benefits: ["Reduces hair fall", "Strengthens roots", "Adds natural shine", "100% chemical free"]
  },
  {
    id: "herbal-hair-mask",
    name: "Herbal Hair Mask",
    category: "hair-care",
    categoryLabel: "Hair Care",
    icon: "🍃",
    img: "images/hair-mask.jpg",
    price: 349,
    oldPrice: 429,
    rating: 4.6,
    reviews: 132,
    bestSeller: true,
    tagline: "Deep-conditioning mask for silky, frizz-free hair",
    description: "A rich, creamy mask that repairs damaged strands and locks in moisture. Weekly use restores softness and manageability without weighing hair down.",
    ingredients: ["Shea Butter", "Aloe Vera", "Hibiscus", "Honey", "Moringa"],
    benefits: ["Deep conditioning", "Tames frizz", "Repairs damage", "Paraben free"]
  },
  {
    id: "hair-serum",
    name: "Hair Serum",
    category: "hair-care",
    categoryLabel: "Hair Care",
    icon: "✨",
    img: "images/hair-serum.jpg",
    price: 299,
    oldPrice: 349,
    rating: 4.7,
    reviews: 98,
    bestSeller: true,
    tagline: "Lightweight shine and frizz control",
    description: "A featherlight, non-greasy serum that smooths flyaways and seals in shine. Enriched with plant oils for daily heat and UV protection.",
    ingredients: ["Argan Oil", "Vitamin E", "Jojoba Oil", "Green Tea Extract"],
    benefits: ["Instant shine", "Anti-frizz", "Heat protection", "Lightweight formula"]
  },
  {
    id: "herbal-shampoo",
    name: "Herbal Shampoo",
    category: "hair-care",
    categoryLabel: "Hair Care",
    icon: "🧴",
    img: "images/herbal-shampoo.jpg",
    price: 449,
    oldPrice: 549,
    rating: 4.9,
    reviews: 301,
    bestSeller: true,
    tagline: "Gentle, sulphate-free cleansing",
    description: "A sulphate and paraben-free herbal shampoo that cleanses without stripping natural oils. Formulated with reetha, shikakai and hibiscus for soft, bouncy hair.",
    ingredients: ["Reetha", "Shikakai", "Hibiscus", "Aloe Vera", "Neem"],
    benefits: ["Sulphate free", "Gentle cleansing", "Balances scalp", "Suitable for daily use"]
  },
  {
    id: "rosemary-hair-oil",
    name: "Rosemary Hair Oil",
    category: "hair-care",
    categoryLabel: "Hair Care",
    icon: "🌱",
    img: "images/rosemary-oil.jpg",
    price: 429,
    oldPrice: 499,
    rating: 4.8,
    reviews: 176,
    bestSeller: false,
    tagline: "The growth-boosting classic",
    description: "Pure rosemary essential oil blended with a lightweight carrier base to stimulate circulation, encourage new growth and refresh the scalp.",
    ingredients: ["Rosemary Extract", "Castor Oil", "Peppermint Oil", "Vitamin E"],
    benefits: ["Boosts hair growth", "Stimulates scalp", "Reduces dandruff", "Cooling effect"]
  },
  {
    id: "herbal-bathing-powder",
    name: "Herbal Bathing Powder",
    category: "skin-care",
    categoryLabel: "Skin Care",
    icon: "🌼",
    img: "images/bathing-powder.jpg",
    price: 249,
    oldPrice: 299,
    rating: 4.5,
    reviews: 87,
    bestSeller: false,
    tagline: "An ancient ubtan ritual for glowing skin",
    description: "A traditional ubtan-style bathing powder made from ground herbs and pulses. Gently exfoliates and brightens while replacing your regular soap.",
    ingredients: ["Chickpea Flour", "Turmeric", "Sandalwood", "Rose Petals", "Orange Peel"],
    benefits: ["Natural exfoliation", "Brightens skin", "Removes tan", "Soap-free cleansing"]
  },
  {
    id: "natural-bathing-soap",
    name: "Natural Bathing Soap",
    category: "body-care",
    categoryLabel: "Body Care",
    icon: "🧼",
    img: "images/bathing-soap.jpg",
    price: 99,
    oldPrice: 129,
    rating: 4.6,
    reviews: 245,
    bestSeller: true,
    tagline: "Cold-pressed, handmade goodness",
    description: "A handmade, cold-pressed soap bar with nourishing plant oils and glycerin. Free of sulphates and harsh detergents, gentle enough for everyday use.",
    ingredients: ["Coconut Oil", "Olive Oil", "Glycerin", "Essential Oils"],
    benefits: ["Handmade & cold-pressed", "Retains natural glycerin", "Suitable for sensitive skin", "No sulphates"]
  },
  {
    id: "face-pack-powder",
    name: "Face Pack Powder",
    category: "skin-care",
    categoryLabel: "Skin Care",
    icon: "🌸",
    img: "images/face-pack.jpg",
    price: 279,
    oldPrice: 329,
    rating: 4.7,
    reviews: 156,
    bestSeller: true,
    tagline: "Multani mitti glow, the natural way",
    description: "A multi-herb face pack powder that draws out impurities, controls excess oil and leaves skin feeling refreshed. Mix with rose water or milk for best results.",
    ingredients: ["Multani Mitti", "Sandalwood", "Neem", "Turmeric", "Rose Petals"],
    benefits: ["Deep cleansing", "Controls oil", "Evens skin tone", "Suitable for all skin types"]
  },
  {
    id: "body-scrub",
    name: "Body Scrub",
    category: "body-care",
    categoryLabel: "Body Care",
    icon: "🧂",
    img: "images/body-scrub.jpg",
    price: 319,
    oldPrice: 379,
    rating: 4.5,
    reviews: 64,
    bestSeller: false,
    tagline: "Polish away dullness, reveal soft skin",
    description: "A coarse, nourishing scrub combining natural sugar and sea salt with cold-pressed oils to slough off dead skin and leave your body soft and radiant.",
    ingredients: ["Sea Salt", "Brown Sugar", "Coffee", "Coconut Oil", "Almond Oil"],
    benefits: ["Removes dead skin", "Improves circulation", "Deeply moisturizes", "Refreshing scent"]
  },
  {
    id: "herbal-body-powder",
    name: "Herbal Body Powder",
    category: "body-care",
    categoryLabel: "Body Care",
    icon: "🍀",
    img: "images/body-powder.jpg",
    price: 229,
    oldPrice: 269,
    rating: 4.4,
    reviews: 52,
    bestSeller: false,
    tagline: "All-day freshness, naturally",
    description: "A talc-free herbal body powder made with absorbent rice starch and cooling herbs to keep you fresh and fragrant through the day.",
    ingredients: ["Rice Starch", "Sandalwood", "Mint", "Neem", "Rose"],
    benefits: ["Talc free", "Keeps skin fresh", "Cooling fragrance", "Non-drying"]
  }
];

/* ------------------------------ Testimonials ------------------------------ */
const TESTIMONIALS = [
  { name: "Ananya R.", initial: "A", rating: 5, text: "The herbal hair oil actually smells like real herbs, not perfume! My hair fall has reduced noticeably in a month." },
  { name: "Priya S.", initial: "P", rating: 5, text: "Switched my whole family to Viga Naturals soaps. Gentle on my kids' skin and the ingredients list is refreshingly short." },
  { name: "Karthik M.", initial: "K", rating: 4, text: "Rosemary oil has become part of my weekly routine. Love that it's cold-pressed and doesn't feel heavy on the scalp." },
  { name: "Divya N.", initial: "D", rating: 5, text: "The face pack powder gave my skin a genuine glow before my wedding. So many compliments on how fresh I looked." },
  { name: "Rahul V.", initial: "R", rating: 5, text: "Finally a shampoo that doesn't have a chemical list a mile long. Sulphate-free and my scalp feels so much calmer." }
];

/* --------------------------------- Gallery --------------------------------- */
const GALLERY = [
  { icon: "🌿", caption: "Fresh herbs, sourced weekly" },
  { icon: "🧴", caption: "Small-batch bottling" },
  { icon: "🌸", caption: "Behind the scenes" },
  { icon: "🍯", caption: "Natural ingredients only" },
  { icon: "🧼", caption: "Handmade soap curing" },
  { icon: "🌼", caption: "Farm to bottle" },
  { icon: "✋", caption: "Crafted with care" },
  { icon: "🌱", caption: "Growing our own herbs" }
];

/* ----------------------------- Cart persistence ----------------------------- */
const CART_KEY = "viga_naturals_cart";

/* --------------------------- Account persistence ----------------------------
   Front-end only mock auth: accounts and the active session are kept in
   localStorage. There is no real server-side verification here — replace
   this with a proper backend before handling real customer accounts.
   ---------------------------------------------------------------------------*/
const USERS_KEY = "viga_naturals_users";
const SESSION_KEY = "viga_naturals_session";
const LIKES_KEY = "viga_naturals_likes";

function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (e) {
    /* ignore quota / privacy-mode errors */
  }
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveSession(user) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  } catch (e) {
    /* ignore quota / privacy-mode errors */
  }
}

function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (e) {
    /* ignore quota / privacy-mode errors */
  }
}

/* Liked products are stored per account: { "user@email.com": ["product-id", ...] } */
function loadLikesMap() {
  try {
    const raw = localStorage.getItem(LIKES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveLikesMap(map) {
  try {
    localStorage.setItem(LIKES_KEY, JSON.stringify(map));
  } catch (e) {
    /* ignore quota / privacy-mode errors */
  }
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    /* ignore quota / privacy-mode errors */
  }
}

function findProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

/* --------------------------------- Cart mixin -------------------------------
   Shared across every page's Vue app: cart drawer state, add/remove/qty
   logic, mobile nav toggle and small formatting helpers.
   ---------------------------------------------------------------------------*/
const CartMixin = {
  data() {
    return {
      cart: loadCart(),
      cartOpen: false,
      mobileMenuOpen: false,
      currentUser: loadSession(),
      likesMap: loadLikesMap(),
      whatsappNumber: "911234567890" // TODO: replace with the real WhatsApp business number
    };
  },
  computed: {
    cartCount() {
      return this.cart.reduce((sum, item) => sum + item.qty, 0);
    },
    cartTotal() {
      return this.cart.reduce((sum, item) => sum + item.qty * item.price, 0);
    },
    likedIds() {
      return this.currentUser ? this.likesMap[this.currentUser.email] || [] : [];
    },
    likedProducts() {
      return this.likedIds.map((id) => findProductById(id)).filter(Boolean);
    }
  },
  methods: {
    formatPrice(n) {
      return "₹" + Number(n).toLocaleString("en-IN");
    },
    addToCart(id, qty = 1) {
      const product = findProductById(id);
      if (!product) return;
      const existing = this.cart.find((i) => i.id === id);
      if (existing) {
        existing.qty += qty;
      } else {
        this.cart.push({ id: product.id, name: product.name, price: product.price, icon: product.icon, img: product.img, qty });
      }
      saveCart(this.cart);
      this.cartOpen = true;
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((i) => i.id !== id);
      saveCart(this.cart);
    },
    incQty(id) {
      const item = this.cart.find((i) => i.id === id);
      if (item) {
        item.qty++;
        saveCart(this.cart);
      }
    },
    decQty(id) {
      const item = this.cart.find((i) => i.id === id);
      if (!item) return;
      item.qty--;
      if (item.qty <= 0) {
        this.removeFromCart(id);
      } else {
        saveCart(this.cart);
      }
    },
    toggleCart() {
      this.cartOpen = !this.cartOpen;
    },
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMenu() {
      this.mobileMenuOpen = false;
    },
    whatsappLink(message) {
      const text = encodeURIComponent(message || "Hi Viga Naturals, I'd like to know more about your products.");
      return "https://wa.me/" + this.whatsappNumber + "?text=" + text;
    },
    logout() {
      clearSession();
      this.currentUser = null;
    },
    isLiked(id) {
      return this.likedIds.includes(id);
    },
    toggleLike(id) {
      if (!this.currentUser) {
        window.location.href = "login.html";
        return;
      }
      const email = this.currentUser.email;
      const list = this.likesMap[email] ? this.likesMap[email].slice() : [];
      const idx = list.indexOf(id);
      if (idx === -1) list.push(id);
      else list.splice(idx, 1);
      this.likesMap = { ...this.likesMap, [email]: list };
      saveLikesMap(this.likesMap);
    }
  }
};

/* --------------------------- Scroll reveal animation -------------------------
   Vue re-renders v-for lists whenever the underlying array changes (category
   filters, search). A one-shot IntersectionObserver would only ever see the
   elements present at mount time and leave later ones stuck invisible, so a
   MutationObserver keeps registering any ".reveal" element added afterwards.
   ---------------------------------------------------------------------------*/
function initScrollReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  const observeNew = (root) => {
    root.querySelectorAll(".reveal:not(.reveal-visible)").forEach((el) => observer.observe(el));
  };

  observeNew(document);

  if ("MutationObserver" in window) {
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches && node.matches(".reveal:not(.reveal-visible)")) observer.observe(node);
          observeNew(node);
        });
      });
    });
    mo.observe(document.getElementById("app") || document.body, { childList: true, subtree: true });
  }
}

/* ------------------------------ Header scroll shadow ------------------------- */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* =============================== PAGE APPS =============================== */

function mountHomeApp() {
  Vue.createApp({
    mixins: [CartMixin],
    data() {
      return {
        products: PRODUCTS,
        testimonials: TESTIMONIALS,
        gallery: GALLERY,
        newsletterEmail: "",
        newsletterSubmitted: false
      };
    },
    computed: {
      bestSellers() {
        return this.products.filter((p) => p.bestSeller).slice(0, 4);
      }
    },
    methods: {
      submitNewsletter() {
        if (!this.newsletterEmail) return;
        this.newsletterSubmitted = true;
        this.newsletterEmail = "";
      }
    },
    mounted() {
      initScrollReveal();
    }
  }).mount("#app");
}

function mountProductsApp() {
  Vue.createApp({
    mixins: [CartMixin],
    data() {
      return {
        products: PRODUCTS,
        activeCategory: "all",
        searchQuery: "",
        categories: [
          { key: "all", label: "All Products" },
          { key: "hair-care", label: "Hair Care" },
          { key: "skin-care", label: "Skin Care" },
          { key: "body-care", label: "Body Care" }
        ]
      };
    },
    computed: {
      filteredProducts() {
        const q = this.searchQuery.trim().toLowerCase();
        return this.products.filter((p) => {
          const matchesCategory = this.activeCategory === "all" || p.category === this.activeCategory;
          const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q);
          return matchesCategory && matchesSearch;
        });
      }
    },
    mounted() {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat && this.categories.some((c) => c.key === cat)) {
        this.activeCategory = cat;
      }
      initScrollReveal();
    }
  }).mount("#app");
}

function mountProductDetailApp() {
  Vue.createApp({
    mixins: [CartMixin],
    data() {
      const params = new URLSearchParams(window.location.search);
      const product = findProductById(params.get("id")) || PRODUCTS[0];
      return {
        product,
        qty: 1,
        activeTab: "description",
        addedMessage: false
      };
    },
    computed: {
      relatedProducts() {
        return PRODUCTS.filter((p) => p.category === this.product.category && p.id !== this.product.id).slice(0, 4);
      }
    },
    methods: {
      increaseQty() {
        this.qty++;
      },
      decreaseQty() {
        if (this.qty > 1) this.qty--;
      },
      addCurrentToCart() {
        this.addToCart(this.product.id, this.qty);
        this.addedMessage = true;
        setTimeout(() => (this.addedMessage = false), 2500);
      }
    },
    mounted() {
      document.title = this.product.name + " — Viga Naturals";
      initScrollReveal();
    }
  }).mount("#app");
}

function mountAboutApp() {
  Vue.createApp({
    mixins: [CartMixin],
    data() {
      return {
        stats: [
          { value: 5, suffix: "+", label: "Years of Craft", display: 0 },
          { value: 25000, suffix: "+", label: "Happy Customers", display: 0 },
          { value: 12, suffix: "", label: "Natural Products", display: 0 },
          { value: 100, suffix: "%", label: "Chemical Free", display: 0 }
        ]
      };
    },
    methods: {
      animateStats() {
        this.stats.forEach((stat) => {
          const duration = 1200;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            stat.display = Math.floor(stat.value * progress);
            if (progress < 1) requestAnimationFrame(step);
            else stat.display = stat.value;
          };
          requestAnimationFrame(step);
        });
      }
    },
    mounted() {
      initScrollReveal();
      const section = document.querySelector(".stats-section");
      if (section && "IntersectionObserver" in window) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.animateStats();
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.4 }
        );
        obs.observe(section);
      } else {
        this.animateStats();
      }
    }
  }).mount("#app");
}

function mountContactApp() {
  Vue.createApp({
    mixins: [CartMixin],
    data() {
      return {
        form: { name: "", email: "", phone: "", message: "" },
        submitted: false,
        errors: {}
      };
    },
    methods: {
      validate() {
        const errors = {};
        if (!this.form.name.trim()) errors.name = "Please enter your name";
        if (!/^\S+@\S+\.\S+$/.test(this.form.email)) errors.email = "Please enter a valid email";
        if (!this.form.message.trim()) errors.message = "Please enter a message";
        this.errors = errors;
        return Object.keys(errors).length === 0;
      },
      submitForm() {
        if (!this.validate()) return;
        this.submitted = true;
        this.form = { name: "", email: "", phone: "", message: "" };
      }
    },
    mounted() {
      initScrollReveal();
    }
  }).mount("#app");
}

function mountLoginApp() {
  Vue.createApp({
    mixins: [CartMixin],
    data() {
      return {
        mode: "login",
        message: "",
        loginForm: { email: "", password: "", remember: false },
        loginErrors: {},
        signupForm: { name: "", email: "", password: "", confirm: "" },
        signupErrors: {}
      };
    },
    methods: {
      switchMode(mode) {
        this.mode = mode;
        this.message = "";
        this.loginErrors = {};
        this.signupErrors = {};
      },
      validateLogin() {
        const errors = {};
        if (!/^\S+@\S+\.\S+$/.test(this.loginForm.email)) errors.email = "Please enter a valid email";
        if (!this.loginForm.password) errors.password = "Please enter your password";
        this.loginErrors = errors;
        return Object.keys(errors).length === 0;
      },
      submitLogin() {
        this.message = "";
        if (!this.validateLogin()) return;
        const users = loadUsers();
        const user = users.find((u) => u.email === this.loginForm.email && u.password === this.loginForm.password);
        if (!user) {
          this.loginErrors.password = "Incorrect email or password";
          return;
        }
        saveSession({ name: user.name, email: user.email });
        this.message = "✓ Welcome back, " + user.name + "! Redirecting…";
        this.loginForm = { email: "", password: "", remember: false };
        setTimeout(() => (window.location.href = "index.html"), 1000);
      },
      forgotPassword() {
        this.message = "";
        this.loginErrors = { password: "Password reset isn't available yet — please contact us for help." };
      },
      validateSignup() {
        const errors = {};
        if (!this.signupForm.name.trim()) errors.name = "Please enter your name";
        if (!/^\S+@\S+\.\S+$/.test(this.signupForm.email)) errors.email = "Please enter a valid email";
        if (!this.signupForm.password || this.signupForm.password.length < 6) errors.password = "Password must be at least 6 characters";
        if (this.signupForm.confirm !== this.signupForm.password) errors.confirm = "Passwords do not match";
        this.signupErrors = errors;
        return Object.keys(errors).length === 0;
      },
      submitSignup() {
        this.message = "";
        if (!this.validateSignup()) return;
        const users = loadUsers();
        if (users.some((u) => u.email === this.signupForm.email)) {
          this.signupErrors.email = "An account with this email already exists";
          return;
        }
        const user = { name: this.signupForm.name.trim(), email: this.signupForm.email, password: this.signupForm.password };
        users.push(user);
        saveUsers(users);
        saveSession({ name: user.name, email: user.email });
        this.message = "✓ Account created — welcome, " + user.name + "! Redirecting…";
        this.signupForm = { name: "", email: "", password: "", confirm: "" };
        setTimeout(() => (window.location.href = "index.html"), 1000);
      }
    },
    mounted() {
      initScrollReveal();
    }
  }).mount("#app");
}

function mountProfileApp() {
  Vue.createApp({
    mixins: [CartMixin],
    data() {
      return {
        profileTab: "liked"
      };
    },
    mounted() {
      if (!this.currentUser) {
        window.location.href = "login.html";
        return;
      }
      initScrollReveal();
    }
  }).mount("#app");
}

/* --------------------------------- Bootstrap --------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  const page = document.body.getAttribute("data-page");
  switch (page) {
    case "home":
      mountHomeApp();
      break;
    case "products":
      mountProductsApp();
      break;
    case "product-detail":
      mountProductDetailApp();
      break;
    case "about":
      mountAboutApp();
      break;
    case "contact":
      mountContactApp();
      break;
    case "login":
      mountLoginApp();
      break;
    case "profile":
      mountProfileApp();
      break;
  }
});

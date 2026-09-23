const books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "fiction",
        price: 89000,
        rating: 4.9,
        image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
        description: "Orzular, maqsadlar va insonning o‘z yo‘lini topishi haqida mashhur hikoya."
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        category: "business",
        price: 119000,
        rating: 4.9,
        image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
        description: "Kichik odatlar orqali katta natijalarga erishish haqida amaliy kitob."
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        category: "fiction",
        price: 79000,
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
        description: "Kelajak jamiyati va inson erkinligi haqida mashhur distopik roman."
    },
    {
        id: 4,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "history",
        price: 139000,
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
        description: "Insoniyat tarixining rivojlanishi haqida keng qamrovli asar."
    },
    {
        id: 5,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "business",
        price: 99000,
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg",
        description: "Moliyaviy fikrlash va shaxsiy moliya haqida mashhur kitob."
    },
    {
        id: 6,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        category: "science",
        price: 129000,
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
        description: "Inson tafakkuri va qaror qabul qilish jarayonlari haqida."
    },
    {
        id: 7,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "business",
        price: 109000,
        rating: 4.9,
        image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
        description: "Pulga bo‘lgan munosabat va moliyaviy qarorlar haqida."
    },
    {
        id: 8,
        title: "Steve Jobs",
        author: "Walter Isaacson",
        category: "history",
        price: 149000,
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/isbn/9781451648539-L.jpg",
        description: "Steve Jobs hayoti va Apple tarixiga bag‘ishlangan biografiya."
    },
    {
        id: 9,
        title: "Dune",
        author: "Frank Herbert",
        category: "fiction",
        price: 129000,
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
        description: "Kosmik imperiyalar va siyosiy kurashlar haqidagi epik fantastika."
    },
    {
        id: 10,
        title: "Deep Work",
        author: "Cal Newport",
        category: "business",
        price: 115000,
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
        description: "Chuqur diqqat va samarali ishlash haqida."
    },
    {
        id: 11,
        title: "The Martian",
        author: "Andy Weir",
        category: "science",
        price: 97000,
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg",
        description: "Marsda yolg‘iz qolgan astronautning omon qolish hikoyasi."
    },
    {
        id: 12,
        title: "Educated",
        author: "Tara Westover",
        category: "history",
        price: 119000,
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg",
        description: "Ta'lim va o‘zligini topish haqidagi ta'sirli xotiralar."
    },
    {
        id: 13,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "fiction",
        price: 69000,
        rating: 4.6,
        image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        description: "Amerika orzusi va insoniy munosabatlar haqidagi klassik roman."
    },
    {
        id: 14,
        title: "Zero to One",
        author: "Peter Thiel",
        category: "business",
        price: 109000,
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
        description: "Innovatsiya va startup qurish haqida."
    },
    {
        id: 15,
        title: "Cosmos",
        author: "Carl Sagan",
        category: "science",
        price: 125000,
        rating: 4.9,
        image: "https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg",
        description: "Koinot, sayyoralar va insoniyatning kosmosdagi o‘rni haqida."
    },
    {
        id: 16,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "fiction",
        price: 95000,
        rating: 4.9,
        image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
        description: "Bilbo Bagginsning sehrli dunyodagi buyuk sarguzashti."
    }
];


let currentCategory = "all";
let visibleBooks = 8;

let cart = JSON.parse(localStorage.getItem("borione_cart")) || [];
let favorites = JSON.parse(localStorage.getItem("borione_favorites")) || [];

const booksGrid = document.getElementById("booksGrid");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const favoriteCount = document.getElementById("favoriteCount");
const toast = document.getElementById("toast");



function money(value) {
    return value.toLocaleString("uz-UZ") + " so‘m";
}



function saveData() {
    localStorage.setItem("borione_cart", JSON.stringify(cart));
    localStorage.setItem("borione_favorites", JSON.stringify(favorites));
}



function showToast(title, text) {
    document.getElementById("toastTitle").textContent = title;
    document.getElementById("toastText").textContent = text;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}



function renderBooks() {

    let filtered = books.filter(book => {
        return currentCategory === "all" || book.category === currentCategory;
    });

    const sort = document.getElementById("sortSelect").value;

    if (sort === "low") {
        filtered.sort((a,b) => a.price - b.price);
    }

    if (sort === "high") {
        filtered.sort((a,b) => b.price - a.price);
    }

    if (sort === "rating") {
        filtered.sort((a,b) => b.rating - a.rating);
    }

    const visible = filtered.slice(0, visibleBooks);

    booksGrid.innerHTML = "";

    visible.forEach(book => {

        const isFavorite = favorites.includes(book.id);

        const card = document.createElement("article");

        card.className = "book-card reveal";

        card.innerHTML = `
            <div class="book-image">

                <img
                    src="${book.image}"
                    alt="${book.title}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80'"
                >

                <button
                    class="book-heart ${isFavorite ? "active" : ""}"
                    data-favorite="${book.id}"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

            </div>

            <div class="book-info">

                <span class="book-category">
                    ${book.category}
                </span>

                <h3 class="book-title">
                    ${book.title}
                </h3>

                <p class="book-author">
                    ${book.author}
                </p>

                <div class="rating">
                    ★★★★★ ${book.rating}
                </div>

                <div class="book-bottom">

                    <span class="book-price">
                        ${money(book.price)}
                    </span>

                    <button
                        class="add-cart"
                        data-cart="${book.id}"
                        title="Savatchaga qo‘shish"
                    >
                        +
                    </button>

                </div>

            </div>
        `;

        card.addEventListener("click", e => {

            if (
                e.target.closest(".book-heart") ||
                e.target.closest(".add-cart")
            ) return;

            openBook(book.id);

        });

        booksGrid.appendChild(card);
    });

    updateCounts();
    initReveal();

    const filteredLength = filtered.length;

    document.getElementById("loadMore").style.display =
        visibleBooks >= filteredLength ? "none" : "inline-flex";
}



document.addEventListener("click", e => {

    const favoriteButton = e.target.closest("[data-favorite]");

    if (favoriteButton) {

        const id = Number(favoriteButton.dataset.favorite);

        if (favorites.includes(id)) {
            favorites = favorites.filter(item => item !== id);

            showToast(
                "Sevimlilardan olib tashlandi",
                "Kitob ro‘yxatdan olib tashlandi."
            );

        } else {
            favorites.push(id);

            showToast(
                "Sevimlilarga qo‘shildi",
                "Kitob saqlandi."
            );
        }

        saveData();
        renderBooks();

        return;
    }


    const cartButton = e.target.closest("[data-cart]");

    if (cartButton) {

        const id = Number(cartButton.dataset.cart);

        addToCart(id);

    }

});



function addToCart(id) {

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: id,
            quantity: 1
        });
    }

    saveData();
    updateCart();

    showToast(
        "Savatchaga qo‘shildi",
        "Kitob savatchangizga qo‘shildi."
    );
}



function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveData();
    updateCart();

}



function changeQuantity(id, amount) {

    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }

    saveData();
    updateCart();
}



function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (!cart.length) {

        cartItems.innerHTML = `
            <div style="
                text-align:center;
                padding:80px 10px;
                color:#777;
            ">
                <div style="
                    font-size:50px;
                    margin-bottom:20px;
                ">📚</div>

                <p>Savatchangiz hozircha bo‘sh.</p>
            </div>
        `;

    } else {

        cart.forEach(item => {

            const book = books.find(book => book.id === item.id);

            if (!book) return;

            const subtotal = book.price * item.quantity;

            total += subtotal;
            count += item.quantity;

            const element = document.createElement("div");

            element.className = "cart-item";

            element.innerHTML = `
                <img
                    src="${book.image}"
                    alt="${book.title}"
                >

                <div>
                    <h4>${book.title}</h4>
                    <p>${money(book.price)}</p>

                    <div style="
                        display:flex;
                        align-items:center;
                        gap:8px;
                        margin-top:10px;
                    ">
                        <button
                            onclick="changeQuantity(${book.id}, -1)"
                            style="
                                border:1px solid #444;
                                padding:3px 8px;
                            "
                        >−</button>

                        <span>${item.quantity}</span>

                        <button
                            onclick="changeQuantity(${book.id}, 1)"
                            style="
                                border:1px solid #444;
                                padding:3px 8px;
                            "
                        >+</button>
                    </div>

                </div>

                <button
                    onclick="removeFromCart(${book.id})"
                >
                    ×
                </button>
            `;

            cartItems.appendChild(element);
        });
    }

    cartTotal.textContent = money(total);
    cartCount.textContent = count;

    favoriteCount.textContent = favorites.length;
}



function updateCounts() {

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    cartCount.textContent = count;
    favoriteCount.textContent = favorites.length;
}



document.getElementById("cartBtn").addEventListener("click", () => {

    cartDrawer.classList.add("open");
    overlay.classList.add("active");

    updateCart();

});



document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);



function closeCart() {

    cartDrawer.classList.remove("open");
    overlay.classList.remove("active");

}



document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filter")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        currentCategory = button.dataset.category;
        visibleBooks = 8;

        renderBooks();

    });

});



document.getElementById("sortSelect").addEventListener("change", () => {
    renderBooks();
});



document.getElementById("loadMore").addEventListener("click", () => {

    visibleBooks += 4;

    renderBooks();

});



/* CATEGORY CARDS */

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        currentCategory = category;

        visibleBooks = 8;

        document.querySelectorAll(".filter").forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.category === category
            );

        });

        document.getElementById("books").scrollIntoView({
            behavior: "smooth"
        });

        renderBooks();

    });

});



/* SEARCH */

const searchOverlay = document.getElementById("searchOverlay");
const globalSearch = document.getElementById("globalSearch");
const searchResults = document.getElementById("searchResults");

document.getElementById("searchBtn").addEventListener("click", () => {

    searchOverlay.classList.add("open");

    setTimeout(() => {
        globalSearch.focus();
    }, 300);

});



document.getElementById("closeSearch").addEventListener("click", () => {
    searchOverlay.classList.remove("open");
});



globalSearch.addEventListener("input", () => {

    const query = globalSearch.value.toLowerCase().trim();

    if (!query) {
        searchResults.innerHTML = "";
        return;
    }

    const results = books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );

    if (!results.length) {

        searchResults.innerHTML = `
            <p style="color:#777;padding:20px 0">
                Kitob topilmadi...
            </p>
        `;

        return;
    }

    searchResults.innerHTML = results.map(book => `
        <div
            class="search-result"
            onclick="openBook(${book.id})"
            style="cursor:pointer"
        >
            <div>
                <strong>${book.title}</strong>
                <small style="
                    display:block;
                    color:#777;
                    margin-top:5px;
                ">
                    ${book.author}
                </small>
            </div>

            <span>${money(book.price)}</span>
        </div>
    `).join("");

});



/* BOOK MODAL */

const bookModal = document.getElementById("bookModal");



function openBook(id) {

    const book = books.find(item => item.id === id);

    if (!book) return;

    document.getElementById("bookDetails").innerHTML = `
        <div class="detail-grid">

            <img
                src="${book.image}"
                alt="${book.title}"
            >

            <div>

                <span class="detail-category">
                    ${book.category}
                </span>

                <h2>${book.title}</h2>

                <p class="detail-author">
                    ${book.author}
                </p>

                <div class="rating" style="margin-top:15px">
                    ★★★★★ ${book.rating}
                </div>

                <p class="detail-description">
                    ${book.description}
                </p>

                <div class="detail-price">
                    ${money(book.price)}
                </div>

                <button
                    class="detail-add"
                    onclick="addToCart(${book.id}); closeBookModal();"
                >
                    Savatchaga qo‘shish →
                </button>

            </div>

        </div>
    `;

    bookModal.classList.add("open");

}



function closeBookModal() {
    bookModal.classList.remove("open");
}



document.getElementById("closeBookModal")
    .addEventListener("click", closeBookModal);



bookModal.addEventListener("click", e => {

    if (e.target === bookModal) {
        closeBookModal();
    }

});



/* THEME */

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("borione_theme") === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "☾";
}



themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const light = document.body.classList.contains("light");

    themeBtn.textContent = light ? "☾" : "☼";

    localStorage.setItem(
        "borione_theme",
        light ? "light" : "dark"
    );

});



/* COPY DISCOUNT */

document.getElementById("copyCode").addEventListener("click", async () => {

    const code = document.getElementById("discountCode").textContent;

    try {

        await navigator.clipboard.writeText(code);

        showToast(
            "Kod nusxalandi",
            "BORIONE20 promo kodi nusxalandi."
        );

    } catch {

        showToast(
            "Promo kod",
            "BORIONE20"
        );

    }

});



/* NEWSLETTER */

document.getElementById("newsletterForm")
    .addEventListener("submit", e => {

        e.preventDefault();

        const email = document.getElementById("emailInput").value;

        if (!email) return;

        showToast(
            "Xush kelibsiz!",
            "Yangiliklarga muvaffaqiyatli obuna bo‘ldingiz."
        );

        e.target.reset();

    });



/* CHECKOUT */

document.getElementById("checkoutBtn")
    .addEventListener("click", () => {

        if (!cart.length) {

            showToast(
                "Savatcha bo‘sh",
                "Avval kitob tanlang."
            );

            return;
        }

        showToast(
            "Buyurtma tayyor!",
            "Tez orada buyurtma sahifasi ochiladi."
        );

    });



/* MOBILE MENU */

document.getElementById("menuBtn")
    .addEventListener("click", () => {

        document.querySelector(".nav")
            .classList.toggle("open");

    });



document.querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document.querySelector(".nav")
                .classList.remove("open");

        });

    });



/* SCROLL HEADER */

window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.style.height = "72px";
    } else {
        header.style.height = "88px";
    }

});



/* CURSOR */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (window.innerWidth > 900) {

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    document.addEventListener("mousemove", e => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

    });

    function animateCursor() {

        followerX += (mouseX - followerX) * .12;
        followerY += (mouseY - followerY) * .12;

        follower.style.left = followerX + "px";
        follower.style.top = followerY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

}



/* REVEAL */

function initReveal() {

    const elements = document.querySelectorAll(
        ".book-card, .category-card, .about-content, .about-image"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    }, {
        threshold: .1
    });

    elements.forEach(element => {

        element.classList.add("reveal");
        observer.observe(element);

    });

}



/* KEYBOARD */

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        searchOverlay.classList.remove("open");
        closeCart();
        closeBookModal();

    }

});



/* LOADER */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader")
            .classList.add("hide");

        renderBooks();
        updateCart();

    }, 900);

});
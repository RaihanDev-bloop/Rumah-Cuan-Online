// ============================================
// DATA PRODUK - (Database Anda)
// ============================================
const productsData = {
      //////////================//////////
                //affiliate//
      /////////=================//////////  
    affiliate: [
        {
            id: 1,
            name: "Koleksi 3000++ Video Affiliate Siap Upload (Lynk.id)",
            description: "3.000++ video HD bebas copyright untuk Shopee, TikTok, & Facebook. Tanpa wajah, langsung upload! Ada link keranjang kuning & oren.",
            price: 15000,
            image: "assets/image/3000-video-affiliate-siap-pakai.jpeg",
            affiliateLink:" http://lynk.id/rco28/K1DBlnv/checkout",
            benefits: ["Video HD bebas copyright 100%", "Bisa upload tanpa nunjukin wajah", "Lengkap dengan link keranjang", "Cocok untuk semua platform", "Aman dari banned & strik", "Langsung upload atau diedit"]
        }
    ],
    
    //////////================//////////
                //creator//
    /////////=================//////////  
    creator: [
         {
            id: 11,
            name: "E-Book 999 Templates WTF Hook oleh Akademi Creator (Lynk.id)",
            description: "Rahasia neuroscience hentikan scroll dalam 3 detik. Dapatkan 999 template hook siap pakai sesuai niche. Views meledak instan!",
            price: 99000,
            image: "assets/image/ebook-999-template-wtf-hook.jpg",
            affiliateLink: "http://lynk.id/rco28/m4mqkgwpgz44/checkout",
            benefits: ["999 template siap pakai (copy-paste)", "Manipulasi otak audiens secara legal", "Rahasia 8 basic human instinct", "Teknik WTF hook level tertinggi", "Fundamental crafting hook lengkap", "Cocok untuk semua niche konten", "Hentikan scroll dalam 3 detik"]
        },
    ],
    
    //////////================//////////
                  //AI//
    /////////=================//////////  
    ai: [
                   {
            id: 21,
            name: "Paket Lengkap Kuasai AI 6-in-1 by AICO (Shopee)",
            description: "Kuasai AI dengan 6 produk premium: Kamus ChatGPT, Buku Panduan, 3 E-Book, 100+ Prompt Template, 6 Jam Video, dan AICO Learning Pass!",
            price: 229000,
            image: "assets/image/paket-lengkap-kuasai-ai.png",
            affiliateLink: "https://s.shopee.co.id/AUoykdcm7P",
            benefits: ["6 produk premium dalam 1 paket", "120+ contoh penggunaan ChatGPT", "100+ template prompt siap pakai", "6 jam video tutorial praktis", "Akses platform AICO eksklusif", "Cocok untuk pemula hingga ahli", "Materi selalu terupdate"]
        }
    ],
    
    //////////================//////////
             //Jualan Online//
    /////////=================//////////  
    online: [
        {
            id: 31,
            name: "Organic Brand Blueprint By Deryansha (Lynk.id)",
            description: "Bangun aset digital, raih cuan jangka panjang.",
            price: 999000,
            image: "/assets/image/cara-bangun-brand-organic-deryansha.jpg",
            affiliateLink: "http://lynk.id/rco28/eB4zDzV/checkout",
            benefits: ["Traffic Tanpa Iklan", "Cuan Tanpa Endors", "Cara cari winning produk dan kelola cutomer (RO dan CRM)", "Bangun Tim Konten Kreatif Menghasilkan", "Paket 10 Video Pembelajaran"]
        },
                {
            id: 32,
            name: "Milyarder Rumahan: Riset Jitu, Jualan Laris BY NR House (Lynk.id)",
            description: "Panduan rahasia meraih omzet 1,5 Miliar dalam 6 bulan dari rumah. Pelajari riset produk jitu, supplier, dan traffic tanpa perlu pengalaman!.",
            price: 149000,
            image: "/assets/image/dari-rumah-Jualan-produk-hasil-milyaran-by-NRhouse.jpg",
            affiliateLink: "http://lynk.id/rco28/RKeeraV/checkout",
            benefits: ["Riset produk potensi milyaran", "Temukan pola produk paling laris", "Panduan lengkap mendapatkan supplier", "Rahasia traffic untuk penjualan eksplosif", "Langkah praktis untuk pemula mutlak", "Target omzet ratusan hingga milyaran"]
        },
    ],
    
    //////////================//////////
                //Lainnya//
    /////////=================//////////  
    other: [
        {
            id: 41,
            name: "Bundle 2 Buku Suwandi Baskara: TikTok & Shopee Affiliate (Shopee)",
            description: "Dapatkan dua buku sekaligus! Panduan lengkap TikTok & Shopee Affiliate dari nol hingga mahir. Lengkap dengan hook konten, riset produk, dan trik FYP!",
            price: 30000,
            image: "assets/image/bundle-buku-tiktok-shopee-affiliate.png",
            affiliateLink: "https://s.shopee.co.id/8KkUC0hxUv",
            benefits: ["Dua buku affiliate sekaligus", "Panduan TikTok & Shopee lengkap", "Kamus saku hook 3 detik viral", "Rahasia FYP & algoritma terkini", "Tips live streaming & GMV Max", "Cocok untuk pemula hingga mahir", "Bonus komunitas eksklusif kreator"]
        }
    ]
};

const faqData = [
    { id: 1, question: "Bagaimana cara kerja website ini?", answer: "Kami mengumpulkan dan menampilkan materi belajar bisnis media online dari lynk.id dan showProductDetail, dengan cara membeli 1. pilih materi yang ingin anda pelajari, 2. tekan tombol beli dan anda akan diarahkan ke lynk.id atau Shopee sesuai dengan keterangan di nama produk, 3. anda melakukan pembelian di lynk.id atau Shopee." },
    { id: 2, question: "Dari mana asal materi belajar di web ini?", answer: "Materi belajar online di website ini berasal dari lynk.id dan Shopee yang dimana materi yang kami tampilkan merupakan materi dari para ahli bisnis digital yang sudah teruji materinya, jadi pastikan anda memiliki akun lynk.id atau Shopee untuk membeli materi pembelajaran yang ada." },
    { id: 3, question: "Bukankah harga yang diberikan terlalu mahal?", answer: "Tidak, harga yang diberikan adalah harga yang sepadan dengan apa yang akan anda dapatkan karena sejatinya ilmu lebih mahal dari uang jadi anda tidak akan rugi jika membelinya, dengan harga yang ada anda bisa untuk berkali-kali lipat." },
     { id: 4, question: "Apakah materi yang ada bisa menjamin keberhasilan saya?", answer: "Keberhasilan anda tetap bergantung pada anda, materi yang ada hanyalah gerbang dan pondasi anda untuk memulai, jadi keberhasilan tergantung dari aksi yang anda lakukan karena ilmu tanpa aksi tidak akan menghasilkan apapun." },
    { id: 5, question: "Bagaimana jika ada kendala terhadap materi yang saya beli?", answer: "Anda bisa menghubungi pemilik toko dari materi yang anda beli karena kami hanya menampilkan tidak menjual langsung." }
];

// ============================================
// GLOBAL STATE & ELEMENTS
// ============================================
let currentSlide = 0;
const productsGrid = document.getElementById('productsGrid');
const faqContainer = document.getElementById('faqContainer');
const tabButtons = document.querySelectorAll('.tab-btn');
const popoverOverlay = document.getElementById('popoverOverlay');
const popoverBody = document.querySelector('.popover-body');

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    renderFAQ();
    initNavigation();
    initSlider();
    initTabs();
});

// ============================================
// 1. NAVIGATION (HAMBURGER MENU)
// ============================================
function initNavigation() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// ============================================
// 2. SLIDER KONTAK
// ============================================
function initSlider() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    const changeSlide = (step) => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + step + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    };

    // Auto Play
    setInterval(() => changeSlide(1), 5000);

    // Manual Nav
    document.querySelector(".prev-slide")?.addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next-slide")?.addEventListener("click", () => changeSlide(1));
}

// ============================================
// 3. TABS LOGIC
// ============================================
function initTabs() {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProducts(button.dataset.category);
        });
    });
}

// ============================================
// 4. RENDER PRODUK (WITH SEO SEMANTICS)
// ============================================
function renderProducts(category) {
    if (!productsGrid) return;
    
    const products = category === 'all' 
        ? Object.values(productsData).flat() 
        : (productsData[category] || []);

    productsGrid.innerHTML = products.map(product => `
        <article class="product-card" itemprop="itemListElement" itemscope itemtype="https://schema.org/Product">
            <meta itemprop="brand" content="TutorialHub">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" itemprop="image" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <h3 itemprop="name" class="product-name">${product.name}</h3>
                <p itemprop="description" class="product-description">${product.description}</p>
                
                <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                    <meta itemprop="priceCurrency" content="IDR">
                    <div class="product-price">
                        Rp <span itemprop="price" content="${product.price}">${product.price.toLocaleString('id-ID')}</span>
                    </div>
                    <link itemprop="availability" href="https://schema.org/InStock">
                </div>

                <div class="product-actions">
                    <button class="btn-detail" onclick="showProductDetail(${product.id})">
                        <i class="fas fa-info-circle"></i> Detail
                    </button>
                    <a href="${product.affiliateLink}" itemprop="url" class="btn-buy" rel="sponsored nofollow" target="_blank">
                        <i class="fas fa-shopping-cart"></i> Beli
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

// ============================================
// 5. RENDER FAQ (WITH SEO SEMANTICS)
// ============================================
function renderFAQ() {
    if (!faqContainer) return;
    faqContainer.innerHTML = faqData.map(item => `
        <article class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <div class="faq-question" onclick="toggleFAQ(${item.id})">
                <h3 itemprop="name">${item.question}</h3>
                <i class="fas fa-chevron-down" id="faq-icon-${item.id}"></i>
            </div>
            <div class="faq-answer" id="faq-answer-${item.id}" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div itemprop="text">
                    <p>${item.answer}</p>
                </div>
            </div>
        </article>
    `).join('');
}

window.toggleFAQ = function(id) {
    const answer = document.getElementById(`faq-answer-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);
    const isActive = answer.classList.contains('active');
    
    document.querySelectorAll('.faq-answer').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.faq-question i').forEach(el => el.className = 'fas fa-chevron-down');
    
    if (!isActive) {
        answer.classList.add('active');
        icon.className = 'fas fa-chevron-up';
    }
};

// ============================================
// 6. POPOVER & UTILS
// ============================================
window.showProductDetail = function(productId) {
    const product = Object.values(productsData).flat().find(p => p.id === productId);
    if (!product) return;

    popoverBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="popover-image">
        <h3>${product.name}</h3>
        <p class="popover-description">${product.description}</p>
        <ul class="popover-benefits">
            ${product.benefits.map(b => `<li><i class="fas fa-check-circle"></i> ${b}</li>`).join('')}
        </ul>
        <div class="popover-price">Rp ${product.price.toLocaleString('id-ID')}</div>
        <a href="${product.affiliateLink}" class="popover-buy-btn" target="_blank" rel="sponsored">Beli Sekarang</a>
    `;
    popoverOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};


document.getElementById('closePopover')?.addEventListener('click', () => {
    popoverOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

console.log('✅ Sistem Berhasil Dimuat dengan SEO Semantic');

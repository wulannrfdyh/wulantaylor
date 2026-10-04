// =========================================
// PHI & CO.
// SCRIPT UTAMA
// =========================================


// =========================================
// SOCIAL MEDIA
// =========================================

const nomorWhatsApp = "6285298073277";

const socialLinks = {
    whatsapp: `https://wa.me/${nomorWhatsApp}`,
    instagram: "https://www.instagram.com/wulantaylor_/",
    facebook: "https://www.facebook.com/mila.sabbara.3/"
};


// =========================================
// DATA PRODUK
// =========================================

const products = [

    {
        kode: "PHI-001",
        nama: "Dress Burgundy",
        kategori: "wanita",
        harga: "Rp150.000",
        gambar: "images/produk-001.jpg",
        label: "NEW"
    },

    {
        kode: "PHI-002",
        nama: "Dress Black Satin",
        kategori: "wanita",
        harga: "Rp175.000",
        gambar: "images/produk-002.jpg",
        label: ""
    },

    {
        kode: "PHI-003",
        nama: "Kebaya Gold",
        kategori: "wanita",
        harga: "Rp200.000",
        gambar: "images/produk-003.jpg",
        label: "FAVORITE"
    },

    {
        kode: "PHI-004",
        nama: "Dress Pink Elegant",
        kategori: "wanita",
        harga: "Rp175.000",
        gambar: "images/produk-004.jpg",
        label: ""
    },

    {
        kode: "PHI-005",
        nama: "Jas Classic Black",
        kategori: "pria",
        harga: "Rp250.000",
        gambar: "images/produk-005.jpg",
        label: "NEW"
    },

    {
        kode: "PHI-006",
        nama: "Setelan Formal Pria",
        kategori: "pria",
        harga: "Rp200.000",
        gambar: "images/produk-006.jpg",
        label: ""
    },

    {
        kode: "PHI-007",
        nama: "Dress Anak Pink",
        kategori: "kids",
        harga: "Rp100.000",
        gambar: "images/produk-007.jpg",
        label: ""
    },

    {
        kode: "PHI-008",
        nama: "Setelan Anak Formal",
        kategori: "kids",
        harga: "Rp100.000",
        gambar: "images/produk-008.jpg",
        label: ""
    },

    {
        kode: "PHI-009",
        nama: "Sport Outfit Black",
        kategori: "aksesoris",
        harga: "Rp100.000",
        gambar: "images/produk-009.jpg",
        label: ""
    },

    {
        kode: "PHI-010",
        nama: "Sport Outfit White",
        kategori: "aksesoris",
        harga: "Rp100.000",
        gambar: "images/produk-010.jpg",
        label: "NEW"
    },

    {
        kode: "PHI-011",
        nama: "Dress Emerald",
        kategori: "wanita",
        harga: "Rp175.000",
        gambar: "images/produk-011.jpg",
        label: ""
    },

    {
        kode: "PHI-012",
        nama: "Kebaya Rose",
        kategori: "wanita",
        harga: "Rp200.000",
        gambar: "images/produk-012.jpg",
        label: "FAVORITE"
    }

];


// =========================================
// ELEMENT
// =========================================

const productContainer =
    document.getElementById("product-container");

const filterButtons =
    document.querySelectorAll(".filter-btn");


// =========================================
// TAMPILKAN PRODUK
// =========================================

function displayProducts(category = "all") {

    // Kalau halaman bukan halaman katalog,
    // hentikan fungsi
    if (!productContainer) {
        return;
    }

    productContainer.innerHTML = "";

    let filteredProducts;

    if (category === "all") {

        filteredProducts = products;

    } else {

        filteredProducts = products.filter(
            product => product.kategori === category
        );

    }


    // =========================================
    // BUAT CARD PRODUK
    // =========================================

    filteredProducts.forEach(product => {

        const card = document.createElement("article");

        card.className = "catalog-card";

        card.innerHTML = `

            <div class="catalog-image">

                ${
                    product.label
                    ?
                    `
                    <span class="catalog-label">
                        ${product.label}
                    </span>
                    `
                    :
                    ""
                }

                <img
                    src="${product.gambar}"
                    alt="${product.nama}"
                    onerror="this.style.display='none';"
                >

            </div>


            <div class="catalog-info">

                <p class="catalog-code">
                    ${product.kode}
                </p>

                <h2>
                    ${product.nama}
                </h2>

                <p class="catalog-price">
                    ${product.harga}
                    <span>/ sewa</span>
                </p>

                <div class="catalog-whatsapp">

                    <span>
                        Tanya via WhatsApp
                    </span>

                    <i class="fab fa-whatsapp"></i>

                </div>

            </div>

        `;


        // =========================================
        // KLIK CARD
        // =========================================

        card.addEventListener("click", function () {

            openWhatsApp(product);

        });


        productContainer.appendChild(card);

    });

}


// =========================================
// WHATSAPP PRODUK
// =========================================

function openWhatsApp(product) {

    const message =
`Halo Kak Wulan Taylor 👋

Saya tertarik menyewa outfit berikut:

Nama Outfit: ${product.nama}
Kode: ${product.kode}

Apakah outfit ini masih tersedia?

Tanggal penggunaan:
____ / ____ / ______

Terima kasih 😊`;


    const encodedMessage =
        encodeURIComponent(message);


    const whatsappURL =
        `https://wa.me/${nomorWhatsApp}?text=${encodedMessage}`;


    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

}


// =========================================
// FILTER KATALOG
// =========================================

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Hapus active dari semua tombol
        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Aktifkan tombol yang diklik
        this.classList.add("active");


        // Ambil kategori
        const category =
            this.dataset.category;


        // Tampilkan produk
        displayProducts(category);

    });

});


// =========================================
// FILTER DARI BERANDA
// =========================================

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const categoryFromURL =
    urlParams.get("kategori");


if (categoryFromURL && productContainer) {

    const matchingButton =
        document.querySelector(
            `[data-category="${categoryFromURL}"]`
        );


    if (matchingButton) {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        matchingButton.classList.add("active");

    }


    displayProducts(categoryFromURL);

} else {

    // Hanya jalankan kalau halaman
    // memang memiliki katalog
    if (productContainer) {

        displayProducts();

    }

}


// =========================================
// WHATSAPP FOOTER
// PESAN OTOMATIS UNTUK SEMUA HALAMAN
// =========================================

document
    .querySelectorAll(".whatsapp-general")
    .forEach(function (generalWhatsApp) {

        generalWhatsApp.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const message =
`Halo Kak Wulan Taylor 👋

Saya ingin bertanya mengenai rental outfit.

Boleh saya mendapatkan informasi
mengenai koleksi dan ketersediaannya?

Terima kasih 😊`;


                const url =
                    `${socialLinks.whatsapp}?text=${encodeURIComponent(message)}`;


                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    });


// =========================================
// INSTAGRAM
// SEMUA HALAMAN
// =========================================

document
    .querySelectorAll("a .fa-instagram")
    .forEach(function (icon) {

        const link =
            icon.closest("a");


        if (!link) return;


        link.href =
            socialLinks.instagram;

        link.target =
            "_blank";

        link.rel =
            "noopener noreferrer";

        link.setAttribute(
            "aria-label",
            "Instagram"
        );

    });


// =========================================
// FACEBOOK
// SEMUA HALAMAN
// =========================================

document
    .querySelectorAll(
        "a .fa-facebook-f, a .fa-facebook"
    )
    .forEach(function (icon) {

        const link =
            icon.closest("a");


        if (!link) return;


        link.href =
            socialLinks.facebook;

        link.target =
            "_blank";

        link.rel =
            "noopener noreferrer";

        link.setAttribute(
            "aria-label",
            "Facebook"
        );

    });


// =========================================
// PAGE TRANSITION
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const pageLinks =
            document.querySelectorAll(
                'a[href$=".html"]'
            );


        pageLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const target =
                        this.getAttribute("href");


                    // Abaikan:
                    // - link kosong
                    // - link #
                    // - link buka tab baru
                    // - halaman yang sedang dibuka

                    if (
                        !target ||
                        target === "#" ||
                        this.target === "_blank" ||
                        target ===
                        window.location.pathname
                            .split("/")
                            .pop()
                    ) {

                        return;

                    }


                    event.preventDefault();


                    document.body.classList.add(
                        "page-leaving"
                    );


                    setTimeout(
                        function () {

                            window.location.href =
                                target;

                        },
                        250
                    );

                }
            );

        });

    }
);


// =========================================
// SELESAI
// =========================================
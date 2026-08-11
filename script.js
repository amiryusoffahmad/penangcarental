// 1. DICTIONARY DUAL LANGUAGE (BM / EN)
const i18nData = {
    ms: {
        // --- NAVBAR ---
        nav_home: "Utama",
        nav_fleet: "Senarai Kereta",
        nav_places: "Tempat Menarik",
        nav_reviews: "Testimoni",
        nav_contact: "Hubungi",
        nav_whatsapp: "WhatsApp",

        // --- HERO SECTION ---
        hero_title: 'SEWA KERETA DENGAN HARGA <br><span class="highlight-blue">STUDENT!</span>',
        hero_subtitle: "Sewa kereta murah dan berbaloi di Pulau Pinang. Nikmati perjalanan selesa dengan tempahan pantas dan kenderaan bersih.",
        feat_badge_1_title: "HARGA",
        feat_badge_1_sub: "MURAH",
        feat_badge_2_title: "KERETA",
        feat_badge_2_sub: "TERBAIK",
        feat_badge_3_title: "SERVIS",
        feat_badge_3_sub: "TERBAIK",

        // --- BOOKING FORM / CARI KERETA ---
        calc_title: "CARI & TEMPAH KERETA",
        calc_subtitle: "Mudah • Pantas • Selamat",
        lbl_car: "Pilih Kereta",
        lbl_start: "Tarikh Ambil",
        lbl_end: "Tarikh Hantar",
        lbl_name: "Nama Penuh",
        ph_name: "Nama Anda",
        btn_submit: "CARI KERETA",

        // --- FILTER & CAR FLEET ---
        fleet_tag: "Senarai Kereta",
        fleet_title: "Katalog & Kadar Harga Kereta",
        filter_all: "Semua Model (20)",
        filter_compact: "Compact & Hatchback",
        filter_sedan: "Sedan",
        filter_mpv: "MPV & SUV",
        filter_luxury: "Mewah & 4x4",

        // --- CAR CARD / SPECS ---
        unit_per_day: "/ hari",
        btn_book: "Tempah",

        // --- TESTIMONIALS ---
        reviews_tag: "Testimoni",
        reviews_title: "Pengalaman Pelanggan Kami",
        google_total_reviews: "(48 Ulasan)",
        btn_google_reviews: "Lihat Semua 48 Ulasan di Google",

        // --- GALERI ---
        gallery_tag: "Galeri",
        image_title: "Galeri Pelanggan",
        image_subtitle: "Koleksi kenangan dan pengalaman bersama pelanggan kami.",

        // --- CTA BANNER ---
        cta_title: "Bersedia Untuk Meneroka Penang Hari Ini?",
        cta_desc: "Nikmati pemanduan selesa dengan kereta sewa bersih, harga berpatutan, dan penghantaran percuma ke Penang International Airport (PIA).",
        cta_btn_wa: "Tempah Sekarang via WhatsApp",
        cta_btn_fleet: "Lihat Katalog Kereta",

        // --- CONTACT ---
        contact_tag: "Hubungi Kami",
        contact_title: "Lokasi & Talian Khidmat",
        addr_title: "Alamat Utama",
        addr_detail: "Lapangan Terbang Antarabangsa Pulau Pinang, 11900 Bayan Lepas, Penang",
        phone_title: "Hotline Direct",
        hours_title: "Waktu Operasi",
        hours_detail: "8:00 AM – 10:00 PM (Isnin – Ahad)",
        social_title: "Ikuti Kami",

        // --- PLACES TO VISIT ---
        places_meta_title: "Tempat Menarik di Penang | Kereta Sewa Murah Penang",
        places_tag: "Panduan Pelancongan",
        places_title: "Tempat Menarik Untuk Diterokai di Penang Dengan Kereta",
        places_subtitle: "Merancang percutian ke Penang? Menyewa kereta ialah cara terbaik untuk meneroka pulau ini mengikut rentak anda sendiri. Meneroka permata tersembunyi, jalan pesisir pantai yang indah, syurga makanan tempatan, dan tarikan terkenal kini lebih mudah tanpa bergantung pada pengangkutan awam atau perkhidmatan e-hailing.",
        why_drive_label: "Kenapa Berkereta Lebih Selesa?",
        cta_places_title: "Sedia Terokai Tempat Menarik Ini?",
        cta_places_desc: "Tempah kereta sewa bersih, selesa dan diselenggara rapi dengan Anuar & Group sekarang. Penghantaran percuma disediakan di Lapangan Terbang Antarabangsa Penang (PIA).",

        // Place 1: Penang Hill
        p1_title: "1. Penang Hill (Bukit Bendera)",
        p1_desc: "Antara tarikan paling popular di Pulau Pinang. Nikmati cuaca yang nyaman, pemandangan panoramik memukau, laluan berjalan kaki, kafe, dan mercu tanda bersejarah.",
        p1_subhead: "Tarikan Masa Depan: Penang Hill Cable Car",
        p1_subdesc: "Pembangunan pelancongan ikonik yang menawarkan perjalanan spektakuler di atas hutan hujan tropika dengan pemandangan udara George Town dan garis pantai.",
        p1_h1: "Pemandangan udara pulau dan Selat Melaka yang menakjubkan.",
        p1_h2: "Perjalanan selesa dan indah merentasi hutan hujan tropika.",
        p1_h3: "Peluang fotografi matahari terbit & terbenam yang tidak boleh dilepaskan.",
        p1_h4: "Akses mudah ke pelbagai tarikan utama di puncak Bukit Bendera.",
        p1_why: "Memandu membolehkan anda terus dari Lapangan Terbang (PIA) atau hotel, serta menggabungkan lawatan ke Kuil Kek Lok Si, Pasar Air Itam, dan George Town dalam satu hari tanpa bergantung pada jadual pengangkutan awam.",

        // Place 2: Batu Ferringhi
        p2_title: "2. Batu Ferringhi Beach",
        p2_desc: "Tiada percutian ke Penang yang lengkap tanpa meluangkan masa di Pantai Batu Ferringhi untuk menikmati angin laut dan pemandangan persisiran pantai.",
        p2_h1: "Bersantai di tepi pantai pasir putih dan menikmati pemandangan laut.",
        p2_h2: "Mencuba aktiviti sukan air (water sports) yang mendebarkan.",
        p2_h3: "Menikmati makanan dan minuman di kafe-kafe tepi pantai.",
        p2_h4: "Melawat Pasar Malam (Night Market) Batu Ferringhi yang terkenal.",
        p2_why: "Memandu sendiri memberi kebebasan untuk berada di pantai sehingga waktu matahari terbenam tanpa perlu bimbang tentang jadual atau kesukaran mendapatkan kenderaan pulang.",

        // Place 3: ESCAPE
        p3_title: "3. ESCAPE Penang",
        p3_desc: "Destinasi sempurna untuk keluarga dan peminat aktiviti lasak. ESCAPE Penang menawarkan pelbagai tarikan luar bangunan di kawasan Teluk Bahang.",
        p3_h1: "Pengalaman ziplining merentasi kanopi hutan.",
        p3_h2: "Gelongsor air (water slides) bertaraf rekod dunia.",
        p3_h3: "Laluan tali (rope courses) dan cabaran halangan fizikal (obstacle challenges).",
        p3_h4: "Aktiviti sesuai untuk kanak-kanak, remaja, dan orang dewasa.",
        p3_why: "Membawa kereta sewa memudahkan perjalanan keluarga, terutama bagi menyimpan kelengkapan mandi, pakaian tukar, serta beg makanan dengan mudah di dalam ruang bonet.",

        // Place 4: Kek Lok Si
        p4_title: "4. Kek Lok Si Temple",
        p4_desc: "Salah satu kuil Buddha terbesar di Asia Tenggara yang terletak di Air Itam, terkenal dengan nilai seni bina dan pemandangan luas seluruh pulau.",
        p4_h1: "Patung gergasi Goddess of Mercy (Dewi Kuan Yin) yang megah.",
        p4_h2: "Pagoda indah dengan gabungan seni bina pelbagai budaya.",
        p4_h3: "Seni ukiran yang teliti dan pemandangan panorama bandar raya.",
        p4_why: "Memandu adalah cara paling mudah dan direct untuk sampai ke kuil di lereng bukit ini, terutamanya pada hari bekerja bagi mengelakkan laluan berjalan jauh.",

        // Place 5: George Town
        p5_title: "5. George Town UNESCO World Heritage Site",
        p5_desc: "Bandar bersejarah yang penuh dengan keunikan budaya, bangunan warisan kolonial, muzium, kafe hipster, dan sajian makanan jalanan tempatan yang popular.",
        p5_subhead: "Jalan-Jalan Wajib Dilawati:",
        p5_h1: "<strong>Armenian Street:</strong> Hub mural lukisan dinding (street art) ikonik & kraf tangan.",
        p5_h2: "<strong>Love Lane:</strong> Kafe santai, suasana malam, dan bangunan warisan.",
        p5_h3: "<strong>Beach Street:</strong> Senibina perbankan kolonial & acara hujung minggu.",
        p5_h4: "<strong>Chulia Street:</strong> Syurga jajahan makanan street food tempatan.",
        p5_why: "Walaupun parking terhad semasa hujung minggu, kereta sewa memudahkan anda bergerak dari satu lorong warisan ke pusat membeli-belah dan lokasi berdekatan dengan selesa.",

        // Place 6: Gurney Drive & Andaman
        p6_title: "6. Gurney Drive & Andaman Island",
        p6_desc: "Terkenal sebagai syurga makanan penjaja (hawker food), pusat membeli-belah (Gurney Plaza & Gurney Paragon), dan laluan berjalan kaki santai di tepi laut.",
        p6_subhead: "Terokai Pembangunan Baharu Pulau Andaman:",
        p6_subdesc: "Terletak bersebelahan Gurney Drive, perbandaran tambakan laut baharu ini mentransformasikan garis pantai utara kepada destinasi gaya hidup moden yang terhubung terus dengan Gurney Bay.",
        p6_h1: "Persiaran pesisir laut (coastal promenade) & taman rekreasi hijau.",
        p6_h2: "Laluan santai untuk berjalan kaki dan berbasikal di tepi pantai.",
        p6_h3: "Akses terus ke Gurney Bay, Gurney Plaza, dan Gurney Paragon dalam 1 trip.",
        p6_h4: "Sesuai untuk tangkapan foto pemandangan matahari terbenam Selat Melaka.",
        p6_why: "Membolehkan anda meneroka persiaran Gurney Drive, parkir di mall, dan terus memandu ke kawasan waterfront Andaman Island mengikut fleksibiliti masa anda.",

        // Place 7: The Light City
        p7_title: "7. The Light City Waterfront",
        p7_desc: "Terletak di pesisir pantai timur Pulau Pinang, destinasi gaya hidup moden ini menawarkan pemandangan indah Selat Pulau Pinang yang tenang, jauh daripada kesesakan George Town.",
        p7_subhead: "Aktiviti Menarik di The Light City:",
        p7_h1: "Berjalan santai di sepanjang persiaran pesisir laut (waterfront promenade).",
        p7_h2: "Menikmati pemandangan indah matahari terbit dan terbenam.",
        p7_h3: "Jamuan makan di restoran tepi laut, kafe, dan penginapan di hotel mewah.",
        p7_h4: "Menghadiri pameran & acara di Penang Waterfront Convention Centre (PWCC).",
        p7_h5: "Fotografi pemandangan latar langit (skyline) dan laut yang memukau.",
        p7_why: "Mudah diakses dengan fasiliti tempat letak kereta yang luas. Lokasi strategik untuk menggabungkan lawatan ke Jambatan Pulau Pinang, Queensbay Mall, dan George Town dalam hari yang sama.",

        footer_brand: "Kereta Sewa Penang",
        footer_tagline: "Kereta Sewa Murah Penang",
        footer_rights: "&copy; 2026 Hak Cipta Terpelihara."
    },
    en: {
        // --- NAVBAR ---
        nav_home: "Home",
        nav_fleet: "Car Fleet",
        nav_places: "Places to Visit",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        nav_whatsapp: "WhatsApp",

        // --- HERO SECTION ---
        hero_title: 'RENT A CAR AT <br><span class="highlight-blue">STUDENT RATES!</span>',
        hero_subtitle: "Affordable and great value car rental in Penang. Enjoy a comfortable journey with quick booking and clean vehicles.",
        feat_badge_1_title: "BEST",
        feat_badge_1_sub: "PRICES",
        feat_badge_2_title: "BEST",
        feat_badge_2_sub: "CARS",
        feat_badge_3_title: "BEST",
        feat_badge_3_sub: "SERVICE",

        // --- BOOKING FORM ---
        calc_title: "SEARCH & BOOK CAR",
        calc_subtitle: "Easy • Fast • Secure",
        lbl_car: "Select Car",
        lbl_start: "Pickup Date",
        lbl_end: "Return Date",
        lbl_name: "Full Name",
        ph_name: "Your Name",
        btn_submit: "SEARCH CAR",

        // --- FILTER & CAR FLEET ---
        fleet_tag: "Car Fleet",
        fleet_title: "Catalogue & Price Rates",
        filter_all: "All Models (20)",
        filter_compact: "Compact & Hatchback",
        filter_sedan: "Sedan",
        filter_mpv: "MPV & SUV",
        filter_luxury: "Luxury & 4x4",

        // --- CAR CARD / SPECS ---
        unit_per_day: "/ day",
        btn_book: "Book Now",

        // --- TESTIMONIALS ---
        reviews_tag: "Testimonials",
        reviews_title: "Our Customer Experiences",
        google_total_reviews: "(48 Reviews)",
        btn_google_reviews: "See All 48 Reviews on Google",

        // --- GALLERY ---
        gallery_tag: "Gallery",
        image_title: "Customer Gallery",
        image_subtitle: "A collection of memories and experiences with our clients.",

        // --- CTA BANNER ---
        cta_title: "Ready to Explore Penang Today?",
        cta_desc: "Enjoy a comfortable drive with clean rental cars, affordable rates, and free delivery to Penang International Airport (PIA).",
        cta_btn_wa: "Book Now via WhatsApp",
        cta_btn_fleet: "View Car Catalogue",

        // --- CONTACT ---
        contact_tag: "Contact Us",
        contact_title: "Location & Service Lines",
        addr_title: "Main Address",
        addr_detail: "Penang International Airport, 11900 Bayan Lepas, Penang",
        phone_title: "Direct Hotline",
        hours_title: "Operating Hours",
        hours_detail: "8:00 AM – 10:00 PM (Monday – Sunday)",
        social_title: "Follow Us",

        // --- PLACES TO VISIT ---
        places_meta_title: "Places to Visit in Penang | Penang Affordable Car Rental",
        places_tag: "Travel Guide",
        places_title: "Best Places to Visit in Penang by Car",
        places_subtitle: "Planning a trip to Penang? Renting a car is one of the best ways to discover the island at your own pace. Exploring hidden gems, scenic coastal roads, local food paradises, and famous attractions is now easier without relying on public transport or e-hailing services.",
        why_drive_label: "Why Renting a Car is More Convenient?",
        cta_places_title: "Ready to Explore These Attractions?",
        cta_places_desc: "Book a clean, comfortable, and well-maintained rental car with Anuar & Group now. Free delivery is available at Penang International Airport (PIA).",

        // Place 1: Penang Hill
        p1_title: "1. Penang Hill",
        p1_desc: "One of the island's most popular attractions. Enjoy cool weather, breathtaking panoramic views, walking trails, cafés, and historical landmarks.",
        p1_subhead: "Future Attraction: Penang Hill Cable Car",
        p1_subdesc: "An iconic tourism development offering a spectacular journey over the tropical rainforest with aerial views of George Town and the coastline.",
        p1_h1: "Stunning aerial views of the island and the Straits of Malacca.",
        p1_h2: "Comfortable and scenic journey across the tropical rainforest.",
        p1_h3: "Unmissable sunrise & sunset photography opportunities.",
        p1_h4: "Easy access to key attractions at the summit of Penang Hill.",
        p1_why: "Driving allows you to travel directly from Penang International Airport or your hotel, and combine visits to Kek Lok Si Temple, Air Itam Market, and George Town in a single day without depending on public transport schedules.",

        // Place 2: Batu Ferringhi
        p2_title: "2. Batu Ferringhi Beach",
        p2_desc: "No visit to Penang is complete without spending time at Batu Ferringhi Beach to enjoy the sea breeze and coastal views.",
        p2_h1: "Relax by the white sandy beach and enjoy ocean views.",
        p2_h2: "Try thrilling water sports (parasailing, jet ski).",
        p2_h3: "Enjoy beachside cafés and dining.",
        p2_h4: "Visit the famous Batu Ferringhi Night Market.",
        p2_why: "Driving gives you the freedom to stay at the beach until sunset without worrying about transport schedules or finding a ride back.",

        // Place 3: ESCAPE
        p3_title: "3. ESCAPE Penang",
        p3_desc: "Perfect for families and adventure lovers, ESCAPE Penang offers thrilling outdoor activities in Teluk Bahang.",
        p3_h1: "Ziplining experience across the jungle canopy.",
        p3_h2: "World-record breaking long water slides.",
        p3_h3: "Rope courses and exciting physical obstacle challenges.",
        p3_h4: "Activities suitable for children, teenagers, and adults.",
        p3_why: "Renting a car makes family travel convenient, especially for storing extra clothing, swimming gear, and snacks in the trunk.",

        // Place 4: Kek Lok Si
        p4_title: "4. Kek Lok Si Temple",
        p4_desc: "One of Southeast Asia's largest Buddhist temples, located in Air Itam. Renowned for its architecture and city panoramas.",
        p4_h1: "Giant statue of the Goddess of Mercy (Kuan Yin).",
        p4_h2: "Beautiful Pagoda combining multi-cultural architectural styles.",
        p4_h3: "Intricate carvings and sweeping panoramic city views.",
        p4_why: "Driving is the easiest and most direct way to reach this hillside temple, especially on weekdays to avoid long walking routes.",

        // Place 5: George Town
        p5_title: "5. George Town UNESCO World Heritage Site",
        p5_desc: "A historic town filled with rich culture, colonial heritage buildings, museums, hipster cafés, and world-famous street food.",
        p5_subhead: "Must-Visit Streets:",
        p5_h1: "<strong>Armenian Street:</strong> Iconic street art mural hub & handicrafts.",
        p5_h2: "<strong>Love Lane:</strong> Cozy cafés, nightlife, and heritage architecture.",
        p5_h3: "<strong>Beach Street:</strong> Colonial banking architecture & weekend events.",
        p5_h4: "<strong>Chulia Street:</strong> A haven for authentic local street food.",
        p5_why: "Although parking can be limited during weekends, having your own rental car allows you to explore nearby heritage spots and shopping malls comfortably.",

        // Place 6: Gurney Drive & Andaman
        p6_title: "6. Gurney Drive & Andaman Island",
        p6_desc: "Known as Penang's food paradise with hawker stalls, shopping malls (Gurney Plaza & Gurney Paragon), and a scenic seaside promenade.",
        p6_subhead: "Explore the New Andaman Island Development:",
        p6_subdesc: "Located adjacent to Gurney Drive, this new land reclamation township transforms the northern coastline into a modern lifestyle destination directly connected to Gurney Bay.",
        p6_h1: "Coastal promenade & lush green recreational parks.",
        p6_h2: "Scenic walking and cycling paths along the coastline.",
        p6_h3: "Direct access to Gurney Bay, Gurney Plaza, and Gurney Paragon in a single trip.",
        p6_h4: "Perfect for taking scenic sunset photos of the Straits of Malacca.",
        p6_why: "Renting a car allows you to easily explore Gurney Drive, park at malls, and drive directly to the Andaman Island waterfront at your own pace.",

        // Place 7: The Light City
        p7_title: "7. The Light City Waterfront",
        p7_desc: "Located along Penang's eastern coastline, offering breathtaking views of the Penang Strait away from the hustle and bustle of George Town.",
        p7_subhead: "Exciting Activities at The Light City:",
        p7_h1: "Take a relaxing walk along the waterfront promenade.",
        p7_h2: "Enjoy stunning sunrise and sunset views.",
        p7_h3: "Waterfront dining, cafés, and luxury hotel stays.",
        p7_h4: "Attend exhibitions & events at Penang Waterfront Convention Centre (PWCC).",
        p7_h5: "Stunning photography spots for skyline and ocean views.",
        p7_why: "Easily accessible by car with spacious parking facilities. Strategically located to combine visits to Penang Bridge, Queensbay Mall, and George Town on the same day.",

        footer_brand: "Penang Car Rental",
        footer_tagline: "Penang Car Rental 2026",
        footer_rights: "&copy; 2026 All Rights Reserved."
    }
};

let currentLang = 'ms';

// 2. TRANSLATE LANGUAGE
window.toggleLanguage = function() {
    currentLang = currentLang === 'ms' ? 'en' : 'ms';
    const langBtnText = document.getElementById('langText');
    if (langBtnText) {
        langBtnText.innerText = currentLang === 'ms' ? 'EN' : 'BM';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang] && i18nData[currentLang][key]) {
            el.innerHTML = i18nData[currentLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (i18nData[currentLang] && i18nData[currentLang][key]) {
            el.setAttribute('placeholder', i18nData[currentLang][key]);
        }
    });

    calculatePrice();
};

// 3. TOGGLE LIGHT / DARK MODE
const moonIconSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
const sunIconSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

window.toggleTheme = function() {
    const htmlTag = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
    const currentTheme = htmlTag.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        htmlTag.setAttribute('data-theme', 'light');
        if (themeBtn) themeBtn.innerHTML = moonIconSVG;
    } else {
        htmlTag.setAttribute('data-theme', 'dark');
        if (themeBtn) themeBtn.innerHTML = sunIconSVG;
    }
};

// 4. CALCULATOR LOGIC
window.calculatePrice = function() {
    const carSelect = document.getElementById('carSelect');
    const startDateInput = document.getElementById('startDate'); 
    const endDateInput = document.getElementById('endDate');

    if (!carSelect || carSelect.selectedIndex === -1) return;

    const selectedOpt = carSelect.options[carSelect.selectedIndex];
    if (!selectedOpt) return;

    const r1 = parseFloat(selectedOpt.getAttribute('data-r1')) || 0;
    const r3 = parseFloat(selectedOpt.getAttribute('data-r3')) || r1;
    const r7 = parseFloat(selectedOpt.getAttribute('data-r7')) || r3;
    const r14 = parseFloat(selectedOpt.getAttribute('data-r14')) || r7;

    function safeParseDate(dateVal) {
        if (!dateVal) return null;
        if (dateVal instanceof Date) return dateVal;
        
        if (typeof dateVal === 'string' && dateVal.includes('/')) {
            const parts = dateVal.split('/');
            if (parts.length === 3) {
                const m = parseInt(parts[0], 10) - 1;
                const d = parseInt(parts[1], 10);
                const y = parseInt(parts[2], 10);
                return new Date(y, m, d);
            }
        }
        return new Date(dateVal);
    }

    const start = startDateInput ? safeParseDate(startDateInput.value) : null;
    const end = endDateInput ? safeParseDate(endDateInput.value) : null;

    let days = 1;

    if (start && end && !isNaN(start.getTime()) && !isNaN(end.getTime()) && end > start) {
        const diffTime = Math.abs(end - start);
        days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    let dailyRate = r1;
    let tierText = currentLang === 'ms' ? "Kadar Standard (1-2 Hari)" : "Standard Rate (1-2 Days)";

    if (days >= 14) {
        dailyRate = r14;
        tierText = currentLang === 'ms' ? "Kadar Diskaun 14+ Hari" : "Discount Rate 14+ Days";
    } else if (days >= 7) {
        dailyRate = r7;
        tierText = currentLang === 'ms' ? "Kadar Diskaun 7+ Hari" : "Discount Rate 7+ Days";
    } else if (days >= 3) {
        dailyRate = r3;
        tierText = currentLang === 'ms' ? "Kadar Diskaun 3+ Hari" : "Discount Rate 3+ Days";
    }

    const totalPrice = dailyRate * days;

    const daysLabel = document.getElementById('daysLabel');
    const totalPriceDisplay = document.getElementById('totalPriceDisplay');

    const dayText = currentLang === 'ms' ? 'Hari' : 'Days';
    const perDayText = currentLang === 'ms' ? '/hari' : '/day';

    if (daysLabel) {
        daysLabel.innerHTML = currentLang === 'ms' 
            ? `Tempoh: ${days} ${dayText} (<span id="rateTierBadge">${tierText}</span>)` 
            : `Duration: ${days} ${dayText} (<span id="rateTierBadge">${tierText}</span>)`;
    }
    
    const updatedBadge = document.getElementById('rateTierBadge');
    if (updatedBadge) {
        updatedBadge.innerText = `${tierText} (RM ${dailyRate}${perDayText})`;
    }

    if (totalPriceDisplay) {
        totalPriceDisplay.innerText = `RM ${totalPrice}`;
    }
};

// 5. QUICK SELECT CAR
window.quickSelectCar = function(carName) {
    const carSelect = document.getElementById('carSelect');
    if (carSelect) carSelect.value = carName;

    const bookingCard = document.querySelector('.floating-booking-bar') || document.getElementById('utama') || document.querySelector('form');
    if (bookingCard) {
        bookingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    calculatePrice();
};

// 6. FILTER CAR FLEET
window.filterFleet = function(category, event) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    const cars = document.querySelectorAll('.car-card');
    cars.forEach(car => {
        if (category === 'all' || car.getAttribute('data-category') === category) {
            car.style.display = 'flex';
        } else {
            car.style.display = 'none';
        }
    });
};

// 7. WHATSAPP BOOKING
window.handleBooking = function(event) {
    if (event) event.preventDefault();

    const carSelect = document.getElementById('carSelect');
    const carName = carSelect ? carSelect.value : '';
    
    const startDate = document.getElementById('startDate') ? document.getElementById('startDate').value : '';
    const endDate = document.getElementById('endDate') ? document.getElementById('endDate').value : '';
    const custName = document.getElementById('custName') ? document.getElementById('custName').value : '';
    
    const daysText = document.getElementById('daysLabel') ? document.getElementById('daysLabel').innerText : '';
    const priceText = document.getElementById('totalPriceDisplay') ? document.getElementById('totalPriceDisplay').innerText : '';
    const rateBadge = document.getElementById('rateTierBadge') ? document.getElementById('rateTierBadge').innerText : '';

    const isMs = currentLang === 'ms';

    const message = isMs ? 
`Salam *Anuar & Group*, saya nak tempah kereta sewa:

• *Nama:* ${custName}
• *Model Kereta:* ${carName}
• *Tarikh Mula:* ${startDate}
• *Tarikh Tamat:* ${endDate}
• *${daysText}*
• *Kategori Kadar:* ${rateBadge}
• *Anggaran Jumlah:* ${priceText}

Boleh sahkan kekosongan kenderaan ini? Terima kasih!`
:
`Hi *Anuar & Group*, I would like to book a car rental:

• *Name:* ${custName}
• *Car Model:* ${carName}
• *Start Date:* ${startDate}
• *End Date:* ${endDate}
• *${daysText}*
• *Rate Category:* ${rateBadge}
• *Estimated Total:* ${priceText}

Please confirm availability for these dates. Thank you!`;

    const whatsappURL = `https://wa.me/60105606211?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
};

// 8. TOGGLE MOBILE MENU (Global Function)
window.toggleMobileMenu = function(e) {
    if (e) e.stopPropagation();
    const navMenu = document.getElementById('navPillMenu');
    const hamburgerBtn = document.getElementById('mobileMenuBtn');
    
    if (navMenu && hamburgerBtn) {
        navMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    }
};

// 9. SCROLL REVIEWS
window.scrollReviews = function(direction) {
    const reviewsSlider = document.getElementById('reviewsSlider');
    if (!reviewsSlider) return;
    
    const scrollAmount = 340;
    if (direction === 'left') {
        reviewsSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        reviewsSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
};

// 10. INITIALIZATION ON PAGE LOAD (Single Consolidated Listener)
document.addEventListener('DOMContentLoaded', function () {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (startDateInput && !startDateInput.value) startDateInput.value = today.toISOString().split('T')[0];
    if (endDateInput && !endDateInput.value) endDateInput.value = tomorrow.toISOString().split('T')[0];

    if (startDateInput) startDateInput.addEventListener('change', calculatePrice);
    if (endDateInput) endDateInput.addEventListener('change', calculatePrice);
    
    const carSelect = document.getElementById('carSelect');
    if (carSelect) carSelect.addEventListener('change', calculatePrice);

    calculatePrice();

    const hamburgerBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navPillMenu');

    // Tutup menu bila tekan mana-mana link dalam navbar
    const navLinks = document.querySelectorAll('#navPillMenu a, .nav-pill-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (hamburgerBtn) hamburgerBtn.classList.remove('active');
            }
        });
    });

    // Tutup menu bila klik di luar kawasan navbar & hamburger button
    document.addEventListener('click', function(e) {
        if (navMenu && hamburgerBtn) {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            }
        }
    });

    // Testimoni Slider
    const reviewsSlider = document.getElementById('reviewsSlider');
    const prevBtn = document.getElementById('slideLeft');
    const nextBtn = document.getElementById('slideRight');

    if (reviewsSlider && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => reviewsSlider.scrollBy({ left: 340, behavior: 'smooth' }));
        prevBtn.addEventListener('click', () => reviewsSlider.scrollBy({ left: -340, behavior: 'smooth' }));
    }

    // Galeri Slider
    const galleryTrack = document.getElementById("galleryTrack");
    const galleryPrevBtn = document.getElementById("galleryPrevBtn");
    const galleryNextBtn = document.getElementById("galleryNextBtn");

    if (galleryTrack) {
        const getScrollAmount = () => {
            const card = galleryTrack.querySelector(".carousel-card");
            return card ? card.offsetWidth + 24 : 300;
        };

        if (galleryNextBtn) {
            galleryNextBtn.addEventListener("click", () => {
                galleryTrack.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
            });
        }

        if (galleryPrevBtn) {
            galleryPrevBtn.addEventListener("click", () => {
                galleryTrack.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
            });
        }
    }
});

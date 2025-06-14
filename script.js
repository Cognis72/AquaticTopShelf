// Language data for bilingual support
const translations = {
    en: {
        // Header
        'Aquatic Top Shelf': 'Aquatic Top Shelf',
        'Premium Fish Store': 'Premium Fish Store',
        
        // Hero
        'Discover Premium Aquatic Life': 'Discover Premium Aquatic Life',
        'Transform your aquarium with our carefully selected tropical and freshwater fish': 'Transform your aquarium with our carefully selected tropical and freshwater fish',
        
        // Products
        'Our Premium Fish Collection': 'Our Premium Fish Collection',
        'Contact via LINE OA': 'Contact via LINE OA',
        'Price': 'Price',
        
        // Footer
        'Contact Us': 'Contact Us',
        'Follow us on LINE for the latest updates and special offers': 'Follow us on LINE for the latest updates and special offers',
        'Quality Guarantee': 'Quality Guarantee',
        'All our fish are healthy, well-cared for, and ready for their new homes': 'All our fish are healthy, well-cared for, and ready for their new homes',
        'Aquatic Top Shelf. All rights reserved.': 'Aquatic Top Shelf. All rights reserved.'
    },
    th: {
        // Header
        'Aquatic Top Shelf': 'อควาติก ท็อป เชลฟ์',
        'Premium Fish Store': 'ร้านปลาพรีเมี่ยม',
        
        // Hero
        'Discover Premium Aquatic Life': 'ค้นพบสิ่งมีชีวิตใต้น้ำพรีเมี่ยม',
        'Transform your aquarium with our carefully selected tropical and freshwater fish': 'เปลี่ยนโฉมตู้ปลาของคุณด้วยปลาเขตร้อนและปลาน้ำจืดที่คัดสรรมาอย่างดี',
        
        // Products
        'Our Premium Fish Collection': 'คอลเลกชันปลาพรีเมี่ยมของเรา',
        'Contact via LINE OA': 'สั่งซื้อผ่าน LINE',
        'Price': 'ราคา',
        
        // Footer
        'Contact Us': 'ติดต่อเรา',
        'Follow us on LINE for the latest updates and special offers': 'ติดตามเราใน LINE สำหรับข่าวสารล่าสุดและข้อเสนอพิเศษ',
        'Quality Guarantee': 'รับประกันคุณภาพ',
        'All our fish are healthy, well-cared for, and ready for their new homes': 'ปลาทุกตัวของเรามีสุขภาพดี ได้รับการดูแลอย่างดี และพร้อมสำหรับบ้านใหม่',
        'Aquatic Top Shelf. All rights reserved.': 'อควาติก ท็อป เชลฟ์ สงวนลิขสิทธิ์'
    }
};

// Fish products data with bilingual names and descriptions
const fishProducts = [
    {
        id: 1,
        name: {
            en: 'Tropical Angelfish',
            th: 'ปลาเทวดาเขตร้อน'
        },
        price: '฿1,250',
        description: {
            en: 'Beautiful tropical angelfish perfect for community aquariums. Hardy and easy to care for.',
            th: 'ปลาเทวดาเขตร้อนสวยงาม เหมาะสำหรับตู้ปลาชุมชน แข็งแรงและดูแลง่าย'
        },
        image: 'https://pixabay.com/get/gfa38ce5dfaa2c0398f05a9b60774537f92a3de41e0d63b02b243f443e646f882c487479bfb889faa18b29f9b55625ba1752870bbb26fcd62745179e46b7e0142_1280.jpg',
        lineMessage: {
            en: 'Hello! I\'m interested in the Tropical Angelfish (฿1,250). Could you please provide more details?',
            th: 'สวัสดีครับ/ค่ะ สนใจปลาเทวดาเขตร้อน (฿1,250) ช่วยให้รายละเอียดเพิ่มเติมได้ไหมครับ/ค่ะ'
        }
    },
    {
        id: 2,
        name: {
            en: 'Premium Discus Fish',
            th: 'ปลาดิสคัสพรีเมี่ยม'
        },
        price: '฿2,800',
        description: {
            en: 'High-quality discus fish with vibrant colors. Known as the king of freshwater aquarium fish.',
            th: 'ปลาดิสคัสคุณภาพสูงสีสันสดใส เรียกว่าเป็นราชาของปลาตู้น้ำจืด'
        },
        image: 'https://pixabay.com/get/ge8d41cf2fbfe73e084d035d878f443137bb60ea824b05e5712135d0523eefbfc8d50e0968aa72f7ca12b52a4d9ae7448f15d9ffe67b3bff92366188af7d5d1a2_1280.jpg',
        lineMessage: {
            en: 'Hello! I\'m interested in the Premium Discus Fish (฿2,800). Could you please provide more details?',
            th: 'สวัสดีครับ/ค่ะ สนใจปลาดิสคัสพรีเมี่ยม (฿2,800) ช่วยให้รายละเอียดเพิ่มเติมได้ไหมครับ/ค่ะ'
        }
    },
    {
        id: 3,
        name: {
            en: 'Colorful Guppy Pack',
            th: 'แพ็คปลากัปปี้สีสัน'
        },
        price: '฿480',
        description: {
            en: 'Pack of 6 colorful guppies. Perfect for beginners and great for breeding.',
            th: 'แพ็คปลากัปปี้สีสัน 6 ตัว เหมาะสำหรับผู้เริ่มต้นและดีสำหรับการผสมพันธุ์'
        },
        image: 'https://pixabay.com/get/g8e6a4c72c5f441a2ea031d90419247b5e23d2654e643a7467f166d14a5eb7d37c012153007d9dbf5918edd51925f8db25058e342793bf5bff33c4dd500552e67_1280.jpg',
        lineMessage: {
            en: 'Hello! I\'m interested in the Colorful Guppy Pack (฿480). Could you please provide more details?',
            th: 'สวัสดีครับ/ค่ะ สนใจแพ็คปลากัปปี้สีสัน (฿480) ช่วยให้รายละเอียดเพิ่มเติมได้ไหมครับ/ค่ะ'
        }
    },
    {
        id: 4,
        name: {
            en: 'Exotic Betta Fighter',
            th: 'ปลากัดสวยหายาก'
        },
        price: '฿750',
        description: {
            en: 'Stunning exotic betta with unique fin patterns. Each fish is individually selected.',
            th: 'ปลากัดสวยหายากครีบลวดลายเป็นเอกลักษณ์ คัดเลือกแต่ละตัวมาเป็นพิเศษ'
        },
        image: 'https://pixabay.com/get/g4ebba6fa9abd490e999dec8b58b38fa3385637014329958ec9e63d2b2bdc573a9590676918af46a9463947ef44698fdad7bf411b17bdde3c61c4be35bd551bda_1280.jpg',
        lineMessage: {
            en: 'Hello! I\'m interested in the Exotic Betta Fighter (฿750). Could you please provide more details?',
            th: 'สวัสดีครับ/ค่ะ สนใจปลากัดสวยหายาก (฿750) ช่วยให้รายละเอียดเพิ่มเติมได้ไหมครับ/ค่ะ'
        }
    },
    {
        id: 5,
        name: {
            en: 'Neon Tetra School',
            th: 'ฝูงปลานีออนเตตร้า'
        },
        price: '฿320',
        description: {
            en: 'School of 10 neon tetras. Perfect for creating a stunning display in planted tanks.',
            th: 'ฝูงปลานีออนเตตร้า 10 ตัว เหมาะสำหรับสร้างความสวยงามในตู้ปลาที่มีต้นไม้'
        },
        image: 'https://pixabay.com/get/gee4a9382e97558881ea5833aa1c603102f98e237bac18767f4c21f85c0efcde73c15f7cf27917bef1846b027ff57fba7ef5527af5a02c56c9320c722ad20ead6_1280.jpg',
        lineMessage: {
            en: 'Hello! I\'m interested in the Neon Tetra School (฿320). Could you please provide more details?',
            th: 'สวัสดีครับ/ค่ะ สนใจฝูงปลานีออนเตตร้า (฿320) ช่วยให้รายละเอียดเพิ่มเติมได้ไหมครับ/ค่ะ'
        }
    },
    {
        id: 6,
        name: {
            en: 'Golden Arowana',
            th: 'ปลามังกรทอง'
        },
        price: '฿15,500',
        description: {
            en: 'Premium golden arowana, symbol of prosperity and good fortune. Certificate included.',
            th: 'ปลามังกรทองพรีเมี่ยม สัญลักษณ์แห่งความเจริญรุ่งเรือง พร้อมใบรับรอง'
        },
        image: 'https://pixabay.com/get/g815db68389972ab50c736965f3a2b69489a3c52e2cb6355f7f2435051280f20e0d82047c76cd4dc81e44b32ac4220431509c7620d52391cbb9ccaed83bc56baf_1280.jpg',
        lineMessage: {
            en: 'Hello! I\'m interested in the Golden Arowana (฿15,500). Could you please provide more details?',
            th: 'สวัสดีครับ/ค่ะ สนใจปลามังกรทอง (฿15,500) ช่วยให้รายละเอียดเพิ่มเติมได้ไหมครับ/ค่ะ'
        }
    },
    {
        id: 7,
        name: {
            en: 'Freshwater Angelfish Pair',
            th: 'คู่ปลาเทวดาน้ำจืด'
        },
        price: '฿1,680',
        description: {
            en: 'Breeding pair of freshwater angelfish. Excellent for aquarists looking to breed.',
            th: 'คู่ผสมพันธุ์ปลาเทวดาน้ำจืด เยี่ยมสำหรับผู้เลี้ยงที่ต้องการผสมพันธุ์'
        },
        image: 'https://pixabay.com/get/g741867ef504fc9f1566977263d8eef7ad4f357586e271737b2f014b008373443d1ce8beec2ff050ad9eecb253358e3cc68b63d61363db4b7ca5e58cadb507ec9_1280.jpg',
        lineMessage: {
            en: 'Hello! I\'m interested in the Freshwater Angelfish Pair (฿1,680). Could you please provide more details?',
            th: 'สวัสดีครับ/ค่ะ สนใจคู่ปลาเทวดาน้ำจืด (฿1,680) ช่วยให้รายละเอียดเพิ่มเติมได้ไหมครับ/ค่ะ'
        }
    },
    {
        id: 8,
        name: {
            en: 'Rainbow Cichlid',
            th: 'ปลาซิคลิดรุ้ง'
        },
        price: '฿950',
        description: {
            en: 'Beautiful rainbow cichlid with stunning coloration. Hardy and suitable for mixed tanks.',
            th: 'ปลาซิคลิดรุ้งสวยงามสีสันเด่น แข็งแรงและเหมาะสำหรับตู้ปลาผสม'
        },
        image: 'https://pixabay.com/get/g6d1733f5f0046c3f2084c0776ca4e3342d982c450ef2ecbdaa074f1bdbbda12e92d7d8dc699576ef6eed98c5103223f4f7097959914340915fee0b01f37076fe_1280.jpg',
        lineMessage: {
            en: 'Hello! I\'m interested in the Rainbow Cichlid (฿950). Could you please provide more details?',
            th: 'สวัสดีครับ/ค่ะ สนใจปลาซิคลิดรุ้ง (฿950) ช่วยให้รายละเอียดเพิ่มเติมได้ไหมครับ/ค่ะ'
        }
    }
];

// Current language state
let currentLanguage = 'en';

// LINE OA ID - Replace with actual LINE OA ID
const LINE_OA_ID = '@aquatictopshelf'; // This should be replaced with actual LINE OA ID

// DOM Elements
const languageToggle = document.getElementById('languageToggle');
const productsGrid = document.getElementById('productsGrid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    renderProducts();
    setupEventListeners();
});

// Language Management
function initializeLanguage() {
    // Check if user has a preferred language saved
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    updateLanguageDisplay();
    updatePageLanguage();
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'th' : 'en';
    localStorage.setItem('preferredLanguage', currentLanguage);
    updateLanguageDisplay();
    updatePageLanguage();
    renderProducts(); // Re-render products with new language
}

function updateLanguageDisplay() {
    const langText = languageToggle.querySelector('.lang-text');
    langText.textContent = currentLanguage === 'en' ? 'TH' : 'EN';
    
    // Update document language attribute
    document.documentElement.lang = currentLanguage;
}

function updatePageLanguage() {
    // Update all elements with data-en and data-th attributes
    const elements = document.querySelectorAll('[data-en][data-th]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
}

// Product Rendering
function renderProducts() {
    productsGrid.innerHTML = '';
    
    fishProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name[currentLanguage]}" class="product-image" loading="lazy">
        </div>
        <div class="product-info">
            <h4 class="product-name">${product.name[currentLanguage]}</h4>
            <p class="product-price">${product.price}</p>
            <p class="product-description">${product.description[currentLanguage]}</p>
            <button class="line-contact-btn" onclick="contactViaLine(${product.id})">
                <svg class="line-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771z"/>
                    <path d="M23.928 1.15C21.752.285 17.102-.838 12.012.281 6.892-.838 2.242.285.066 1.15-1.582 1.85.066 3.99.066 3.99 3.539 7.794 11.949 23.734 11.949 23.734c.027.064.121.064.148 0 0 0 8.41-15.94 11.883-19.744 0 0 1.648-2.14-.052-2.84z"/>
                </svg>
                ${translations[currentLanguage]['Contact via LINE OA']}
            </button>
        </div>
    `;
    
    // Add loading state handling for images
    const img = card.querySelector('.product-image');
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
        // Fallback for broken images
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjhmOWZhIi8+CjxwYXRoIGQ9Ik0xNTAgNzVMMTI1IDEwMEgxNzVMMTUwIDc1WiIgZmlsbD0iIzZjNzU3ZCIvPgo8Y2lyY2xlIGN4PSIxMjAiIGN5PSI4NSIgcj0iNSIgZmlsbD0iIzZjNzU3ZCIvPgo8dGV4dCB4PSIxNTAiIHk9IjEzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzZjNzU3ZCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K';
        this.alt = currentLanguage === 'en' ? 'Image not available' : 'ไม่มีภาพ';
    });
    
    return card;
}

// LINE OA Integration
function contactViaLine(productId) {
    const product = fishProducts.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found');
        return;
    }
    
    const message = product.lineMessage[currentLanguage];
    const encodedMessage = encodeURIComponent(message);
    
    // Create LINE deep link
    // For web, we use the LINE web interface
    const lineUrl = `https://line.me/R/oaMessage/${LINE_OA_ID}/?${encodedMessage}`;
    
    // Try to detect if user is on mobile for better LINE app integration
    if (isMobileDevice()) {
        // On mobile, try to open LINE app directly
        const lineAppUrl = `line://oaMessage/${LINE_OA_ID}/?${encodedMessage}`;
        
        // Try LINE app first, fallback to web
        const tempLink = document.createElement('a');
        tempLink.href = lineAppUrl;
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        
        // Fallback to web version after a short delay
        setTimeout(() => {
            window.open(lineUrl, '_blank');
        }, 1000);
    } else {
        // On desktop, open web version
        window.open(lineUrl, '_blank');
    }
    
    // Analytics tracking (if needed)
    trackProductInquiry(productId, product.name[currentLanguage]);
}

// Utility Functions
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function trackProductInquiry(productId, productName) {
    // This function can be used to track user interactions
    // For example, sending data to Google Analytics or other analytics services
    console.log(`Product inquiry: ${productName} (ID: ${productId})`);
    
    // Example: Send to analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_inquiry', {
            'product_id': productId,
            'product_name': productName,
            'language': currentLanguage
        });
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Language toggle
    languageToggle.addEventListener('click', toggleLanguage);
    
    // Keyboard navigation for accessibility
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            // Add visible focus indicators for keyboard navigation
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Window resize handler for responsive adjustments
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Re-render products if needed for responsive adjustments
            handleWindowResize();
        }, 250);
    });
    
    // Intersection Observer for lazy loading animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe product cards for animation
        setTimeout(() => {
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => observer.observe(card));
        }, 100);
    }
}

function handleWindowResize() {
    // Handle any responsive adjustments needed
    const isMobile = window.innerWidth <= 768;
    
    // Adjust grid layout if needed
    if (isMobile && productsGrid.style.gridTemplateColumns !== '1fr') {
        productsGrid.style.gridTemplateColumns = '1fr';
    } else if (!isMobile && productsGrid.style.gridTemplateColumns === '1fr') {
        productsGrid.style.gridTemplateColumns = '';
    }
}

// Search and Filter Functions (for future enhancement)
function searchProducts(query) {
    const filteredProducts = fishProducts.filter(product => {
        const name = product.name[currentLanguage].toLowerCase();
        const description = product.description[currentLanguage].toLowerCase();
        return name.includes(query.toLowerCase()) || description.includes(query.toLowerCase());
    });
    
    return filteredProducts;
}

function filterProductsByPrice(minPrice, maxPrice) {
    return fishProducts.filter(product => {
        const price = parseInt(product.price.replace(/[^\d]/g, ''));
        return price >= minPrice && price <= maxPrice;
    });
}

// Error Handling
window.addEventListener('error', function(event) {
    console.error('Application error:', event.error);
    
    // Show user-friendly error message
    showErrorMessage(currentLanguage === 'en' 
        ? 'Something went wrong. Please refresh the page and try again.' 
        : 'เกิดข้อผิดพลาด กรุณารีเฟรชหน้าและลองใหม่อีกครั้ง'
    );
});

function showErrorMessage(message) {
    // Create and show error notification
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #dc3545;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 300px;
        font-size: 14px;
        line-height: 1.4;
    `;
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
}

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add skip link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = currentLanguage === 'en' ? 'Skip to main content' : 'ข้ามไปยังเนื้อหาหลัก';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-blue);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const productsSection = document.querySelector('.products');
    if (productsSection) {
        productsSection.id = 'main-content';
    }
});

// Export functions for potential external use
window.AquaticTopShelf = {
    toggleLanguage,
    contactViaLine,
    searchProducts,
    filterProductsByPrice,
    getCurrentLanguage: () => currentLanguage
};

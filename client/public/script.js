/* ============================================
   Um Registro Bonito - JavaScript
   Funcionalidades: Galeria dinâmica, animações, lazy loading
   ============================================ */

// ============================================
// 1. GALLERY GENERATION
// ============================================

/**
 * Gera imagens placeholder para a galeria
 * Substitua os URLs pelas suas imagens reais
 */
function generateGalleryItems() {
    const gallery = document.getElementById('gallery');
    
    // Array de imagens placeholder (usando Unsplash)
    // Substitua com suas próprias imagens
    const images = [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop',
    ];
    
    // Cria elementos de galeria
    images.forEach((imageUrl, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-aos', 'fade-up');
        item.setAttribute('data-aos-duration', '800');
        item.setAttribute('data-aos-delay', `${index * 50}`);
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Galeria - Imagem ${index + 1}`;
        img.loading = 'lazy';
        
        // Adiciona classe 'loaded' quando a imagem carrega
        img.onload = function() {
            this.classList.add('loaded');
        };
        
        item.appendChild(img);
        gallery.appendChild(item);
    });
}

// ============================================
// 2. INITIALIZE AOS (ANIMATE ON SCROLL)
// ============================================

function initializeAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
        disable: false
    });
}

// ============================================
// 3. SMOOTH SCROLL BEHAVIOR
// ============================================

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// 4. LAZY LOAD IMAGES
// ============================================

function initializeLazyLoad() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// 5. HEADER SCROLL EFFECT
// ============================================

function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.style.boxShadow = 'var(--shadow-sm)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// ============================================
// 6. DOCUMENT READY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Um Registro Bonito - Inicializando...');
    
    // Gera galeria
    generateGalleryItems();
    
    // Inicializa AOS
    initializeAOS();
    
    // Inicializa smooth scroll
    initializeSmoothScroll();
    
    // Inicializa lazy load
    initializeLazyLoad();
    
    // Inicializa header scroll effect
    initializeHeaderScroll();
    
    console.log('✨ Site carregado com sucesso!');
});

// ============================================
// 7. WINDOW RESIZE HANDLER
// ============================================

let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Reinicializa AOS em caso de redimensionamento
        AOS.refresh();
    }, 250);
});

// ============================================
// 8. PERFORMANCE OPTIMIZATION
// ============================================

// Prefetch recursos
if ('prefetch' in document) {
    const prefetchLinks = [
        'https://fonts.googleapis.com',
        'https://unpkg.com/aos@2.3.4/dist/aos.js'
    ];
    
    prefetchLinks.forEach(link => {
        const prefetch = document.createElement('link');
        prefetch.rel = 'prefetch';
        prefetch.href = link;
        document.head.appendChild(prefetch);
    });
}

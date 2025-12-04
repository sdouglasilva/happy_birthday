import { useEffect } from 'react';

/**
 * Um Registro Bonito - App Component
 * Design Philosophy: Minimalist Elegance + Editorial Refinement
 * Paleta: Azul Pastel + Rosa Bebê + Neutros
 * Tipografia: Playfair Display (títulos) + Inter (corpo)
 */

function App() {
  useEffect(() => {
    // Inicializar AOS (Animate On Scroll)
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.AOS) {
        // @ts-ignore
        window.AOS.init({
          duration: 800,
          easing: 'ease-out',
          once: true,
          offset: 100,
          disable: false
        });
      }
    };
    document.body.appendChild(script);

    // Gerar galeria
    generateGalleryItems();

    // Inicializar header scroll effect
    initializeHeaderScroll();

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const generateGalleryItems = () => {
    const gallery = document.getElementById('gallery') as HTMLElement | null;
    if (!gallery) return;

    // INSTRUÇÕES: Adicione suas fotos na pasta client/public/images/
    // Depois, substitua os URLs abaixo pelos nomes dos seus arquivos
    // Exemplo: '/images/foto1.jpg', '/images/foto2.jpg', etc.
const images = [
  '/images/foto-11.jpg',
  '/images/foto-2.jpg',
  '/images/foto-12.jpg',
  '/images/foto-4.jpg',
  '/images/foto-3.jpg',
  '/images/foto-5.jpg',
  '/images/foto-6.jpg',
  '/images/foto-7.jpg',
  '/images/foto-8.jpg',
  '/images/foto-9.jpg',
  '/images/foto-10.jpg',
  '/images/foto-14.jpg',
  '/images/foto-15.jpg',
  '/images/foto-13.jpg',
  '/images/foto-16.jpg',
  '/images/foto-17.jpg',
  '/images/foto-18.jpg'
];



    gallery.innerHTML = '';
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
      img.onerror = () => {
        // Se a imagem não carregar, mostra um placeholder
        img.src = 'https://via.placeholder.com/500x500?text=Imagem+não+encontrada';
      };

      img.onload = () => {
        if (img.classList) {
          img.classList.add('loaded');
        }
      };

      item.appendChild(img);
      if (gallery) {
        gallery.appendChild(item);
      }
    });
  };

  const initializeHeaderScroll = () => {
    const header = document.querySelector('.header') as HTMLElement | null;
    if (!header) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 50) {
        (header as HTMLElement).style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      } else {
        (header as HTMLElement).style.boxShadow = 'none';
      }
    });
  };

  return (
    <div className="app">
      <style>{`
        /* ============================================
           Um Registro Bonito - Stylesheet
           Design Philosophy: Minimalist Elegance + Editorial Refinement
           Paleta: Azul Pastel + Rosa Bebê + Neutros
           Tipografia: Playfair Display (títulos) + Inter (corpo)
           ============================================ */

        /* ============================================
           1. CSS VARIABLES & DESIGN TOKENS
           ============================================ */

        :root {
          /* Colors */
          --color-primary-blue: #C8E6F5;
          --color-primary-pink: #F5D5E3;
          --color-white: #FFFFFF;
          --color-dark: #2C3E50;
          --color-gray-medium: #7F8C8D;
          --color-gray-light: #F0F0F0;
          --color-gray-lighter: #F8F9FA;
          
          /* Typography */
          --font-display: 'Playfair Display', serif;
          --font-body: 'Inter', sans-serif;
          
          --font-size-h1: 48px;
          --font-size-h2: 24px;
          --font-size-body: 16px;
          --font-size-small: 14px;
          
          --font-weight-light: 400;
          --font-weight-bold: 700;
          --font-weight-medium: 500;
          
          /* Spacing */
          --spacing-xs: 8px;
          --spacing-sm: 16px;
          --spacing-md: 24px;
          --spacing-lg: 40px;
          --spacing-xl: 80px;
          
          /* Border Radius */
          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 16px;
          
          /* Shadows */
          --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
          --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.12);
          --shadow-lg: 0 16px 40px rgba(0, 0, 0, 0.15);
          --shadow-hover: 0 10px 30px rgba(0, 0, 0, 0.1);
          
          /* Line Height */
          --line-height-tight: 1.2;
          --line-height-normal: 1.5;
          --line-height-relaxed: 1.8;
          
          /* Transitions */
          --transition-fast: 300ms ease-out;
          --transition-normal: 400ms ease-out;
          --transition-slow: 800ms ease-out;
        }

        /* ============================================
           2. RESET & BASE STYLES
           ============================================ */

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-body);
          font-size: var(--font-size-body);
          line-height: var(--line-height-normal);
          color: var(--color-dark);
          background-color: var(--color-white);
          overflow-x: hidden;
        }

        /* ============================================
           3. TYPOGRAPHY
           ============================================ */

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-display);
          font-weight: var(--font-weight-light);
          line-height: var(--line-height-tight);
          margin-bottom: var(--spacing-md);
        }

        h1 {
          font-size: var(--font-size-h1);
        }

        h2 {
          font-size: var(--font-size-h2);
        }

        p {
          margin-bottom: var(--spacing-md);
          line-height: var(--line-height-relaxed);
        }

        p:last-child {
          margin-bottom: 0;
        }

        a {
          color: var(--color-dark);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        a:hover {
          color: var(--color-primary-blue);
        }

        /* ============================================
           4. CONTAINER & LAYOUT
           ============================================ */

        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 var(--spacing-lg);
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 var(--spacing-sm);
          }
        }

        /* ============================================
           5. HEADER
           ============================================ */

        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-gray-light);
          padding: var(--spacing-md) 0;
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.95);
        }

        .logo {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: var(--font-weight-light);
          color: var(--color-dark);
          letter-spacing: 0.5px;
        }

        /* ============================================
           6. HERO SECTION
           ============================================ */

        .hero {
          position: relative;
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-primary-pink) 100%);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
              radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 var(--spacing-lg);
          max-width: 800px;
        }

        .hero-title {
          font-size: var(--font-size-h1);
          font-weight: var(--font-weight-light);
          color: var(--color-dark);
          line-height: var(--line-height-tight);
          letter-spacing: -0.5px;
          margin: 0;
          opacity: 0;
          animation: fadeUpHero 1s ease-out 0.2s forwards;
        }

        @keyframes fadeUpHero {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero {
            height: 50vh;
          }
          
          .hero-title {
            font-size: 36px;
          }
        }

        @media (max-width: 480px) {
          .hero {
            height: 40vh;
          }
          
          .hero-title {
            font-size: 28px;
          }
          
          .hero-content {
            padding: 0 var(--spacing-md);
          }
        }

        /* ============================================
           7. GALLERY SECTION
           ============================================ */

        .gallery-section {
          padding: var(--spacing-xl) 0;
          background-color: var(--color-white);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-md);
        }

        .gallery-item {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: var(--radius-md);
          background-color: var(--color-gray-light);
          cursor: pointer;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
          display: block;
        }

        .gallery-item:hover img {
          transform: scale(1.02);
          box-shadow: var(--shadow-hover);
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-md);
          }
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: var(--spacing-lg) 0;
          }
          
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
        }

        /* ============================================
           8. TEXT BLOCK SECTION
           ============================================ */

        .text-block-section {
          padding: var(--spacing-xl) 0;
          background-color: var(--color-gray-lighter);
        }

        .text-block {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          font-size: var(--font-size-body);
          line-height: var(--line-height-relaxed);
          color: var(--color-dark);
        }

        .text-block p {
          margin-bottom: var(--spacing-md);
          opacity: 0;
          animation: fadeUpText 0.8s ease-out forwards;
        }

        .text-block p:nth-child(1) {
          animation-delay: 0.1s;
        }

        .text-block p:nth-child(2) {
          animation-delay: 0.2s;
        }

        .text-block p:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes fadeUpText {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .text-block-section {
            padding: var(--spacing-lg) 0;
          }
          
          .text-block {
            padding: 0 var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .text-block-section {
            padding: var(--spacing-lg) 0;
          }
          
          .text-block {
            font-size: 15px;
          }
        }

        /* ============================================
           9. FOOTER
           ============================================ */

        .footer {
          padding: var(--spacing-lg) 0;
          background-color: var(--color-white);
          border-top: 1px solid var(--color-gray-light);
          text-align: center;
        }

        .footer-text {
          font-size: var(--font-size-small);
          color: var(--color-gray-medium);
          margin: 0;
          letter-spacing: 0.3px;
        }

        @media (max-width: 768px) {
          .footer {
            padding: var(--spacing-md) 0;
          }
        }

        /* ============================================
           10. ANIMATIONS & TRANSITIONS
           ============================================ */

        [data-aos] {
          opacity: 0;
        }

        [data-aos].aos-animate {
          opacity: 1;
        }

        img {
          transition: opacity var(--transition-slow);
        }

        img.loaded {
          opacity: 1;
        }

        /* ============================================
           11. ACCESSIBILITY
           ============================================ */

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        a:focus,
        button:focus {
          outline: 2px solid var(--color-primary-blue);
          outline-offset: 2px;
        }

        /* ============================================
           12. UTILITY CLASSES
           ============================================ */

        .text-center {
          text-align: center;
        }

        .text-muted {
          color: var(--color-gray-medium);
        }

        .mt-0 { margin-top: 0; }
        .mb-0 { margin-bottom: 0; }

        @media print {
          .header,
          .footer {
            display: none;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Parabéns Rouxinol💖✨🥳🎆</h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero" id="hero">
          <div className="hero-content">
            <h2 className="hero-title" data-aos="fade-up" data-aos-duration="1000">
              Em tão pouco tempo, temos todo do mundo.
            </h2>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container">
            <div className="gallery-grid" id="gallery">
              {/* Gallery items will be generated by JavaScript */}
            </div>
          </div>
        </section>

        {/* Text Block Section */}
        <section className="text-block-section">
          <div className="container">
            <div className="text-block" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
  
              <p>Não pude deixar esse "DUMP" passar batido.
                Afinal vivemos intesamente esses dias. Que venham muitos outros assim.
              </p>
              <p>Isso aqui é só um registro bonito do que estamos vivendo</p>
              <p>Ass. Denilson.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            Quero que saiba que, eu acredito muito no teu potencial.
            Você tem esse jeito meio doida, animada, sincera.
            Sabe apreciar as coisas importantes da vida sem reclamar, sabe exatamente onde depositar seus sentimentos.
            Ama quem tem que amar, e despreza quem merece desprezo.
            É respeitosa, sabe tratar bem as pessoas ao redor, além de ser muito inteligente.
            Continue valorizando esse ser humano maravilhoso que você é, buscando ser mais humana dia após dia.
            E se precisar de mim, "desprecise", eu já estarei lá.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

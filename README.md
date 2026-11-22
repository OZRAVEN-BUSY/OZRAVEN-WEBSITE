<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#07060d">
  <meta name="description" content="OZRAVEN — Dream. Innovate. Evolve. Discover premium digital products, web templates and creative technology.">
  <title>OZRAVEN — Dream. Innovate. Evolve.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="noise"></div>
  <div class="announcement"><span class="pulse-dot"></span> THE FUTURE IS BUILT BY THOSE WHO CREATE <span class="announcement-right">OZRAVEN / 001</span></div>
  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="OZRAVEN home"><img src="assets/ozraven-logo.jpeg" alt="OZRAVEN logo"></a>
    <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span></button>
    <nav class="nav" id="nav">
      <a href="#home" class="nav-link active">Home</a>
      <a href="#products" class="nav-link">Products</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#services" class="nav-link">What we do</a>
      <a href="#contact" class="nav-link">Contact</a>
    </nav>
    <button class="cart-trigger" id="openCart"><span class="cart-icon">▱</span> BAG <span class="cart-count" id="cartCount">0</span></button>
  </header>

  <main>
    <section class="hero section-shell" id="home">
      <div class="hero-grid"></div>
      <div class="hero-orb orb-one"></div><div class="hero-orb orb-two"></div>
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-line"></span> INDEPENDENT DIGITAL STUDIO <span class="eyebrow-index">EST. 2026</span></div>
        <h1>BUILD BEYOND<br>THE <span class="gradient-text">ORDINARY.</span></h1>
        <p class="hero-description">Ideas deserve more than imagination. We create digital tools, experiences and resources that help ambitious minds move forward.</p>
        <div class="hero-actions">
          <a href="#products" class="btn btn-primary">EXPLORE THE STORE <span>↗</span></a>
          <a href="#about" class="text-link">DISCOVER OZRAVEN <span>→</span></a>
        </div>
        <div class="hero-meta"><span><i class="status-dot"></i> CREATIVITY IN MOTION</span><span>01 / 04 — THE BEGINNING</span></div>
      </div>
      <div class="hero-visual">
        <div class="visual-frame">
          <div class="frame-top"><span>OZR / CORE SYSTEM</span><span>● LIVE</span></div>
          <img src="assets/ozraven-logo.jpeg" alt="OZRAVEN cosmic brand emblem" class="hero-logo">
          <div class="orbit orbit-a"></div><div class="orbit orbit-b"></div>
          <div class="visual-caption"><span>DESIGN THE NEXT.</span><span>° 19.0760 N / 72.8777 E</span></div>
        </div>
        <div class="floating-chip chip-top"> <span class="chip-symbol">✳</span> IDEAS → IMPACT</div>
        <div class="floating-chip chip-bottom"><span class="mini-bars">▂ ▅ ▇</span> ALWAYS EVOLVING</div>
      </div>
      <div class="hero-scroll"><span></span> SCROLL TO EXPLORE</div>
    </section>

    <section class="ticker" aria-label="Brand values"><div class="ticker-track">
      <span>DREAM</span><b>✳</b><span>INNOVATE</span><b>✳</b><span>EVOLVE</span><b>✳</b><span>CREATE WITHOUT LIMITS</span><b>✳</b>
      <span>DREAM</span><b>✳</b><span>INNOVATE</span><b>✳</b><span>EVOLVE</span><b>✳</b><span>CREATE WITHOUT LIMITS</span><b>✳</b>
    </div></section>

    <section class="section section-shell products-section" id="products">
      <div class="section-heading">
        <div><div class="eyebrow"><span class="eyebrow-line"></span> THE OZRAVEN STORE / 01</div><h2>TOOLS FOR YOUR<br><span class="muted-heading">NEXT MOVE.</span></h2></div>
        <p>Thoughtfully crafted digital resources for students, creators and future-focused builders.</p>
      </div>
      <div class="filter-row">
        <div class="filter-tabs" id="filters">
          <button class="filter-btn selected" data-filter="all">ALL PRODUCTS <span>04</span></button>
          <button class="filter-btn" data-filter="templates">TEMPLATES</button>
          <button class="filter-btn" data-filter="creative">CREATIVE</button>
          <button class="filter-btn" data-filter="tools">TOOLS</button>
        </div>
        <span class="catalog-code">CATALOGUE / 2026</span>
      </div>
      <div class="product-grid" id="productGrid">
        <article class="product-card" data-category="templates" data-id="portfolio">
          <div class="product-art art-portfolio"><span class="art-label">01 / PERSONAL BRAND</span><div class="mock-window"><div class="mock-dots">● ● ●</div><div class="mock-title">YOUR<br><em>PORTFOLIO.</em></div><div class="mock-line"></div><div class="mock-foot">DESIGN YOUR FUTURE ↗</div></div><span class="art-stamp">OZ—01</span></div>
          <div class="product-info"><div><span class="product-type">HTML + CSS TEMPLATE</span><h3>Student Portfolio Pro</h3></div><span class="price">₹199</span></div>
          <p class="product-desc">A clean, responsive portfolio to present your skills, projects and ambitions.</p>
          <div class="product-bottom"><button class="add-btn" data-add="portfolio">ADD TO BAG <span>＋</span></button><button class="details-btn" data-details="portfolio" aria-label="View Student Portfolio Pro details">↗</button></div>
        </article>
        <article class="product-card" data-category="creative" data-id="social">
          <div class="product-art art-social"><span class="art-label">02 / CONTENT SYSTEM</span><div class="social-stack"><div class="social-tile tile-back">CREATE<br>MORE.</div><div class="social-tile tile-front"><span>OZ / STUDIO</span><strong>MAKE<br>IT<br>MATTER.</strong><small>CREATIVE KIT — 001</small></div></div><span class="art-stamp">OZ—02</span></div>
          <div class="product-info"><div><span class="product-type">DESIGN RESOURCE</span><h3>Creator Social Kit</h3></div><span class="price">₹149</span></div>
          <p class="product-desc">A starter set of social post layouts for a consistent creator identity.</p>
          <div class="product-bottom"><button class="add-btn" data-add="social">ADD TO BAG <span>＋</span></button><button class="details-btn" data-details="social" aria-label="View Creator Social Kit details">↗</button></div>
        </article>
        <article class="product-card" data-category="tools" data-id="study">
          <div class="product-art art-study"><span class="art-label">03 / FOCUS PROTOCOL</span><div class="study-ui"><div class="study-top">OZ / FOCUS MODE <span>●</span></div><div class="study-time">25<span>:00</span></div><div class="study-progress"><i></i></div><div class="study-bottom"><span>FOCUS SESSION</span><span>01 / 04</span></div></div><span class="art-stamp">OZ—03</span></div>
          <div class="product-info"><div><span class="product-type">PRODUCTIVITY TOOL</span><h3>Focus Dashboard</h3></div><span class="price">₹99</span></div>
          <p class="product-desc">A minimal planning dashboard to organise tasks and focused work sessions.</p>
          <div class="product-bottom"><button class="add-btn" data-add="study">ADD TO BAG <span>＋</span></button><button class="details-btn" data-details="study" aria-label="View Focus Dashboard details">↗</button></div>
        </article>
        <article class="product-card" data-category="templates" data-id="launch">
          <div class="product-art art-launch"><span class="art-label">04 / STARTUP LAUNCH</span><div class="launch-graphic"><div class="launch-ring"></div><strong>START<br>FROM<br><em>ZERO.</em></strong><span>IDEA / PLAN / BUILD</span></div><span class="art-stamp">OZ—04</span></div>
          <div class="product-info"><div><span class="product-type">NOTION / PLANNING</span><h3>Startup Launch Planner</h3></div><span class="price">₹249</span></div>
          <p class="product-desc">A practical planning framework to turn an early idea into clear next steps.</p>
          <div class="product-bottom"><button class="add-btn" data-add="launch">ADD TO BAG <span>＋</span></button><button class="details-btn" data-details="launch" aria-label="View Startup Launch Planner details">↗</button></div>
        </article>
      </div>
      <div class="catalog-footer"><span>SHOWING 04 / 04 PRODUCTS</span><span>MORE IN DEVELOPMENT <i class="status-dot"></i></span></div>
    </section>

    <section class="manifesto-section" id="about">
      <div class="manifesto-grid"></div>
      <div class="section-shell manifesto-content">
        <div class="eyebrow"><span class="eyebrow-line"></span> OUR PHILOSOPHY / 02</div>
        <div class="manifesto-main"><span class="manifesto-number">[ 001 ]</span><h2>THE FUTURE<br>ISN'T FOUND.<br><span class="gradient-text">IT'S CREATED.</span></h2></div>
        <div class="manifesto-bottom"><p>OZRAVEN is an independent startup built around one simple belief: creativity and technology can make ambitious ideas real. We are starting with useful digital products and growing toward a world of better digital experiences.</p><div class="manifesto-signature">DREAM <b>·</b> INNOVATE <b>·</b> EVOLVE</div></div>
      </div>
    </section>

    <section class="section section-shell services-section" id="services">
      <div class="section-heading">
        <div><div class="eyebrow"><span class="eyebrow-line"></span> WHAT WE DO / 03</div><h2>SMALL IDEAS.<br><span class="muted-heading">BIG POSSIBILITIES.</span></h2></div>
        <p>We focus on making digital work feel simpler, sharper and more inspiring.</p>
      </div>
      <div class="service-list">
        <div class="service-row"><span class="service-no">01</span><div><h3>Digital Products</h3><p>Useful downloads and resources designed to solve everyday creative and productivity needs.</p></div><span class="service-arrow">↗</span></div>
        <div class="service-row"><span class="service-no">02</span><div><h3>Web Experiences</h3><p>Modern, responsive web concepts that bring brands and ideas to life.</p></div><span class="service-arrow">↗</span></div>
        <div class="service-row"><span class="service-no">03</span><div><h3>Creative Systems</h3><p>Design resources and repeatable systems that help creators work with clarity.</p></div><span class="service-arrow">↗</span></div>
      </div>
    </section>

    <section class="cta-section section-shell">
      <div class="cta-glow"></div><div class="eyebrow"><span class="eyebrow-line"></span> YOUR NEXT CHAPTER STARTS HERE</div>
      <h2>MAKE SOMETHING<br><span class="gradient-text">MATTER.</span></h2>
      <a href="#contact" class="btn btn-primary">LET'S CONNECT <span>↗</span></a>
      <div class="cta-coordinate">OZRAVEN / SIGNAL 004 — OPEN CHANNEL</div>
    </section>

    <section class="section section-shell contact-section" id="contact">
      <div class="section-heading">
        <div><div class="eyebrow"><span class="eyebrow-line"></span> OPEN A CHANNEL / 04</div><h2>HAVE AN IDEA?<br><span class="muted-heading">LET'S TALK.</span></h2></div>
        <p>Questions, collaborations or just want to say hello? Send a message to the OZRAVEN team.</p>
      </div>
      <form class="contact-form" id="contactForm">
        <label>YOUR NAME<input type="text" id="contactName" placeholder="Enter your name" required></label>
        <label>EMAIL ADDRESS<input type="email" id="contactEmail" placeholder="you@example.com" required></label>
        <label class="full-field">WHAT'S ON YOUR MIND?<textarea id="contactMessage" rows="4" placeholder="Tell us a little about it..." required></textarea></label>
        <div class="form-bottom"><p id="formStatus">WE'LL GET BACK TO YOU AS SOON AS WE CAN.</p><button class="btn btn-primary" type="submit">SEND MESSAGE <span>↗</span></button></div>
      </form>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-top"><a href="#top" class="footer-brand"><img src="assets/ozraven-logo.jpeg" alt="OZRAVEN logo"></a><div class="footer-motto">DREAM. INNOVATE. EVOLVE.</div><a href="#top" class="back-top">BACK TO TOP ↑</a></div>
    <div class="footer-bottom"><span>© <span id="year"></span> OZRAVEN. ALL SYSTEMS NOMINAL.</span><span>BUILT FOR WHAT'S NEXT.</span><span>MUMBAI, INDIA · INDEPENDENT DIGITAL STUDIO</span></div>
  </footer>

  <div class="cart-overlay" id="cartOverlay"></div>
  <aside class="cart-drawer" id="cartDrawer" aria-label="Shopping bag" aria-hidden="true">
    <div class="drawer-head"><div><span class="eyebrow">YOUR SELECTION</span><h2>YOUR BAG <span id="drawerCount">(0)</span></h2></div><button class="close-drawer" id="closeCart" aria-label="Close bag">×</button></div>
    <div class="cart-items" id="cartItems"><div class="empty-cart"><span>◌</span><h3>YOUR BAG IS EMPTY.</h3><p>Find something that moves you forward.</p><button class="text-link" id="continueShopping">EXPLORE PRODUCTS →</button></div></div>
    <div class="drawer-foot"><div class="subtotal"><span>SUBTOTAL</span><strong id="cartSubtotal">₹0</strong></div><p>Digital products are delivered electronically. Checkout is a demo until payment is connected.</p><button class="btn btn-primary checkout-btn" id="checkoutBtn">CONTINUE TO CHECKOUT <span>↗</span></button></div>
  </aside>

  <div class="modal-backdrop" id="modalBackdrop"><div class="product-modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><button class="modal-close" id="modalClose" aria-label="Close details">×</button><span class="eyebrow" id="modalType">PRODUCT DETAILS</span><h2 id="modalTitle"></h2><p id="modalDescription"></p><div class="modal-bottom"><strong id="modalPrice"></strong><button class="btn btn-primary" id="modalAdd">ADD TO BAG <span>＋</span></button></div></div></div>
  <script src="script.js"></script>
</body>
</html>

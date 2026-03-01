/* ════════════════════════════════════════════════════════════
   CODINGSBUMS.COM – App Logic
   - Theme toggle
   - Language switcher (DE / PT / EN)
   - GSAP ScrollTrigger: Palm tree (SVG) + Longboard
   - Portfolio card tilt
   - Contact form
════════════════════════════════════════════════════════════ */

/* ────────────────────────────────
   TRANSLATIONS
──────────────────────────────── */
const i18n = {
    de: {
        hero_subtitle: 'Full Stack Developer & Creative',
        tag_web: 'Web Entwicklung',
        tag_design: 'Design',
        tag_surfboard: 'Surfboard Shaper',
        scene_text: 'Scrolle und erlebe das Feeling',
        portfolio_eyebrow: 'Ausgewählte Arbeiten',
        portfolio_title: 'Portfolio',
        portfolio_desc: 'Eine Auswahl an Websites, die mit Leidenschaft gestaltet und entwickelt wurden.',
        visit_site: 'Website besuchen →',
        dreiz_desc: 'Premium Beauty Marke — Luxury Redesign mit immersivem Produkt-Erlebnis.',
        luciana_desc: 'Kreatives Portfolio für die Künstlerin Luciana Burr — Galerie & Personal Brand.',
        jos_desc: 'Professioneller Gebäudeservice — klare, vertrauenswürdige Business-Website.',
        contact_eyebrow: 'Kontakt aufnehmen',
        contact_title: 'Kontakt',
        contact_desc: 'Hast du eine Projektidee? Lass uns reden — ich freue mich von dir zu hören.',
        form_name: 'Name',
        form_email: 'E-Mail',
        form_subject: 'Betreff',
        form_message: 'Nachricht',
        form_send: 'Nachricht senden',
        form_success: '✓ Nachricht gesendet! Ich melde mich bald.',
        impressum: 'Impressum',
        datenschutz: 'Datenschutz',
        agb: 'AGB',
        footer_tagline: 'Codiert mit ☀️ & 🏄 von Martin Burr',
    },
    pt: {
        hero_subtitle: 'Desenvolvedor Full Stack & Criativo',
        tag_web: 'Desenvolvimento Web',
        tag_design: 'Design',
        tag_surfboard: 'Shaper de Pranchas',
        scene_text: 'Role para sentir a vibe',
        portfolio_eyebrow: 'Trabalhos Selecionados',
        portfolio_title: 'Portfólio',
        portfolio_desc: 'Uma coleção de sites criados com paixão.',
        visit_site: 'Visitar Site →',
        dreiz_desc: 'Marca de beleza premium — redesign de luxo com experiência imersiva de produto.',
        luciana_desc: 'Portfólio criativo da artista Luciana Burr — galeria e marca pessoal.',
        jos_desc: 'Empresa de serviços prediais — site limpo e de confiança.',
        contact_eyebrow: 'Entre em Contato',
        contact_title: 'Contato',
        contact_desc: 'Tem uma ideia de projeto? Vamos conversar — adoraria ouvir de você.',
        form_name: 'Nome',
        form_email: 'E-Mail',
        form_subject: 'Assunto',
        form_message: 'Mensagem',
        form_send: 'Enviar Mensagem',
        form_success: '✓ Mensagem enviada! Entrarei em contato em breve.',
        impressum: 'Impressum',
        datenschutz: 'Privacidade',
        agb: 'Termos',
        footer_tagline: 'Codificado com ☀️ & 🏄 por Martin Burr',
    },
    en: {
        hero_subtitle: 'Full Stack Developer & Creative',
        tag_web: 'Web Development',
        tag_design: 'Design',
        tag_surfboard: 'Surfboard Shaper',
        scene_text: 'Scroll to experience the vibe',
        portfolio_eyebrow: 'Selected Work',
        portfolio_title: 'Portfolio',
        portfolio_desc: 'A collection of websites designed and developed with passion.',
        visit_site: 'Visit Site →',
        dreiz_desc: 'Premium beauty brand — luxury redesign with immersive product experience.',
        luciana_desc: 'Creative portfolio for artist Luciana Burr — expressive gallery & personal brand.',
        jos_desc: 'Professional building services company — clean, trustworthy business website.',
        contact_eyebrow: 'Get In Touch',
        contact_title: 'Contact',
        contact_desc: 'Have a project idea? Let\'s talk — I\'d love to hear from you.',
        form_name: 'Name',
        form_email: 'E-Mail',
        form_subject: 'Subject',
        form_message: 'Message',
        form_send: 'Send Message',
        form_success: '✓ Message sent! I\'ll be in touch soon.',
        impressum: 'Imprint',
        datenschutz: 'Privacy Policy',
        agb: 'Terms',
        footer_tagline: 'Coded with ☀️ & 🏄 by Martin Burr',
    }
};

let currentLang = 'de';

function applyTranslations(lang) {
    currentLang = lang;
    const t = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    const ph = {
        formName: { de: 'Martin Mustermann', pt: 'João Silva', en: 'John Doe' },
        formEmail: { de: 'hallo@example.com', pt: 'oi@exemplo.com', en: 'hello@example.com' },
        formSubject: { de: 'Projekt Anfrage…', pt: 'Pedido de projeto…', en: 'Project inquiry…' },
        formMessage: { de: 'Erzähl mir von deinem Projekt…', pt: 'Fale-me sobre o seu projeto…', en: 'Tell me about your project…' },
    };
    Object.keys(ph).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.placeholder = ph[id][lang] || '';
    });
}

/* ────────────────────────────────
   THEME
──────────────────────────────── */
function initTheme() {
    const saved = localStorage.getItem('cb-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
}

document.getElementById('themeToggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cb-theme', next);
});

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.getAttribute('data-lang')));
});

document.getElementById('year').textContent = new Date().getFullYear();

/* ────────────────────────────────
   BURGER MENU
──────────────────────────────── */
(function () {
    const btn = document.getElementById('burgerBtn');
    const menu = document.getElementById('mobileMenu');

    function closeMenu() {
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden', 'true');
    }

    btn.addEventListener('click', () => {
        const isOpen = menu.classList.contains('open');
        if (isOpen) {
            closeMenu();
        } else {
            btn.setAttribute('aria-expanded', 'true');
            menu.classList.add('open');
            menu.setAttribute('aria-hidden', 'false');
        }
    });

    // Close when a mobile link is tapped
    menu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on outside click
    document.addEventListener('click', e => {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            closeMenu();
        }
    });
})();

/* ────────────────────────────────
   CONTACT FORM
──────────────────────────────── */
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('btnSend');
    const success = document.getElementById('formSuccess');
    btn.style.opacity = '0.6'; btn.disabled = true;
    setTimeout(() => {
        btn.style.opacity = '1'; btn.disabled = false;
        success.style.display = 'block';
        success.textContent = i18n[currentLang].form_success;
        this.reset();
        setTimeout(() => { success.style.display = 'none'; }, 5000);
    }, 1200);
});

/* ────────────────────────────────
   SVG PALM FROND GENERATOR
   Draws realistic pinnate palm fronds.
   Crown center in SVG coords: cx=168, cy=150
──────────────────────────────── */
function rotVec(vx, vy, a) {
    return [vx * Math.cos(a) - vy * Math.sin(a),
    vx * Math.sin(a) + vy * Math.cos(a)];
}

function makeFrond(svgNS, angle, length) {
    const CX = 168, CY = 150;

    const g = document.createElementNS(svgNS, 'g');
    g.classList.add('frond-elem');
    // Translate to crown, then rotate to frond angle
    g.setAttribute('transform', `translate(${CX}, ${CY}) rotate(${angle})`);

    // Rachis (central stem) — more pronounced droop toward tip
    const cpx = length * 0.46, cpy = length * 0.10;
    const epx = length, epy = length * 0.38;

    const stem = document.createElementNS(svgNS, 'path');
    stem.setAttribute('d', `M0,0 Q${cpx},${cpy} ${epx},${epy}`);
    stem.setAttribute('stroke', '#6aaa28');   // bright yellowish-green rachis
    stem.setAttribute('stroke-width', '3.2');
    stem.setAttribute('fill', 'none');
    stem.setAttribute('stroke-linecap', 'round');
    g.appendChild(stem);

    // Filled leaflet blades — wide enough to be clearly visible
    const numPairs = 24;
    const halfW = 5.0;  // wider base on rachis so blades are clearly filled

    for (let i = 1; i <= numPairs; i++) {
        const t = (i / (numPairs + 1)) * 0.93 + 0.04;

        // Point on quadratic bezier
        const px = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * cpx + t * t * epx;
        const py = (1 - t) * (1 - t) * 0 + 2 * t * (1 - t) * cpy + t * t * epy;

        // Tangent direction (normalised)
        const dtx = 2 * (1 - t) * (cpx - 0) + 2 * t * (epx - cpx);
        const dty = 2 * (1 - t) * (cpy - 0) + 2 * t * (epy - cpy);
        const tl = Math.sqrt(dtx * dtx + dty * dty);
        const tx = dtx / tl, ty = dty / tl;

        // Normal (perpendicular, pointing "above" frond)
        const nx = -ty, ny = tx;

        // Leaflet length envelope: short at base, longer in middle, shorter at tip
        const envelope = Math.pow(Math.sin(t * Math.PI), 0.55);
        const llen = (14 + 44 * envelope);

        // ── Upper leaflet ── (above rachis)
        // Base: wide rectangle on rachis → tip point
        const ub1x = px + nx * halfW, ub1y = py + ny * halfW;  // upper-base point
        const ub2x = px + nx * 0.5, ub2y = py + ny * 0.5;    // closer to center

        // Tip: goes perpendicular + slightly backward
        const uTipX = px - nx * llen - tx * llen * 0.18;
        const uTipY = py - ny * llen - ty * llen * 0.18;

        // Mid-arc control (bow on upper side)
        const uCpX = (ub1x + uTipX) / 2 - tx * llen * 0.12;
        const uCpY = (ub1y + uTipY) / 2 - ty * llen * 0.12;

        const ul = document.createElementNS(svgNS, 'path');
        ul.setAttribute('d',
            `M${ub1x.toFixed(1)},${ub1y.toFixed(1)} ` +
            `Q${uCpX.toFixed(1)},${uCpY.toFixed(1)} ${uTipX.toFixed(1)},${uTipY.toFixed(1)} ` +
            `L${ub2x.toFixed(1)},${ub2y.toFixed(1)} Z`
        );
        const greenU = i % 3 === 0 ? '#236e1a' : (i % 3 === 1 ? '#3a8a28' : '#2c7c20');
        ul.setAttribute('fill', greenU);
        ul.setAttribute('stroke', 'none');
        g.appendChild(ul);

        // ── Lower leaflet ── (below rachis, shorter + darker)
        const llen2 = llen * 0.78;
        const lb1x = px - nx * halfW, lb1y = py - ny * halfW;
        const lb2x = px - nx * 0.5, lb2y = py - ny * 0.5;

        const lTipX = px + nx * llen2 - tx * llen2 * 0.15;
        const lTipY = py + ny * llen2 - ty * llen2 * 0.15;

        const lCpX = (lb1x + lTipX) / 2 - tx * llen2 * 0.10;
        const lCpY = (lb1y + lTipY) / 2 - ty * llen2 * 0.10;

        const ll = document.createElementNS(svgNS, 'path');
        ll.setAttribute('d',
            `M${lb1x.toFixed(1)},${lb1y.toFixed(1)} ` +
            `Q${lCpX.toFixed(1)},${lCpY.toFixed(1)} ${lTipX.toFixed(1)},${lTipY.toFixed(1)} ` +
            `L${lb2x.toFixed(1)},${lb2y.toFixed(1)} Z`
        );
        const greenL = i % 2 === 0 ? '#1a5414' : '#1e5e18';
        ll.setAttribute('fill', greenL);
        ll.setAttribute('stroke', 'none');
        g.appendChild(ll);
    }

    return g;
}

function buildPalmFronds() {
    const svgNS = 'http://www.w3.org/2000/svg';
    const frondsGroup = document.getElementById('frondsGroup');

    // 4 long fronds: 2 sweeping left, 2 sweeping right
    const frondDefs = [
        { angle: -152, length: 195 }, // mirror of far-right (-28°)
        { angle: -122, length: 190 }, // mirror of right (-58°)
        { angle: -58, length: 190 }, // right
        { angle: -28, length: 195 }, // far right
    ];

    // Store for GSAP to access
    window._frondDefs = frondDefs;
    window._frondElems = [];

    frondDefs.forEach((def) => {
        const frond = makeFrond(svgNS, def.angle, def.length);
        frondsGroup.appendChild(frond);
        window._frondElems.push(frond);
    });
}

/* ────────────────────────────────
   GSAP ANIMATIONS
──────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    applyTranslations('de');

    // Build the SVG fronds before GSAP init
    buildPalmFronds();

    gsap.registerPlugin(ScrollTrigger);

    /* ── Master scroll timeline ── */
    const sceneTL = gsap.timeline({
        scrollTrigger: {
            trigger: '.scene-section',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.8,
            pin: '.scene-sticky',
        }
    });

    // ── Phase 0: Scene label ──
    sceneTL.fromTo('.scene-label', { opacity: 0 }, { opacity: 1, duration: 0.3 });

    // ── Phase 1: Sand + Water establish the beach ──
    sceneTL.to('#sand', {
        opacity: 1, y: 0, duration: 1.4, ease: 'power2.out',
    }, 0.2);

    sceneTL.to('#water', {
        opacity: 1, x: 0, duration: 1.6, ease: 'power3.out',
    }, 0.5);




    // ── Phase 2: Trunk grows bottom → top (via SVG clipPath rect) ──
    // trunkClipRect starts at y=548, height=14 (just the stump)
    // animates to y=145, height=417 (full trunk)
    sceneTL.to('#trunkClipRect', {
        attr: { y: 145, height: 417 },
        duration: 2.4,
        ease: 'power2.out',
    }, 1.6);

    // Crown node pops in just before fronds
    sceneTL.to('#crownNode', {
        opacity: 1, duration: 0.4, ease: 'power2.out',
    }, 3.6);

    // ── Phase 3: Fronds fan out one by one ──
    window._frondElems.forEach((frond, i) => {
        // Each frond: fade + scale from crown center
        gsap.set(frond, { opacity: 0, transformOrigin: '0px 0px', scale: 0 });
        sceneTL.to(frond, {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'back.out(1.5)',
        }, 3.8 + i * 0.12);
    });

    // Coconuts pop in after fronds
    sceneTL.to('#palmCoconutsSvg', {
        opacity: 1, duration: 0.6, ease: 'back.out(2)',
    }, 5.3);

    // Scene label fades out
    sceneTL.to('.scene-label', { opacity: 0, duration: 0.4 }, 4.8);

    // ── Phase 4: Surfboard flies in from left, leans on tree ──
    // Board is vertical SVG — start upright off-screen, push in and lean
    gsap.set('#longboardWrapper', { transformOrigin: 'bottom center' });

    // Palm center: 26% desktop, 20% mobile — keep board ~5-7% left of palm center
    const palmLeft = window.innerWidth <= 768 ? 20 : 26;
    const boardIn = `${palmLeft - 7}%`;  // slide-in position
    const boardFinal = `${palmLeft - 5}%`;  // leaning resting position

    sceneTL.to('#longboardWrapper', {
        opacity: 1, left: boardIn, duration: 1.8, ease: 'power3.out',
    }, 5.5);

    const isMobile = window.innerWidth <= 768;
    const rotStart = isMobile ? 12 : -12;  // entry angle
    const rotEnd = isMobile ? -22 : 22;  // lean direction

    sceneTL.fromTo('#longboard', { rotation: rotStart }, {
        rotation: rotEnd, duration: 1.5, ease: 'power2.inOut',
    }, 6.0);

    sceneTL.to('#longboardWrapper', {
        bottom: '8%', left: boardFinal, duration: 1.4, ease: 'power2.out',
    }, 6.2);

    // ── Water wave animation ──
    gsap.to('.wave-svg', {
        x: '-50%', duration: 3, repeat: -1, ease: 'none',
    });

    /* ── Portfolio reveal ── */
    gsap.utils.toArray('.port-card').forEach((card, i) => {
        gsap.fromTo(card,
            { opacity: 0, y: 60 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: card, start: 'top 85%' },
                delay: i * 0.15
            }
        );
    });

    gsap.utils.toArray('.section-header').forEach(h => {
        gsap.fromTo(h,
            { opacity: 0, y: 40 },
            {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: h, start: 'top 85%' }
            }
        );
    });

    gsap.fromTo('.contact-form',
        { opacity: 0, y: 50 },
        {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: '.contact-form', start: 'top 85%' }
        }
    );

    /* ── Hero entrance ── */
    const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTL
        .fromTo('.avatar-ring', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.6)' })
        .fromTo('.hero-name', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
        .fromTo('.hero-tags .tag', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.4')
        .fromTo('.scroll-cta', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');

    /* ── Card 3D tilt ── */
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            gsap.to(card, { rotateY: x * 10, rotateX: -y * 10, transformPerspective: 600, duration: 0.4, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power3.out' });
        });
    });

    /* ── Navbar scroll effect ── */
    ScrollTrigger.create({
        start: 100,
        onEnter: () => document.getElementById('navbar').classList.add('scrolled'),
        onLeaveBack: () => document.getElementById('navbar').classList.remove('scrolled'),
    });
});

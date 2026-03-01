/* ════════════════════════════════════════════════════════════
   CODINGSBUMS.COM – App Logic
   - Theme toggle
   - Language switcher (DE / PT / EN)
   - GSAP ScrollTrigger: Palm tree + Longboard
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
        scroll_cta: '',
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
        scroll_cta: '',
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
        scroll_cta: '',
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
    const translations = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] !== undefined) {
            el.innerHTML = translations[key];
        }
    });
    // Update html lang attr
    document.documentElement.lang = lang;
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    // Update placeholders
    const placeholders = {
        formName: { de: 'Martin Mustermann', pt: 'João Silva', en: 'John Doe' },
        formEmail: { de: 'hallo@example.com', pt: 'oi@exemplo.com', en: 'hello@example.com' },
        formSubject: { de: 'Projekt Anfrage…', pt: 'Pedido de projeto…', en: 'Project inquiry…' },
        formMessage: { de: 'Erzähl mir von deinem Projekt…', pt: 'Fale-me sobre o seu projeto…', en: 'Tell me about your project…' },
    };
    Object.keys(placeholders).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.placeholder = placeholders[id][lang] || '';
    });
}

/* ────────────────────────────────
   THEME TOGGLE
──────────────────────────────── */
function initTheme() {
    const saved = localStorage.getItem('cb-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
}

document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cb-theme', next);
});

/* ────────────────────────────────
   LANG SWITCHER
──────────────────────────────── */
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyTranslations(btn.getAttribute('data-lang'));
    });
});

/* ────────────────────────────────
   YEAR
──────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ────────────────────────────────
   CONTACT FORM
──────────────────────────────── */
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('btnSend');
    const success = document.getElementById('formSuccess');
    btn.style.opacity = '0.6';
    btn.disabled = true;
    // Simulate send (replace with real endpoint)
    setTimeout(() => {
        btn.style.opacity = '1';
        btn.disabled = false;
        success.style.display = 'block';
        success.textContent = i18n[currentLang].form_success;
        this.reset();
        setTimeout(() => { success.style.display = 'none'; }, 5000);
    }, 1200);
});

/* ────────────────────────────────
   GSAP ANIMATIONS
──────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    applyTranslations('de');

    gsap.registerPlugin(ScrollTrigger);

    /* ── Master timeline for the scene section ── */
    const sceneTL = gsap.timeline({
        scrollTrigger: {
            trigger: '.scene-section',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
            pin: '.scene-sticky',
        }
    });

    // ── Phase 0: Scene label fades in ──
    sceneTL.fromTo('.scene-label', { opacity: 0 }, { opacity: 1, duration: 0.3 });

    // ── Phase 1: Sand rises up from bottom, water slides in from right ──
    sceneTL.to('#sand', {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power2.out',
    }, 0.2);

    sceneTL.to('#water', {
        opacity: 1,
        x: 0,
        duration: 1.6,
        ease: 'power3.out',
    }, 0.5);

    // ── Phase 2: Palm trunk grows from stump ──
    gsap.set('#palmTrunk', { clipPath: 'inset(100% 0 0 0)' });
    sceneTL.to('#palmTrunk', {
        clipPath: 'inset(0% 0 0 0)',
        duration: 2.2,
        ease: 'power2.out',
    }, 1.8);

    // Slight sway as it grows
    sceneTL.to('#palmWrapper', {
        rotation: -3,
        ease: 'power1.inOut',
        duration: 1,
        yoyo: true,
        repeat: 2,
    }, 2.0);

    // ── Phase 3: Crown / leaves / coconuts appear ──
    sceneTL.to('#palmCrown', {
        opacity: 1,
        duration: 1.0,
        ease: 'power2.out',
    }, 3.5);

    sceneTL.fromTo('#palmCrown', {
        scale: 0,
        transformOrigin: 'bottom center',
    }, {
        scale: 1,
        duration: 1.4,
        ease: 'elastic.out(1, 0.6)',
    }, 3.5);

    // Individual leaves fan out
    document.querySelectorAll('.palm-leaf').forEach((leaf, i) => {
        gsap.set(leaf, { scaleX: 0, transformOrigin: 'left center' });
        sceneTL.to(leaf, {
            scaleX: 1,
            duration: 0.55,
            ease: 'back.out(1.5)',
        }, 3.8 + i * 0.12);
    });

    // Coconuts pop in
    sceneTL.to('#palmCoconuts', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(2)',
    }, 4.1);

    // Start leaf sway loop
    sceneTL.call(() => {
        document.getElementById('palmCrown').style.animation = 'leafSway 3s ease-in-out infinite';
    }, null, 4.8);

    // Scene label fades out once tree is done
    sceneTL.to('.scene-label', { opacity: 0, duration: 0.5 }, 4.5);

    // ── Phase 4: Longboard flies in from left, leans on tree ──
    sceneTL.to('#longboardWrapper', {
        opacity: 1,
        left: '18%',
        duration: 1.8,
        ease: 'power3.out',
    }, 5.0);

    // Arrives nearly flat, then tilts up to lean against trunk
    sceneTL.fromTo('#longboard', {
        rotation: -5,
    }, {
        rotation: 55,
        duration: 1.5,
        ease: 'power2.inOut',
    }, 5.6);

    // Settle into leaning position
    sceneTL.to('#longboardWrapper', {
        bottom: '28%',
        left: '22%',
        duration: 1.5,
        ease: 'power2.out',
    }, 5.8);

    // ── Gentle Leaf Sway CSS Animation ──
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
    @keyframes leafSway {
      0%, 100% { transform: translateX(-50%) rotate(-2deg); }
      50% { transform: translateX(-50%) rotate(2deg); }
    }
    @keyframes waterWave {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;
    document.head.appendChild(styleSheet);

    // ── Water wave animation ──
    gsap.to('.wave-svg', {
        x: '-50%',
        duration: 3,
        repeat: -1,
        ease: 'none',
    });

    /* ── Portfolio reveal ── */
    gsap.utils.toArray('.port-card').forEach((card, i) => {
        gsap.fromTo(card, {
            opacity: 0,
            y: 60,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            },
            delay: i * 0.15,
        });
    });

    /* ── Section header reveals ── */
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.fromTo(header, {
            opacity: 0,
            y: 40,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
            },
        });
    });

    /* ── Contact form reveal ── */
    gsap.fromTo('.contact-form', {
        opacity: 0,
        y: 50,
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 85%',
        },
    });

    /* ── Hero elements stagger on load ── */
    const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTL
        .fromTo('.avatar-ring', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.6)' })
        .fromTo('.hero-name', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
        .fromTo('.hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
        .fromTo('.hero-tags .tag', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.4')
        .fromTo('.scroll-cta', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');

    /* ── Card tilt (mouse parallax) ── */
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            gsap.to(card, {
                rotateY: x * 10,
                rotateX: -y * 10,
                transformPerspective: 600,
                duration: 0.4,
                ease: 'power2.out',
            });
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

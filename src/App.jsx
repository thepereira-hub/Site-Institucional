import { useState } from "react";
import siteConfig from "./siteConfig.js";

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " footer-brand" : ""}`} href="#inicio">
      {siteConfig.logo ? (
        <img className="brand-image" src={siteConfig.logo} alt={siteConfig.brand} />
      ) : (
        <>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <path
                d="M20 4 35 12.5v15L20 36 5 27.5v-15L20 4Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M13 23.5c4-1 6.5-4.8 7-11.5 4.6 4.7 6.4 9.1 5.3 13.1-1 3.7-5.5 5.7-9.3 3.7-2.4-1.3-3.5-3-3-5.3Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="brand-copy">
            <strong>{siteConfig.brand}</strong>
            <span>TECNOLOGIA NO CAMPO</span>
          </span>
        </>
      )}
    </a>
  );
}

function DroneIllustration() {
  return (
    <div className="hero-visual" aria-label="Ilustração de drone pulverizando uma lavoura">
      <div className="visual-topline">
        <span>AGRICULTURA DE PRECISÃO</span>
        <span className="live-dot" />
      </div>
      <div className="field-art">
        <svg className="field-lines" viewBox="0 0 640 550" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M-30 388C130 285 292 265 673 316M-26 422C142 317 324 296 680 348M-25 456C151 351 351 330 689 380M-24 490C165 386 371 363 698 411M-16 524C174 421 394 397 705 443M-10 558C196 454 414 431 713 476" />
          <path d="M-23 348C130 248 278 225 663 278M-17 314C125 211 268 190 652 243M-13 280C116 176 256 155 642 209M-8 246C108 143 244 120 631 174" />
        </svg>
        <div className="sun-glow" />
        <div className="drone-wrap">
          <svg className="drone" viewBox="0 0 330 220" fill="none" aria-hidden="true">
            <path d="m97 92-56-26m192 26 56-26M98 105 44 128m188-23 54 23M132 91l-15-30m96 30 15-30" stroke="#24382B" strokeWidth="8" strokeLinecap="round" />
            <path d="M95 61H51m4 0 14-8m-14 8 14 8m166-8h44m-4 0-14-8m14 8-14 8M39 128h32m-3 0-12-8m12 8-12 8m207-8h32m-3 0-12-8m12 8-12 8" stroke="#24382B" strokeWidth="5" strokeLinecap="round" />
            <path d="M116 91c0-9 8-17 17-17h64c10 0 17 8 17 17v33c0 9-7 16-17 16h-64c-9 0-17-7-17-16V91Z" fill="#F4F5EE" stroke="#24382B" strokeWidth="6" />
            <path d="M137 140v22m56-22v22" stroke="#24382B" strokeWidth="6" strokeLinecap="round" />
            <path d="M129 163h17m39 0h17" stroke="#24382B" strokeWidth="5" strokeLinecap="round" />
            <path d="M147 141v17m18-17v17m18-17v17" stroke="#B9D486" strokeWidth="3" strokeLinecap="round" />
            <circle cx="165" cy="104" r="8" fill="#D8F48C" />
          </svg>
          <span className="spray spray-one" />
          <span className="spray spray-two" />
          <span className="spray spray-three" />
        </div>
        <div className="visual-caption">
          <span className="caption-symbol">✳</span>
          <span>
            <strong>Precisão em cada aplicação</strong>
            <small>Tecnologia a favor da sua produtividade</small>
          </span>
        </div>
        <span className="visual-coordinate">11°08&apos; S&nbsp; 52°22&apos; W</span>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNote, setFormNote] = useState("Vamos abrir uma conversa com a nossa equipe.");
  const [formError, setFormError] = useState(false);

  function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    if (!/^\d{10,15}$/.test(siteConfig.whatsapp)) {
      setFormNote(
        "O WhatsApp da empresa ainda não foi configurado. Adicione o número em src/siteConfig.js.",
      );
      setFormError(true);
      return;
    }

    const formData = new FormData(form);
    const message = `Olá! Meu nome é ${formData.get("name")}. ${formData.get("message")}`;
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div id="site">
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} id="main-nav" aria-label="Navegação principal">
            <a href="#solucoes" onClick={closeMenu}>Soluções</a>
            <a href="#vantagens" onClick={closeMenu}>Vantagens</a>
            <a href="#sobre" onClick={closeMenu}>Quem somos</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a className="button button-small nav-cta" href="#contato" onClick={closeMenu}>
              Solicitar orçamento <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                {siteConfig.location}
              </span>
              <h1>
                {siteConfig.heroTitle} <em>{siteConfig.heroEmphasis}</em>
              </h1>
              <p className="hero-description">{siteConfig.heroDescription}</p>
              <div className="hero-actions">
                <a className="button" href="#contato">
                  Converse com a nossa equipe <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#solucoes">
                  Conheça as soluções <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-note">
                <span className="note-icon" aria-hidden="true">⌖</span>
                <span>Atendimento em <strong>{siteConfig.serviceRegion}</strong></span>
              </div>
            </div>
            <DroneIllustration />
          </div>
          <div className="hero-bottom container">
            <span>UMA NOVA PERSPECTIVA PARA O CAMPO</span>
            <span className="scroll-label">ROLE PARA DESCOBRIR <span aria-hidden="true">↓</span></span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Diferenciais">
          <div className="container trust-grid">
            <p>Seu campo merece<br /><strong>uma visão mais ampla.</strong></p>
            <div className="trust-item"><span className="trust-icon">◎</span><span><strong>Aplicação precisa</strong><small>Mais controle em cada operação</small></span></div>
            <div className="trust-item"><span className="trust-icon">↗</span><span><strong>Mais agilidade</strong><small>Eficiência para o ritmo da safra</small></span></div>
            <div className="trust-item"><span className="trust-icon">⌁</span><span><strong>Cuidado com a lavoura</strong><small>Solução pensada para o seu campo</small></span></div>
          </div>
        </section>

        <section className="section solutions-section" id="solucoes">
          <div className="container">
            <div className="section-heading">
              <div><span className="eyebrow">NOSSAS SOLUÇÕES</span><h2>O cuidado certo,<br /><em>do alto e de perto.</em></h2></div>
              <p>{siteConfig.solutionsIntro}</p>
            </div>
            <div className="service-grid">
              {siteConfig.services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span className="service-icon" aria-hidden="true">{service.icon}</span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-tag">{service.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section" id="vantagens">
          <div className="container benefits-grid">
            <div className="benefits-visual">
              <div className="benefits-art">
                <div className="benefits-label"><span className="live-dot" /> NOVO OLHAR PARA O CAMPO</div>
                <div className="crop-row row-a" /><div className="crop-row row-b" /><div className="crop-row row-c" /><div className="crop-row row-d" />
                <div className="benefits-stamp"><span>PT</span><small>TECNOLOGIA<br />EM MOVIMENTO</small></div>
                <div className="benefit-callout"><span>01</span><strong>O campo em<br />boas mãos.</strong></div>
              </div>
            </div>
            <div className="benefits-copy">
              <span className="eyebrow">POR QUE ESCOLHER A {siteConfig.brand.toUpperCase()}</span>
              <h2>Mais tecnologia.<br /><em>Mais possibilidades.</em></h2>
              <p>{siteConfig.benefitsIntro}</p>
              <ul className="benefit-list">
                {siteConfig.benefits.map((benefit) => (
                  <li key={benefit.title}>
                    <span className="benefit-check" aria-hidden="true">✓</span>
                    <span><strong>{benefit.title}</strong><small>{benefit.description}</small></span>
                  </li>
                ))}
              </ul>
              <a className="text-link dark-link" href="#contato">
                Vamos conversar sobre a sua área <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="container about-grid">
            <div className="about-heading">
              <span className="eyebrow">QUEM SOMOS</span>
              <h2>Raízes no campo.<br /><em>Olhos no futuro.</em></h2>
            </div>
            <div className="about-copy">
              <p>{siteConfig.about}</p>
              <div className="about-location">
                <span className="location-pin">⌖</span>
                <span><strong>{siteConfig.location}</strong><small>Presença local, parceria de verdade.</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">FALE COM A GENTE</span>
              <h2>A sua próxima safra<br />começa com <em>uma conversa.</em></h2>
              <p>Conte um pouco sobre a sua área e vamos conversar sobre a solução ideal para a sua necessidade.</p>
              <div className="contact-details">
                <span className="contact-icon">⌖</span>
                <span><small>ONDE ESTAMOS</small><strong>{siteConfig.location}</strong></span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label htmlFor="name">Como podemos chamar você?</label>
              <input id="name" name="name" type="text" placeholder="Seu nome" autoComplete="name" required />
              <label htmlFor="message">O que você precisa para a sua lavoura?</label>
              <textarea id="message" name="message" rows="3" placeholder="Conte brevemente sobre sua necessidade" required />
              <button className="button form-submit" type="submit">
                Iniciar conversa no WhatsApp <span aria-hidden="true">↗</span>
              </button>
              <p className={`form-note${formError ? " form-note-error" : ""}`} aria-live="polite">{formNote}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <Brand footer />
          <p>Tecnologia que cuida da lavoura.<br />Parceria que cresce com você.</p>
          <a className="footer-top" href="#inicio">VOLTAR AO TOPO ↑</a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.brand}. Todos os direitos reservados.</span>
          <span>Feito com raízes no campo. <span className="footer-leaf">✳</span></span>
        </div>
      </footer>
    </div>
  );
}

export default App;

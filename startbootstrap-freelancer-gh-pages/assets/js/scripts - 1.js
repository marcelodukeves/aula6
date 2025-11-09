<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Marcelo Dukeveis — Portfólio</title>
  <meta name="description" content="Portfólio de Marcelo Dukeveis — design, front-end, back-end (Java, Spring Boot) e arte digital." />
  <link rel="icon" href="assets/favicon.ico" type="image/x-icon">

  <!-- Fonts & icons -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <!-- Main stylesheet -->
  <link rel="stylesheet" href="css/styles.css">
</head>
<body id="top">

  <!-- NAVBAR -->
  <header class="site-header" id="mainNav">
    <div class="container nav-inner">
      <a class="brand" href="#top">
        <div class="logo">MD</div>
        <div class="brand-text">
          <div class="name">Marcelo Dukeveis</div>
          <div class="role">Artista Visual • Desenvolvedor Full-Stack</div>
        </div>
      </a>
      <nav class="nav-links" id="navbarResponsive">
        <a href="#portfolio" class="nav-link">Portfólio</a>
        <a href="#about" class="nav-link">Sobre</a>
        <a href="#skills" class="nav-link">Habilidades</a>
        <a href="#contact" class="nav-link btn-ghost">Contato</a>
      </nav>
      <button class="nav-toggle" aria-label="Abrir menu" id="navToggle"><i class="fas fa-bars"></i></button>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-left">
        <h1>Olá, eu sou <span class="accent">Marcelo Dukeveis</span></h1>
        <p class="lead">Designer & Desenvolvedor — HTML, CSS, JavaScript, Java (Spring Boot), Thymeleaf, MySQL. Crio interfaces modernas e sistemas full-stack.</p>

        <div class="cta-group">
          <a href="#projects" class="btn btn-primary ripple">Ver projetos</a>
          <a href="#contact" class="btn btn-outline ripple">Entrar em contato</a>
        </div>

        <div class="pills">
          <span class="pill">HTML</span>
          <span class="pill">CSS</span>
          <span class="pill">JavaScript</span>
          <span class="pill">Java</span>
          <span class="pill">Spring Boot</span>
          <span class="pill">MySQL</span>
        </div>
      </div>

      <aside class="hero-card">
        <img src="assets/img/marcelo-perfil.png" alt="Foto Marcelo" class="profile-photo">
        <div class="hero-meta">
          <div>
            <div class="meta-name">Marcelo Dukeveis</div>
            <div class="meta-sub">Xanxerê, SC — Freelancer</div>
          </div>
          <div class="social-inline">
            <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </aside>
    </div>
  </section>

  <!-- PORTFOLIO / PROJECTS -->
  <section id="portfolio" class="section">
    <div class="container">
      <h2 class="section-title">Projetos selecionados</h2>
      <p class="section-sub">Soluções completas: front-end dinâmico, back-end Java/Spring e integrações com MySQL.</p>

      <div class="projects-grid">
        <!-- Project 1 -->
        <article class="project-card reveal">
          <img src="assets/img/projeto1.jpg" alt="AGENDABARBA" class="project-thumb">
          <div class="project-body">
            <h3>AGENDABARBA</h3>
            <p>Sistema de agendamento para barbearias — Java, Spring Boot, Thymeleaf, MySQL. DAO/JDBC e telas responsivas.</p>
            <div class="project-meta">
              <span class="tag">Java</span>
              <a class="link" href="#">Ver código <i class="fas fa-external-link-alt"></i></a>
            </div>
          </div>
        </article>

        <!-- Project 2 -->
        <article class="project-card reveal">
          <img src="assets/img/projeto2.jpg" alt="Agenda Simples" class="project-thumb">
          <div class="project-body">
            <h3>Agenda Simples</h3>
            <p>CRUD com JavaFX e MySQL — arquitetura clara de DAOs e serviços, ideal para ensino e deploy local.</p>
            <div class="project-meta">
              <span class="tag">JavaFX</span>
              <a class="link" href="#">Demo</a>
            </div>
          </div>
        </article>

        <!-- Project 3 -->
        <article class="project-card reveal">
          <img src="assets/img/projeto3.jpg" alt="Portfolio Interativo" class="project-thumb">
          <div class="project-body">
            <h3>Portfólio Interativo</h3>
            <p>Template moderno com animações estratégicas e micro-interações — HTML, CSS e JS puro.</p>
            <div class="project-meta">
              <span class="tag">Front-end</span>
              <a class="link" href="#">Demo</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="section bg-soft reveal">
    <div class="container two-col">
      <div>
        <h2>Sobre</h2>
        <p>Sou um profissional que cruza arte e tecnologia — trabalho com design gráfico, interfaces web e desenvolvimento backend em Java. Meus projetos priorizam usabilidade, performance e um visual contemporâneo.</p>
        <ul class="about-list">
          <li>Formação: Ciência da Computação (em andamento)</li>
          <li>Bootcamps: Java & Spring Boot, Front-end moderno</li>
          <li>Experiência: aplicações CRUD, APIs REST, deploy simples</li>
        </ul>
      </div>
      <div class="gallery-mini">
        <img src="assets/img/art1.jpg" alt="Arte 1">
        <img src="assets/img/art2.jpg" alt="Arte 2">
        <img src="assets/img/art3.jpg" alt="Arte 3">
      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="section reveal">
    <div class="container">
      <h2 class="section-title">Habilidades</h2>
      <div class="skills-grid">
        <div class="skill">
          <div class="skill-head"><strong>HTML / CSS</strong><span>95%</span></div>
          <div class="bar"><i style="width:95%"></i></div>
        </div>
        <div class="skill">
          <div class="skill-head"><strong>JavaScript</strong><span>88%</span></div>
          <div class="bar"><i style="width:88%"></i></div>
        </div>
        <div class="skill">
          <div class="skill-head"><strong>Java / Spring Boot</strong><span>86%</span></div>
          <div class="bar"><i style="width:86%"></i></div>
        </div>
        <div class="skill">
          <div class="skill-head"><strong>Thymeleaf / Server-side</strong><span>80%</span></div>
          <div class="bar"><i style="width:80%"></i></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="section bg-soft reveal">
    <div class="container contact-grid">
      <div>
        <h2>Contato</h2>
        <p>Tem um projeto, uma ideia ou quer comprar uma arte? Vamos conversar.</p>
        <p><strong>Email:</strong> <a href="mailto:marcelodukeveis@gmail.com">marcelodukeveis@gmail.com</a></p>
        <div class="social-block">
          <a href="#" class="social"><i class="fab fa-github"></i> GitHub</a>
          <a href="#" class="social"><i class="fab fa-linkedin"></i> LinkedIn</a>
          <a href="#" class="social"><i class="fab fa-instagram"></i> Instagram</a>
        </div>
      </div>

      <form class="contact-form" id="contactForm" onsubmit="event.preventDefault(); alert('Obrigado — mensagem de teste enviada!')">
        <label class="field">
          <input type="text" placeholder="Seu nome" required>
        </label>
        <label class="field">
          <input type="email" placeholder="Seu e-mail" required>
        </label>
        <label class="field">
          <textarea placeholder="Mensagem" required></textarea>
        </label>
        <div class="form-actions">
          <button class="btn btn-primary ripple" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <small>© <span id="year"></span> Marcelo Dukeveis — Todos os direitos reservados</small>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/scripts.js"></script>

</body>
</html>

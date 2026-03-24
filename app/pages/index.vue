<script setup lang="ts">
const { data: projects } = await useAsyncData('home-projects', () => queryCollection('projects').limit(3).all())
const { data: caseStudies } = await useAsyncData('home-case-studies', () => queryCollection('caseStudies').limit(2).all())
const { data: writing } = await useAsyncData('home-writing', () => queryCollection('writing').limit(3).all())
</script>

<template>
  <div class="home-page fade-in">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-bg-grid"></div>
      <div class="hero-glow"></div>
      
      <div class="hero-container">
        <!-- Left: Text content -->
        <div class="hero-content">
          <div class="hero-header">
            <h1 class="hero-title">
              <span class="name">Marcos Lebron</span>
              <span class="role">Senior Frontend / Full Stack Engineer</span>
            </h1>
            <p class="hero-subheadline">
              I build scalable web platforms, developer-facing systems, and high-performance product experiences with React, TypeScript, Node.js, and AWS.
            </p>
            <p class="hero-support-text">
              Focused on architecture, performance, maintainability, and AI-assisted engineering workflows.
            </p>
          </div>
          
          <div class="hero-actions">
            <NuxtLink to="/projects" class="btn-primary">View Projects</NuxtLink>
            <NuxtLink to="/case-studies" class="btn-secondary">Read Case Studies</NuxtLink>
          </div>
          
          <div class="hero-links">
            <a href="https://github.com" target="_blank">GitHub</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="mailto:contact@example.com">Email</a>
          </div>
        </div>
        
        <!-- Right: Profile Card -->
        <div class="hero-card-wrapper">
          <div class="profile-card">
            <div class="card-badge">Available for senior full-stack / frontend roles</div>
            
            <div class="card-section">
              <h3 class="card-section-title">Core Stack</h3>
              <div class="badge-list">
                <span class="tech-badge">React</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">Node.js</span>
                <span class="tech-badge">AWS</span>
                <span class="tech-badge">PostgreSQL</span>
              </div>
            </div>
            
            <div class="card-section">
              <h3 class="card-section-title">Focus Areas</h3>
              <ul class="focus-list">
                <li>Scalable frontend architecture</li>
                <li>Multi-tenant SaaS</li>
                <li>Performance optimization</li>
                <li>AI-assisted development</li>
              </ul>
            </div>
            
            <div class="card-footer">
              <span class="footer-dot"></span>
              Built for production, not demos.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED WORK -->
    <section class="featured-work">
      <div class="section-header">
        <h2 class="section-title">Featured Work</h2>
        <p class="section-subtext">Selected projects and case-study style builds that reflect how I think about architecture, product delivery, and scalable systems.</p>
      </div>
      
      <div class="projects-grid">
        <article class="project-card" v-for="project in projects" :key="project.path">
          <div class="card-label">Project</div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="tech-tags" v-if="project.stack">
            <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
          </div>
          <div class="project-footer">
            <NuxtLink :to="project.path" class="view-project-link">View Project <span class="arrow">→</span></NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <div class="tech-divider"></div>

    <!-- ARCHITECTURE / VALUE STRIP -->
    <section class="value-strip">
      <div class="value-container">
        <h2 class="strip-title">What I care about</h2>
        <div class="value-grid">
          <div class="value-item">
            <h4>Scalable systems</h4>
            <p>Designing for growth, maintainability, and clean boundaries.</p>
          </div>
          <div class="value-item">
            <h4>Performance</h4>
            <p>Fast interfaces, efficient rendering, and pragmatic optimization.</p>
          </div>
          <div class="value-item">
            <h4>Ownership</h4>
            <p>Taking features from idea to production with quality and clarity.</p>
          </div>
          <div class="value-item">
            <h4>AI-assisted execution</h4>
            <p>Using AI to accelerate delivery without lowering engineering standards.</p>
          </div>
        </div>
      </div>
    </section>

    <div class="tech-divider"></div>

    <!-- CASE STUDIES PREVIEW -->
    <section class="case-studies">
      <div class="section-header">
        <h2 class="section-title">Engineering Case Studies</h2>
        <p class="section-subtext">How I approach real-world architecture, technical tradeoffs, and production thinking.</p>
      </div>
      
      <div class="case-studies-grid">
        <article class="case-card" v-for="study in caseStudies" :key="study.path">
          <div class="case-content">
            <h3 class="case-title">{{ study.title }}</h3>
            <p class="case-desc">{{ study.description }}</p>
            <ul class="case-bullets" v-if="study.bullets">
              <li v-for="bullet in study.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
          </div>
          <NuxtLink :to="study.path" class="read-article">Read article <span class="arrow">→</span></NuxtLink>
        </article>
      </div>
    </section>

    <div class="tech-divider"></div>

    <!-- ABOUT SNAPSHOT -->
    <section class="about-snapshot">
      <div class="about-grid">
        <div class="about-text">
          <h2 class="section-title">About</h2>
          <p>I’m a software engineer with a strong focus on modern frontend systems, full-stack product development, and platform architecture. Much of my recent work has been in private repositories, building production applications involving React, TypeScript, Node.js, AWS, shared UI systems, and scalable delivery practices.</p>
        </div>
        <div class="about-stats">
          <ul class="stats-list">
            <li><strong>7+ years</strong> building web applications</li>
            <li><strong>React / TypeScript / Node.js</strong></li>
            <li><strong>AWS / scalable platform work</strong></li>
            <li><strong>Architecture + performance mindset</strong></li>
          </ul>
        </div>
      </div>
    </section>

    <div class="tech-divider"></div>

    <!-- WRITING PREVIEW -->
    <section class="writing-preview">
      <div class="section-header">
        <h2 class="section-title">Writing</h2>
        <p class="section-subtext">Notes on frontend architecture, AI-assisted development, and building production-ready systems.</p>
      </div>
      
      <div class="writing-list">
        <NuxtLink v-for="post in writing" :key="post.path" :to="post.path" class="writing-card">
          <h3>{{ post.title }}</h3>
          <span class="writing-arrow">→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-left">
          <div class="footer-name">Marcos Lebron</div>
          <div class="footer-role">Senior Frontend / Full Stack Engineer</div>
          <div class="footer-copy">© 2026 Marcos Lebron</div>
        </div>
        <div class="footer-right">
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="mailto:contact@example.com">Email</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* GENERAL SPACING & ANIMATION */
.fade-in {
  animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(10px);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-header {
  margin-bottom: 28px;
}

.section-title {
  font-family: 'Libertinus Serif Display', Georgia, serif;
  font-size: 2.2rem;
  font-weight: normal;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.section-subtext {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 600px;
}

/* HERO SECTION */
.hero {
  position: relative;
  padding-top: 100px;
  padding-bottom: 60px;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.hero-bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(var(--border-line) 1px, transparent 1px),
                    linear-gradient(90deg, var(--border-line) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.08;
  z-index: -2;
  pointer-events: none;
}

.hero-glow {
  position: absolute;
  top: 10%;
  right: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--glow-soft) 0%, transparent 70%);
  filter: blur(80px);
  z-index: -1;
  pointer-events: none;
}

.hero-container {
  display: grid;
  grid-template-columns: 65% 35%;
  gap: 4rem;
  width: 100%;
  align-items: center;
}

.hero-title {
  display: flex;
  flex-direction: column;
  max-width: 720px;
  margin-bottom: 20px;
}

.hero-title .name {
  font-family: 'Libertinus Serif Display', Georgia, serif;
  font-size: 3.5rem;
  line-height: 1.02;
  color: var(--text-primary);
}

.hero-title .role {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: var(--accent-primary);
  margin-top: 0.25rem;
}

.hero-subheadline {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 700px;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.hero-support-text {
  font-size: 0.95rem;
  color: #718096;
  max-width: 600px;
  margin-bottom: 28px;
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 28px;
  margin-bottom: 2rem;
}

.btn-primary {
  background: var(--highlight-gradient-angled);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid transparent;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--glow-soft);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 400;
  border: 1px solid var(--border-line);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.03);
}

.hero-links {
  display: flex;
  gap: 1.5rem;
}

.hero-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.85rem;
  position: relative;
  transition: color 0.2s ease;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.hero-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 1px;
  background: var(--accent-primary);
  transition: width 0.3s ease;
}

.hero-links a:hover {
  color: var(--accent-primary);
}

.hero-links a:hover::after {
  width: 100%;
}

/* CARDS COMMON */
.tech-badge {
  background: var(--tag-bg);
  color: var(--text-primary);
  border: 1px solid var(--border-line);
  padding: 0.2rem 0.6rem;
  font-size: 0.75rem;
  border-radius: 4px;
  font-family: monospace;
}

/* PROFILE INTERVIEW CARD */
.hero-card-wrapper {
  perspective: 1000px;
}

.profile-card {
  background: linear-gradient(180deg, #121A2B 0%, #0E1524 100%);
  border: 1px solid var(--border-line);
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 10px 30px var(--glow-soft);
  transition: transform 0.3s ease;
}

.card-badge {
  display: inline-block;
  background: var(--tag-bg);
  color: var(--text-primary);
  border: 1px solid var(--border-line);
  padding: 0.35rem 0.8rem;
  font-size: 0.75rem;
  border-radius: 99px;
  font-weight: 400;
  margin-bottom: 2rem;
}

.card-section {
  margin-bottom: 1.5rem;
}

.card-section-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  font-family: 'Montserrat', sans-serif;
}

.badge-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.focus-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.focus-list li {
  position: relative;
  padding-left: 1.25rem;
}

.focus-list li::before {
  content: '→';
  color: var(--accent-primary);
  position: absolute;
  left: 0;
  top: 0;
}

.card-footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-line);
  font-size: 0.8rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-dot {
  width: 8px;
  height: 8px;
  background: #10B981; 
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
}

/* FEATURED WORK */
.featured-work {
  padding: 2.5rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card {
  background: #121A2B;
  border: 1px solid var(--border-line);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px var(--glow-soft);
}

.card-label {
  font-family: monospace;
  font-size: 0.75rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.project-title {
  font-family: 'Libertinus Serif Display', Georgia, serif;
  font-size: 1.35rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.tech-tags span {
  background: transparent;
  color: var(--text-secondary);
  padding: 0;
  font-size: 0.8rem;
}

.tech-tags span:not(:last-child)::after {
  content: '·';
  margin-left: 0.4rem;
  color: var(--border-line);
}

.project-footer {
  border-top: 1px solid var(--border-line);
  padding-top: 1rem;
}

.view-project-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.view-project-link .arrow {
  transition: transform 0.2s ease;
  color: var(--text-secondary);
}

.project-card:hover .view-project-link {
  color: var(--accent-primary);
}

.project-card:hover .arrow {
  transform: translateX(4px);
  color: var(--accent-primary);
}

/* VALUE STRIP */
.value-strip {
  margin: 4rem 0;
  padding: 3rem;
  background: var(--bg-secondary);
  border-radius: 20px;
  border: 1px solid var(--border-line);
}

.strip-title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.value-item h4 {
  font-size: 1rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.value-item p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* CASE STUDIES PREVIEW */
.case-studies {
  padding: 2.5rem 0;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.case-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-line);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 180ms ease, box-shadow 180ms ease;
  min-height: 280px;
}

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px var(--glow-soft);
}

/* TECH DIVIDER (Intermittent Cyber Dots) */
.tech-divider {
  width: 100%;
  height: 80px;
  background-image: radial-gradient(var(--accent-primary) 1px, transparent 1px),
                    linear-gradient(90deg, var(--border-line) 1px, transparent 1px);
  background-size: 24px 24px, 48px 48px;
  background-position: center;
  mask-image: linear-gradient(to right, transparent, black 50%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 50%, transparent);
  opacity: 0.15;
  margin: 1.5rem 0;
}

.case-title {
  font-family: 'Libertinus Serif Display', Georgia, serif;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.case-desc {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.case-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.case-bullets li {
  font-size: 0.9rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.case-bullets li::before {
  content: '·';
  color: var(--accent-primary);
  font-size: 1.5rem;
  line-height: 0;
  transform: translateY(-1px);
}

.read-article {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 400;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.2s ease;
}

.read-article:hover {
  gap: 0.75rem;
}

.read-article .arrow {
  font-size: 1.1em;
}

/* ABOUT SNAPSHOT */
.about-snapshot {
  padding: 2.5rem 0;
  border-top: 1px solid var(--border-line);
  margin-top: 1.5rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.stats-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-left: 1px solid var(--border-line);
  padding-left: 2rem;
}

.stats-list li {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.stats-list li strong {
  color: var(--text-primary);
  display: block;
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
  font-weight: 400;
}

/* WRITING PREVIEW */
.writing-preview {
  padding: 2.5rem 0 1rem;
}

.writing-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.writing-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: transparent;
  border: 1px solid var(--border-line);
  border-radius: 12px;
  cursor: pointer;
  transition: all 180ms ease;
  text-decoration: none; 
}

.writing-card h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin: 0;
  font-weight: 400;
  transition: color 0.2s ease;
}

.writing-arrow {
  color: var(--text-secondary);
  transition: transform 0.2s ease, color 0.2s ease;
  font-size: 1.2rem;
}

.writing-card:hover {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(79, 140, 255, 0.3);
}

.writing-card:hover h3 {
  color: var(--accent-primary);
}

.writing-card:hover .writing-arrow {
  transform: translateX(4px);
  color: var(--accent-primary);
}

/* FOOTER */
.site-footer {
  padding: 4rem 0 3rem;
  border-top: 1px solid var(--border-line);
  margin-top: 2rem;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-name {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.footer-role {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.footer-copy {
  font-size: 0.8rem;
  color: #718096;
}

.footer-right {
  display: flex;
  gap: 1.5rem;
}

.footer-right a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-right a:hover {
  color: var(--accent-primary);
  text-decoration: underline;
}

/* RESPONSIVE DESIGN */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 60% 40%;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 60px;
    padding-bottom: 40px;
  }
  
  .hero-container {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .hero-card-wrapper {
    order: 2;
  }
  
  .hero-content {
    order: 1;
  }
  
  .hero-title .name {
    font-size: 2.8rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .value-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about-stats .stats-list {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--border-line);
    padding-top: 2rem;
  }
  
  .footer-container {
    flex-direction: column;
    gap: 2rem;
  }
  
  .writing-card {
    padding: 1.25rem;
  }
}
</style>

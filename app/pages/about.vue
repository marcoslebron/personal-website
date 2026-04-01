<template>
  <div class="page-container fade-in">
    <div class="page-header">
      <h1 class="page-title">About Marcos</h1>
      <p class="page-subtext">Engineer, architect, and problem solver.</p>
    </div>
    
    <div class="about-content">
      <div class="about-main">
        <p>I am a software engineer focused on building scalable web platforms and high-performance product experiences. Over the past 7+ years, I've worked across the full stack with an emphasis on React, TypeScript, Node.js, and AWS.</p>
        <p>My philosophy is simple: write maintainable code, optimize for performance early, and use the best tools (including AI) to accelerate delivery without compromising quality.</p>
        
        <h2>Experience Highlights</h2>
        <ul>
          <li><strong>Architecture & System Design:</strong> Structuring multi-tenant SaaS platforms with clear domain boundaries.</li>
          <li><strong>Frontend Excellence:</strong> Crafting pixel-perfect, highly responsive interfaces.</li>
          <li><strong>Backend Scalability:</strong> Building robust APIs and optimizing database workflows.</li>
        </ul>
      </div>
      
      <div class="about-sidebar">
        <h3>Contact</h3>
        <p>Currently open for new opportunities.</p>
        <a href="mailto:lebron.marcos@gmail.com" class="contact-link">Get in touch →</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 2rem;
}

.page-header {
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--border-line);
  padding-bottom: 2rem;
}

.page-title {
  font-family: 'Libertinus Serif Display', Georgia, serif;
  font-size: 3rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.page-subtext {
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
}

.about-main p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.about-main h2 {
  font-family: 'Libertinus Serif Display', Georgia, serif;
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.about-main ul {
  list-style: none;
  padding: 0;
}

.about-main li {
  margin-bottom: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;
  padding-left: 1.5rem;
  position: relative;
}

.about-main li::before {
  content: '→';
  color: var(--accent-primary);
  position: absolute;
  left: 0;
}

.about-main li strong {
  color: var(--text-primary);
  font-weight: 400;
}

.about-sidebar {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-line);
  height: fit-content;
}

.about-sidebar h3 {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.about-sidebar p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.contact-link {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.2s ease;
}

.contact-link:hover {
  gap: 0.75rem;
}

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

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>

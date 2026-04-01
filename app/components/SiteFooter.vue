<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-name">Marcos Lebron</div>
        <div class="footer-role">Senior Frontend / Full Stack Engineer</div>
        <div class="footer-copy">© 2026 Marcos Lebron</div>
      </div>
      <div class="footer-right">
        <a href="https://linkly.link/2eu1R" target="_blank">GitHub</a>
        <a href="https://linkly.link/2eu1V" target="_blank">LinkedIn</a>
        <a href="mailto:lebron.marcos@gmail.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 4rem 0 3rem;
  border-top: 1px solid var(--border-line);
  margin-top: 2rem;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  box-sizing: border-box;
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

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>

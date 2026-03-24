<template>
  <div class="page-container fade-in">
    <div class="page-header">
      <h1 class="page-title">Case Studies</h1>
      <p class="page-subtext">Deep dives into architecture, technical tradeoffs, and system limits.</p>
    </div>
    
    <div class="case-studies-grid">
      <article v-for="study in caseStudies" :key="study.path" class="case-card">
        <h3 class="case-title">{{ study.title }}</h3>
        <p class="case-desc">{{ study.description }}</p>
        <div class="case-footer">
          <NuxtLink :to="study.path" class="view-case-link">Read Deep Dive <span class="arrow">→</span></NuxtLink>
        </div>
      </article>
      <div v-if="!caseStudies || caseStudies.length === 0" class="empty-state">
        <p>No case studies found. Add markdown files to <code>/content/case-studies/</code>.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: caseStudies } = await useAsyncData('caseStudies', () => queryCollection('caseStudies').all())
</script>

<style scoped>
.page-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 2rem;
}

.page-header {
  margin-bottom: 3rem;
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

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
}

.case-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-line);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  transition: transform 180ms ease, box-shadow 180ms ease;
  min-height: 250px;
}

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px var(--glow-soft);
  border-color: rgba(14, 165, 233, 0.4);
}

.case-title {
  font-family: 'Libertinus Serif Display', Georgia, serif;
  font-size: 1.6rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.case-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.case-footer {
  border-top: 1px solid var(--border-line);
  padding-top: 1.25rem;
}

.view-case-link {
  color: var(--accent-primary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.2s ease;
}

.view-case-link:hover {
  gap: 0.75rem;
}

.empty-state {
  color: var(--text-secondary);
  padding: 2rem;
  border: 1px dashed var(--border-line);
  border-radius: 12px;
  text-align: center;
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
</style>

<template>
  <div class="page-container fade-in">
    <div class="page-header">
      <h1 class="page-title">Projects</h1>
      <p class="page-subtext">Selected works, experiments, and production systems.</p>
    </div>
    
    <div class="projects-grid">
      <article v-for="project in projects" :key="project.path" class="project-card">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-desc">{{ project.description }}</p>
        <div class="project-footer">
          <NuxtLink :to="project.path" class="view-project-link">View Details <span class="arrow">→</span></NuxtLink>
        </div>
      </article>
      <div v-if="!projects || projects.length === 0" class="empty-state">
        <p>No projects found. Add markdown files to <code>/content/projects/</code>.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').all())
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--bg-secondary);
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
  border-color: rgba(14, 165, 233, 0.4);
}

.project-title {
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

.project-footer {
  border-top: 1px solid var(--border-line);
  padding-top: 1rem;
}

.view-project-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.view-project-link .arrow {
  color: var(--accent-primary);
  transition: transform 0.2s ease;
}

.project-card:hover .view-project-link {
  color: var(--accent-primary);
}

.project-card:hover .arrow {
  transform: translateX(4px);
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

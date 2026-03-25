<template>
  <div class="page-container fade-in">
    <div class="page-header">
      <h1 class="page-title">Projects</h1>
      <p class="page-subtext">Selected works, experiments, and production systems.</p>
    </div>
    
    <div class="projects-grid">
      <ProjectCard v-for="project in projects" :key="project.path" :project="project" />
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

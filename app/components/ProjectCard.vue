<template>
  <article class="project-card">
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
</template>

<script setup lang="ts">
defineProps<{
  project: {
    title: string
    description: string
    path: string
    stack?: string[]
  }
}>()
</script>

<style scoped>
.project-card {
  background: var(--card-bg-solid);
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
  border-color: transparent;
  background-image: 
    linear-gradient(var(--card-bg-solid), var(--card-bg-solid)), 
    linear-gradient(90deg, var(--accent-primary), rgba(14, 165, 233, 0.1), var(--accent-primary));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-size: 100% 100%, 200% 100%;
  animation: shimmerBorder 2.5s linear infinite;
}

@keyframes shimmerBorder {
  from { background-position: 0% 0%, 200% 0%; }
  to { background-position: 0% 0%, 0% 0%; }
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
</style>

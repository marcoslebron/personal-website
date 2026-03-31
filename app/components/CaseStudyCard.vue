<template>
  <article class="case-card">
    <div class="case-content">
      <h3 class="case-title">{{ study.title }}</h3>
      <p class="case-desc">{{ study.description }}</p>
      <ul class="case-bullets" v-if="study.bullets">
        <li v-for="bullet in study.bullets" :key="bullet">{{ bullet }}</li>
      </ul>
    </div>
    <NuxtLink :to="study.path" class="read-article">Read article <span class="arrow">→</span></NuxtLink>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  study: {
    title: string
    description: string
    path: string
    bullets?: string[]
  }
}>()
</script>

<style scoped>
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
  border-color: transparent;
  background-image: 
    linear-gradient(var(--bg-secondary), var(--bg-secondary)), 
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
</style>

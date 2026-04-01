<template>
  <NuxtLink :to="post.path" class="writing-card">
    <div class="writing-info">
      <h3>{{ post.title }}</h3>
      <p v-if="post.description" class="writing-desc">{{ post.description }}</p>
    </div>
    <span class="writing-arrow">→</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  post: {
    title: string
    path: string
    description?: string
  }
}>()
</script>

<style scoped>
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
.writing-desc {
  color: var(--text-secondary);
}
.writing-arrow {
  color: var(--text-secondary);
  transition: transform 0.2s ease, color 0.2s ease;
  font-size: 1.2rem;
}

.writing-card:hover {
  transform: translateY(-2px);
  border-color: transparent;
  background-image: 
    linear-gradient(var(--hover-overlay-light), var(--hover-overlay-light)), 
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

.writing-card:hover h3 {
  color: var(--accent-primary);
}

.writing-card:hover .writing-arrow {
  transform: translateX(4px);
  color: var(--accent-primary);
}

@media (max-width: 768px) {
  .writing-card {
    padding: 1.25rem;
  }
}
</style>

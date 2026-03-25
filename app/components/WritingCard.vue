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

@media (max-width: 768px) {
  .writing-card {
    padding: 1.25rem;
  }
}
</style>

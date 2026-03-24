<template>
  <div class="page-container fade-in">
    <div class="page-header">
      <h1 class="page-title">Writing</h1>
      <p class="page-subtext">Notes on software engineering, architecture, and technology.</p>
    </div>
    
    <div class="writing-list">
      <NuxtLink v-for="post in posts" :key="post.path" :to="post.path" class="writing-card">
        <div class="writing-info">
          <h3 class="writing-title">{{ post.title }}</h3>
          <p class="writing-desc">{{ post.description }}</p>
        </div>
        <span class="writing-arrow">→</span>
      </NuxtLink>
      <div v-if="!posts || posts.length === 0" class="empty-state">
        <p>No posts found. Add markdown files to <code>/content/writing/</code>.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('writing', () => queryCollection('writing').all())
</script>

<style scoped>
.page-container {
  max-width: 800px;
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

.writing-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.writing-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-secondary);
  border: 1px solid var(--border-line);
  padding: 1.5rem 2rem;
  border-radius: 16px;
  text-decoration: none;
  transition: all 180ms ease;
}

.writing-card:hover {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(14, 165, 233, 0.4);
  transform: translateY(-2px);
}

.writing-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.writing-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: var(--text-primary);
  margin: 0;
  transition: color 0.2s ease;
}

.writing-card:hover .writing-title {
  color: var(--accent-primary);
}

.writing-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

.writing-arrow {
  font-size: 1.5rem;
  color: var(--text-secondary);
  transition: transform 0.2s ease, color 0.2s ease;
}

.writing-card:hover .writing-arrow {
  color: var(--accent-primary);
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

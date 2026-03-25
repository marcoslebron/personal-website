<template>
  <div class="page-container fade-in">
    <div class="page-header">
      <h1 class="page-title">Writing</h1>
      <p class="page-subtext">Notes on software engineering, architecture, and technology.</p>
    </div>
    
    <div class="writing-list">
      <WritingCard v-for="post in posts" :key="post.path" :post="post" />
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

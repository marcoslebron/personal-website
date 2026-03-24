<template>
  <article class="document-page fade-in">
    <div class="document-header" v-if="page">
      <h1 class="document-title">{{ page.title }}</h1>
      <p class="document-desc">{{ page.description }}</p>
      <NuxtLink to="/writing" class="back-link">← Back to Writing</NuxtLink>
    </div>
    
    <div class="document-content">
      <ContentRenderer v-if="page" :value="page" />
      <div v-else class="not-found">Document not found</div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('writing').path(route.path).first())
</script>

<style scoped>
.document-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 2rem;
}

.document-header {
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--border-line);
  padding-bottom: 2rem;
}

.document-title {
  font-family: 'Libertinus Serif Display', Georgia, serif;
  font-size: 3rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.document-desc {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.back-link {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.document-content {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.document-content :deep(h2) {
  font-family: 'Libertinus Serif Display', Georgia, serif;
  color: var(--text-primary);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: normal;
}

.document-content :deep(h3) {
  font-family: 'Montserrat', sans-serif;
  color: var(--text-primary);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.document-content :deep(a) {
  color: var(--accent-primary);
}

.not-found {
  text-align: center;
  color: var(--text-secondary);
  padding: 4rem;
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

@media (max-width: 768px) {
  .document-title {
    font-size: 2.2rem;
  }
}
</style>

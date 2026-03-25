<template>
  <div class="page-container fade-in">
    <div class="page-header">
      <h1 class="page-title">Case Studies</h1>
      <p class="page-subtext">Deep dives into architecture, technical tradeoffs, and system limits.</p>
    </div>
    
    <div class="case-studies-grid">
      <CaseStudyCard v-for="study in caseStudies" :key="study.path" :study="study" />
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

<template>
  <div class="app-layout">
    <NavBar />
    <NuxtRouteAnnouncer />
    <main class="main-content">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap');

:root {
  --bg-principal: #050505;
  --bg-secondary: #141212;
  --border-line: #121823;
  --text-primary: #F3F7FF;
  --text-secondary: #AAB6CC;
  --accent-primary: #0ea5e9; /* Cyan / Bright Sky Blue */
  --accent-hover: #0284c7;
  --tag-bg: #16233A;
  --glow-soft: rgba(79, 140, 255, 0.18);
  
  /* Shared Gradients from Navbar */
  --highlight-gradient: linear-gradient(90deg, var(--accent-primary), var(--accent-hover));
  --highlight-gradient-angled: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-hover) 100%);
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-principal);
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Libertinus Serif Display', Georgia, serif;
  color: var(--text-primary);
  font-weight: normal;
  margin-top: 0;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}
</style>
<template>
  <nav class="navbar">
    <div class="navbar-container">
      <NuxtLink to="/" class="navbar-brand animated-logo" @click="closeMenu">
        <div class="brand-container">
          <span class="brand-text">Marcos Lebron</span>
          <span class="brand-title">Full Stack Engineer</span>
        </div>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="desktop-menu">
        <NuxtLink to="/projects" class="nav-item">Projects</NuxtLink>
        <NuxtLink to="/writing" class="nav-item">Writing</NuxtLink>
        <NuxtLink to="/about" class="nav-item">About</NuxtLink>
        
        <div class="nav-socials">
          <a href="https://github.com" target="_blank" class="nav-icon" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" class="nav-icon" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>

      <!-- Mobile Burger Button -->
      <button class="burger-btn" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu" aria-label="Toggle menu">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <div class="mobile-menu-content">
        <NuxtLink to="/projects" class="mobile-nav-item" @click="closeMenu">Projects</NuxtLink>
        <NuxtLink to="/writing" class="mobile-nav-item" @click="closeMenu">Writing</NuxtLink>
        <NuxtLink to="/about" class="mobile-nav-item" @click="closeMenu">About</NuxtLink>
        
        <div class="mobile-socials">
          <a href="https://github.com" target="_blank" class="mobile-nav-icon" aria-label="GitHub">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" class="mobile-nav-icon" aria-label="LinkedIn">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden' // Prevent scrolling
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-principal); 
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-line);
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 102; /* ensure elements stay above mobile menu overlay */
}

.navbar-brand {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-container {
  display: flex;
  flex-direction: column;
}

.brand-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: 0.02em;
  transition: text-shadow 0.3s ease, color 0.3s ease;
}

.brand-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--text-secondary);
  letter-spacing: 0.01em;
  margin-top: -1px;
  transition: color 0.3s ease;
}

/* Animated Logo Hover Glow */
.animated-logo {
  transition: transform 0.3s ease;
}

.animated-logo:hover .brand-text {
  text-shadow: 0 0 12px var(--accent-primary);
  color: var(--text-primary);
}

.animated-logo:hover .brand-title {
  color: var(--accent-hover);
}

/* Desktop Menu Layout */
.desktop-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-socials {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-left: 0.5rem;
}

.nav-item {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 400;
  position: relative;
  transition: color 0.2s ease;
}

.nav-item:hover, .nav-item.router-link-active {
  color: var(--text-primary);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--highlight-gradient);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-item:hover::after, .nav-item.router-link-active::after {
  width: 100%;
}

.nav-icon {
  color: var(--text-secondary);
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon:hover {
  color: var(--accent-primary);
  transform: translateY(-2px);
  filter: drop-shadow(0 4px 8px var(--glow-soft));
}

/* Burger Button */
.burger-btn {
  display: none; /* hidden on desktop */
  background: transparent;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 18px;
  width: 24px;
  padding: 0;
  z-index: 105;
}

.burger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  transition: transform 0.3s ease, opacity 0.3s ease;
  border-radius: 2px;
}

/* Burger Animation */
.burger-btn.is-active .burger-line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.burger-btn.is-active .burger-line:nth-child(2) {
  opacity: 0;
}

.burger-btn.is-active .burger-line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  background: var(--bg-principal);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  z-index: 101;
}

.mobile-menu.is-open {
  opacity: 1;
  pointer-events: auto;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu.is-open .mobile-menu-content {
  transform: translateY(0);
}

.mobile-nav-item {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  transition: color 0.3s ease;
  letter-spacing: 0.05em;
}

.mobile-nav-item:hover {
  color: var(--accent-primary);
}

.mobile-socials {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.mobile-nav-icon {
  color: var(--text-secondary);
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav-icon:hover {
  color: var(--accent-primary);
  transform: translateY(-2px);
  filter: drop-shadow(0 4px 8px var(--glow-soft));
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  
  .burger-btn {
    display: flex;
  }
  
  .navbar-container {
    padding: 0;
  }
}
</style>

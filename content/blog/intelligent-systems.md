---
title: "Architecting Intelligent Systems"
date: "2026-03-20"
description: "A dark mode architectural portfolio site clone."
tags: ["Nuxt", "Vue", "Tailwind"]
---

## Problem
The client requested a highly sophisticated, premium portfolio website built on a robust modern stack. It needed to feature a Dark Mode Architectural aesthetic with neon accents reminiscent of elite software engineering agencies.

## Architecture
We utilized **Nuxt Content** for a Git-based headless CMS, rendering markdown files via Vue components. This allows the content to be version-controlled. Tailwind CSS and **daisyUI** provide the utility-first styling and component abstractions.

## Stack
- **Framework**: Nuxt 4
- **CMS**: Nuxt Content
- **Styling**: Tailwind CSS + daisyUI
- **Fonts**: Inter, Playfair Display, JetBrains Mono

## Challenges
Setting up Nuxt seamlessly while ensuring the design remained sleek, un-bloated, and performant. Maintaining the sophisticated typography constraints across dynamic markdown content.

## Solution
Leveraged the `@tailwindcss/typography` plugin combined with a custom daisyUI theme to automatically style the injected markdown content, keeping the Vue templates entirely clean.

## Lessons learned
Using a Git-based CMS is extremely efficient for portfolio sites as it keeps the content alongside the code, reducing the need for external databases or API calls.

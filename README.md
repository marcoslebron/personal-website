# Marcos Lebron - Personal Portfolio & Blog

This is the repository for my personal portfolio, engineering blog, and case studies, built using a modern decoupled frontend stack. The platform serves as a central hub for my technical writing and a showcase for scalable architecture.

## 🚀 Tech Stack

- **Framework:** [Nuxt](https://nuxt.com/) (Vue 3, SSR, API Routes)
- **Content Management:** [Nuxt Content](https://content.nuxt.com/) (Markdown-based, Zod schemas)
- **Styling:** Vanilla CSS / Modern UI Patterns
- **Deployment:** Vercel / AWS (configurable)

## 🏗️ Project Structure

- `/app/pages`: Application routing (Home, Projects, Case Studies, Writing, About)
- `/content`: Markdown-based content split into `projects/`, `case-studies/`, `writing/`, and `blog/`
- `/content.config.ts`: Nuxt Content v3 configurations and custom Zod schemas for structured frontmatter
- `design_guide.md`: Core system architecture and UI aesthetics

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

3. **Open the application:**
   Visit `http://localhost:3000` in your browser.

## 📦 Production Build

To build the project for production:

```bash
npm run build
# Or to preview locally:
npm run preview
```

## 📝 License

Designed and developed by Marcos Lebron. All content and case studies are proprietary. Code structure is available for educational reference.

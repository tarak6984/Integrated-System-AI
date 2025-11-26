# Integrated Systems AI - Website

A modern, responsive website for Integrated Systems AI built with React, Vite, TailwindCSS, and Framer Motion.

![Integrated Systems AI](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.2-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan)

## 🚀 Features

- **Modern React 18+** with latest features and best practices
- **Lightning-fast Vite** for development and optimized production builds
- **TailwindCSS** for beautiful, responsive styling
- **Framer Motion** for smooth, professional animations
- **Lucide React Icons** for clean, consistent iconography
- **Fully Responsive** design that works on all devices
- **SEO Optimized** with proper meta tags and semantic HTML
- **Smooth Scrolling** navigation between sections

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with animated elements
2. **Vision & Mission** - Company's guiding principles
3. **Services** - Comprehensive overview of AI solutions offered
4. **Core Values** - Human-centric approach to AI
5. **Global Vision** - International expansion and objectives
6. **Why Choose Us** - Key differentiators and unique value propositions
7. **Contact** - Professional contact section with email CTA

## 🛠️ Technologies Used

- **React 18.3** - Modern UI library
- **Vite 5.2** - Next-generation frontend tooling
- **React Router 6.22** - Client-side routing
- **TailwindCSS 3.4** - Utility-first CSS framework
- **Framer Motion 11** - Production-ready animation library
- **Lucide React** - Beautiful icon library
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Setup Instructions

1. **Clone or navigate to the project directory**

```bash
cd integrated-systems-ai-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The built files will be in the `dist` directory, ready for deployment.

## 🚀 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy via [Netlify](https://netlify.com)

### GitHub Pages

```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

### Traditional Hosting

Upload the contents of the `dist` folder to any web server.

## 📁 Project Structure

```
integrated-systems-ai-website/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── layout/     # Layout components (Header, Footer, Layout)
│   │   ├── sections/   # Page sections (Hero, Services, etc.)
│   │   └── ui/         # Reusable UI components (Button, Card, etc.)
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # TailwindCSS configuration
└── postcss.config.js   # PostCSS configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { ... },
  accent: { ... },
  dark: { ... }
}
```

### Content

Update content in the respective section components:
- `src/components/sections/Hero.jsx`
- `src/components/sections/Services.jsx`
- etc.

### Animations

Customize animations using Framer Motion in each component or add global animations in `tailwind.config.js`.

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for Integrated Systems AI Ltd.

## 👨‍💻 Developer Notes

### Performance Optimizations

- Lazy loading images and components
- Code splitting with React Router
- Optimized animations with Framer Motion
- Tree-shaking with Vite
- CSS purging with TailwindCSS

### Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus visible states
- Color contrast compliance

## 🤝 Contact

For any questions or support regarding this website:

**Email:** buildwith@integratedsystems.ai

---

**Integrated Systems AI Ltd**  
*Integrating industries with the power of AI*

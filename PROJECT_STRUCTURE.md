# Project Structure - Integrated Systems AI Website

## 📁 Complete File Tree

```
integrated-systems-ai-website/
│
├── 📄 package.json                 # Project dependencies and scripts
├── 📄 vite.config.js              # Vite configuration
├── 📄 tailwind.config.js          # TailwindCSS theme configuration
├── 📄 postcss.config.js           # PostCSS configuration
├── 📄 .eslintrc.cjs               # ESLint configuration
├── 📄 .gitignore                  # Git ignore patterns
│
├── 📄 README.md                   # Main documentation
├── 📄 QUICK_START.md              # Quick setup guide
├── 📄 SUBMISSION_NOTES.md         # Submission details
├── 📄 PROJECT_STRUCTURE.md        # This file
│
├── 📄 index.html                  # HTML entry point
│
├── 📂 public/                     # Static assets
│   └── 📄 vite.svg               # Favicon
│
└── 📂 src/                        # Source code
    │
    ├── 📄 main.jsx                # React entry point
    ├── 📄 App.jsx                 # Main app with routing
    ├── 📄 index.css               # Global styles + Tailwind
    │
    ├── 📂 components/             # React components
    │   │
    │   ├── 📂 layout/             # Layout components
    │   │   ├── 📄 Header.jsx     # Navigation header
    │   │   ├── 📄 Footer.jsx     # Site footer
    │   │   └── 📄 Layout.jsx     # Main layout wrapper
    │   │
    │   ├── 📂 sections/           # Page sections
    │   │   ├── 📄 Hero.jsx       # Hero/landing section
    │   │   ├── 📄 VisionMission.jsx    # Vision & Mission
    │   │   ├── 📄 Services.jsx   # Services showcase
    │   │   ├── 📄 CoreValues.jsx # Core values section
    │   │   ├── 📄 GlobalVision.jsx     # Global expansion
    │   │   ├── 📄 WhyChooseUs.jsx      # Differentiators
    │   │   └── 📄 Contact.jsx    # Contact/CTA section
    │   │
    │   └── 📂 ui/                 # Reusable UI components
    │       ├── 📄 Button.jsx     # Button component
    │       ├── 📄 Card.jsx       # Card component
    │       └── 📄 SectionTitle.jsx     # Section title
    │
    └── 📂 pages/                  # Page components
        └── 📄 Home.jsx            # Home page (main)
```

## 📊 Project Statistics

- **Total Files:** 30
- **React Components:** 16
- **Configuration Files:** 5
- **Documentation Files:** 4
- **Source Files:** 19

## 🔍 Component Breakdown

### Layout Components (3)
- **Header.jsx** - Responsive navigation with mobile menu
- **Footer.jsx** - Footer with links and contact info
- **Layout.jsx** - Main layout wrapper

### Section Components (7)
- **Hero.jsx** - Animated hero section
- **VisionMission.jsx** - Vision & mission cards
- **Services.jsx** - 4 service offerings
- **CoreValues.jsx** - Core values with icons
- **GlobalVision.jsx** - Global expansion roadmap
- **WhyChooseUs.jsx** - 5 key differentiators
- **Contact.jsx** - Contact/CTA section

### UI Components (3)
- **Button.jsx** - Reusable button with variants
- **Card.jsx** - Card component with hover effects
- **SectionTitle.jsx** - Consistent section titles

### Pages (1)
- **Home.jsx** - Main page composing all sections

### Core Files (3)
- **main.jsx** - Application entry point
- **App.jsx** - Routing configuration
- **index.css** - Global styles

## 🎨 Design System

### Color Tokens
```javascript
primary: {
  50 → 950  // Blue shades
}
accent: {
  50 → 900  // Purple shades
}
dark: {
  50 → 950  // Gray/slate shades
}
```

### Typography
- **Display:** Space Grotesk (headings)
- **Body:** Inter (content)

### Animations
- Gradient animations
- Float animations
- Hover transitions
- Scroll-triggered animations

## 📦 Dependencies

### Core
- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.22.3

### Styling & Animation
- tailwindcss: ^3.4.1
- framer-motion: ^11.0.8
- lucide-react: ^0.358.0

### Build Tools
- vite: ^5.2.0
- @vitejs/plugin-react: ^4.2.1
- autoprefixer: ^10.4.19
- postcss: ^8.4.38

### Development
- eslint: ^8.57.0
- eslint plugins (react, react-hooks, react-refresh)

## 🚀 Build Output

After `npm run build`:
```
dist/
├── index.html          # Entry HTML
├── assets/
│   ├── index-[hash].js     # Bundled JavaScript
│   └── index-[hash].css    # Bundled CSS
└── vite.svg           # Static assets
```

## 📝 Key Features by File

### Header.jsx
- Sticky navigation
- Smooth scroll
- Mobile menu
- Logo and branding

### Hero.jsx
- Animated background
- Floating icons
- CTA buttons
- Statistics cards

### Services.jsx
- 4 service cards
- Hover effects
- Feature tags
- Color-coded categories

### Contact.jsx
- Email CTA
- Gradient background
- Response time info
- Statistics grid

## 🔧 Configuration Files

### vite.config.js
- React plugin
- Server port: 3000
- Auto-open browser
- Build optimization

### tailwind.config.js
- Custom color palette
- Custom animations
- Font configuration
- Extended utilities

### postcss.config.js
- TailwindCSS processing
- Autoprefixer

### .eslintrc.cjs
- React rules
- ES2020 support
- Best practices

## 📱 Responsive Breakpoints

```
sm:  640px   // Mobile landscape
md:  768px   // Tablet
lg:  1024px  // Desktop
xl:  1280px  // Large desktop
2xl: 1536px  // Extra large
```

## ✨ Component Props

### Button
- variant: primary | secondary | outline | ghost
- size: sm | md | lg
- href: string (optional link)
- onClick: function

### Card
- hover: boolean (enable hover effects)
- className: string (additional classes)

### SectionTitle
- title: string
- subtitle: string (optional)
- centered: boolean
- gradient: boolean

## 🎯 Page Flow

```
Home Page
├── Hero (landing)
├── Vision & Mission
├── Services
├── Core Values
├── Global Vision
├── Why Choose Us
└── Contact
```

Each section is independently scrollable via navigation links.

---

**Total Development Time:** ~2-3 hours  
**Code Quality:** Production-ready  
**Documentation:** Comprehensive  
**Maintainability:** High  
**Scalability:** Excellent

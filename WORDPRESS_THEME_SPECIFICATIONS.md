# WordPress Theme Design Specifications
## Психолог Аня Ван - Design System Documentation

This document provides all the design specifications needed to recreate this website as a WordPress theme.

---

## 📋 TABLE OF CONTENTS

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Page Structure](#page-structure)
6. [Animations](#animations)
7. [CSS Variables](#css-variables)
8. [WordPress Implementation Notes](#wordpress-implementation-notes)

---

## 🎨 COLOR PALETTE

### Primary Colors (HSL Format)

| Token | HSL Value | Hex Equivalent | Usage |
|-------|-----------|----------------|-------|
| **Primary** | `hsl(350, 35%, 35%)` | `#8B4C5A` | Headings, links, accent elements |
| **Primary Foreground** | `hsl(0, 0%, 100%)` | `#FFFFFF` | Text on primary backgrounds |
| **Background** | `hsl(0, 0%, 100%)` | `#FFFFFF` | Page background |
| **Foreground** | `hsl(0, 0%, 20%)` | `#333333` | Body text |

### Secondary & Neutral Colors

| Token | HSL Value | Hex Equivalent | Usage |
|-------|-----------|----------------|-------|
| **Secondary** | `hsl(30, 20%, 96%)` | `#F7F5F3` | Cards, alternate sections |
| **Muted** | `hsl(30, 15%, 95%)` | `#F5F3F1` | Subtle backgrounds |
| **Muted Foreground** | `hsl(0, 0%, 45%)` | `#737373` | Secondary text |
| **Card** | `hsl(0, 0%, 98%)` | `#FAFAFA` | Card backgrounds |
| **Border** | `hsl(30, 20%, 90%)` | `#EBE7E3` | Borders, dividers |

### Gradients

```css
/* Hero section gradient */
--gradient-hero: linear-gradient(180deg, hsl(30, 20%, 98%) 0%, hsl(30, 15%, 95%) 100%);

/* Section gradient */
--gradient-section: linear-gradient(180deg, hsl(0, 0%, 100%) 0%, hsl(30, 20%, 98%) 100%);

/* Decorative brushstroke */
background: linear-gradient(135deg, hsl(0, 0%, 85%) 0%, hsl(0, 0%, 90%) 100%);
```

### Shadows

```css
/* Soft shadow for subtle depth */
--shadow-soft: 0 4px 30px hsla(0, 0%, 0%, 0.05);

/* Card shadow for elevated elements */
--shadow-card: 0 10px 40px hsla(0, 0%, 0%, 0.08);
```

---

## 🔤 TYPOGRAPHY

### Font Families

| Role | Font Family | Fallback | Google Fonts URL |
|------|-------------|----------|------------------|
| **Display/Headings** | Cormorant Garamond | serif | `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500` |
| **Body** | Montserrat | sans-serif | `https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600` |
| **Script/Italic** | Cormorant Garamond (italic) | serif | Same as Display |

### Font Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Typography Scale

| Element | Font Family | Size | Weight | Letter Spacing | Other |
|---------|-------------|------|--------|----------------|-------|
| **H1 (Hero)** | Cormorant Garamond | 4rem (64px) | 300 | 0.3em | Uppercase |
| **H2 (Section)** | Cormorant Garamond | 2.5rem (40px) | 400 | 0.15em | Uppercase |
| **H3** | Cormorant Garamond | 1.5rem (24px) | 500 | 0.05em | - |
| **Body** | Montserrat | 1rem (16px) | 400 | normal | Line-height: 1.8 |
| **Small/Nav** | Montserrat | 0.75rem (12px) | 400 | 0.2em | Uppercase |
| **Script text** | Cormorant Garamond | 1.5rem (24px) | 400 | normal | Italic, Primary color |

### CSS Typography

```css
body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  color: hsl(0, 0%, 20%);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: hsl(350, 35%, 35%);
}

.script-text {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 400;
  color: hsl(350, 35%, 35%);
}
```

---

## 📐 SPACING & LAYOUT

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem; /* 32px */
}

/* Mobile */
@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem; /* 24px */
  }
}
```

### Section Padding

| Section Type | Desktop | Mobile |
|--------------|---------|--------|
| Standard section | `padding: 6rem 0` (96px) | `padding: 4rem 0` (64px) |
| Hero section | `padding-top: 10rem` (160px) | `padding-top: 8rem` (128px) |

### Spacing Scale

```css
/* Base unit: 4px */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-24: 6rem;    /* 96px */
```

### Border Radius

```css
--radius: 0.25rem;    /* 4px - minimal, elegant */
--radius-lg: 0.25rem;
--radius-md: 2px;
--radius-sm: 0;
```

---

## 🧩 COMPONENTS

### Header/Navigation

```
┌─────────────────────────────────────────────────────────────────────┐
│  Аня Ван                    ОБО МНЕ | ЗАПРОСЫ | ... | КОНТАКТЫ     │
└─────────────────────────────────────────────────────────────────────┘
```

**Styles:**
```css
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: hsla(0, 0%, 100%, 0.95);
  backdrop-filter: blur(8px);
  padding: 1rem 0;
}

.logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  letter-spacing: 0.15em;
  color: hsl(350, 35%, 35%);
}

.nav-link {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: hsl(0, 0%, 45%);
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: hsl(350, 35%, 35%);
}
```

### Hero Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│              [Decorative brushstroke]                               │
│                                                                     │
│    ┌─────────────────────────────────────────┐                      │
│    │                                          │     [Photo with     │
│    │           / П С И Х О Л О Г /            │      frame]         │
│    │                                          │                     │
│    │    Записаться на консультацию онлайн    │                     │
│    │                                          │                     │
│    │           [ ЗАПИСАТЬСЯ ]                 │                     │
│    │                                          │                     │
│    └─────────────────────────────────────────┘                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Decorative Frame:**
```css
.hero-frame {
  border: 1px solid hsl(350, 35%, 35%);
  padding: 3rem;
  position: relative;
}

/* Corner decorations */
.hero-frame::before,
.hero-frame::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  border: 1px solid hsl(350, 35%, 35%);
}

.hero-frame::before {
  top: -10px;
  left: -10px;
  border-right: none;
  border-bottom: none;
}

.hero-frame::after {
  bottom: -10px;
  right: -10px;
  border-left: none;
  border-top: none;
}
```

### Buttons

**Primary Button:**
```css
.btn-primary {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  background: hsl(350, 35%, 35%);
  color: white;
  border: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: hsl(350, 35%, 30%);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px hsla(350, 35%, 35%, 0.3);
}
```

**Outline Button:**
```css
.btn-outline {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  background: transparent;
  color: hsl(350, 35%, 35%);
  border: 1px solid hsl(350, 35%, 35%);
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: hsl(350, 35%, 35%);
  color: white;
}
```

### Cards (Reviews)

```css
.review-card {
  background: hsl(30, 20%, 96%);
  padding: 2rem;
  border-radius: 0.25rem;
}

.review-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.8;
  color: hsl(0, 0%, 20%);
  margin-bottom: 1.5rem;
}

.review-author {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: hsl(350, 35%, 35%);
}
```

### Numbered Lists (Services)

```css
.service-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.service-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: hsl(350, 35%, 35%);
  opacity: 0.5;
  min-width: 2rem;
}

.service-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: hsl(0, 0%, 20%);
}
```

---

## 📄 PAGE STRUCTURE

### Sections Order

1. **Header** - Fixed navigation
2. **Hero** - Main headline with decorative frame
3. **About (Обо мне)** - Personal introduction
4. **Services (Запросы)** - List of therapy areas
5. **Approach (Мой подход)** - Therapy methodology
6. **Format (Формат встречи)** - Online consultation info
7. **Conditions (Условия)** - Session guidelines
8. **Reviews (Отзывы)** - Client testimonials
9. **Contact (Контакты)** - CTA with messenger links
10. **Footer** - Copyright

### Section ID Anchors

```html
<section id="about">...</section>
<section id="services">...</section>
<section id="approach">...</section>
<section id="format">...</section>
<section id="conditions">...</section>
<section id="reviews">...</section>
<section id="contact">...</section>
```

---

## ✨ ANIMATIONS

### Fade Up (On Scroll)

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.8s ease-out forwards;
}
```

### Fade In

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}
```

### Slide In

```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.6s ease-out forwards;
}
```

### Animation Delays

```css
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
```

### Transition Defaults

```css
.transition-default {
  transition: all 0.3s ease;
}

.transition-slow {
  transition: all 0.5s ease;
}
```

---

## 🎯 CSS VARIABLES (Complete)

```css
:root {
  /* Colors */
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(0, 0%, 20%);
  --primary: hsl(350, 35%, 35%);
  --primary-foreground: hsl(0, 0%, 100%);
  --secondary: hsl(30, 20%, 96%);
  --secondary-foreground: hsl(0, 0%, 20%);
  --muted: hsl(30, 15%, 95%);
  --muted-foreground: hsl(0, 0%, 45%);
  --card: hsl(0, 0%, 98%);
  --card-foreground: hsl(0, 0%, 20%);
  --border: hsl(30, 20%, 90%);
  
  /* Gradients */
  --gradient-hero: linear-gradient(180deg, hsl(30, 20%, 98%) 0%, hsl(30, 15%, 95%) 100%);
  --gradient-section: linear-gradient(180deg, hsl(0, 0%, 100%) 0%, hsl(30, 20%, 98%) 100%);
  
  /* Shadows */
  --shadow-soft: 0 4px 30px hsla(0, 0%, 0%, 0.05);
  --shadow-card: 0 10px 40px hsla(0, 0%, 0%, 0.08);
  
  /* Typography */
  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Montserrat', sans-serif;
  --font-script: 'Cormorant Garamond', serif;
  
  /* Spacing */
  --radius: 0.25rem;
  --container-max: 1200px;
  --container-padding: 2rem;
}
```

---

## 🔧 WORDPRESS IMPLEMENTATION NOTES

### Recommended Theme Structure

```
theme-anya-van/
├── style.css
├── functions.php
├── index.php
├── header.php
├── footer.php
├── front-page.php
├── page.php
├── single.php
├── sidebar.php
├── 404.php
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── template-parts/
│   ├── hero.php
│   ├── about.php
│   ├── services.php
│   ├── approach.php
│   ├── format.php
│   ├── conditions.php
│   ├── reviews.php
│   └── contact.php
└── inc/
    ├── customizer.php
    └── template-functions.php
```

### Menu Registration (functions.php)

```php
function anya_van_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'anya-van'),
        'footer'  => __('Footer Menu', 'anya-van'),
    ));
}
add_action('init', 'anya_van_menus');
```

### Custom Post Types Suggestions

- **Reviews** - Custom post type for client testimonials
- **Services** - Custom post type for therapy services

### ACF Fields Recommendations

For the **front-page.php**, use ACF Pro fields:
- Hero title, subtitle, button text
- About section content
- Services repeater field
- Reviews repeater field
- Contact information

### Customizer Options

Add customizer options for:
- Primary color
- Logo/site name
- Social media links (WhatsApp, Telegram)
- Contact information

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile first approach */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1200px) { }
```

### Mobile Navigation

- Hamburger menu icon (24px)
- Full-screen overlay navigation
- Centered menu items
- Fade-in animation on open

---

## 📝 CONTENT (Russian Text)

### Navigation Items
- ОБО МНЕ
- ЗАПРОСЫ
- МОЙ ПОДХОД
- ФОРМАТ ВСТРЕЧИ
- УСЛОВИЯ
- ОТЗЫВЫ
- КОНТАКТЫ

### Hero
- Title: / П С И Х О Л О Г /
- Subtitle: Записаться на консультацию онлайн
- CTA: ЗАПИСАТЬСЯ

### Section Titles
- ОБО МНЕ
- В ЧЕМ Я МОГУ ВАМ ПОМОЧЬ
- О МОЕМ ПОДХОДЕ
- ФОРМАТ ВСТРЕЧИ
- УСЛОВИЯ
- ОТЗЫВЫ МОИХ КЛИЕНТОВ
- С ЧЕГО НАЧАТЬ?

---

**Document Version:** 1.0  
**Last Updated:** December 2024  
**Source:** React/Vite Application converted for WordPress development

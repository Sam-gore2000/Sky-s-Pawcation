# Sky's Pawcation v2.0 — Complete Website

A premium dog daycare website with vibrant orange/green palette, organic blob shapes, and full dark mode.

---

## Pages Included
| Page | Route | Description |
|------|-------|-------------|
| Home | / | Hero, services, activities, testimonial, pricing, quote calculator |
| About | /about | Story, entry requirements, transportation, team, facility |
| Services | /services | All 6 services with alternating layout + pickup pricing |
| Process | /process | 4-step guide, entry requirements, FAQ accordion |
| Gallery | /gallery | 18 dog photos with category filters + lightbox |
| Blog | /blog | 6 posts with category filter + newsletter signup |
| Contact | /contact | Form (validated), map, contact info, WhatsApp CTA |

---

## Tech Stack
- **React 18** + React Router v6
- **Vite 5** (build tool)
- **Tailwind CSS 3** (dark mode via `.dark` class)
- **Framer Motion 11** (scroll animations, page transitions, lightbox)
- **Google Fonts**: Fredoka One (display) + Nunito (body)







## Customise Content

| What to change | Where |
|----------------|-------|
| Services, pricing, team | `src/data/index.js` |
| Blog posts | `src/data/index.js` → `blogPosts` |
| Gallery images | `src/pages/Gallery.jsx` → `ALL_IMAGES` |
| Colors | `tailwind.config.js` → `theme.extend.colors` |
| Phone & address | `src/components/Footer.jsx` + `src/pages/Contact.jsx` |
| WhatsApp number | Search `wa.me/919876543210` → replace with yours |
| Google Maps | `src/pages/Contact.jsx` → replace iframe `src` URL |
| Logo font | Already uses Fredoka One from Google Fonts |

---

## Project Structure
```
skys-pawcation/
├── public/
│   ├── paw.svg           ← favicon
│   └── _redirects        ← Netlify SPA routing
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← sticky navbar, dark toggle, hamburger
│   │   ├── Footer.jsx        ← links, newsletter, social
│   │   ├── PawLogo.jsx       ← inline SVG paw logo
│   │   ├── ContactForm.jsx   ← validated contact form
│   │   └── ScrollReveal.jsx  ← scroll animation wrapper
│   ├── pages/
│   │   ├── Home.jsx          ← hero, services, activities, pricing
│   │   ├── About.jsx         ← story, requirements, team
│   │   ├── Services.jsx      ← detailed service pages
│   │   ├── Process.jsx       ← how it works + FAQ
│   │   ├── Gallery.jsx       ← filtered gallery + lightbox
│   │   ├── Blog.jsx          ← blog grid + newsletter
│   │   └── Contact.jsx       ← form + map + WhatsApp
│   ├── hooks/
│   │   └── useDarkMode.js    ← localStorage dark mode
│   ├── data/
│   │   └── index.js          ← all static content/images
│   ├── App.jsx               ← routing + page transitions
│   ├── main.jsx              ← entry point
│   └── index.css             ← Tailwind + custom CSS
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── vercel.json               ← Vercel SPA routing
└── postcss.config.js
```

---

## Features
- Light/Dark mode toggle (saved to localStorage)
- Mobile-first responsive (mobile, tablet, desktop)
- Animated page transitions (Framer Motion)
- Scroll reveal animations on all sections
- Organic blob shapes throughout
- Gallery with tag filters + click lightbox
- Blog with category filter + newsletter
- FAQ accordion on Process page
- Contact form with client-side validation
- WhatsApp CTA integration
- Google Maps embed
- Sticky navbar with scroll effect + hamburger menu
- Dog playing images throughout all pages

# 🏗️ Bauunternehmen Landing Page

A modern, responsive landing page for a German construction company built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

The project focuses on **conversion**, **clean UI/UX**, and **performance**, and is designed to generate leads through a contact form.

---

## 🚀 Live Demo

> _(add your link after deploy)_
> `https://bauunternehmen-landing.vercel.app/`

---

## 🎯 Project Goals

- Present a construction company as **professional and trustworthy**
- Clearly showcase **services and expertise**
- Display **completed projects**
- Build trust with **customer testimonials**
- Provide a **simple and fast way to request a quote**
- Ensure **SEO optimization** and **mobile-first design**

---

## 🛠️ Tech Stack

- ⚡ Next.js (App Router)
- 🟦 TypeScript
- 🎨 Tailwind CSS
- 🎬 Framer Motion
- ✉️ Resend
- 🧪 Zod
- 🎯 Lucide React

---

## 📐 Features

### 🧱 Landing Page Sections

#### Hero

- Strong headline
- Clear value proposition
- Primary CTA: _Kostenloses Angebot anfordern_
- Secondary CTA: _Unsere Projekte ansehen_

#### Leistungen (Services)

- 4 service cards:
  - Rohbau / Neubau
  - Sanierung
  - Innenausbau
  - Fassadenarbeiten

- Icons + descriptions
- Hover effects

#### Über uns (About)

- Company description
- Trust-focused messaging
- Key stats:
  - 10+ years experience
  - 100+ projects
  - 50+ clients

#### Projekte (Projects)

- Responsive gallery
- Optimized images via Next.js
- Categories + titles
- Mobile + desktop slider

#### Kontakt (Contact)

- Form fields:
  - Name
  - Email
  - Message

- Client-side + server-side validation
- Email sending via API
- Success & error states

---

## 📄 Additional Pages

### Impressum

- Required German legal page
- Placeholder company data

### Datenschutzerklärung

- Privacy policy page
- GDPR-related placeholders

---

## ⚙️ Project Structure

```
app/
├── page.tsx
├── layout.tsx
├── globals.css
├── sitemap.ts
├── robots.ts
├── api/
│   └── contact/
├── impressum/
└── datenschutz/

components/
├── layout/
├── sections/
└── ui/

lib/
└── scroll.ts
```

---

## ✉️ Contact Form (API)

Endpoint:

```
/api/contact
```

### Features:

- Input validation with Zod
- Email sending via Resend
- Error handling
- Environment-based config

---

## 🔐 Environment Variables

Create `.env.local`:

```env
RESEND_API_KEY=your_api_key
CONTACT_EMAIL=your@email.com
```

---

## 🧪 Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📦 Build & Production

Build:

```bash
npm run build
```

Start production:

```bash
npm run start
```

---

## 🌍 Deployment

Recommended: Vercel

### Before deploy:

- Replace `DEINE-DOMAIN.de` with real domain
- Add environment variables
- Test contact form
- Run production build

---

## 🔍 SEO

- Metadata (title + description)
- Open Graph support
- Sitemap (`/sitemap.xml`)
- Robots.txt
- `lang="de"`
- Semantic structure

---

## ⚡ Performance

- Next.js Image optimization
- Responsive image sizes
- Lazy loading
- Minimal client components
- Mobile-first design

---

## 📱 UX & UI

- Fully responsive
- Smooth scrolling navigation
- Sticky navbar
- Mobile menu with animations
- Clean, modern construction-style design
- Orange accent branding

---

## ✅ Accessibility

- Form labels and validation messages
- ARIA attributes
- Alt text for images
- Keyboard-friendly navigation

---

## 📌 Status

```
Portfolio-ready ✅
```

---

## 🧠 What I Learned

- Building real-world landing pages with **Next.js App Router**
- Creating reusable UI components
- Handling forms with validation + API routes
- Email integration with Resend
- SEO basics (metadata, sitemap, robots)
- Responsive design and mobile UX
- Clean project architecture

---

## 👨‍💻 Author

Portfolio project built to practice modern frontend development and real-world client scenarios.

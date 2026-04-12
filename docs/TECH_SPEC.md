# TECH SPEC — Bauunternehmen Landing Page

## Client

German construction company  
Example: Bauunternehmen Müller GmbH

## Goal

- Increase the number of inbound leads from the website
- Present the company as premium and trustworthy
- Make it easy to request a quote

## Functional Requirements

### Landing Page

One-page website with the following sections:

#### Hero

- Heading: "Ihr zuverlässiger Partner im Bau"
- Subheading
- CTA button: "Kostenloses Angebot anfordern"
- Background image

#### Leistungen

3–5 service cards:

- Neubau
- Renovierung
- Innenausbau
- Sanierung

Each card includes:

- icon
- short description

#### Über uns

- short company text
- "10+ Jahre Erfahrung"
- "100+ Projekte"

#### Projekte

- gallery with 6–8 images
- hover effect

#### Bewertungen

- minimum 3 testimonials
- name + text

#### Kontakt

Form fields:

- Name
- Email
- Nachricht

## Technical Requirements

### Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript

### UI/UX

- mobile-first
- fast loading
- clean modern design
- sticky navbar

### Performance

- Lighthouse 90+
- optimized images with next/image

### SEO

- meta title
- meta description
- semantic HTML

## CI/CD

### Git branches

- main (production)
- dev

### CI pipeline

On each push:

- install dependencies
- lint
- build project

### Deploy

- automatic deploy to Vercel
- push → preview deploy
- merge to main → production deploy

## Docker

Minimum:

- Dockerfile
- run app inside container

Optional:

- docker-compose
- next + nginx

## Suggested Structure

- /src/app
- /src/components
- /src/lib
- /src/styles
- /public
- /docs

## Test Scenario

Client opens the site on mobile, clicks CTA, submits the contact form.

The form should:

- either log data
- or simulate successful submission

## Bonus

- Framer Motion animations
- skeleton loading
- dark mode
- multi-language (DE/EN)

## Evaluation Criteria

- does it look like a real business website?
- is there sales logic?
- can it be sold to a real client?
- is the code clean and structured?

## Deadline

3–5 days

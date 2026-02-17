# Dr. Maya Reynolds - Therapist Website Specification

## Project Overview
- **Project Name**: Dr. Maya Reynolds Therapy Website
- **Type**: Next.js (App Router) + Tailwind CSS Website
- **Core Functionality**: Professional therapy practice website with appointment booking
- **Target Users**: Adults seeking therapy services in Santa Monica, CA area

---

## 🎨 Theme & Design System

### Color Palette
| Name | Hex Code | Usage |
|------|----------|-------|
| Primary (Sage Green) | #A8C3A0 | Primary buttons, accents, highlights |
| Secondary (Warm Beige) | #F5F1EA | Backgrounds, cards |
| Accent (Terracotta) | #D8A48F | Secondary accents, hover states |
| Text (Charcoal) | #2F2F2F | Primary text |
| Text Light | #5A5A5A | Secondary text |
| White | #FFFFFF | Card backgrounds, contrast areas |
| Border | #E8E4DE | Subtle borders |

### Typography
- **Headings**: Playfair Display (serif) - elegant, professional
- **Body**: Inter (sans-serif) - clean, readable
- **Font Sizes**:
  - H1: 48px (desktop) / 32px (mobile)
  - H2: 36px (desktop) / 28px (mobile)
  - H3: 24px (desktop) / 20px (mobile)
  - Body: 16px
  - Small: 14px

### Spacing System
- Base unit: 4px
- Common spacing: 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 📄 Page Sections (In Order)

### 1. Navigation Bar
- Logo/Name: "Dr. Maya Reynolds"
- Links: Services, About, FAQ, Contact
- CTA Button: "Book a Free Consultation"
- Mobile: Hamburger menu
- Sticky on scroll

### 2. Hero Section
- **H1**: "Trauma & Anxiety Therapist in Santa Monica, CA"
- **Subtext**: "Warm, supportive therapy for adults ready to find balance and healing"
- **CTA**: "Book a Free Consultation"
- Background: Warm beige (#F5F1EA) with soft sage green accent
- Image: Calming therapy-related imagery (minimal interior or nature)

### 3. Services Section (3 Services)
Each service card:
- Icon/visual
- Service name
- 1-2 sentence description
- Outcome-focused

**Services:**
1. **Anxiety Therapy in Santa Monica, CA**
   - "Learn practical tools to manage anxious thoughts and find calm. Together, we'll develop coping strategies that fit your life."
   
2. **Trauma Therapy (EMDR) in Santa Monica, CA**
   - "Process difficult memories safely with EMDR therapy. Heal from past experiences and reclaim your sense of safety."
   
3. **Burnout & Stress Therapy in Santa Monica, CA**
   - "Restore balance and energy through personalized therapy. Learn to set boundaries and rediscover what matters to you."

### 4. About Section
- Therapist image (placeholder)
- Bio text explaining:
  - Who she is (Dr. Maya Reynolds, licensed therapist)
  - Approach (collaborative, evidence-based)
  - Modalities (CBT, EMDR, Mindfulness, Body-based therapy)
  - Location (Santa Monica, CA)
- Credentials/licenses

### 5. New Section: Our Office
- Section title: "A Calm Space for Healing"
- Description mentioning:
  - Santa Monica location
  - In-person + telehealth options
  - Focus on safety, comfort, privacy
- Grid of 2-3 calming images
- Rounded corners, soft shadows

### 6. FAQ Section
Questions:
1. "How long does therapy take?"
2. "Do you offer telehealth sessions?"
3. "What can I expect in the first session?"
4. "How do I know if therapy is right for me?"

### 7. CTA Section
- Reassuring message
- Action-driven CTA: "Book a Free Consultation"
- Warm, inviting design

### 8. Footer
- Contact information
- Location: Santa Monica, CA
- Social links (if applicable)
- Copyright

---

## 🧩 Components List

| Component | Description |
|-----------|-------------|
| Navbar | Sticky navigation with logo, links, CTA |
| Hero | Main hero section with H1, subtext, CTA |
| ServiceCard | Individual service card with icon, title, description |
| Services | Grid of ServiceCards |
| About | About section with image and bio |
| OfficeGallery | Image grid for office section |
| FAQ | Accordion or list of FAQ items |
| CTA | Call-to-action section |
| Footer | Site footer with contact info |
| Button | Reusable button component |
| Container | Max-width container |

---

## 📱 Responsiveness Rules

### Mobile (< 640px)
- Single column layouts
- Reduced padding (16px horizontal)
- Smaller font sizes
- Hamburger menu for navigation
- Stacked service cards

### Tablet (640px - 1024px)
- 2-column grids where appropriate
- Medium padding (24px horizontal)
- Adjusted font sizes

### Desktop (> 1024px)
- Max content width: 1200px
- Full padding (32px+ horizontal)
- 3-column service grid
- Full navigation visible

---

## ✨ Bonus Features
- Smooth scroll behavior
- Subtle hover animations on buttons/cards
- Fade-in on scroll (CSS or Framer Motion)
- Soft transitions (200-300ms)

---

## 📁 Folder Structure
```
/app
  layout.tsx
  page.tsx
  globals.css
/components
  Navbar.tsx
  Hero.tsx
  Services.tsx
  ServiceCard.tsx
  About.tsx
  OfficeGallery.tsx
  FAQ.tsx
  CTA.tsx
  Footer.tsx
  Button.tsx
  Container.tsx
/lib
  data.ts (content data)
/public
  (images)
```

---

## ✅ Acceptance Criteria

1. ✅ All sections render correctly on desktop
2. ✅ All sections render correctly on mobile
3. ✅ Colors match theme specification exactly
4. ✅ Typography uses Playfair Display + Inter
5. ✅ All content matches therapist profile
6. ✅ Location "Santa Monica, CA" appears prominently
7. ✅ New "Our Office" section is added
8. ✅ Navigation is sticky and functional
9. ✅ CTAs are prominent and clickable
10. ✅ Clean, production-ready code

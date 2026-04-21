
# Sai Varun Mukunda — Interactive Portfolio

A bold, animated personal portfolio with glassmorphism, gradient mesh backgrounds, a looping hero video, and motion throughout. Built as a single-page experience with smooth scroll-based reveals.

## Visual Direction
- **Aesthetic**: Bold animated gradient mesh (violet → magenta → cyan → blue) with frosted glass cards floating above
- **Hero**: Full-screen looping abstract background video (particles / fluid / AI-flavored visuals) with darkened overlay
- **Other sections**: Animated WebGL/canvas accents — drifting particles, mouse-reactive blobs, gradient orbs
- **Typography**: Display sans-serif (Space Grotesk) for headings, clean Inter for body, subtle mono accents for tech labels
- **Palette**: Deep ink background `#0a0a14`, glass surfaces with backdrop blur, vibrant gradient accents, near-white foreground

## Sections (single page, scroll-snap friendly)

1. **Hero**
   - Looping background video + gradient overlay
   - Animated typewriter / character stagger of "Sai Varun Mukunda"
   - Subtitle: "CSE (AI) @ Amrita · Data Science @ IIT Madras"
   - Floating glass chips: AWS Certified · Oracle GenAI · Springer Author
   - Scroll indicator with animated bounce

2. **About**
   - Short narrative bio (Hyderabad, AI/full-stack focus)
   - Glass card with profile silhouette / animated gradient avatar
   - Mouse-reactive particle layer behind

3. **Projects** (3 interactive glass cards)
   - Parent Log Book System
   - Real-Time E-Commerce Analytics Platform
   - AI-Powered Medical Image Analysis Platform
   - Each card: 3D tilt on hover, gradient border glow, expand-on-click for details, animated tech-stack chips

4. **Skills** (animated grid)
   - Categories: Languages · Frameworks · Databases · Tools · Cloud · Core Concepts
   - Floating glass tiles with staggered reveal, hover scale + glow
   - Subtle canvas particle background

5. **Education** (animated vertical timeline)
   - Amrita Vishwa Vidyapeetham — B.Tech CSE (AI), GPA 7.72
   - IIT Madras — Diploma in Data Science
   - Each node animates in on scroll with gradient line draw

6. **Certifications**
   - AWS Certified Cloud Practitioner
   - Oracle Cloud Infrastructure 2025 Generative AI Professional
   - Glass badge cards with shimmer effect

7. **Achievements**
   - AI for Impact Hackathon — Top 10 of 1,200+ teams
   - Springer Publication — Attention-Based BiLSTM paper
   - Student Council PR & Outreach
   - Animated counter for "Top 10 / 1,200+"

8. **Contact**
   - Animated CTA: "Let's build something."
   - Email, LinkedIn, GitHub buttons with magnetic hover + gradient ring
   - Footer with subtle marquee of skills

## Motion System
- **Library**: Framer Motion for component reveals, transitions, hover states
- **Entrance**: Fade + translate-up with spring stagger as sections enter viewport
- **Hover**: Scale, gradient glow, 3D tilt on project cards
- **Background motion**: Continuously animated gradient mesh + canvas particles + mouse-reactive blob
- **Scroll**: Parallax on hero text, progress bar at top, smooth section reveals

## Interactivity Highlights
- Custom animated cursor (gradient blob that scales on hoverable elements)
- Magnetic buttons for socials
- Project cards expand inline with animated layout
- Skills filter by category with animated reordering
- Sticky glass navbar with active-section highlighting

## Tech
- React + Framer Motion + Tailwind
- Background video (royalty-free abstract loop) hosted in `/public`
- Lightweight canvas particle system (no heavy 3D libs) for non-hero sections
- Fully responsive (mobile collapses navbar, video swaps to lighter gradient on small screens)

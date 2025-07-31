# Aditya Kumar Jha — Developer Portfolio

**Shaping code into real projects that deliver results.**  
A personal portfolio website showcasing work, skills, and a way to get in touch.

## Live Demo

**🔗 Check Website:** [Click Here](https://portfolio-seven-self-65.vercel.app/)

## Project Overview

This is a responsive, modern portfolio website built to showcase skills, projects, and provide a contact pathway. It includes:
- A hero section with a tagline and call-to-action
- Navbar with profile picture, nav links, and responsive dropdown on mobile/tablet
- Contact form integration
- Downloadable CV
- 3D animation

## Features

- Sticky/responsive navbar with:
  - Profile avatar and name
  - Hamburger menu for mobile/tablet with toggle (open/close)
  - Download CV 
  - Contact link
- Hero section with prominent heading and CTA
- **3D animated visual elements** embedded (adds depth and personality)
- **Projects showcase** — real projects with descriptions, links, and live/demo previews
- **Skills breakdown** detailing technologies, languages, and tools I know
- Contact form (powered by EmailJS or similar)
- Responsive across mobile, tablet, and desktop
- Downloadable resume
- Scroll-aware header styling (changes on scroll)

## Tech Stack

- **Framework:** React (with Vite as build tool)
- **Styling:** Tailwind CSS (utility-first responsive design)
- **3D/Visuals:** Three.js (for 3D animations and interactive project showcases)
- **Icons:** lucide-react
- **Form Integration:** EmailJS (for handling contact form submissions)
- **Build/Deployment:** Vercel

## Folder Structure

```bash
/
├── public/                # Static assets served directly (images, Resume.pdf, favicon, etc.)
├── src/                   # Application source code
│   ├── components/        # Reusable UI pieces and low-level building blocks
│   │   ├── models/        # Encapsulated 3D model/scene components or complex visual abstractions
│   │   ├── contact/       # Contact-related subcomponents (e.g., form fields, wrappers) if applicable
│   │   ├── hero_m...      # Hero-related component grouping (e.g., hero 3D scene or layout)
│   │   ├── tech_logo...   # Logo/tech-related visual component group
│   │   └── ...            # Other individual components live directly here (NavBar, buttons, project card wrappers, etc.)
│   ├── constants/         # Static configuration/data (navLinks, project metadata, skills list, etc.)
│   ├── sections/          # Composed page sections (e.g., Contact section, Experience block, Feature cards, Footer, etc.)
│   └── ...                # App.jsx & main.jsx at this level
├── .env                   # Environment variables (EmailJS keys, etc.) 
├── README.md              # Project documentation
```

## 📦 Installation

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/MentorX.git
```
```bash
cd MentorX
```
```bash
npm install
```
```bash
npm run dev
```

### 2. ➕ Add Environment Variables
Create a .env file
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Runs at http://localhost:5173

### 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

## 🙏 Acknowledgements

Special thanks to the following technologies, tools, and resources that made this portfolio possible:

- **[React]** — Frontend framework for building UI
- **[Vite]** — Lightning-fast development build tool
- **[Tailwind CSS]** — Utility-first CSS framework for responsive design
- **[Three.js]** — 3D animations and interactive visuals
- **[lucide-react]** — Beautiful, customizable SVG icons
- **[EmailJS]** — Email handling for the contact form
- **[Vercel]** — Deployment and hosting

Inspired by modern developer portfolio designs and 3D animation showcases.

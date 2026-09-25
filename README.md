# Portfolio — Nwadike Chukwuemeka

Personal portfolio website showcasing projects, skills, experience, and contact information.

**Live site:** [https://portflio-o4dg.vercel.app/](https://portflio-o4dg.vercel.app/)

## About

A modern, responsive portfolio built for **Nwadike Chukwuemeka** (John Jerry), a Full-Stack Developer specializing in React, Next.js, Node.js, Express, and PostgreSQL.

The site features a typed hero banner, about section, experience timeline, contact form, and smooth scroll animations.

## Features

- **Typed hero animation** — cycling titles (FullStack web developer, App developer, UI/UX designer)
- **Responsive layout** — works on mobile, tablet, and desktop
- **Smooth animations** — powered by AOS (Animate On Scroll)
- **Contact form** — integrated with EmailJS
- **Social links** — GitHub, LinkedIn, email
- **Download buttons** — Resume and Academic Transcript
- **Bootstrap 5** styling and components

## Tech Stack

| Category       | Technologies                                      |
|----------------|---------------------------------------------------|
| Frontend       | React 19, Vite 8                                  |
| Styling        | Bootstrap 5, Bootstrap Icons, custom CSS          |
| Animations     | AOS (Animate On Scroll)                           |
| Routing        | React Router DOM                                  |
| Contact        | EmailJS                                           |
| Hosting        | Vercel                                            |

## Project Structure

```
portflio/
├── frontend/
│   ├── public/          # Static assets (favicon, icons)
│   ├── src/
│   │   ├── assets/      # Images, certificates, photos
│   │   ├── components/  # Home, About, Experience, Message, Footer
│   │   ├── css/         # Component styles
│   │   ├── layout/      # Navbar
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Install & Run

```bash
# Clone the repository
git clone https://github.com/johnjerry8749/portflio.git
cd portflio/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deployment

This project is deployed on **Vercel**.

1. Connect the GitHub repository to Vercel
2. Set the **Root Directory** to `frontend`
3. Build command: `npm run build`
4. Output directory: `dist`

Any push to the `main` branch will trigger a new deployment.

## Scripts

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start Vite development server      |
| `npm run build`   | Build for production               |
| `npm run preview` | Preview production build           |
| `npm run lint`    | Run ESLint                         |

## Contact

- **GitHub:** [johnjerry8749](https://github.com/johnjerry8749)
- **LinkedIn:** [Nwadike Chukwuemeka](https://www.linkedin.com/in/nwadike-chukwuemeka)
- **Email:** johnjerry8749@gmail.com
- **Portfolio:** [https://portflio-o4dg.vercel.app/](https://portflio-o4dg.vercel.app/)

---

Made with React + Vite

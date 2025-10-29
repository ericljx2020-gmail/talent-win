# TalentWin - Headhunting Firm Website

A modern, responsive React website for a professional headhunting and executive search firm.

## Features

- 🎨 Modern, professional UI with smooth animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with Vite for fast development
- 🎯 Clean component architecture
- 💼 Professional sections: Hero, Services, About, Contact
- 📊 Statistics showcase
- 📧 Working contact form with EmailJS integration (no backend required!)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
talent-win/
├── src/
│   ├── components/
│   │   ├── Header.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── Stats.jsx/css
│   │   ├── Services.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Email Setup

The contact form uses EmailJS to send emails without a backend server.

**To enable email functionality:**
1. Follow the instructions in `EMAILJS_SETUP.md`
2. Sign up at [EmailJS.com](https://www.emailjs.com/) (free tier: 200 emails/month)
3. Configure your credentials in `src/components/Contact.jsx`

The form will work without setup (demo mode), but emails won't actually be sent until you configure EmailJS.

## Customization

- Update company information in the Contact component
- Modify services in the Services component
- Change color scheme in CSS files
- Add your logo by replacing the emoji icon in Header
- Replace placeholder images with your own professional photos

## Technologies Used

- React 18
- Vite
- CSS3 (with modern features like Grid, Flexbox, animations)

## License

MIT


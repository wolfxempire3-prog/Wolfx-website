import React from 'react';
import { motion } from 'framer-motion';
// WolfX single-file React component (TailwindCSS). Default export a page you can paste into src/App.jsx

export default function WolfXLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center text-xl font-bold">W</div>
          <div>
            <h1 className="text-xl font-semibold">WolfX</h1>
            <p className="text-xs text-gray-400">Precision trading · MSS/CHOCH Strategy</p>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <a className="text-sm hover:text-white" href="#strategy">Strategy</a>
          <a className="text-sm hover:text-white" href="#mentorship">Mentorship</a>
          <a className="text-sm hover:text-white" href="#bot">Automation</a>
          <a className="px-4 py-2 bg-white text-gray-900 rounded-md text-sm" href="#contact">Get Started</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl font-extrabold leading-tight">WolfX — Trade Like Smart Money</h2>
            <p className="mt-4 text-gray-300">High-probability MSS/CHOCH trading system, built to scale. Precision entries, strict risk, and prop-firm ready rules.</p>

            <div className="mt-6 flex gap-3">
              <a href="/WolfX_Strategy.pdf" className="px-5 py-3 bg-white text-gray-900 rounded-md font-medium">Download Strategy PDF</a>
              <a href="/WolfX_Mentorship_Course.pdf" className="px-5 py-3 border border-gray-700 rounded-md text-sm">Mentorship Outline</a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-400">
              <li>• H1 → M5 precision</li>
              <li>• 1% risk model</li>
              <li>• OB / FVG entries</li>
              <li>• Prop-firm friendly</li>
            </ul>
          </motion.div>

          <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl">
            <h3 className="text-lg font-semibold">Quick Setup</h3>
            <ol className="mt-4 list-decimal list-inside text-gray-300 text-sm">
              <li>Pick one pair (EURUSD / GBPUSD / XAUUSD)</li>
              <li>Trade London & New York opens</li>
              <li>Wait for liquidity sweep → MSS → OB entry</li>
              <li>1% max risk, stop after 2 losses</li>
            </ol>
          </motion.div>
        </section>

        {/* Strategy section */}
        <section id="strategy" className="py-12">
          <h3 className="text-2xl font-bold">WolfX Strategy (short)</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-xl">
              <h4 className="font-semibold">Timeframes</h4>
              <p className="text-sm text-gray-300 mt-2">HTF: H1 — Entry: M5</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl">
              <h4 className="font-semibold">Entry Model</h4>
              <p className="text-sm text-gray-300 mt-2">Liquidity sweep → MSS/CHOCH → Retrace into OB / FVG → Limit entry</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl">
              <h4 className="font-semibold">Risk</h4>
              <p className="text-sm text-gray-300 mt-2">1% per trade, RR ≥ 1:3, max 2 trades/day</p>
            </div>
          </div>
        </section>

        {/* Mentorship callout */}
        <section id="mentorship" className="py-12 bg-gradient-to-b from-transparent to-gray-900 rounded-xl p-6">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">WolfX Mentorship</h3>
              <p className="text-gray-300 mt-2">Structured course, live coaching, and trade reviews. From demo to funded accounts.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#contact" className="px-4 py-3 bg-white text-gray-900 rounded-md">Apply for Mentorship</a>
            </div>
          </div>
        </section>

        {/* Automation */}
        <section id="bot" className="py-12">
          <h3 className="text-2xl font-bold">Automation Roadmap</h3>
          <p className="text-gray-300 mt-3">From logic mapping to backtesting and VPS deployment — scale WolfX into a reliable auto-trader.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-800 rounded-md">Phase 1: Logic</div>
            <div className="p-4 bg-gray-800 rounded-md">Phase 2: Testing</div>
            <div className="p-4 bg-gray-800 rounded-md">Phase 3: Deployment</div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <h3 className="text-2xl font-bold">Get Started</h3>
          <p className="text-gray-300 mt-2">Book a free audit or apply for the mentorship. Leave a message and we'll get back within 24 hours.</p>

          <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none" />
            <input name="email" required type="email" placeholder="Email" className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none" />
            <input name="pair" placeholder="Main trading pair (optional)" className="p-3 rounded-md bg-gray-800 border border-gray-700" />
            <textarea name="message" placeholder="Message" rows={4} className="p-3 rounded-md bg-gray-800 border border-gray-700 md:col-span-2"></textarea>
            <button type="submit" className="md:col-span-2 px-5 py-3 bg-white text-gray-900 rounded-md">Send</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500">
          <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} WolfX. All rights reserved.</p>
            <p>Built with precision · MSS/CHOCH</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

/*
====================
BUILD & DEPLOY GUIDE (paste below into README or follow steps)
====================

1) Create project (Vite + React recommended)

  npm create vite@latest wolfx-site -- --template react
  cd wolfx-site
  npm install

2) Install dependencies

  npm install framer-motion
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

3) Tailwind config (tailwind.config.cjs example)

  module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: { extend: {} },
    plugins: [],
  }

4) Add Tailwind base styles (src/index.css)

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

5) Replace src/App.jsx with this file and ensure src/main.jsx imports './index.css'

6) Test locally

  npm run dev

7) Build for production

  npm run build

8) Deploy

  - Vercel: connect GitHub repo, select project, deploy (automatic)
  - Netlify: drag & drop build folder or connect repo
  - Static (GitHub Pages): use gh-pages or workflow

9) Domain & SSL

  - Buy domain (Namecheap/GoDaddy)
  - Point DNS to hosting provider (Vercel/Netlify provide instructions)
  - SSL auto-enabled by most hosts

10) Forms

  - Use Formspree / Getform / Netlify Forms for contact handling
  - Replace action URL in form with your endpoint

11) Analytics & SEO

  - Add <meta> tags in index.html for title, description
  - Setup Google Analytics or Plausible
  - Create sitemap.xml (many static site plugins)

12) Extras

  - Favicon: add public/favicon.ico
  - Robots.txt: allow indexing or limit
  - Open Graph images and Twitter cards for social sharing

13) Next steps (prod polish)

  - Add quality images and a logo (SVG)
  - Add pricing / mentorship application flow
  - Add payment (Stripe) if selling courses
  - Add serverless functions for secure form handling

*/

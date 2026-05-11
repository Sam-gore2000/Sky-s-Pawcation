import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PawLogo from './PawLogo'

/* ── Sun Icon ── */
function SunIcon({ className = '' }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

/* ── Half Moon Icon ── */
function MoonIcon({ className = '' }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* ── Theme Toggle Button ── */
function ThemeToggle({ isDark, setIsDark, size = 'md' }) {
  const isSmall = size === 'sm'
  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative flex items-center rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 ${
        isDark
          ? 'bg-slate-800 border-slate-600 hover:border-brand-orange'
          : 'bg-cyan-50 border-cyan-200 hover:border-brand-orange'
      } ${isSmall ? 'w-14 h-7 px-1' : 'w-16 h-8 px-1'}`}
      whileTap={{ scale: 0.95 }}
    >
      {/* Track icons */}
      <span className={`absolute left-1.5 transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-100'}`}>
        <SunIcon className={`text-brand-orange ${isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
      </span>
      <span className={`absolute right-1.5 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-30'}`}>
        <MoonIcon className={`text-brand-sky ${isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
      </span>

      {/* Sliding knob with icon inside */}
      <motion.div
        className={`absolute rounded-full shadow-md flex items-center justify-center transition-colors duration-300 ${
          isDark ? 'bg-slate-700' : 'bg-white'
        } ${isSmall ? 'w-5 h-5' : 'w-6 h-6'}`}
        animate={{ left: isDark ? (isSmall ? '28px' : '32px') : '3px' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.span key="moon"
              initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
              transition={{ duration: 0.2 }}>
              <MoonIcon className={`text-brand-sky ${isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} />
            </motion.span>
          ) : (
            <motion.span key="sun"
              initial={{ opacity: 0, rotate: 30, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -30, scale: 0.5 }}
              transition={{ duration: 0.2 }}>
              <SunIcon className={`text-brand-orange ${isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => setOpen(false), [location])

  const links = [
    { to: '/',         label: 'Home' },
    { to: '/about',    label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/process',  label: 'Process' },
    { to: '/gallery',  label: 'Gallery' },
    { to: '/blog',     label: 'Blog' },
    { to: '/contact',  label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-lg shadow-black/5' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <PawLogo size={44} className="group-hover:scale-110 transition-transform duration-200 paw-logo" />
          <div>
            <span className="font-display text-2xl text-brand-orange leading-none block">Sky's</span>
            <span className="font-heading text-sm font-bold text-slate-700 dark:text-dark-text leading-none -mt-0.5 block">Pawcation</span>
          </div>
        </Link>

        {/* ── Desktop nav links ── */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-heading font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-orangePale text-brand-orange'
                    : 'text-slate-600 dark:text-dark-muted hover:text-brand-orange hover:bg-brand-orangePale/50'
                }`
              }
            >{label}</NavLink>
          ))}
        </div>

        {/* ── Desktop right side ── */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Sun / Moon toggle */}
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} size="md" />

          {/* Phone CTA */}
          <a href="tel:+919373222026"
            className="flex items-center gap-2 bg-brand-orange text-slate-900 font-heading font-bold text-sm px-5 py-2.5 rounded-full hover:bg-brand-orangeLight transition-all hover:shadow-lg hover:shadow-brand-orange/30 whitespace-nowrap">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            +91 9373222026
          </a>
        </div>

        {/* ── Mobile right side ── */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Sun / Moon toggle (smaller) */}
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} size="sm" />

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl hover:bg-brand-orangePale transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              {[0, 1, 2].map(i => (
                <motion.span key={i}
                  className="block w-6 h-0.5 bg-slate-700 dark:bg-dark-text rounded-full"
                  animate={
                    i === 0 && open ? { rotate: 45, y: 8 } :
                    i === 1 && open ? { opacity: 0 } :
                    i === 2 && open ? { rotate: -45, y: -8 } : {}
                  }
                />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 dark:bg-dark-bg/98 backdrop-blur-md border-t border-brand-orangePale dark:border-dark-border overflow-hidden"
          >
            <div className="px-5 py-4 grid grid-cols-2 gap-2">
              {links.map(({ to, label }) => (
                <NavLink key={to} to={to}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-heading font-semibold text-center transition-all ${
                      isActive ? 'bg-brand-orange text-slate-900' : 'bg-brand-orangePale text-brand-orange'
                    }`
                  }
                >{label}</NavLink>
              ))}
            </div>
            <div className="px-5 pb-5 flex gap-3">
              <a href="tel:+919373222026"
                className="btn-orange flex-1 justify-center text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

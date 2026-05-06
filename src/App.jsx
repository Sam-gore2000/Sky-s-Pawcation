import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Process from './pages/Process'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { useDarkMode } from './hooks/useDarkMode'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}
        initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-16}}
        transition={{duration:0.3, ease:'easeInOut'}}>
        <Routes location={location}>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process"  element={<Process />} />
          <Route path="/gallery"  element={<Gallery />} />
          <Route path="/blog"     element={<Blog />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [isDark, setIsDark] = useDarkMode()
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const ALL_IMAGES = [
  // Playing / Action
  { id:1,  src:'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80', alt:'Golden retriever playing fetch', tag:'Playtime' },
  { id:2,  src:'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&q=80', alt:'Two dogs running', tag:'Exercise' },
  { id:3,  src:'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=700&q=80', alt:'Dog jumping in water', tag:'Playtime' },
  { id:4,  src:'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=700&q=80', alt:'Happy dog portrait', tag:'Portrait' },
  { id:5,  src:'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=700&q=80', alt:'Cute puppy close-up', tag:'Puppy' },
  { id:6,  src:'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=700&q=80', alt:'White poodle portrait', tag:'Groomed' },
  { id:7,  src:'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=700&q=80', alt:'Border collie in training', tag:'Training' },
  { id:8,  src:'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=700&q=80', alt:'Two dogs together', tag:'Friends' },
  { id:9,  src:'https://images.unsplash.com/photo-1534361960057-19f4434c4f61?w=700&q=80', alt:'Dog in the yard', tag:'Outdoor' },
  { id:10, src:'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=700&q=80', alt:'Sleepy happy dog', tag:'Rest' },
  { id:11, src:'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=700&q=80', alt:'Golden retriever closeup', tag:'Portrait' },
  { id:12, src:'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=700&q=80', alt:'Dog getting groomed', tag:'Groomed' },
  { id:13, src:'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=700&q=80', alt:'Jumping dog outdoors', tag:'Exercise' },
  { id:14, src:'https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=700&q=80', alt:'Dog in car window', tag:'Outdoor' },
  { id:15, src:'https://images.unsplash.com/photo-1546421845-6471bdcf3edf?w=700&q=80', alt:'Dog training session', tag:'Training' },
  { id:16, src:'https://images.unsplash.com/photo-1611499677490-56d8b79bcc8f?w=700&q=80', alt:'Puppy playing', tag:'Puppy' },
  { id:17, src:'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=700&q=80', alt:'Labrador playing', tag:'Playtime' },
  { id:18, src:'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=700&q=80', alt:'Dog smiling portrait', tag:'Friends' },
]

const TAGS = ['All', 'Playtime', 'Exercise', 'Training', 'Groomed', 'Puppy', 'Portrait', 'Outdoor', 'Rest', 'Friends']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? ALL_IMAGES : ALL_IMAGES.filter(i => i.tag === active)

  return (
    <main className="pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-16 bg-white dark:bg-dark-bg overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-yellowPale blob-yellow opacity-60 translate-x-20 -translate-y-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <span className="section-label block mb-2">Photo Gallery</span>
            <h1 className="font-display text-5xl md:text-6xl text-slate-800 dark:text-dark-text mb-4">
              Life at Sky's <span className="text-brand-orange">Pawcation</span>
            </h1>
            <p className="font-heading text-slate-500 dark:text-dark-muted max-w-xl mx-auto text-sm leading-relaxed">
              Every day is filled with joy, play and love. Here's a peek into what your dog's days look like with us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white dark:bg-dark-bg sticky top-[72px] z-30 border-b border-slate-100 dark:border-dark-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {TAGS.map(tag => (
              <button key={tag} onClick={() => setActive(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-heading font-700 whitespace-nowrap transition-all duration-200 ${
                  active === tag
                    ? 'bg-brand-orange text-slate-900 shadow-md shadow-brand-orange/30 scale-105'
                    : 'bg-brand-orangePale text-brand-orange hover:bg-brand-orange hover:text-slate-900'
                }`}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-slate-50 dark:bg-dark-card min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div key={img.id} layout
                  initial={{ opacity:0, scale:0.85 }}
                  animate={{ opacity:1, scale:1 }}
                  exit={{ opacity:0, scale:0.85 }}
                  transition={{ duration:0.35, delay: i < 8 ? i*0.04 : 0 }}
                  className="zoom-img rounded-2xl overflow-hidden cursor-pointer aspect-square relative group shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setSelected(img)}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-all duration-300" />
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-brand-orange text-slate-900 text-xs font-heading font-700 px-2.5 py-1 rounded-full">{img.tag}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400 font-heading">
              <div className="text-6xl mb-4">🐾</div>
              <p>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={() => setSelected(null)}>
            <motion.div className="relative max-w-2xl w-full"
              initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.8,opacity:0}}
              onClick={e => e.stopPropagation()}>
              <img src={selected.src} alt={selected.alt} className="w-full rounded-3xl shadow-2xl object-cover max-h-[80vh]" />
              <div className="absolute top-3 left-3 bg-brand-orange text-slate-900 text-xs font-heading font-700 px-3 py-1 rounded-full">{selected.tag}</div>
              <button onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-brand-orange hover:text-slate-900 transition-colors text-xl font-bold">
                ×
              </button>
              <p className="text-white/70 text-sm font-heading text-center mt-3">{selected.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-slate-800 dark:text-dark-text mb-4">Want to See More in Person?</h2>
            <p className="font-heading text-slate-500 dark:text-dark-muted mb-8">Book a free tour and let your dog be part of our gallery next!</p>
            <a href="/contact" className="btn-orange inline-flex">Book a Free Tour</a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

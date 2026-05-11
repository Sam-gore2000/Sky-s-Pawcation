import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { blogPosts } from '../data'

const CATEGORIES = ['All', 'Care Tips', 'Boarding', 'Grooming', 'Training', 'Seasonal', 'Behaviour']

export default function Blog() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? blogPosts : blogPosts.filter(p => p.category === active)
  const [featured, ...rest] = blogPosts

  return (
    <main className="pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-16 bg-white dark:bg-dark-bg overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-yellowPale blob-yellow opacity-60 translate-x-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <span className="section-label block mb-2">Our Blog</span>
            <h1 className="font-display text-5xl md:text-6xl text-slate-800 dark:text-dark-text mb-4">
              Dog Care <span className="text-brand-orange">Tips & Stories</span>
            </h1>
            <p className="font-heading text-slate-500 dark:text-dark-muted max-w-xl mx-auto text-sm leading-relaxed">
              Expert advice, heartwarming stories and everything you need to know to raise a happy, healthy dog.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="card-white overflow-hidden grid md:grid-cols-2 group hover:shadow-2xl transition-shadow duration-300">
              <div className="zoom-img h-64 md:h-auto overflow-hidden">
                <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  <span className="bg-brand-orangePale text-brand-orange text-xs font-heading font-700 px-3 py-1 rounded-full">{featured.category}</span>
                  <span className="bg-slate-100 dark:bg-dark-border text-slate-500 dark:text-dark-muted text-xs font-heading px-3 py-1 rounded-full">Featured</span>
                </div>
                <h2 className="font-display text-3xl text-slate-800 dark:text-dark-text leading-tight mb-3">{featured.title}</h2>
                <p className="font-heading text-slate-500 dark:text-dark-muted text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-xs text-slate-400 dark:text-dark-muted font-heading">
                    <span>{featured.date}</span>
                    <span>•</span>
                    <span>{featured.read}</span>
                  </div>
                  <button className="btn-orange text-sm px-5 py-2">Read More</button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 bg-white dark:bg-dark-bg sticky top-[72px] z-30 border-b border-slate-100 dark:border-dark-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-heading font-700 whitespace-nowrap transition-all duration-200 ${
                  active === cat
                    ? 'bg-brand-orange text-slate-900 shadow-md shadow-brand-orange/30 scale-105'
                    : 'bg-brand-orangePale text-brand-orange hover:bg-brand-orange hover:text-slate-900'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-slate-50 dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.id} delay={i*0.07}>
                <motion.div className="card-white overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                  whileHover={{ y: -6 }}>
                  <div className="zoom-img h-48 overflow-hidden relative">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-orange text-slate-900 text-xs font-heading font-700 px-3 py-1 rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex gap-3 text-xs text-slate-400 dark:text-dark-muted font-heading mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.read}</span>
                    </div>
                    <h3 className="font-display text-xl text-slate-800 dark:text-dark-text leading-tight mb-2 group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-heading text-slate-500 dark:text-dark-muted text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <button className="font-heading font-700 text-brand-orange text-sm hover:underline underline-offset-2 flex items-center gap-1">
                      Read Article
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400 font-heading">
              <div className="text-5xl mb-4">📰</div>
              <p>No posts in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full translate-x-20 translate-y-20 pointer-events-none" />
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="text-5xl mb-4">🐾</div>
            <h2 className="font-display text-4xl text-white mb-3">Never Miss a Post</h2>
            <p className="font-heading text-white/80 mb-6 text-sm">Dog care tips, seasonal guides and special offers — delivered to your inbox.</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-full text-sm outline-none text-slate-700 font-heading" />
              <button className="bg-slate-900 text-white font-heading font-bold px-6 py-3 rounded-full hover:bg-slate-800 transition-colors whitespace-nowrap">Subscribe</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { services } from '../data'

export default function Services() {
  return (
    <main className="pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-16 bg-white dark:bg-dark-bg overflow-hidden">
        <div className="absolute right-0 top-0 w-72 h-72 bg-brand-yellowPale blob-yellow opacity-60 translate-x-20 -translate-y-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <span className="section-label block mb-2">What We Offer</span>
            <h1 className="font-display text-5xl md:text-6xl text-slate-800 dark:text-dark-text mb-4">Our Services</h1>
            <p className="font-heading text-slate-500 dark:text-dark-muted max-w-xl mx-auto text-sm leading-relaxed">
              From daily daycare to overnight boarding, expert grooming to positive training — everything your dog needs is here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service cards - alternating layout */}
      {services.map((s, i) => (
        <section key={s.id} className={`py-16 ${i%2===0?'bg-white dark:bg-dark-bg':'bg-slate-50 dark:bg-dark-card'} overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i%2===1?'':'lg:flex-row-reverse'}`}>
              <ScrollReveal direction={i%2===0?'right':'left'}>
                <div className="relative">
                  <div className={`w-full h-72 absolute inset-0 my-auto opacity-40 ${
                    i%3===0?'bg-brand-orangePale blob-orange':i%3===1?'bg-brand-greenPale blob-green':'bg-brand-yellowPale blob-yellow'
                  }`} />
                  <img src={s.img} alt={s.title} className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[4/3]" />
                </div>
              </ScrollReveal>
              <ScrollReveal direction={i%2===0?'left':'right'}>
                <div className={`flex gap-4 items-start`}>
                  <div className={`service-circle w-16 h-16 ${s.color} flex-shrink-0 mx-0`}><span className="text-2xl">{s.icon}</span></div>
                  <div className="flex-1">
                    <span className="section-label block mb-1">{s.price}</span>
                    <h2 className="font-display text-4xl text-slate-800 dark:text-dark-text mb-3">{s.title}</h2>
                    <p className="font-heading text-slate-500 dark:text-dark-muted text-sm leading-relaxed mb-5">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.features.map(f => (
                        <li key={f} className="flex gap-2 text-sm font-heading text-slate-600 dark:text-dark-muted">
                          <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-orange">Book Now</Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Pickup pricing table */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-10">
            <span className="section-label block mb-2">Pickup & Drop Rates</span>
            <h2 className="font-display text-4xl text-slate-800 dark:text-dark-text">Distance-Based Pricing</h2>
          </div></ScrollReveal>
          <div className="card-white overflow-hidden">
            {[['Within 5 km','₹199/trip','All areas in central Mumbai'],['5 – 10 km','₹299/trip','Extended Mumbai areas'],['10 – 15 km','₹399/trip','Thane, Navi Mumbai'],['Beyond 15 km','Call us','Custom quote']].map(([r,p,n], i) => (
              <ScrollReveal key={r} delay={i*0.08}>
                <div className={`flex justify-between items-center px-6 py-4 ${i!==3?'border-b border-slate-100 dark:border-dark-border':''}`}>
                  <div>
                    <div className="font-heading font-700 text-slate-800 dark:text-dark-text">{r}</div>
                    <div className="text-xs text-slate-500 dark:text-dark-muted">{n}</div>
                  </div>
                  <span className="font-display text-brand-orange text-xl">{p}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-4 p-4 bg-brand-orangePale dark:bg-brand-orange/10 rounded-2xl text-sm font-heading text-brand-orange text-center">
            All vehicles are GPS-tracked, air-conditioned, and accompanied by a trained handler.
          </div>
        </div>
      </section>
    </main>
  )
}

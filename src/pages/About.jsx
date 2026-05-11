import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { teamMembers, facilityFeatures } from '../data'

export default function About() {
  return (
    <main className="pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 bg-white dark:bg-dark-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellowPale dark:bg-yellow-900/20 blob-yellow opacity-60 translate-x-20 -translate-y-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="section-label block mb-2">About Us</span>
            <h1 className="font-display text-5xl md:text-6xl text-slate-800 dark:text-dark-text leading-tight mb-4">
              Entry Process and<br /><span className="text-brand-orange">Requirements</span>
            </h1>
            <p className="font-heading text-slate-500 dark:text-dark-muted leading-relaxed mb-6">
              We want to offer your pets great, compassionate and nurturing care by providing premium services that are safe and to give our human clients peace of mind.
            </p>
            <Link to="/contact" className="btn-orange">Get In Touch</Link>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="w-full h-80 bg-brand-greenPale blob-green absolute inset-0 my-auto opacity-60" />
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&q=80"
                alt="Family with dogs" className="relative z-10 w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DOGS vs CATS requirements */}
      <section className="py-20 bg-slate-50 dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal delay={0}>
              <div className="card-white p-8">
                <h3 className="font-display text-3xl text-slate-800 dark:text-dark-text mb-5">Dogs</h3>
                <ul className="space-y-3">
                  {['Up-to-date vaccination records required','Flea and tick prevention within 30 days','Friendly temperament assessment','Owner emergency contact mandatory','Feeding schedule and dietary notes'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm font-heading text-slate-600 dark:text-dark-muted">
                      <span className="w-5 h-5 rounded-full bg-brand-greenPale flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="card-white p-8">
                <h3 className="font-display text-3xl text-brand-orange mb-5">Cats</h3>
                <ul className="space-y-3">
                  {['Core vaccines including FVRCP required','Spayed or neutered preferred','Individual carrier for transport','Medical history and vet contact','Litter brand preference noted'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm font-heading text-slate-600 dark:text-dark-muted">
                      <span className="w-5 h-5 rounded-full bg-brand-orangePale flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-12">
            <span className="section-label block mb-2">Simple Steps</span>
            <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text">How Check-in Works</h2>
          </div></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num:'1', step:'STEP ONE',   desc:'We use only the safest cleaning products formulated specifically for animals.' },
              { num:'2', step:'STEP TWO',   desc:'Our experienced staff can administer medications, including those that need to be injected.' },
              { num:'3', step:'STEP THREE', desc:'Boarding guests are fed individually and per their pet parents\' instructions.' },
            ].map(({ num, step, desc }, i) => (
              <ScrollReveal key={num} delay={i*0.12}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-brand-green flex items-center justify-center mx-auto mb-4 bg-brand-greenPale dark:bg-green-900/20">
                    <span className="font-display text-3xl text-brand-green">{num}</span>
                  </div>
                  <div className="section-label mb-2">{step}</div>
                  <p className="font-heading text-slate-500 dark:text-dark-muted text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPORTATION */}
      <section className="py-20 bg-slate-50 dark:bg-dark-card relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-skyPale dark:bg-sky-900/10 blob-sky opacity-40 -translate-x-20 translate-y-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="w-full h-80 bg-brand-sky/20 blob-sky absolute inset-0 my-auto" />
              <img src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=700&q=80"
                alt="Dog in car" className="relative z-10 w-full rounded-3xl shadow-xl object-cover aspect-[4/3]" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <span className="section-label block mb-1">Transportation</span>
            <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text leading-tight mb-1">Pet Taxi</h2>
            <p className="font-heading font-800 text-brand-orange mb-4 uppercase text-sm tracking-wide">Just a Phone Call Away</p>
            <p className="font-heading text-slate-500 dark:text-dark-muted text-sm leading-relaxed mb-5">
              Our dedicated pet taxi ensures your dog gets to us and back home safely. GPS-tracked, air-conditioned vehicles with experienced handlers who keep your dog calm and comfortable throughout the journey.
            </p>
            <ul className="space-y-2 mb-6">
              {['Proactively envisioned multimedia based expertise','Seamlessly visualize quality intellectual capital','Holistically pontifiate installed base portals'].map(t => (
                <li key={t} className="flex gap-2 text-sm font-heading text-slate-600 dark:text-dark-muted">
                  <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-orange">Book Taxi</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* WELCOME + FACILITY FEATURES */}
      <section className="py-20 bg-white dark:bg-dark-bg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-yellowPale dark:bg-yellow-900/10 blob-yellow opacity-40 translate-x-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
              <div>
                <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text leading-tight">
                  Happy to welcome you<br /><span className="text-brand-orange">to our circle of friends</span>
                </h2>
              </div>
              <Link to="/contact" className="btn-orange whitespace-nowrap">Book a Tour</Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facilityFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i*0.1} direction="scale">
                <div className="text-center group">
                  <div className="service-circle bg-brand-orangePale group-hover:bg-brand-orange group-hover:text-slate-900 transition-all duration-300">
                    <span className="text-3xl">{f.icon}</span>
                  </div>
                  <h4 className="font-heading font-800 text-slate-700 dark:text-dark-text text-sm mb-2 uppercase tracking-wide">{f.title}</h4>
                  <p className="font-heading text-slate-500 dark:text-dark-muted text-xs leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-slate-50 dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-12">
            <span className="section-label block mb-2">Our People</span>
            <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text">Meet the Team</h2>
          </div></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <ScrollReveal key={m.id} delay={i*0.1}>
                <div className="card-white overflow-hidden group text-center">
                  <div className="zoom-img h-64 overflow-hidden">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-slate-800 dark:text-dark-text">{m.name}</h3>
                    <p className="text-brand-orange font-heading font-700 text-sm mt-1 mb-3">{m.role}</p>
                    <p className="text-slate-500 dark:text-dark-muted text-sm leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

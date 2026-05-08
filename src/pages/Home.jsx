import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { services, testimonials, pricing } from '../data'

const ServiceCircle = ({ s, delay }) => (
  <ScrollReveal delay={delay} direction="scale">
    <div className="flex flex-col items-center gap-2 group cursor-default">
      <div className={`service-circle ${s.color} group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}>
        <span className="text-3xl">{s.icon}</span>
      </div>
      <span className={`font-heading font-700 text-sm text-center ${s.accent} dark:text-slate-200`}>{s.title}</span>
    </div>
  </ScrollReveal>
)

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-0 bg-white dark:bg-dark-bg overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-10 right-0 w-[480px] h-[480px] bg-brand-yellowPale dark:bg-yellow-900/20 blob-yellow opacity-60 -translate-y-10 translate-x-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-greenPale dark:bg-green-900/20 blob-green opacity-50 translate-y-20 -translate-x-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
            <span className="section-label mb-3 block">Dog Daycare & Boarding</span>
            <h1 className="font-display text-6xl md:text-7xl leading-tight text-slate-800 dark:text-dark-text mb-2">
              Enjoy Your<br />
              <span className="text-brand-orange">Holiday</span>
            </h1>
            <p className="font-heading text-slate-500 dark:text-dark-muted text-lg mb-8 leading-relaxed max-w-md">
              Your pets will always be especially plenty of human interaction, diet watch, and love. Your dog deserves the absolute best.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/contact" className="btn-orange text-base px-8 py-3.5">
                Book Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/services" className="btn-outline-orange text-base px-8 py-3.5">Explore Services</Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              {[['500+','Happy Dogs'],['5 Yrs','Experience'],['4.9★','Rating']].map(([n,l]) => (
                <div key={l} className="text-center">
                  <div className="font-display text-2xl text-brand-orange">{n}</div>
                  <div className="font-heading text-xs text-slate-500 dark:text-dark-muted">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right image with blob */}
          <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.8,delay:0.2}} className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="blob-yellow w-full aspect-square bg-brand-yellow/30 dark:bg-yellow-800/20 absolute inset-0 animate-float" />
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=700&q=85"
                alt="Happy dog" className="relative z-10 w-full rounded-3xl object-cover aspect-[4/5] shadow-2xl" />
              {/* Floating badge */}
              <motion.div animate={{y:[-5,5,-5]}} transition={{duration:3,repeat:Infinity,ease:'easeInOut'}}
                className="absolute top-8 -left-6 bg-white dark:bg-dark-card rounded-2xl shadow-xl p-3 z-20">
                <div className="text-2xl mb-1 text-center">🐾</div>
                <div className="font-display text-brand-orange text-sm">Cat Boarding</div>
                <div className="text-xs text-slate-500 font-heading">Available!</div>
              </motion.div>
              <motion.div animate={{y:[5,-5,5]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
                className="absolute bottom-10 -right-4 bg-brand-orange rounded-2xl shadow-xl p-3 z-20 text-white text-center">
                <div className="font-display text-lg">98%</div>
                <div className="font-heading text-xs">Return Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── KEEP THEM HAPPY ── */}
      <section className="py-20 bg-white dark:bg-dark-bg relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-yellowPale dark:bg-yellow-900/10 blob-yellow opacity-60 pointer-events-none -translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-brand-yellow/30 blob-yellow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=700&q=80"
                alt="Dog with toys" className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-xl object-cover aspect-square" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <span className="section-label block mb-2">Why Us</span>
            <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text leading-tight mb-4">
              We can keep<br /><span className="text-brand-orange">them happy</span>
            </h2>
            <p className="text-slate-500 dark:text-dark-muted font-heading leading-relaxed mb-6">
              From the time they arrive until they say their farewells, our tails wag with limitless affections and point to their matter — giving your dog a truly joyful experience every single day.
            </p>
            <Link to="/about" className="btn-orange">Know More</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES CIRCLES ── */}
      <section className="py-20 bg-slate-50 dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label block mb-2">Our Services</span>
              <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text">Everything Your Dog Needs</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {services.map((s, i) => <ServiceCircle key={s.id} s={s} delay={i * 0.07} />)}
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section className="py-20 bg-white dark:bg-dark-bg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-skyPale dark:bg-sky-900/10 blob-sky opacity-50 translate-x-20 -translate-y-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <span className="section-label block mb-2">Fun & Fitness</span>
            <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text leading-tight mb-4">
              Activities and<br /><span className="text-brand-orange">Exercise</span>
            </h2>
            <p className="text-slate-500 dark:text-dark-muted font-heading leading-relaxed mb-6">
              Our puppies and active-energy dogs have plenty of opportunities for exercise, lots of play and are ready to play from the moment they arrive.
            </p>
            <div className="flex gap-3 flex-wrap">
              {['🎾 Eat','🏃 Play','🛁 Groom'].map(a => (
                <span key={a} className="bg-brand-orangePale text-brand-orange font-heading font-700 text-sm px-4 py-2 rounded-full">{a}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <Link to="/services" className="btn-outline-orange">View More</Link>
              <Link to="/contact" className="btn-orange">Book Now</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="w-72 h-72 bg-brand-sky/20 blob-sky absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&q=80"
                alt="Dog swimming" className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-xl object-cover aspect-square" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-20 bg-slate-50 dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-12">
            <span className="section-label block mb-2">Detailed Services</span>
            <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text">What We Do Best</h2>
          </div></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0,4).map((s, i) => (
              <ScrollReveal key={s.id} delay={i*0.08}>
                <div className="card-white p-6 group hover:-translate-y-2 transition-transform duration-300">
                  <div className={`service-circle ${s.color} w-14 h-14 mx-0 mb-4`}><span className="text-2xl">{s.icon}</span></div>
                  <h3 className="font-heading font-800 text-slate-800 dark:text-dark-text mb-2">{s.title}</h3>
                  <p className="text-slate-500 dark:text-dark-muted text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/services" className={`font-heading font-700 text-sm ${s.accent} hover:underline underline-offset-2`}>View More →</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 bg-white dark:bg-dark-bg relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-greenPale dark:bg-green-900/10 blob-green opacity-40 -translate-x-20 translate-y-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="w-full h-80 bg-brand-green/20 blob-green absolute inset-0 my-auto" />
              <img src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=700&q=80"
                alt="Happy dog" className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-xl object-cover aspect-square" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="text-brand-orange text-6xl font-display mb-4 leading-none">"</div>
            <p className="font-heading text-xl text-slate-700 dark:text-dark-text leading-relaxed mb-6 italic">
              We love bringing Lexi to Pawcation! The staff is always so friendly and it's so convenient for our busy schedules!
            </p>
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" alt="Jane" className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-orange" />
              <div>
                <div className="font-heading font-800 text-slate-800 dark:text-dark-text">Sam Gore</div>
                <div className="text-xs text-slate-500 dark:text-dark-muted">Owner, Labrador</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 bg-slate-50 dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-14">
            <span className="section-label block mb-2">Pet Care Pricing</span>
            <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text">The Best Choice</h2>
            <p className="font-heading text-slate-500 dark:text-dark-muted mt-3 max-w-md mx-auto text-sm">
              We take the responsibility of caring for pets very seriously. They are members of your family.
            </p>
          </div></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {pricing.map((p, i) => (
              <ScrollReveal key={p.plan} delay={i*0.1}>
                <div className={`card-white p-7 text-center relative overflow-hidden ${p.popular ? 'bg-brand-orange dark:bg-brand-orange ring-4 ring-brand-orange/30' : ''}`}>
                  {p.popular && <div className="absolute top-3 right-3 bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">Popular</div>}
                  {p.badge && <div className="absolute top-3 right-3 bg-brand-orangePale text-brand-orange text-xs font-bold px-2 py-0.5 rounded-full">{p.badge}</div>}
                  <div className={`font-heading text-sm mb-3 ${p.popular?'text-white/80':'text-slate-500'}`}>Pet Care</div>
                  <div className={`font-display text-4xl mb-1 ${p.popular?'text-white':'text-brand-orange'}`}>{p.plan}</div>
                  {p.save && <div className="text-xs text-green-300 font-bold mb-3">{p.save}</div>}
                  <div className="mt-4 space-y-2 text-sm">
                    {[['Daycare',p.daycare],['Boarding',p.boarding],['Grooming',p.grooming],['Pickup',p.pickup]].map(([l,v]) => (
                      <div key={l} className={`flex justify-between ${p.popular?'text-white':'text-slate-600 dark:text-dark-muted'}`}>
                        <span>{l}</span><span className="font-bold">{v}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className={`mt-6 block font-heading font-bold text-sm py-2.5 rounded-full transition-all ${p.popular?'bg-white text-brand-orange hover:bg-orange-50':'btn-orange w-full text-center'}`}>
                    {p.popular ? 'Get Started' : 'Book Now'}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECK-IN TIME ── */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <span className="section-label block mb-2">Easy Process</span>
            <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text leading-tight mb-6">Check-in Time</h2>
            <div className="space-y-5">
              {[
                { icon:'🕐', title:'From 8 AM to 12 PM', desc:'Arrange and drop off and count down a certain time after getting into office and everything is fine.' },
                { icon:'🐾', title:'Favourite Toys', desc:'If your dog has separation anxiety we encourage you to bring something that smells to them from home.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orangePale flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
                  <div>
                    <h4 className="font-heading font-800 text-slate-800 dark:text-dark-text mb-1">{title}</h4>
                    <p className="text-slate-500 dark:text-dark-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="tel:+919876543210" className="btn-orange mt-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              +91 98765 43210
            </a>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="w-full h-80 bg-brand-greenPale blob-green absolute inset-0 my-auto" />
              <img src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=700&q=80"
                alt="Happy family with dog" className="relative z-10 w-full rounded-3xl shadow-xl object-cover aspect-[4/3]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── QUOTE CALCULATOR ── */}
      <section className="py-20 bg-slate-50 dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="w-64 h-64 bg-brand-yellow/30 blob-yellow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80"
                alt="Puppy" className="relative z-10 w-full max-w-xs mx-auto rounded-3xl shadow-xl object-cover aspect-square" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="card-white p-8 rounded-3xl">
              <h3 className="font-display text-3xl text-slate-800 dark:text-dark-text mb-1">Get a quote for</h3>
              <h3 className="font-display text-3xl text-brand-orange mb-6">pet boarding</h3>
              <div className="space-y-4">
                {['Name','Phone','Select a start'].map(ph => (
                  <input key={ph} placeholder={ph} className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg text-sm outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange text-slate-700 dark:text-dark-text placeholder:text-slate-400" />
                ))}
                <div className="py-3 border-b border-slate-200 dark:border-dark-border flex justify-between items-center">
                  <span className="font-heading font-700 text-slate-700 dark:text-dark-text">Number of days:</span>
                  <input type="range" min="1" max="30" defaultValue="10" className="w-32 accent-brand-orange" />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-heading font-700 text-slate-700 dark:text-dark-text">Total:</span>
                  <span className="font-display text-3xl text-brand-orange">₹ 3,500.00</span>
                </div>
              </div>
              <Link to="/contact" className="btn-orange mt-6 w-full justify-center">Get Quote</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80" alt="dogs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-orange/80 dark:bg-brand-orange/90" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl text-white mb-4">Happy to welcome you<br/>to our circle of friends</h2>
            <p className="text-white/80 font-heading mb-8">Join hundreds of happy pet parents who trust Sky's Pawcation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-brand-orange font-heading font-bold px-8 py-3.5 rounded-full hover:bg-orange-50 hover:scale-105 transition-all">
                Book a Tour
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="border-2 border-white text-white font-heading font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-brand-orange hover:scale-105 transition-all">
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

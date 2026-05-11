import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { processSteps } from '../data'

export default function Process() {
  return (
    <main className="pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 bg-white dark:bg-dark-bg overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-yellowPale blob-yellow opacity-60 translate-x-20 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-brand-greenPale blob-green opacity-40 -translate-x-10 translate-y-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="section-label block mb-3">Step by Step</span>
            <h1 className="font-display text-5xl md:text-6xl text-slate-800 dark:text-dark-text leading-tight mb-4">
              How Sky's Pawcation <span className="text-brand-orange">Works</span>
            </h1>
            <p className="font-heading text-slate-500 dark:text-dark-muted text-lg leading-relaxed">
              Getting your dog into our care is simple, transparent, and stress-free. Here's exactly what to expect.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MAIN STEPS - big alternating sections */}
      {[
        { num:'01', title:'Fill the Booking Form', desc:'Start by completing our quick online form or give us a call. Tell us about your dog — name, breed, age, any health conditions, dietary preferences, and which service you need. This helps us prepare everything before your dog even arrives.', img:'https://images.unsplash.com/photo-1581888227599-779811939961?w=700&q=80', icon:'📋', color:'bg-brand-orangePale', accent:'text-brand-orange' },
        { num:'02', title:'Free Meet & Greet Visit', desc:'We invite you and your dog for a no-commitment orientation visit. Your dog explores the facility, meets our team and other dogs, and we assess their temperament and needs. You\'ll see our space, ask all your questions, and leave with total confidence.', img:'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&q=80', icon:'🤝', color:'bg-brand-greenPale', accent:'text-brand-green' },
        { num:'03', title:'Drop Off & We Handle the Rest', desc:'On the day of service, simply drop your dog off at our facility or schedule a pickup. Our team takes over with love. Your dog gets structured play, meals as per schedule, rest time, and constant supervision from trained, certified professionals.', img:'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80', icon:'🐾', color:'bg-brand-yellowPale', accent:'text-yellow-600' },
        { num:'04', title:'Live Updates Throughout the Day', desc:'We know how much you miss your pup. That\'s why we send real-time photo and video updates throughout the day via WhatsApp. You\'ll see your dog playing, eating, resting and having the time of their life — without any worry on your end.', img:'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=700&q=80', icon:'📸', color:'bg-brand-skyPale', accent:'text-brand-sky' },
      ].map(({ num, title, desc, img, icon, color, accent }, i) => (
        <section key={num} className={`py-20 ${i%2===0?'bg-slate-50 dark:bg-dark-card':'bg-white dark:bg-dark-bg'} overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i%2===1?'lg:[&>*:first-child]:order-2':''}`}>
              <ScrollReveal direction={i%2===0?'right':'left'}>
                <div className="relative">
                  <div className={`w-64 h-64 ${color} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${i%2===0?'blob-orange':i===1?'blob-green':i===2?'blob-yellow':'blob-sky'}`} />
                  <img src={img} alt={title} className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-2xl object-cover aspect-square" />
                </div>
              </ScrollReveal>
              <ScrollReveal direction={i%2===0?'left':'right'}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${color} ${accent} font-heading font-800 text-sm mb-4`}>
                  <span>{icon}</span> Step {num}
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-slate-800 dark:text-dark-text leading-tight mb-4">{title}</h2>
                <p className="font-heading text-slate-500 dark:text-dark-muted leading-relaxed mb-6">{desc}</p>
                {i === 3 && (
                  <Link to="/contact" className="btn-orange">Get Started</Link>
                )}
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Entry Requirements */}
      <section className="py-20 bg-slate-50 dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-14">
            <span className="section-label block mb-2">Before You Arrive</span>
            <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text">Entry Requirements</h2>
          </div></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon:'💉', title:'Vaccinations', desc:'Up-to-date core vaccines (DHPP, Rabies). Records must be submitted at least 48 hours before first visit.' },
              { icon:'🐜', title:'Flea & Tick Free', desc:'Your dog must have received flea and tick prevention treatment within the last 30 days.' },
              { icon:'🩺', title:'Health Check', desc:'Dogs must be visibly healthy with no signs of contagious illness on arrival. We reserve the right to decline entry.' },
              { icon:'📋', title:'Medical History', desc:'Share your dog\'s medical history and any existing conditions. Our staff is trained to manage most health needs.' },
              { icon:'🍽️', title:'Feeding Schedule', desc:'Provide your dog\'s usual feeding times, portion sizes, and any dietary restrictions or allergies.' },
              { icon:'📞', title:'Emergency Contact', desc:'A reachable emergency contact number is mandatory. We will always keep you informed.' },
            ].map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i*0.08}>
                <div className="card-white p-6 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orangePale flex items-center justify-center text-xl mb-4 group-hover:bg-brand-orange group-hover:text-slate-900 group-hover:scale-110 transition-all duration-300">{icon}</div>
                  <h3 className="font-heading font-800 text-slate-800 dark:text-dark-text mb-2">{title}</h3>
                  <p className="font-heading text-slate-500 dark:text-dark-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal><div className="text-center mb-12">
            <span className="section-label block mb-2">FAQ</span>
            <h2 className="font-display text-5xl text-slate-800 dark:text-dark-text">Common Questions</h2>
          </div></ScrollReveal>
          <div className="space-y-4">
            {[
              ['What if my dog is not social?', 'We do an assessment during the meet and greet. Dogs with social challenges are managed separately with one-on-one attention.'],
              ['Can I visit my dog during the stay?', 'Of course! We encourage visits. Just let us know in advance so we can prepare.'],
              ['What happens in a medical emergency?', 'We have a vet on call at all times. If emergency care is needed, we contact you immediately and act on your instructions.'],
              ['Do you accept puppies?', 'Yes, puppies over 12 weeks with first vaccinations are welcome. They are kept in a separate puppy play zone.'],
              ['How do I cancel a booking?', 'Cancel at least 24 hours in advance for a full refund. Same-day cancellations are charged 50% of the booking fee.'],
            ].map(([q, a], i) => (
              <ScrollReveal key={q} delay={i*0.07}>
                <details className="card-white group cursor-pointer">
                  <summary className="p-5 font-heading font-700 text-slate-800 dark:text-dark-text flex justify-between items-center list-none">
                    {q}
                    <span className="text-brand-orange group-open:rotate-45 transition-transform duration-200 text-xl">+</span>
                  </summary>
                  <div className="px-5 pb-5 font-heading text-slate-500 dark:text-dark-muted text-sm leading-relaxed border-t border-slate-100 dark:border-dark-border pt-3">
                    {a}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-orange">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl text-white mb-4">Ready to Get Started?</h2>
            <p className="font-heading text-white/80 mb-8">Book your free meet and greet today — no commitment required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-slate-900 text-white font-heading font-bold px-8 py-3.5 rounded-full hover:bg-slate-800 hover:scale-105 transition-all">Book Free Visit</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="border-2 border-slate-900 text-slate-900 font-heading font-bold px-8 py-3.5 rounded-full hover:bg-slate-900 hover:text-white hover:scale-105 transition-all">WhatsApp Us</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

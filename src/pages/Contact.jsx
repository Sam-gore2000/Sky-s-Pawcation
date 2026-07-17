import ScrollReveal from '../components/ScrollReveal'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <main className="pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-16 bg-white dark:bg-dark-bg overflow-hidden">
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-brand-orangePale blob-orange opacity-50 -translate-x-20 translate-y-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <span className="section-label block mb-2">Get In Touch</span>
            <h1 className="font-display text-5xl md:text-6xl text-slate-800 dark:text-dark-text mb-4">Contact Us</h1>
            <p className="font-heading text-slate-500 dark:text-dark-muted max-w-xl mx-auto text-sm">
              We'd love to hear from you. Call, email or drop in — we're always here for you and your dog.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Map + Info + Form */}
      <section className="py-16 bg-slate-50 dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 mb-10">
            {/* Map */}
            <ScrollReveal direction="right">
              <div className="rounded-3xl overflow-hidden shadow-xl h-72 sm:h-96">
                <iframe title="Sky's Pawcation Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15079.998890977693!2d72.81717065!3d19.1334056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888ae67fd%3A0xb924928275bfe252!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </ScrollReveal>

            {/* Info card - matching reference design */}
            <ScrollReveal direction="left">
              <div className="card-white p-7 h-full flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100 dark:border-dark-border">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=150&q=80" alt="Sky's" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-display text-lg text-brand-orange">Sky's</div>
                    <div className="font-heading font-800 text-slate-700 dark:text-dark-text">Pawcation</div>
                  </div>
                </div>
                <div className="space-y-5 flex-1">
                  {[
                    { icon:'📍', label:'Address',   value:'sonai park lane 2 ,pune', href: null },
                    { icon:'📞', label:'Telephone', value:'+91 98765 43210\n+91 98765 43211', href:'tel:+917768969620' },
                    { icon:'✉️', label:'E-mail',    value:'hello@skyspawcation.com', href:'mailto:hello@skyspawcation.com' },
                    { icon:'🕐', label:'Hours',     value:'Mon–Sat: 7AM–8PM\nSunday: 9AM–6PM', href: null },
                  ].map(({ icon, label, value, href }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-orangePale flex items-center justify-center text-lg flex-shrink-0">{icon}</div>
                      <div>
                        <div className="text-xs font-heading font-800 text-brand-orange uppercase tracking-wide mb-0.5">{label}</div>
                        {href ? (
                          <a href={href} className="font-heading text-slate-600 dark:text-dark-muted text-sm hover:text-brand-orange transition-colors whitespace-pre-line">{value}</a>
                        ) : (
                          <p className="font-heading text-slate-600 dark:text-dark-muted text-sm whitespace-pre-line">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {/* WhatsApp */}
                <a href="https://wa.me/7768969620" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-5 py-3 rounded-2xl transition-all hover:scale-105 mt-5 justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal>
            <div className="card-white p-8 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl text-slate-800 dark:text-dark-text mb-2 text-center">Send Us a Message</h2>
              <p className="font-heading text-slate-500 dark:text-dark-muted text-sm text-center mb-8">We respond within 24 hours during working days.</p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

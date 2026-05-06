import { useState } from 'react'
import { motion } from 'framer-motion'

function validate(data) {
  const errors = {}
  if (!data.name || data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters'
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email address'
  if (!data.phone || !/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ''))) errors.phone = 'Enter a valid 10-digit mobile number'
  if (!data.message || data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters'
  return errors
}

const inputClass = (err) =>
  `w-full px-4 py-3 rounded-2xl border text-sm bg-white dark:bg-dark-bg text-slate-800 dark:text-dark-text placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 font-body ${
    err ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 dark:border-dark-border focus:ring-brand-orange/30 focus:border-brand-orange'
  }`

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    console.log('Form submitted:', form)
    setSubmitting(false)
    setDone(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setDone(false), 6000)
  }

  if (done) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-greenPale dark:bg-green-900/20 border border-brand-green/30 rounded-3xl p-12 text-center">
        <div className="text-5xl mb-4">🐾</div>
        <h3 className="font-display text-2xl text-brand-green mb-2">Message Sent!</h3>
        <p className="text-slate-500 dark:text-dark-muted font-body text-sm">We will get back to you within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {[
        { name: 'name',  label: 'Your Name',     type: 'text',  placeholder: 'Rahul Sharma' },
        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'rahul@example.com' },
        { name: 'phone', label: 'Phone Number',  type: 'tel',   placeholder: '9876543210' },
      ].map(({ name, label, type, placeholder }) => (
        <div key={name}>
          <label className="block text-sm font-heading font-bold text-slate-700 dark:text-dark-text mb-1.5">{label}</label>
          <input name={name} type={type} value={form[name]} onChange={handleChange} placeholder={placeholder} className={inputClass(errors[name])} />
          {errors[name] && <p className="mt-1 text-xs text-red-500">{errors[name]}</p>}
        </div>
      ))}
      <div>
        <label className="block text-sm font-heading font-bold text-slate-700 dark:text-dark-text mb-1.5">Message</label>
        <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your dog and what service you need..." className={inputClass(errors.message)} />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <button type="submit" disabled={submitting} className="btn-orange w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed text-base">
        {submitting ? (<><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>) : 'Send Message'}
      </button>
    </form>
  )
}

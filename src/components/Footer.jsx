import { Link } from 'react-router-dom'
import PawLogo from './PawLogo'

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-dark-bg text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <PawLogo size={40} />
              <div>
                <span className="font-display text-xl text-brand-orange block leading-none">Sky's</span>
                <span className="font-heading text-sm text-white block leading-none">Pawcation</span>
              </div>
            </Link>
            <address className="not-italic text-sm space-y-1.5 text-slate-400">
              <p className="flex gap-2"><span className="text-brand-orange">📍</span> PO BOX Collins Street West</p>
              <p className="flex gap-2"><span className="text-brand-orange">📞</span> <a href="tel:+919876543210" className="hover:text-brand-orange">+91 98765 43210</a></p>
              <p className="flex gap-2"><span className="text-brand-orange">🕐</span> Mon–Sun: 8AM – 8PM</p>
            </address>
            <div className="flex gap-2 mt-5">
              {['Twitter','Instagram','Facebook'].map(s => (
                <span key={s} title={s}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-orange flex items-center justify-center text-xs text-slate-400 hover:text-white cursor-pointer transition-all duration-200 hover:scale-110">
                  {s[0]}
                </span>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              {[['/', 'Home'],['/about','Our Story'],['/process','How It Works'],['/gallery','Gallery']].map(([to,l]) => (
                <li key={to}><Link to={to} className="hover:text-brand-orange transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[['Dog Boarding','Dog Daycare','Pet Grooming','Dog Training','Pickup & Drop']].flat().map(s => (
                <li key={s}><Link to="/services" className="hover:text-brand-orange transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Stay updated with tips, news and special offers.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 bg-slate-800 rounded-full px-4 py-2 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-brand-orange" />
              <button className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-brand-orangeLight transition-colors whitespace-nowrap">Subscribe</button>
            </div>
            <p className="text-xs text-slate-600 mt-3">Never miss new launches!</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-600">© 2024 Sky's Pawcation. All rights reserved.</p>
          <p className="text-xs text-slate-700">Made with love in Mumbai</p>
        </div>
      </div>
    </footer>
  )
}

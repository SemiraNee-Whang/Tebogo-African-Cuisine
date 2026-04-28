import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const NavLink = ({ to, children }: { to: string; children: ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all flowing-underline relative ${
        isActive ? 'text-brand-gold' : 'text-brand-deep hover:text-brand-gold'
      }`}
    >
      {children}
    </Link>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const business = {
    phone: "073 973 9417",
    hours: "Open Daily · Closes at 8 PM",
  };

  return (
    <>
      <header className={`fixed top-0 w-full h-24 px-6 md:px-12 flex items-center justify-between z-50 transition-all duration-700 ${
        scrolled ? 'bg-white shadow-md border-b border-black/10' : 'bg-transparent'
      }`}>
        <Link to="/" className="flex flex-col group">
          <span className="text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase">Centurion, SA</span>
          <span className="font-display text-2xl font-black tracking-tight text-brand-deep group-hover:text-brand-gold transition-colors">Tebogo’s</span>
        </Link>

        <nav className="hidden lg:flex gap-10 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Chef's Choice</NavLink>
          <NavLink to="/story">Our Story</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest">{business.hours}</span>
            <span className="text-[10px] text-brand-gold font-black uppercase tracking-widest">Call Ahead Required</span>
          </div>
          <a 
            href={`tel:${business.phone}`}
            className="bg-brand-earth text-white px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl flex items-center gap-3"
          >
            <Phone size={12} className="opacity-70" />
            <span>Order</span>
          </a>
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} className="text-brand-deep" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-brand-cream z-[60] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="font-display text-3xl font-black">Tebogo’s</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 text-center text-5xl font-display italic">
              {[
                { label: 'Home', to: '/' },
                { label: 'Chef\'s Choice', to: '/menu' },
                { label: 'Our Story', to: '/story' },
                { label: 'Find Us', to: '/contact' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto pt-16 flex flex-col items-center">
              <a href={`tel:${business.phone}`} className="text-brand-gold text-2xl font-bold mb-4">{business.phone}</a>
              <p className="text-xs uppercase tracking-widest text-gray-400">Centurion, South Africa</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

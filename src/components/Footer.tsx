import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-12 bg-brand-earth text-white border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[10px] tracking-[0.4em] font-bold text-brand-gold uppercase mb-2">Tebogo’s African Cuisine</span>
          <span className="font-display text-2xl font-black text-white tracking-tight">Authenticity you can taste.</span>
        </div>

        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          <Link to="/menu" className="hover:text-brand-gold transition-colors">Chef's Choice</Link>
          <Link to="/story" className="hover:text-brand-gold transition-colors">Story</Link>
          <span className="cursor-default">© 2024</span>
        </div>

        <div className="text-right">
           <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em] mb-2">Cleanliness Rated</p>
           <div className="flex gap-1 justify-center md:justify-end">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#C68A12" stroke="none" />)}
           </div>
        </div>
      </div>
    </footer>
  );
};

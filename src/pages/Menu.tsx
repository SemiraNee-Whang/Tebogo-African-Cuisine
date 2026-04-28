import { motion } from 'motion/react';
import { 
  Star, 
  Heart, 
  UtensilsCrossed 
} from 'lucide-react';

export default function Menu() {
  return (
    <main className="pt-32 pb-32">
      <section id="menu" className="px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-gold text-xs font-bold tracking-[0.4em] mb-4 uppercase block">Our Heritage Menu</span>
              <h2 className="serif text-5xl md:text-7xl font-black">Chef's <span className="italic text-brand-gold">Choice</span></h2>
            </div>
            <p className="text-gray-400 font-serif text-lg md:text-xl max-w-sm">Authenticity you can taste, cleanliness you can trust. Every dish a masterpiece.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main Dish Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-7 bg-brand-cream rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-between min-h-[500px] traditional-border group"
            >
              <div className="absolute inset-0 bg-organic-pattern opacity-[0.03]"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="serif text-4xl font-bold">Signature Mogodu</h3>
                  <span className="text-brand-gold text-2xl font-black">R75</span>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 block font-bold">Slow-cooked tripe / traditional herbs / home-style</p>
                <p className="text-xl text-brand-deep/70 max-w-md italic font-serif">“Rich, flavourful, perfectly cooked. Comfort food that touches the soul with every mouthful.”</p>
              </div>
              <div className="relative z-10 flex gap-4 mt-12">
                 <div className="w-16 h-[2px] bg-brand-gold mt-6 origin-left scale-x-100 group-hover:scale-x-150 transition-transform"></div>
                 <div className="bg-brand-earth text-white/90 p-6 rounded-2xl text-center flex flex-col justify-center items-center shadow-lg">
                  <span className="text-2xl font-bold italic serif">10/10</span>
                  <span className="text-[10px] uppercase tracking-tighter font-bold opacity-60">Hygiene Rated</span>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-gold/5 border border-brand-gold/10 group-hover:scale-110 transition-all duration-700 flex items-center justify-center">
                 <UtensilsCrossed size={80} className="text-brand-gold/20" />
              </div>
            </motion.div>

            {/* Second Dish Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-5 bg-brand-earth text-white rounded-[3rem] p-12 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="serif text-3xl font-bold">Tender Pork Trotters</h3>
                  <span className="text-brand-gold text-xl font-bold">R85</span>
                </div>
                <p className="text-brand-cream/60 leading-relaxed mb-8">Juicy, tender, and unforgettable. Our secret family recipe passed down through generations.</p>
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/5">
                  <Star className="text-brand-gold fill-brand-gold mb-2" size={16} />
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Best Seller</p>
                </div>
                <div className="bg-brand-gold text-brand-deep p-6 rounded-3xl">
                  <Heart size={16} className="mb-2" />
                  <p className="text-[10px] uppercase tracking-widest font-bold">Chef's Pick</p>
                </div>
              </div>
            </motion.div>

            {/* Smaller Stat Cards */}
            <div className="md:col-span-4 bg-[#fcfaf7] border border-black/5 rounded-[2.5rem] p-10 flex flex-col items-center text-center justify-center">
              <UtensilsCrossed className="text-brand-gold mb-4" size={32} />
              <span className="text-4xl font-display font-black block mb-1 tracking-tighter">Authentic</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Methodology</span>
            </div>

            <div className="md:col-span-8 bg-brand-warm/30 rounded-[2.5rem] p-10 flex items-center justify-between overflow-hidden relative">
              <div className="max-w-xs relative z-10">
                <h4 className="serif text-2xl font-bold mb-2">Home-Style Meals</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-serif italic">
                  Hearty, comforting, and generous portions. Feels like a Sunday afternoon at home, every day. 
                  Every plate is balanced with traditional accompaniments that enhance the natural richness of the main dish.
                </p>
              </div>
              <div className="hidden sm:flex gap-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-brand-gold font-bold">R50</div>
              </div>
              <div className="absolute -right-10 top-0 h-full w-48 bg-dot-pattern opacity-10"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

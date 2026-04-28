import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowUpRight, 
  Star, 
  Heart, 
  UtensilsCrossed, 
  CheckCircle 
} from 'lucide-react';
import { OrganicDecoration } from '../components/OrganicDecoration';
import { Link } from 'react-router-dom';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const business = {
    phone: "073 973 9417",
  };

  return (
    <main className="z-10">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-24 overflow-hidden pt-24">
        <OrganicDecoration />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-0 items-center">
          <motion.div 
            className="col-span-12 lg:col-span-7 flex flex-col justify-center relative py-12"
          >
            <div className="absolute -left-12 top-1/4 h-64 w-[1px] bg-brand-gold/20 hidden lg:block"></div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-gold text-xs font-bold tracking-[0.4em] mb-6 uppercase inline-flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-brand-gold"></div>
              Authentic Home-Cooked Luxury
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="serif text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-[0.95]"
            >
              Where Real <br />
              <span className="text-brand-gold italic">African Flavour</span> <br />
              Feels Like Home
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-brand-deep max-w-lg mb-12 leading-relaxed font-bold"
            >
              Clean. Delicious. Authentic meals made with love. Experience the finest Mogodu and Pork Trotters in Centurion.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a 
                href={`tel:${business.phone}`} 
                className="bg-brand-earth text-white px-10 py-5 rounded-full font-bold text-sm tracking-[0.15em] uppercase hover:bg-black transition-all shadow-2xl flex items-center justify-center gap-4 group"
              >
                <span>Call to Order</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <Link to="/contact" className="border-2 border-brand-earth bg-white text-brand-earth px-10 py-5 rounded-full font-bold text-sm tracking-[0.15em] uppercase hover:bg-brand-earth hover:text-white transition-all text-center shadow-lg">
                Get Directions
              </Link>
            </motion.div>

            <div className="mt-16 flex items-center gap-8 border-t border-brand-gold/10 pt-12">
              <div className="flex -space-x-3">
                {['LM', 'TS', 'LK'].map((initials, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-cream bg-brand-earth flex items-center justify-center text-[10px] font-bold text-white tracking-widest">
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1 text-brand-gold mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" stroke="none" />)}
                </div>
                <p className="text-xs font-bold text-brand-deep tracking-widest uppercase">10/10 Local Reputation</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ scale: heroScale }}
            className="col-span-12 lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl group cursor-none bg-gradient-earth p-1">
              <div className="w-full h-full rounded-[3.8rem] bg-mesh-gold relative overflow-hidden flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#C68A12" strokeWidth="0.5" />
                    <path d="M0,70 Q25,45 50,70 T100,70" fill="none" stroke="#C68A12" strokeWidth="0.5" />
                  </svg>
                </motion.div>
                <div className="relative z-10 text-center px-12">
                   <div className="mb-8 flex justify-center">
                      <div className="w-24 h-24 rounded-full border-2 border-brand-gold/30 flex items-center justify-center">
                         <UtensilsCrossed size={40} className="text-brand-gold opacity-40" />
                      </div>
                   </div>
                   <h2 className="serif text-5xl font-black text-brand-deep leading-tight mb-4">Crafting <br /><span className="italic text-brand-gold">Heritage</span></h2>
                   <p className="text-sm font-serif text-brand-deep/50 uppercase tracking-[0.2em] font-bold">Centurion • South Africa</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/10 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-12 left-12 text-brand-deep">
                <Heart className="text-brand-gold fill-brand-gold mb-4" />
                <p className="serif text-3xl font-bold italic leading-tight">Made with Love, <br />Served with Pride.</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-gold rounded-full opacity-20 blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Why People Love Us Snippet */}
      <section className="py-32 px-6 md:px-12 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { text: "10/10… the food was worth the drive. Best mogodu and pork trotters in town.", author: "Lindiwe M." },
                  { text: "Clean, delicious, and warm. Truly feels like a home-cooked meal made with love.", author: "Tshepo S." },
                  { text: "Exceptional hygiene standards and friendly service. Consistently high quality.", author: "Lerato K." },
                  { text: "Affordable pricing for such a premium feel. I could eat here every day.", author: "Busi N." },
                  { text: "The tripe is perfectly cooked—tender and so flavourful. A must-visit.", author: "Kabelo D." },
                  { text: "Best comfort food in South Africa. The environment is spotless and welcoming.", author: "Mpho R." }
                ].map((review, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-brand-gold/5 flex flex-col justify-between"
                  >
                    <p className="text-[13px] italic font-serif text-brand-deep/80 leading-snug mb-4">“{review.text}”</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold">{review.author}</span>
                      <div className="flex gap-0.5 transform scale-75">
                        {[...Array(5)].map((_, j) => <Star key={j} size={10} fill="#C68A12" stroke="none" />)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-gold/10 blur-[80px] -z-10"></div>
            </div>

            <div className="space-y-12">
              <div>
                 <span className="text-brand-gold text-xs font-bold tracking-[0.4em] mb-4 uppercase block">Quality Standards</span>
                 <h2 className="serif text-5xl md:text-7xl font-black mb-8 leading-none">Why People <br /><span className="italic text-brand-gold">Choose Us</span></h2>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Hygiene Focused", text: "Exceptional cleanliness and hygiene in every meal.", icon: <CheckCircle /> },
                  { title: "True Homemade Taste", text: "Cooked with love and heart, not mass-produced.", icon: <Heart /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-gold shadow-md group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 font-display tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 text-base font-serif">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="pt-8">
                <Link to="/story" className="text-brand-earth font-bold uppercase tracking-widest text-xs flex items-center gap-3 group">
                  Learn Our Story
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

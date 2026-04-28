import { MapPin, Clock, Phone } from 'lucide-react';

export default function Contact() {
  const business = {
    location: "8922 Realeboga St, Centurion, 0175",
    phone: "073 973 9417",
    hours: "Open Daily · Closes at 8 PM",
    plusCode: "432X+W6 Centurion"
  };

  return (
    <main className="pt-32 min-h-screen flex flex-col">
      <section id="contact" className="py-24 px-6 md:px-12 bg-brand-cream flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-12">
             <div>
                <span className="text-brand-gold text-xs font-bold tracking-[0.4em] mb-4 uppercase block">Visit the Home of Flavour</span>
                <h2 className="serif text-5xl font-black mb-4">Find Us</h2>
                <p className="text-gray-500 font-serif text-lg">Taste the difference for yourself. We are located in the heart of Centurion.</p>
             </div>

             <div className="space-y-8">
               <div className="flex gap-6 items-start">
                  <MapPin className="text-brand-gold mt-1" size={20} />
                  <div>
                    <p className="font-bold text-lg mb-1 leading-tight">{business.location}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Plus Code: {business.plusCode}</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <Clock className="text-brand-gold mt-1" size={20} />
                  <div>
                    <p className="font-bold text-lg mb-1 leading-tight">{business.hours}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold italic">Dine-in · Kerbside · Takeaway</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <Phone className="text-brand-gold mt-1" size={20} />
                  <div>
                    <p className="font-bold text-lg mb-1 leading-tight">{business.phone}</p>
                    <p className="text-[10px] uppercase tracking-widest text-orange-800 font-black">Call before arrival recommended</p>
                  </div>
               </div>
             </div>
          </div>

          <div className="md:col-span-7 bg-[#E5E1D8] rounded-[4rem] min-h-[500px] relative overflow-hidden flex items-center justify-center border-l border-white shadow-inner">
             <div className="absolute inset-0 bg-organic-pattern opacity-20 transform rotate-12"></div>
             <div className="relative z-10 flex flex-col items-center gap-8 px-12 text-center">
                <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-gold border-4 border-white">
                  <MapPin size={40} />
                </div>
                <h3 className="serif text-3xl font-black max-w-sm tracking-tight">{business.location}</h3>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.location)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-earth text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all"
                >
                  Open in Google Maps
                </a>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

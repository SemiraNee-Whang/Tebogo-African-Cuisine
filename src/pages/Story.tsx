import { motion } from 'motion/react';
import { Quote, Star, CheckCircle, Heart, UtensilsCrossed } from 'lucide-react';

export default function Story() {
  return (
    <main className="pt-24">
      {/* Quote Section */}
      <section id="story" className="py-40 bg-brand-earth text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-organic-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Quote className="text-brand-gold w-16 h-16 mx-auto mb-10 opacity-30" />
          <h2 className="serif text-5xl md:text-7xl font-black mb-12">The Heart of <span className="italic text-brand-gold">Tebogo’s</span></h2>
          <div className="space-y-8 text-xl md:text-2xl text-brand-cream/80 font-serif leading-relaxed italic">
            <p>“I started this kitchen not just to cook, but to feed souls. In every pot of mogodu, there is a piece of my heritage, and in every guest, there is a member of my family.”</p>
            <p className="not-italic text-sm md:text-base font-sans font-medium tracking-wide uppercase opacity-60 max-w-2xl mx-auto pt-6 border-t border-white/10">
              At Tebogo’s, we believe that true luxury lies in the details. From the meticulous cleaning of our ingredients to the patient, slow-cooking of our signatures, our service is a commitment to excellence. We don’t just serve food; we serve a tradition of care, hygiene, and warmth that begins in our heart and ends at your table.
            </p>
          </div>
          <div className="mt-16 inline-flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-2 border-brand-gold p-1 mb-4">
               <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center font-display text-2xl font-black">T</div>
            </div>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Tebogo — Founder & Head Cook</span>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-brand-gold text-xs font-bold tracking-[0.4em] mb-4 uppercase block">Our Values</span>
            <h2 className="serif text-5xl md:text-7xl font-black">Built on <span className="italic text-brand-gold">Trust</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Cleanliness", text: "Exceptional hygiene is our non-negotiable standard. We treat our kitchen like our home.", icon: <CheckCircle /> },
              { title: "Passion", text: "Every meal is a labor of love, prepared with the same care as for our own families.", icon: <Heart /> },
              { title: "Authenticity", text: "We honor traditional South African methods, bringing true soul to every plate.", icon: <UtensilsCrossed /> }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-10 bg-brand-cream rounded-[3rem]"
              >
                <div className="w-20 h-20 bg-white rounded-3xl mx-auto flex items-center justify-center text-brand-gold shadow-sm mb-8">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">{value.title}</h3>
                <p className="text-gray-500 font-serif leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

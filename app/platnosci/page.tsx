"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Zap, Trophy } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "STARTER",
    price: "299",
    period: "zł/miesiąc",
    description: "Idealny dla początkujących kolarzy",
    icon: Star,
    color: "#00f0ff",
    features: [
      "Indywidualny plan treningowy",
      "4 treningi tygodniowo",
      "Podstawowa analiza wyników",
      "Wsparcie email",
      "Dostęp do materiałów edukacyjnych",
    ],
    popular: false,
  },
  {
    name: "PRO",
    price: "599",
    period: "zł/miesiąc",
    description: "Dla zaawansowanych kolarzy",
    icon: Zap,
    color: "#b829dd",
    features: [
      "Wszystko z planu Starter",
      "6 treningów tygodniowo",
      "Zaawansowana analiza wyników",
      "Konsultacja wideo 2x miesiąc",
      "Plan żywieniowy",
      "Priorytetowe wsparcie",
    ],
    popular: true,
  },
  {
    name: "ELITE",
    price: "999",
    period: "zł/miesiąc",
    description: "Dla zawodowców i ambitnych",
    icon: Trophy,
    color: "#ff00ff",
    features: [
      "Wszystko z planu Pro",
      "Treningi 7 dni w tygodniu",
      "Analiza w czasie rzeczywistym",
      "Nielimitowane konsultacje",
      "Personalizowany plan żywieniowy",
      "Fizjoterapia w pakiecie",
      "24/7 wsparcie",
    ],
    popular: false,
  },
];

const therapyPricing = [
  {
    name: "Konsultacja Online",
    price: "150 zł",
    duration: "45 minut",
    description: "Pierwsza konsultacja fizjoterapeutyczna przez video",
  },
  {
    name: "Pakiet 5 Konsultacji",
    price: "650 zł",
    duration: "5 x 45 minut",
    description: "Oszczędzasz 100 zł",
  },
  {
    name: "Plan Rehabilitacyjny",
    price: "400 zł",
    duration: "Miesiąc",
    description: "Indywidualny plan ćwiczeń + 2 konsultacje",
  },
];

export default function CennikPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00f0ff]/20 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#b829dd]/20 rounded-full blur-[120px] animate-float pointer-events-none" style={{animationDelay: '2s'}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
              <Star className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-sm text-white/80">Przejrzysty cennik</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Wybierz swój{" "}</span>
              <span className="gradient-text glow-text">plan</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Elastyczne plany dopasowane do Twoich potrzeb i celów. 
              Skontaktuj się ze mną, aby rozpocząć współpracę.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`glass-card rounded-2xl p-8 relative ${plan.popular ? 'border-2' : ''}`}
                  style={{ borderColor: plan.popular ? plan.color : undefined }}
                >
                  {plan.popular && (
                    <div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold text-black"
                      style={{ background: plan.color }}
                    >
                      Najpopularniejszy
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}40` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: plan.color }} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/50 mb-4">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-white/50 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/kontakt">
                    <button 
                      className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 group ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black hover:scale-105' 
                          : 'glass text-white hover:bg-white/10'
                      }`}
                    >
                      <span>Wybierz plan</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Therapy Pricing */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff00ff]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Fizjoterapia{" "}</span>
              <span className="gradient-text">Zdalna</span>
            </h2>
            <p className="text-xl text-white/60">
              Profesjonalna pomoc bez wychodzenia z domu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {therapyPricing.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-white/50 mb-4">{item.description}</p>
                
                <div className="text-4xl font-bold gradient-text mb-2">
                  {item.price}
                </div>
                
                <p className="text-white/50 text-sm mb-6">{item.duration}</p>
                
                <Link href="/kontakt">
                  <button className="w-full py-3 glass rounded-xl text-white hover:bg-white/10 transition-all">
                    Umów wizytę
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/10 via-[#b829dd]/10 to-[#ff00ff]/10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Masz pytania?{" "}
              <span className="gradient-text">Napisz do mnie!</span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Chętnie odpowiem na wszystkie pytania i pomogę wybrać odpowiedni plan
            </p>
            
            <Link href="/kontakt">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center space-x-2 mx-auto">
                <span>Skontaktuj się</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

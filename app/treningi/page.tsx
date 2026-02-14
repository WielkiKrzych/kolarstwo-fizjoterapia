"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "@/lib/motion";
import { Bike, Target, TrendingUp, Calendar, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { JsonLd, createTrainingServiceSchema } from "@/components/JsonLd";

const trainingFeatures = [
  {
    icon: Target,
    title: "Indywidualne Planowanie",
    description: "Każdy plan treningowy jest tworzony na miarę Twoich celów, możliwości i czasu, jaki możesz poświęcić na trening.",
    color: "#00f0ff",
  },
  {
    icon: TrendingUp,
    title: "Stała Optymalizacja",
    description: "Regularna analiza wyników i dostosowywanie planu do Twoich postępów i zmieniających się celów.",
    color: "#ff00ff",
  },
  {
    icon: Calendar,
    title: "Elastyczny Harmonogram",
    description: "Dostosujemy plan do Twojego stylu życia - treningi rano, w południe czy wieczorem.",
    color: "#00ff88",
  },
  {
    icon: Clock,
    title: "Oszczędność Czasu",
    description: "Maksymalizacja efektywności treningów - osiągnij więcej w krótszym czasie.",
    color: "#b829dd",
  },
  {
    icon: Users,
    title: "Wsparcie Grupy",
    description: "Dołącz do społeczności pasjonatów kolarstwa, wymieniaj się doświadczeniami i motywuj się nawzajem.",
    color: "#00f0ff",
  },
  {
    icon: Bike,
    title: "Różnorodność Treningów",
    description: "Rower szosowy, MTB, treningi siłowe, interwały - wszystko dopasowane do Twoich potrzeb.",
    color: "#ff00ff",
  },
];

const trainingLevels = [
  {
    level: "POCZĄTKUJĄCY",
    description: "Dopiero zaczynasz przygodę z kolarstwem? Pomożemy Ci zbudować solidne fundamenty.",
    goals: ["Nauka prawidłowej techniki", "Budowa wytrzymałości podstawowej", "Przygotowanie do pierwszych wyścigów"],
  },
  {
    level: "ŚREDNIOZAAWANSOWANY",
    description: "Masz już doświadczenie i chcesz poprawić swoje wyniki? Skupiamy się na rozwoju konkretnej formy.",
    goals: ["Zwiększenie mocy i wydolności", "Poprawa techniki jazdy", "Przygotowanie do konkretnych wyścigów"],
  },
  {
    level: "ZAAWANSOWANY / ZAWODOWIEC",
    description: "Twoim celem są mistrzostwa? Maksymalizujemy Twój potencjał startowy.",
    goals: ["Specjalistyczne treningi", "Taktyka wyścigowa", "Pełne przygotowanie startowe"],
  },
];

export default function TreningiPage() {
  return (
    <>
      <JsonLd data={createTrainingServiceSchema()} />
      <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        {/* Floating Glow Orbs */}
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
              <Bike className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-sm text-white/80">Profesjonalne treningi kolarskie</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Profesjonalne{" "}</span>
              <span className="gradient-text glow-text">Treningi Kolarskie</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
              Indywidualne plany treningowe dostosowane do Twoich celów i możliwości. 
              Niezależnie od tego, czy dopiero zaczynasz, czy jesteś doświadczonym kolarzem - pomożemy Ci osiągnąć więcej.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center space-x-2">
                  <span>Rozpocznij współpracę</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/platnosci">
                <button className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                  Zobacz cennik
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Dlaczego warto trenować{" "}</span>
              <span className="gradient-text">z nami?</span>
            </h2>
            <p className="text-xl text-white/60">
              Oferujemy kompleksowe podejście do treningu kolarskiego
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8 group hover:scale-105 transition-transform"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}40` }}>
                    <Icon className="w-7 h-7" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/50">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Levels Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b829dd]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Trening dla każdego{" "}</span>
              <span className="gradient-text">poziomu</span>
            </h2>
            <p className="text-xl text-white/60">
              Niezależnie od Twojego doświadczenia, mamy plan dla Ciebie
            </p>
          </motion.div>

          <div className="space-y-8">
            {trainingLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 border-l-4"
                style={{ borderLeftColor: index === 0 ? '#00f0ff' : index === 1 ? '#b829dd' : '#ff00ff' }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">{level.level}</h3>
                    <p className="text-white/60 max-w-2xl">{level.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Cele treningowe:</h4>
                  <ul className="grid md:grid-cols-3 gap-3">
                    {level.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: index === 0 ? '#00f0ff' : index === 1 ? '#b829dd' : '#ff00ff' }} />
                        <span className="text-white/70">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              Gotowy na <span className="gradient-text">wyzwania?</span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Skontaktuj się z nami, a wspólnie opracujemy plan, który pomoże Ci osiągnąć Twoje cele
            </p>
            <Link href="/kontakt">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center space-x-2 mx-auto">
                <span>Umów konsultację</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
}

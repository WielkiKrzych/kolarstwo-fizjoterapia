"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { Video, Users, TrendingUp, Calendar, Clock, Heart, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

const therapyFeatures = [
  {
    icon: Video,
    title: "Konsultacje Wideo",
    description: "Profesjonalne konsultacje z doświadczonym fizjoterapeutą bez wychodzenia z domu. Wygodnie i skutecznie.",
    color: "#00f0ff",
  },
  {
    icon: TrendingUp,
    title: "Stały Monitoring",
    description: "Regularne sprawdzenia Twoich postępów i dostosowywanie planu ćwiczeń do Twoich potrzeb.",
    color: "#ff00ff",
  },
  {
    icon: Calendar,
    title: "Elastyczne Terminy",
    description: "Godziny dostosowane do Twojego harmonogramu - rano, w ciągu dnia lub wieczorem.",
    color: "#00ff88",
  },
  {
    icon: Clock,
    title: "Oszczędność Czasu",
    description: "Nie trać czasu na dojazdy. Skorzystaj z profesjonalnej fizjoterapii z każdego miejsca.",
    color: "#b829dd",
  },
  {
    icon: Users,
    title: "Indywidualne Podejście",
    description: "Każdy plan rehabilitacyjny jest tworzony specjalnie dla Ciebie, biorąc pod uwagę Twoje potrzeby.",
    color: "#00f0ff",
  },
  {
    icon: Activity,
    title: "Skuteczne Metody",
    description: "Wykorzystujemy sprawdzone metody oparte na dowodach naukowych dla najlepszych rezultatów.",
    color: "#ff00ff",
  },
];

const therapyServices = [
  {
    title: "Rehabilitacja Pourazowa",
    description: "Skuteczna rehabilitacja po kontuzjach typowych dla kolarzy: kolana, plecy, nadgarstki.",
    icon: "🏥",
    color: "#00f0ff",
  },
  {
    title: "Profilaktyka",
    description: "Zapobieganie kontuzjom poprzez ćwiczenia wzmacniające i rozciągające.",
    icon: "💪",
    color: "#00ff88",
  },
  {
    title: "Terapia Manualna",
    description: "Techniki ręczne dla redukcji bólu i poprawy mobilności.",
    icon: "👐",
    color: "#ff00ff",
  },
  {
    title: "Trening Funkcjonalny",
    description: "Ćwiczenia poprawiające wydajność i zapobiegające przeciążeniom.",
    icon: "🚴",
    color: "#b829dd",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Umów wizytę",
    description: "Wybierz dogodny termin i wypełnij formularz rejestracyjny online.",
  },
  {
    step: "2",
    title: "Konsultacja wideo",
    description: "Porozmawiaj z fizjoterapeutą, który przeprowadzi wywiad i ocenę.",
  },
  {
    step: "3",
    title: "Plan działania",
    description: "Otrzymasz spersonalizowany plan ćwiczeń i zalecenia.",
  },
  {
    step: "4",
    title: "Realizacja i wsparcie",
    description: "Realizuj ćwiczenia i korzystaj ze stałego wsparcia specjalisty.",
  },
];

export default function FizjoterapiaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        {/* Floating Glow Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#ff00ff]/20 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#b829dd]/20 rounded-full blur-[120px] animate-float pointer-events-none" style={{animationDelay: '2s'}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
              <Heart className="w-4 h-4 text-[#ff00ff]" />
              <Activity className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-sm text-white/80">Fizjoterapia zdalna</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Fizjoterapia{" "}</span>
              <span className="gradient-text glow-text">Zdalna</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
              Profesjonalna rehabilitacja i konsultacje fizjoterapeutyczne online. 
              Skuteczna pomoc bez wychodzenia z domu, dostępna z każdego miejsca.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center space-x-2">
                  <span>Umów konsultację</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/platnosci">
                <button className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                  Zobacz pakiety
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
              <span className="text-white">Dlaczego fizjoterapia{" "}</span>
              <span className="gradient-text">zdalna?</span>
            </h2>
            <p className="text-xl text-white/60">
              Skuteczna rehabilitacja dostępna dla każdego, niezależnie od lokalizacji
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapyFeatures.map((feature, index) => {
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

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Nasze{" "}</span>
              <span className="gradient-text">usługi</span>
            </h2>
            <p className="text-xl text-white/60">
              Kompleksowa opieka fizjoterapeutyczna dla kolarzy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/50">{service.description}</p>
                <div className="mt-4 w-12 h-1 rounded-full mx-auto" style={{ background: service.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              <span className="text-white">Jak to{" "}</span>
              <span className="gradient-text">działa?</span>
            </h2>
            <p className="text-xl text-white/60">
              Proces jest prosty i wygodny
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#00f0ff]/50 to-[#b829dd]/50" />
                )}
                <div className="glass-card rounded-2xl p-6 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto bg-gradient-to-r from-[#00f0ff] to-[#b829dd]">
                    <span className="text-black text-xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-center text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-center text-white/50">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/10 via-[#b829dd]/10 to-[#00f0ff]/10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Zacznij swoją drogę do <span className="gradient-text">zdrowia</span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Skontaktuj się z nami i umów pierwszą konsultację już dziś
            </p>
            <Link href="/kontakt">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center space-x-2 mx-auto">
                <span>Umów wizytę</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

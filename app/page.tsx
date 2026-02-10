"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Activity, Users, Bike } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      
      {/* Floating Glow Orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-[#00f0ff]/20 rounded-full blur-[100px] animate-float pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-[#ff00ff]/20 rounded-full blur-[120px] animate-float pointer-events-none" style={{animationDelay: '2s'}} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b829dd]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-sm text-white/80">Nowa era treningów kolarskich</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">Przekraczaj</span><br />
              <span className="gradient-text glow-text">Granice</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12">
              Profesjonalne treningi kolarskie i fizjoterapia zdalna. 
              Osiągnij swoje cele z pomocą doświadczonego trenera i fizjoterapeuty.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center space-x-2">
                  <span>Skontaktuj się</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/treningi">
                <button className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                  Zobacz ofertę
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "40+", label: "Zawodników" },
              { value: "3000+", label: "Pacjentów" },
              { value: "8+", label: "Lat doświadczenia" },
              { value: "24/7", label: "Wsparcie" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Dlaczego warto </span>
              <span className="gradient-text">ze mną współpracować?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Treningi Indywidualne", desc: "Spersonalizowane plany treningowe w oparciu o dostępne wskaźniki fizjologiczne (SmO2, VT, Moc, Tętno)", color: "#00f0ff" },
              { icon: Shield, title: "Fizjoterapia Online", desc: "Profesjonalna rehabilitacja zdalna oraz dobór programów fizjoterapii pourazowej/pooperacyjnej", color: "#ff00ff" },
              { icon: Activity, title: "Analiza Danych", desc: "Zaawansowana analiza wydajności w czasie rzeczywistym", color: "#00ff88" },
              { icon: Users, title: "Społeczność", desc: "Dołącz do Wielkiego Community kolarzy, biegaczy i sportowców", color: "#b829dd" },
              { icon: Bike, title: "Dyscypliny", desc: "Kolarstwo szosowe/TT/rekreacyjne/ultra, bieganie, pływanie, treningi siłowe", color: "#00f0ff" },
              { icon: Sparkles, title: "Innowacje", desc: "Najnowsze metody treningowe", color: "#ff00ff" },
            ].map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="glass-card rounded-2xl p-8 group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}40` }}>
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

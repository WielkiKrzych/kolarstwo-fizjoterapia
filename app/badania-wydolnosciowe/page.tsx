"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "@/lib/motion";
import { Activity, Heart, Zap, TrendingUp, Bike, Footprints, Brain, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const testFeatures = [
  {
    icon: Zap,
    title: "Test VO2max",
    description: "Określenie maksymalnego pochłaniania tlenu - kluczowego wskaźnika wydolności tlenowej.",
    color: "#00f0ff",
  },
  {
    icon: Heart,
    title: "Prog thresholds",
    description: "Wyznaczenie progu mleczanowego i aerodynamicznego dla optymalizacji treningu.",
    color: "#ff00ff",
  },
  {
    icon: TrendingUp,
    title: "Analiza FTP",
    description: "Pomiar Functional Threshold Power - mocy przy progu wydolności.",
    color: "#00ff88",
  },
  {
    icon: Bike,
    title: "Bike Fitting",
    description: "Profesjonalny dobór pozycji na rowerze dla maksymalnej efektywności i komfortu.",
    color: "#b829dd",
  },
  {
    icon: Footprints,
    title: "Analiza biegu",
    description: "Ocena techniki biegu i identyfikacja obszarów do poprawy.",
    color: "#00f0ff",
  },
  {
    icon: Brain,
    title: "Badania metaboliczne",
    description: "Określenie preferencyjnego substratu energetycznego i efektywności spalania tłuszczu.",
    color: "#ff00ff",
  },
];

const testPackages = [
  {
    name: "Pakiet Podstawowy",
    price: "299",
    description: "Kompleksowy przegląd wydolności",
    features: [
      "Test VO2max",
      "Wyznaczenie progów (LT1/LT2)",
      "Analiza składu ciała",
      "Raport z wynikami",
      "Indywidualne zalecenia treningowe",
    ],
    color: "#00f0ff",
    popular: false,
  },
  {
    name: "Pakiet Zaawansowany",
    price: "499",
    description: "Pełna diagnostyka kolarska",
    features: [
      "Wszystko z Pakietu Podstawowego",
      "Test FTP na ergometrze",
      "Analiza pedażowania",
      "Bike fitting podstawowy",
      "Plan treningowy 8 tygodni",
      "2x konsultacja online",
    ],
    color: "#ff00ff",
    popular: true,
  },
  {
    name: "Pakiet Pro",
    price: "899",
    description: "Kompleksowa opieka wydolnościowa",
    features: [
      "Wszystko z Pakietu Zaawansowanego",
      "Test VO2max na rowerze i biegu",
      "Pełny bike fitting (Tretter/Retül)",
      "Badania metaboliczne",
      "Analiza regeneracji (HRV)",
      "Plan treningowy 12 tygodni",
      "Stały dostęp do trenera",
    ],
    color: "#00ff88",
    popular: false,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Rejestracja",
    description: "Wypełnij formularz i wybierz pakiet badań.",
  },
  {
    step: "2",
    title: "Badanie",
    description: "Przeprowadzamy kompleksowe testy wydolnościowe.",
  },
  {
    step: "3",
    title: "Analiza",
    description: "Otrzymujesz szczegółowy raport z wynikami.",
  },
  {
    step: "4",
    title: "Plan działania",
    description: "Dostajesz indywidualne zalecenia treningowe.",
  },
];

export default function BadaniaWydolnosciowePage() {
  return (
    <>
      <main className="min-h-screen bg-[#0a0a0f]">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
          
          {/* Floating Glow Orbs */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#00f0ff]/20 rounded-full blur-[100px] animate-float pointer-events-none" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#ff00ff]/20 rounded-full blur-[120px] animate-float pointer-events-none" style={{animationDelay: '2s'}} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
                <Activity className="w-4 h-4 text-[#00f0ff]" />
                <Heart className="w-4 h-4 text-[#ff00ff]" />
                <span className="text-sm text-white/80">Badania wydolnościowe</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Badania{" "}</span>
                <span className="gradient-text glow-text">Wydolnościowe</span>
              </h1>
              
              <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
                Profesjonalna diagnostyka wydolnościowa dla kolarzy i sportowców wytrzymałościowych. 
                Poznaj swoje limity i trenuj mądrzej.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center space-x-2">
                    <span>Umów badanie</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/o-mnie">
                  <button className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                    Dowiedz się więcej
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Co{" "}</span>
                <span className="gradient-text">badamy?</span>
              </h2>
              <p className="text-xl text-white/60">
                Kompleksowa diagnostyka wydolnościowa dostosowana do Twoich potrzeb
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-8 group hover:scale-105 transition-transform"
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}40` }}>
                      <Icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/50">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/5 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Pakiety{" "}</span>
                <span className="gradient-text">badań</span>
              </h2>
              <p className="text-xl text-white/60">
                Wybierz pakiet dopasowany do Twoich potrzeb
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative glass-card rounded-2xl p-8 ${pkg.popular ? 'border-2' : ''}`}
                  style={{ borderColor: pkg.popular ? pkg.color : undefined }}
                >
                  {pkg.popular && (
                    <div 
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-black"
                      style={{ background: pkg.color }}
                    >
                      Najpopularniejszy
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-white/50 text-sm">{pkg.description}</p>
                  </div>

                  <div className="text-center mb-8">
                    <span className="text-4xl font-bold" style={{ color: pkg.color }}>{pkg.price}</span>
                    <span className="text-white/50"> zł</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-white/70">
                        <Award className="w-5 h-5 flex-shrink-0" style={{ color: pkg.color }} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/kontakt" className="block">
                    <button 
                      className="w-full py-3 rounded-xl font-semibold transition-all"
                      style={{ 
                        background: pkg.popular ? pkg.color : 'transparent',
                        border: `1px solid ${pkg.color}`,
                        color: pkg.popular ? 'black' : pkg.color
                      }}
                    >
                      Wybierz pakiet
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Jak to{" "}</span>
                <span className="gradient-text">działa?</span>
              </h2>
              <p className="text-xl text-white/60">
                Proces badania jest prosty i wygodny
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#00f0ff]/50 to-[#b829dd]/50" />
                  )}
                  <div className="glass-card rounded-2xl p-6 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto bg-gradient-to-r from-[#00f0ff] to-[#b829dd]">
                      <span className="text-black text-xl font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-center text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-center text-white/50">{step.description}</p>
                  </div>
                </div>
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
                Poznaj swoje <span className="gradient-text">możliwości</span>
              </h2>
              <p className="text-xl text-white/60 mb-8">
                Umów badanie wydolnościowe i trenuj zgodnie ze swoim potencjałem
              </p>
              <Link href="/kontakt">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center space-x-2 mx-auto">
                  <span>Skontaktuj się</span>
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

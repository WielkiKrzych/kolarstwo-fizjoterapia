"use client";

import { Navigation } from "@/components/ui/Navigation";
import { PhotoCarousel } from "@/components/ui/PhotoCarousel";
import { motion } from "@/lib/motion";
import {
  Bike,
  Award,
  Users,
  Heart,
  ArrowRight,
  Calendar,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { JsonLd, createPersonSchema } from "@/components/JsonLd";

const stats = [
  { value: "8+", label: "Lat doświadczenia", icon: Calendar },
  { value: "40+", label: "Zawodników", icon: Users },
  { value: "3000+", label: "Pacjentów", icon: Heart },
  { value: "6", label: "Certyfikatów", icon: Award },
];

const certifications = [
  "Magister Fizjoterapii",
  "Trener Przygotowania Motorycznego",
  "Funkcjonalna Fizjoterapia",
  "Medyczna Akupunktura",
  "Diagnostyka obrazowa USG w Patologii Narządu Ruchu",
  "Fizjologia Wysiłku w Sporcie",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={createPersonSchema()} />
      <main className="min-h-screen bg-[#0a0a0f]">
        <Navigation />

        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#00f0ff]/20 rounded-full blur-[100px] animate-float pointer-events-none" />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-[#b829dd]/20 rounded-full blur-[120px] animate-float pointer-events-none"
            style={{ animationDelay: "2s" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
                  <Bike className="w-4 h-4 text-[#00f0ff]" />
                  <span className="text-sm text-white/80">O mnie</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="text-white">Cześć, jestem </span>
                  <span className="gradient-text glow-text">Krzysztof</span>
                </h1>

                <p className="text-lg text-white/50 mb-2">WielkiKrzych</p>

                <p className="text-xl text-white/60 mb-6">
                  Fizjoterapeuta & Trener Kolarstwa i Biegania & Trener
                  Przygotowania Motorycznego
                </p>

                <div className="flex items-center space-x-2 text-white/50 mb-8">
                  <MapPin className="w-5 h-5" />
                  <span>Cała Polska (online) / Warszawa i Pruszków</span>
                </div>

                <Link href="/kontakt">
                  <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center space-x-2">
                    <span>Skontaktuj się</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <PhotoCarousel
                  images={[
                    {
                      src: "/images/IMG_0546.jpg",
                      alt: "Krzysztof na rowerze",
                    },
                    { src: "/images/IMG_0826.jpg", alt: "Trening kolarski" },
                    { src: "/images/IMG_2001.jpg", alt: "Podczas treningu" },
                    { src: "/images/IMG_2172.jpg", alt: "Jazda szosowa" },
                    { src: "/images/IMG_2732.jpg", alt: "Trening w terenie" },
                    { src: "/images/IMG_4938.JPG", alt: "Praca z zawodnikiem" },
                    { src: "/images/IMG_5548.jpg", alt: "Kolarstwo górskie" },
                    { src: "/images/IMG_6040.jpg", alt: "Podczas zawodów" },
                    { src: "/images/IMG_6566.jpg", alt: "Trening interwałowy" },
                    { src: "/images/IMG_7614.JPG", alt: "Fizjoterapia" },
                    {
                      src: "/images/IMG_7792.JPG",
                      alt: "Konsultacja treningowa",
                    },
                    {
                      src: "/images/IMG_8099.jpg",
                      alt: "Trening wytrzymałościowy",
                    },
                    { src: "/images/IMG_8114.jpg", alt: "Praca nad techniką" },
                    { src: "/images/IMG_8115.jpg", alt: "Trening na rolkach" },
                    { src: "/images/IMG_8215.JPG", alt: "Analiza danych" },
                    { src: "/images/IMG_8357.jpg", alt: "Trening siłowy" },
                    { src: "/images/IMG_8596.jpg", alt: "Rozgrzewka" },
                    { src: "/images/IMG_8845.jpg", alt: "Po treningu" },
                  ]}
                  autoPlay={true}
                  interval={4000}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass-card rounded-2xl p-6 text-center"
                  >
                    <Icon className="w-8 h-8 text-[#00f0ff] mx-auto mb-4" />
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/5 to-transparent pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                Moja <span className="gradient-text">historia</span>
              </h2>

              <div className="glass-card rounded-2xl p-8 space-y-6 text-white/80">
                <p>
                  Na co dzień jestem <span className="text-[#00f0ff]">fizjoterapeutą</span> — z zawodu i z pasji. 
                  Moja praca w świecie medycznym nauczyła mnie jednego: zdrowie to fundament 
                  wszystkiego, co robimy. Dlatego podchodzę do treningu holistycznie — 
                  każdy aspekt ma znaczenie.
                </p>

                <p>
                  Specjalizuję się w <span className="text-[#00f0ff]">żywieniu okołotreningowym</span> — 
                  węglowodany, nawodnienie i odpowiednie odżywianie to nie abstrakcja. 
                  To konkretne narzędzia, które realnie zwiększają Twoją wydolność, 
                  przyspieszają regenerację i skracają czas potrzebny na powrót do pełnej formy.
                </p>

                <p>
                  Jako <span className="text-[#00f0ff]">fizjoterapeuta sportowy</span> znam anatomię, 
                  biomechanikę i fizjologię wysiłku od podszewki. Uczę się radiologii klinicznej, 
                  korzystam z USG do diagnostyki problemów ortopedycznych, a moja praca wymaga 
                  nieustannego śledzenia najnowszych badań i doniesień ze świata medycznego.
                </p>

                <p>
                  Trenuję <span className="text-[#00f0ff]">triathlon na poziomie zaawansowanym</span> — 
                  kolarstwo, bieganie i pływanie to nie tylko moja praca, to mój styl życia. 
                  Wiem, jak ciało zachowuje się podczas długich wysiłków, bo sam przez to przechodzę.
                </p>

                <p>
                  Fascynuje mnie <span className="text-[#00f0ff]">technologia i AI</span>. 
                  Programuję w Pythonie, buduję własne narzędzia do analizy danych treningowych 
                  i wykorzystuję sztuczną inteligencję do głębszego rozumienia badań i zależności 
                  fizjologicznych. To połączenie naukowego podejścia z nowoczesną technologią 
                  wyróżnia moją pracę.
                </p>

                <p>
                  <span className="text-[#00f0ff]">Moje motto:</span>
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>FTP ponad 400 watów</li>
                  <li>Biegam po 3:40/km</li>
                  <li>Nigdy się nie utopię</li>
                  <li>Zrobię przysiad z 200kg na plecach</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                Certyfikaty & <span className="gradient-text">Uprawnienia</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 glass-card rounded-xl p-4"
                  >
                    <Award className="w-6 h-6 text-[#00f0ff] flex-shrink-0" />
                    <span className="text-white/80">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/10 via-[#b829dd]/10 to-[#ff00ff]/10 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="glass-card rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Gotowy na współpracę?
              </h2>

              <p className="text-xl text-white/60 mb-8">
                Skontaktuj się ze mną i zacznij swoją drogę do lepszej formy
              </p>

              <Link href="/kontakt">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center space-x-2 mx-auto">
                  <span>Skontaktuj się</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

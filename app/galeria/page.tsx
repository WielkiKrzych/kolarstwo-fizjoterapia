"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "@/lib/motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder images - in a real project these would be actual images
const galleryImages = [
  { id: 1, category: "training", title: "Trening na szosie", description: "Profesjonalne treningi szosowe" },
  { id: 2, category: "training", title: "Trening MTB", description: "Trening w terenie" },
  { id: 3, category: "therapy", title: "Konsultacja online", description: "Zdalna fizjoterapia" },
  { id: 4, category: "training", title: "Trening siłowy", description: "Ćwiczenia specjalistyczne" },
  { id: 5, category: "results", title: "Sukcesy klientów", description: "Zadowoleni klienci" },
  { id: 6, category: "therapy", title: "Rehabilitacja", description: "Skuteczna terapia" },
  { id: 7, category: "training", title: "Zawody", description: "Przygotowanie startowe" },
  { id: 8, category: "results", title: "Medale", description: "Osiągnięcia sportowe" },
  { id: 9, category: "therapy", title: "Fizjoterapia", description: "Profesjonalna opieka" },
];

const categories = [
  { id: "all", name: "Wszystkie" },
  { id: "training", name: "Treningi" },
  { id: "therapy", name: "Fizjoterapia" },
  { id: "results", name: "Sukcesy" },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'training': return '🚴';
    case 'therapy': return '💪';
    case 'results': return '🏆';
    default: return '📷';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'training': return '#00f0ff';
    case 'therapy': return '#ff00ff';
    case 'results': return '#00ff88';
    default: return '#b829dd';
  }
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
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
              <span className="text-2xl">📷</span>
              <span className="text-sm text-white/80">Galeria</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text glow-text">Galeria</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Zobacz jak wygląda współpraca z nami i poznaj historie sukcesów naszych klientów
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-3 rounded-xl font-medium transition-all duration-200
                  ${activeCategory === category.id 
                    ? 'bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black' 
                    : 'glass text-white hover:bg-white/10 border border-white/10 hover:border-[#00f0ff]/30'}
                `}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="cursor-pointer group"
              >
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div 
                    className="aspect-video relative group overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${getCategoryColor(image.category)}20 0%, ${getCategoryColor(image.category)}10 100%)` 
                    }}
                  >
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform">
                          {getCategoryIcon(image.category)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium glass"
                        style={{ color: getCategoryColor(image.category) }}
                      >
                        {categories.find(c => c.id === image.category)?.name}
                      </span>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium flex items-center space-x-2">
                        <span>Zobacz więcej</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-white/50">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-xl text-white/60 mb-8">
              Chcesz zobaczyć więcej? Dołącz do nas i zacznij swoją historię sukcesu!
            </p>
            
            <Link href="/kontakt">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center space-x-2 mx-auto">
                <span>Skontaktuj się z nami</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

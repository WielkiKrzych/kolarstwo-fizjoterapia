"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

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

export default function GalleryPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Galeria
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zobacz jak wygląda współpraca z nami i poznaj historie sukcesów naszych klientów
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
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
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
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
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative group">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">
                          {image.category === "training" && "🚴"}
                          {image.category === "therapy" && "💪"}
                          {image.category === "results" && "🏆"}
                        </div>
                      </div>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">Zobacz więcej</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                    <p className="text-gray-600">{image.description}</p>
                  </div>
                </Card>
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
            <p className="text-xl text-gray-600 mb-8">
              Chcesz zobaczyć więcej? Dołącz do nas i zacznij swoją historię sukcesu!
            </p>
            <Link href="/kontakt">
              <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Skontaktuj się z nami
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

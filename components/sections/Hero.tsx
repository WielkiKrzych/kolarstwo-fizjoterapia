"use client";

import { motion } from "framer-motion";
import { Bike, Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Osiągnij swój
              <span className="text-primary-600"> potencjał</span>
              <br />
              na rowerze
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Profesjonalne treningi kolarskie i fizjoterapia zdalna. 
              Dostosowane do Twoich celów, dostępne z każdego miejsca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/treningi">
                <Button size="lg" className="group">
                  Rozpocznij treningi
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/fizjoterapia">
                <Button size="lg" variant="outline">
                  Fizjoterapia
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Zadowolonych klientów</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600">10+</div>
                <div className="text-sm text-gray-600 mt-1">Lat doświadczenia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-gray-600 mt-1">Skuteczności</div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Icons/Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Bike className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Treningi Kolarskie</h3>
                <p className="text-gray-600 text-sm">
                  Indywidualne plany treningowe dla każdego poziomu zaawansowania
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mt-8"
              >
                <div className="bg-accent-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fizjoterapia</h3>
                <p className="text-gray-600 text-sm">
                  Zdalna rehabilitacja i konsultacje z doświadczonym specjalistą
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analiza Wyników</h3>
                <p className="text-gray-600 text-sm">
                  Stałe monitorowanie postępów i optymalizacja planów treningowych
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mt-8"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Wsparcie</h3>
                <p className="text-gray-600 text-sm">
                  Nieustanny kontakt i pomoc w razie pytań lub wątpliwości
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

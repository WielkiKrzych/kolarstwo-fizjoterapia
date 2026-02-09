"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const trainingPlans = [
  {
    name: "START",
    description: "Idealny dla początkujących",
    price: "299 zł",
    period: "miesiąc",
    features: [
      "Indywidualny plan treningowy",
      "4 treningi tygodniowo",
      "Analiza wyników raz w tygodniu",
      "Dostęp do aplikacji mobilnej",
      "Wsparcie email",
    ],
    popular: false,
    cta: "Wybierz plan",
  },
  {
    name: "PRO",
    description: "Dla zaawansowanych kolarzy",
    price: "599 zł",
    period: "miesiąc",
    features: [
      "Wszystko z planu START",
      "6 treningów tygodniowo",
      "Analiza wyników dwa razy w tygodniu",
      "Konsultacja wideo raz w tygodniu",
      "Plan żywieniowy",
      "Dostęp do grupy wsparcia",
    ],
    popular: true,
    cta: "Wybierz plan",
  },
  {
    name: "ELITA",
    description: "Dla zawodowców",
    price: "999 zł",
    period: "miesiąc",
    features: [
      "Wszystko z planu PRO",
      "Dostosowane do zawodów treningi",
      "Analiza wyników trzy razy w tygodniu",
      "Konsultacja wideo dwa razy w tygodniu",
      " Indywidualny plan żywieniowy",
      "Priorytetowe wsparcie 24/7",
    ],
    popular: false,
    cta: "Wybierz plan",
  },
];

const therapyPlans = [
  {
    name: "KONSULTACJA",
    description: "Jednorazowa konsultacja",
    price: "149 zł",
    period: "wizyta",
    features: [
      "Analiza problemu",
      "Diagnoza",
      "Zalecenia ćwiczeniowe",
      "Plan działania",
    ],
    popular: false,
    cta: "Umów wizytę",
  },
  {
    name: "PAKIET 4",
    description: "Regularna terapia",
    price: "499 zł",
    period: "4 wizyty",
    features: [
      "4 konsultacje wideo",
      "Indywidualny plan ćwiczeń",
      "Stały monitoring postępów",
      "Dostęp do materiałów wideo",
      "Wsparcie między wizytami",
    ],
    popular: true,
    cta: "Wybierz pakiet",
  },
  {
    name: "PAKIET 8",
    description: "Kompleksowa opieka",
    price: "899 zł",
    period: "8 wizyt",
    features: [
      "8 konsultacji wideo",
      "Pełna diagnoza funkcjonalna",
      "Zaawansowany plan ćwiczeń",
      "Dostęp do wszystkich materiałów",
      "Priorytetowe wsparcie",
      "Rabat na kolejne wizyty",
    ],
    popular: false,
    cta: "Wybierz pakiet",
  },
];

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  cta: string;
  type: "training" | "therapy";
}

function PricingCard({ name, description, price, period, features, popular, cta, type }: PricingCardProps) {
  const href = type === "training" ? "/treningi" : "/fizjoterapia";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="relative"
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-primary-600 text-white text-sm font-bold px-4 py-1 rounded-full">
            Popularny
          </span>
        </div>
      )}
      <Card variant={popular ? "elevated" : "default"} className="h-full">
        <CardHeader>
          <CardTitle className="text-2xl">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">{price}</span>
              <span className="text-gray-600 ml-2">/{period}</span>
            </div>
          </div>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Link href={href} className="w-full">
            <Button variant={popular ? "primary" : "outline"} className="w-full group">
              {cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function Offer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="oferta" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Training Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Treningi <span className="text-primary-600">Kolarskie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wybierz plan dopasowany do Twoich celów i poziomu zaawansowania
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {trainingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} type="training" />
          ))}
        </motion.div>

        {/* Therapy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fizjoterapia <span className="text-accent-600">Zdalna</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skuteczna rehabilitacja bez wychodzenia z domu
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {therapyPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} type="therapy" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

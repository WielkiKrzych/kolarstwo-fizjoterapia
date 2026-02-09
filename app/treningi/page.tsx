"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { Bike, Target, TrendingUp, Calendar, Clock, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const trainingFeatures = [
  {
    icon: Target,
    title: "Indywidualne Planowanie",
    description: "Każdy plan treningowy jest tworzony na miarę Twoich celów, możliwości i czasu, jaki możesz poświęcić na trening.",
  },
  {
    icon: TrendingUp,
    title: "Stała Optymalizacja",
    description: "Regularna analiza wyników i dostosowywanie planu do Twoich postępów i zmieniających się celów.",
  },
  {
    icon: Calendar,
    title: "Elastyczny Harmonogram",
    description: "Dostosujemy plan do Twojego stylu życia - treningi rano, w południe czy wieczorem.",
  },
  {
    icon: Clock,
    title: "Oszczędność Czasu",
    description: "Maksymalizacja efektywności treningów - osiągnij więcej w krótszym czasie.",
  },
  {
    icon: Users,
    title: "Wsparcie Grupy",
    description: "Dołącz do społeczności pasjonatów kolarstwa, wymieniaj się doświadczeniami i motywuj się nawzajem.",
  },
  {
    icon: Bike,
    title: "Różnorodność Treningów",
    description: "Rower szosowy, MTB, treningi siłowe, interwały - wszystko dopasowane do Twoich potrzeb.",
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
              Profesjonalne <span className="text-primary-600">Treningi Kolarskie</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Indywidualne plany treningowe dostosowane do Twoich celów i możliwości. 
              Niezależnie od tego, czy dopiero zaczynasz, czy jesteś doświadczonym kolarzem - pomożemy Ci osiągnąć więcej.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button size="lg">Rozpocznij współpracę</Button>
              </Link>
              <Link href="/oferta">
                <Button size="lg" variant="outline">Zobacz cennik</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dlaczego warto trenować z nami?
            </h2>
            <p className="text-xl text-gray-600">
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
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-primary-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary-600" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Levels Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trening dla każdego poziomu
            </h2>
            <p className="text-xl text-gray-600">
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
              >
                <Card variant="outlined" className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.level}</h3>
                      <p className="text-gray-600 max-w-2xl">{level.description}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Cele treningowe:</h4>
                    <ul className="grid md:grid-cols-3 gap-3">
                      {level.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-start">
                          <div className="bg-primary-100 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Gotowy na wyzwania?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Skontaktuj się z nami, a wspólnie opracujemy plan, który pomoże Ci osiągnąć Twoje cele
            </p>
            <Link href="/kontakt">
              <Button size="lg" variant="secondary">
                Umów konsultację
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

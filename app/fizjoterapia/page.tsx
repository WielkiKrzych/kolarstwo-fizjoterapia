"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { Video, Users, TrendingUp, Calendar, Clock, Heart, Activity } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const therapyFeatures = [
  {
    icon: Video,
    title: "Konsultacje Wideo",
    description: "Profesjonalne konsultacje z doświadczonym fizjoterapeutą bez wychodzenia z domu. Wygodnie i skutecznie.",
  },
  {
    icon: TrendingUp,
    title: "Stały Monitoring",
    description: "Regularne sprawdzenia Twoich postępów i dostosowywanie planu ćwiczeń do Twoich potrzeb.",
  },
  {
    icon: Calendar,
    title: "Elastyczne Terminy",
    description: "Godziny dostosowane do Twojego harmonogramu - rano, w ciągu dnia lub wieczorem.",
  },
  {
    icon: Clock,
    title: "Oszczędność Czasu",
    description: "Nie trać czasu na dojazdy. Skorzystaj z profesjonalnej fizjoterapii z każdego miejsca.",
  },
  {
    icon: Users,
    title: "Indywidualne Podejście",
    description: "Każdy plan rehabilitacyjny jest tworzony specjalnie dla Ciebie, biorąc pod uwagę Twoje potrzeby.",
  },
  {
    icon: Activity,
    title: "Skuteczne Metody",
    description: "Wykorzystujemy sprawdzone metody oparte na dowodach naukowych dla najlepszych rezultatów.",
  },
];

const therapyServices = [
  {
    title: "Rehabilitacja Pourazowa",
    description: "Skuteczna rehabilitacja po kontuzjach typowych dla kolarzy: kolana, plecy, nadgarstki.",
    icon: "🏥",
  },
  {
    title: "Profilaktyka",
    description: "Zapobieganie kontuzjom poprzez ćwiczenia wzmacniające i rozciągające.",
    icon: "💪",
  },
  {
    title: "Terapia Manualna",
    description: "Techniki ręczne dla redukcji bólu i poprawy mobilności.",
    icon: "👐",
  },
  {
    title: "Trening Funkcjonalny",
    description: "Ćwiczenia poprawiające wydajność i zapobiegające przeciążeniom.",
    icon: "🚴",
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
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-accent-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-accent-600 mr-4" />
              <Activity className="w-16 h-16 text-primary-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Fizjoterapia <span className="text-accent-600">Zdalna</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Profesjonalna rehabilitacja i konsultacje fizjoterapeutyczne online. 
              Skuteczna pomoc bez wychodzenia z domu, dostępna z każdego miejsca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button size="lg">Umów konsultację</Button>
              </Link>
              <Link href="/oferta">
                <Button size="lg" variant="outline">Zobacz pakiety</Button>
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
              Dlaczego fizjoterapia zdalna?
            </h2>
            <p className="text-xl text-gray-600">
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
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-accent-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-accent-600" />
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

      {/* Services Section */}
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
              Nasze usługi
            </h2>
            <p className="text-xl text-gray-600">
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
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              Jak to działa?
            </h2>
            <p className="text-xl text-gray-600">
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
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent-200" />
                )}
                <Card className="relative z-10">
                  <CardHeader>
                    <div className="bg-accent-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white text-xl font-bold">{step.step}</span>
                    </div>
                    <CardTitle className="text-center text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Zacznij swoją drogę do zdrowia
            </h2>
            <p className="text-xl text-accent-100 mb-8">
              Skontaktuj się z nami i umów pierwszą konsultację już dziś
            </p>
            <Link href="/kontakt">
              <Button size="lg" variant="secondary">
                Umów wizytę
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

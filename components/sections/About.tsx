"use client";

import { motion } from "@/lib/motion";
import { Award, Users, Target, Zap, Bike } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

const features = [
  {
    icon: Award,
    title: "Certyfikowani Specjaliści",
    description: "Nasz zespół to doświadczeni trenerzy i fizjoterapeuci z适当的资质 i wieloletnim doświadczeniem.",
    color: "bg-primary-100 text-primary-600",
  },
  {
    icon: Users,
    title: "Indywidualne Podejście",
    description: "Każdy plan treningowy i rehabilitacyjny jest tworzony specjalnie dla Ciebie, biorąc pod uwagę Twoje cele i możliwości.",
    color: "bg-accent-100 text-accent-600",
  },
  {
    icon: Target,
    title: "Mierzalne Cele",
    description: "Opracowujemy jasne, realizowane cele i stale monitorujemy Twoje postępy, aby zapewnić maksymalne efekty.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Zap,
    title: "Nowoczesne Metody",
    description: "Wykorzystujemy najnowsze naukowe metody treningowe i rehabilitacyjne, oparte na dowodach.",
    color: "bg-purple-100 text-purple-600",
  },
];

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="o-nas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dlaczego warto wybrać <span className="text-primary-600">ProKolarz</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Łączymy pasję do kolarstwa z wiedzą naukową, aby pomóc Ci osiągnąć najlepsze rezultaty
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nasza misja
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              W ProKolarz wierzymy, że każdy może osiągnąć swoje cele kolarskie z odpowiednim wsparciem. 
              Nasza misja jest dostarczenie profesjonalnych treningów i rehabilitacji, które są dostępne dla każdego, 
              niezależnie od lokalizacji.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Przez lata pracy z zawodowymi kolarzami oraz amatorami, opracowaliśmy sprawdzone metody, 
              które łączą najnowsze badania naukowe z praktycznym doświadczeniem.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-50 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-gray-600">Godzin treningowych</div>
              </div>
              <div className="bg-accent-50 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-accent-600">50+</div>
                <div className="text-sm text-gray-600">Sukcesów klientów</div>
              </div>
              <div className="bg-green-50 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Zadowolonych klientów</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Bike className="w-32 h-32 text-primary-600 mx-auto mb-4" />
                <p className="text-xl font-bold text-gray-900">Pasja • Doświadczenie • Wyniki</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

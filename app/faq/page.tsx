"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqData = [
  {
    question: "Ile kosztuje trening z Tobą?",
    answer: "Oferuję różne plany treningowe dopasowane do Twoich potrzeb. Ceny zaczynają się od 299 zł miesięcznie za plan Starter. Szczegółowy cennik znajdziesz w zakładce 'Cennik'. Pierwsza konsultacja jest darmowa!",
    category: "Cennik"
  },
  {
    question: "Czy trenujesz online czy stacjonarnie?",
    answer: "Oferuję obie formy współpracy. Większość treningów odbywa się online (przez aplikacje do komunikacji), co daje Ci elastyczność i oszczędza czas. Treningi stacjonarne są możliwe w [Twoje Miasto] po wcześniejszym uzgodnieniu.",
    category: "Forma współpracy"
  },
  {
    question: "Jakie są efekty współpracy z Tobą?",
    answer: "Efekty zależą od Twoich celów i zaangażowania. Moi klienci zazwyczaj zauważają poprawę wydolności po 4-6 tygodniach regularnych treningów. Dokładamy wszelkich starań, aby każdy plan był maksymalnie efektywny i dopasowany do Twoich możliwości.",
    category: "Efekty"
  },
  {
    question: "Czym różni się fizjoterapia zdalna od stacjonarnej?",
    answer: "Fizjoterapia zdalna polega na konsultacjach wideo, gdzie przeprowadzam wywiad, oceniam problem i demonstruję ćwiczenia. Jest równie skuteczna przy wielu dolegliwościach, a dodatkowo oszczędza Twój czas na dojazdy. Otrzymasz również szczegółowy plan ćwiczeń do samodzielnego wykonywania.",
    category: "Fizjoterapia"
  },
  {
    question: "Czy muszę mieć specjalistyczny sprzęt do treningów?",
    answer: "Nie! Na początek wystarczy zwykły rower (szosowy, MTB lub gravel) i podstawowy strój sportowy. W miarę postępów mogę doradzić, jaki sprzęt warto dokupić, ale nie jest to konieczne do rozpoczęcia współpracy.",
    category: "Sprzęt"
  },
  {
    question: "Jak często będziemy się kontaktować?",
    answer: "Częstotliwość kontaktu zależy od wybranego planu. W pakiecie Starter kontaktujemy się raz w tygodniu, w Pro - dwa razy, a w Elite - bez limitu. Jesteś też dostępny/a dla mnie przez wiadomości w uzgodnionych godzinach.",
    category: "Kontakt"
  },
  {
    question: "Czy oferujesz plany żywieniowe?",
    answer: "Tak, plany żywieniowe są wliczone w pakiety Pro i Elite. W pakiecie Starter mogę udzielić ogólnych wskazówek żywieniowych. Współpracuję również z dietetykiem sportowym, jeśli potrzebujesz bardziej szczegółowego planu.",
    category: "Żywienie"
  },
  {
    question: "Co jeśli będę musiał/a zrezygnować ze współpracy?",
    answer: "Możesz zrezygnować w dowolnym momencie bez dodatkowych opłat. Nie wymagam długoterminowych umów - współpracujemy tak długo, jak długo przynosi Ci to wartość. Wystarczy dać mi znać z wyprzedzeniem.",
    category: "Rezygnacja"
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-medium text-white pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-[#00f0ff] flex-shrink-0" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-white/70 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00f0ff]/20 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#b829dd]/20 rounded-full blur-[120px] animate-float pointer-events-none" style={{animationDelay: '2s'}} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
              <HelpCircle className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-sm text-white/80">FAQ</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Najczęściej zadawane{" "}</span>
              <span className="gradient-text glow-text">pytania</span>
            </h1>
            
            <p className="text-xl text-white/60">
              Masz wątpliwości? Sprawdź odpowiedzi na najczęstsze pytania
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-white/60 mb-6">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </p>
            
            <Link href="/kontakt">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center space-x-2 mx-auto">
                <span>Skontaktuj się ze mną</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

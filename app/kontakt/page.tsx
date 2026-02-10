"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Wymaga konfiguracji Formspree (patrz README.md)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Nie podano",
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setError("Wystąpił błąd podczas wysyłania. Spróbuj ponownie.");
      }
    } catch {
      setError("Wystąpił błąd podczas wysyłania. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kontakt@prokolarz.pl",
      link: "mailto:kontakt@prokolarz.pl",
      color: "#00f0ff",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+48 123 456 789",
      link: "tel:+48123456789",
      color: "#ff00ff",
    },
    {
      icon: MapPin,
      title: "Lokalizacja",
      value: "Online - Cała Polska",
      link: null,
      color: "#00ff88",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
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
              <Mail className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-sm text-white/80">Kontakt</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text glow-text">Kontakt</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Masz pytania? Chcesz zacząć współpracę? Skontaktuj się ze mną!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Porozmawiajmy o <span className="gradient-text">Twoich celach</span>
              </h2>
              
              <p className="text-lg text-white/60 mb-12">
                Jestem tu, aby pomóc Ci osiągnąć sukces. Niezależnie od tego, czy masz pytania dotyczące treningów, 
                fizjoterapii czy współpracy - skontaktuj się ze mną!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start glass-card rounded-xl p-4"
                    >
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0" style={{ background: `${info.color}20` }}>
                        <Icon className="w-7 h-7" style={{ color: info.color }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-[#00f0ff] hover:text-[#00f0ff]/80 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white/60">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-12 glass-card rounded-xl p-6">
                <h3 className="font-semibold text-white mb-3">Godziny pracy</h3>
                <div className="space-y-2 text-white/60">
                  <p>Poniedziałek - Piątek: 8:00 - 20:00</p>
                  <p>Sobota: 9:00 - 17:00</p>
                  <p>Niedziela: Zamknięte</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-8">
                {isSuccess ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#00ff88]/20 flex items-center justify-center mx-auto mb-6 border border-[#00ff88]/40">
                      <svg className="w-10 h-10 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Wiadomość wysłana!</h3>
                    <p className="text-white/60 mb-6">Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.</p>
                    <button onClick={() => setIsSuccess(false)} className="px-6 py-3 glass text-white rounded-lg hover:bg-white/10 transition-all">
                      Wyślij kolejną wiadomość
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">Wyślij mi <span className="gradient-text">wiadomość</span></h2>
                    
                    {error && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">{error}</div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Imię i nazwisko *</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                          className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#00f0ff] outline-none text-white placeholder-white/30"
                          placeholder="Jan Kowalski"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#00f0ff] outline-none text-white placeholder-white/30"
                          placeholder="jan@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">Telefon</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#00f0ff] outline-none text-white placeholder-white/30"
                          placeholder="+48 123 456 789"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">Temat *</label>
                        <select id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                          className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#00f0ff] outline-none text-white bg-transparent"
                        >
                          <option value="" className="bg-[#1a1a25]">Wybierz temat</option>
                          <option value="training" className="bg-[#1a1a25]">Treningi kolarskie</option>
                          <option value="therapy" className="bg-[#1a1a25]">Fizjoterapia</option>
                          <option value="cooperation" className="bg-[#1a1a25]">Współpraca</option>
                          <option value="other" className="bg-[#1a1a25]">Inne</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Wiadomość *</label>
                        <textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={5}
                          className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#00f0ff] outline-none text-white placeholder-white/30 resize-none"
                          placeholder="Opisz swoje pytanie lub oczekiwania..."
                        />
                      </div>

                      <button type="submit" disabled={isSubmitting}
                        className="w-full group px-6 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center disabled:opacity-50"
                      >
                        {isSubmitting ? "Wysyłanie..." : (
                          <>Wyślij wiadomość <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

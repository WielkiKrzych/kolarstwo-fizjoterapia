"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "@/lib/motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID}`
  : "https://formspree.io/f/YOUR_FORM_ID";

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
      const response = await fetch(FORMSPREE_ENDPOINT, {
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
      value: "kubiczk@icloud.com",
      link: "mailto:kubiczk@icloud.com",
      color: "#00f0ff",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+48 453 330 419",
      link: "tel:+48453330419",
      color: "#ff00ff",
    },
    {
      icon: MapPin,
      title: "Lokalizacja",
      value: "Online - Cała Polska",
      value2: "Stacjonarnie - Warszawa i Pruszków",
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
                          <div className="text-white/60">
                            <p>{info.value}</p>
                            {(info as {value: string; value2?: string}).value2 && <p>{(info as {value: string; value2?: string}).value2}</p>}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-white mb-4">Znajdź mnie w social media</h3>
                <div className="flex gap-3">
                  <a href="https://facebook.com/twoj-profil" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center justify-center w-12 h-12 rounded-xl glass hover:bg-[#1877F2]/20 transition-all border border-[#1877F2]/30">
                    <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/twoj-profil" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl glass hover:bg-[#E4405F]/20 transition-all border border-[#E4405F]/30">
                    <svg className="w-6 h-6" fill="#E4405F" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://strava.com/athletes/twoj-profil" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl glass hover:bg-[#FC4C02]/20 transition-all border border-[#FC4C02]/30">
                    <svg className="w-6 h-6" fill="#FC4C02" viewBox="0 0 24 24">
                      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L8.634 0 2.5 12.343h4.172"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/twoj-profil" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl glass hover:bg-[#0A66C2]/20 transition-all border border-[#0A66C2]/30">
                    <svg className="w-6 h-6" fill="#0A66C2" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://intervals.icu" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl glass hover:bg-[#00ff88]/20 transition-all border border-[#00ff88]/30">
                    <svg className="w-6 h-6" fill="#00ff88" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </a>
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

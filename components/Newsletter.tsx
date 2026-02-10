"use client";

import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Możesz użyć tego samego Formspree co do kontaktu, lub stworzyć osobny formularz
      const response = await fetch("https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "Nowy zapis do newslettera",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
      } else {
        setError("Wystąpił błąd. Spróbuj ponownie.");
      }
    } catch {
      setError("Wystąpił błąd. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/10 via-[#b829dd]/10 to-[#ff00ff]/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#b829dd]/20 mb-6">
            <Mail className="w-8 h-8 text-[#00f0ff]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Zapisz się do <span className="gradient-text">newslettera</span>
          </h2>
          
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Otrzymuj porady treningowe, ciekawostki z świata kolarstwa i informacje 
            o nowościach prosto na swoją skrzynkę. Zero spamu, tylko wartościowa treść!
          </p>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center space-x-3 text-[#00ff88]"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Dziękuję za zapis! Sprawdź swoją skrzynkę.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Twój email"
                  className="w-full px-6 py-4 glass rounded-xl focus:ring-2 focus:ring-[#00f0ff] outline-none text-white placeholder-white/30"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Zapisywanie..."
                ) : (
                  <>
                    <span>Zapisz się</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}

          {error && (
            <p className="mt-4 text-red-400">{error}</p>
          )}

          <p className="mt-6 text-white/40 text-sm">
            Zapisując się, wyrażasz zgodę na otrzymywanie wiadomości. 
            Możesz wypisać się w dowolnym momencie.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

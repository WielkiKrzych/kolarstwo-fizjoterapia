"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { CreditCard, Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { useState } from "react";
import Link from "next/link";

export default function PaymentsPage() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const selectedPlan = {
    name: "PRO",
    price: "599 zł",
    description: "Dla zaawansowanych kolarzy",
  };

  return (
    <main>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Płatność bezpieczna
            </h1>
            <p className="text-xl text-gray-600">
              Dokończ zamówienie w kilku prostych krokach
            </p>
          </motion.div>

          {!isSuccess ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-6 h-6 text-primary-600" />
                      <CardTitle>Dane płatności</CardTitle>
                    </div>
                    <CardDescription>
                      Wypełnij formularz, aby zakończyć płatność
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                          Numer karty *
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\s/g, '').slice(0, 16);
                            setFormData({ ...formData, cardNumber: formatCardNumber(value) });
                          }}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
                          Imię i nazwisko na karcie *
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          required
                          value={formData.cardName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                          placeholder="JAN KOWALSKI"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
                            Data ważności *
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            name="expiry"
                            required
                            value={formData.expiry}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                              if (value.length >= 3) {
                                setFormData({ ...formData, expiry: value.slice(0, 2) + '/' + value.slice(2, 4) });
                              } else {
                                setFormData({ ...formData, expiry: value });
                              }
                            }}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            placeholder="MM/YY"
                          />
                        </div>

                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                            Kod CVV *
                          </label>
                          <input
                            type="password"
                            id="cvv"
                            name="cvv"
                            required
                            value={formData.cvv}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '').slice(0, 3);
                              setFormData({ ...formData, cvv: value });
                            }}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            placeholder="•••"
                          />
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg flex items-start space-x-3">
                        <Lock className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-600">
                          Twoje dane są bezpieczne. Używamy szyfrowania SSL i zgodności z PCI DTS, 
                          aby zapewnić bezpieczeństwo Twoich informacji.
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          "Przetwarzanie..."
                        ) : (
                          `Zapłać ${selectedPlan.price}`
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Podsumowanie zamówienia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="pb-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-1">{selectedPlan.name}</h3>
                        <p className="text-sm text-gray-600">{selectedPlan.description}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-gray-600">
                          <span>Plan miesięczny</span>
                          <span>{selectedPlan.price}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                          <span>VAT (23%)</span>
                          <span>W cenie</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900">Suma</span>
                          <span className="text-2xl font-bold text-primary-600">{selectedPlan.price}</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Zawiera:</h4>
                        <ul className="space-y-2">
                          {['Indywidualny plan treningowy', '6 treningów tygodniowo', 'Analiza wyników', 'Konsultacja wideo', 'Plan żywieniowy'].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Link href="/kontakt">
                          <Button variant="outline" className="w-full">
                            Masz pytania? Skontaktuj się
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <Card>
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Płatność zakończona pomyślnie!
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Dziękujemy za zakup! Wkrótce otrzymasz email z potwierdzeniem i dalszymi instrukcjami.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/kalendarz">
                      <Button size="lg">
                        Przejdź do kalendarza
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button size="lg" variant="outline">
                        Strona główna
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}

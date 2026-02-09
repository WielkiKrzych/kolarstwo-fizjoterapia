"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { useState } from "react";
import Link from "next/link";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const monthNames = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
  ];

  const dayNames = ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  // Mock events - in a real app these would come from an API
  const events = [
    { date: 5, title: "Trening interwałowy", type: "training" },
    { date: 12, title: "Konsultacja fizjoterapeutyczna", type: "therapy" },
    { date: 15, title: "Długi wyjazd", type: "training" },
    { date: 20, title: "Analiza wyników", type: "analysis" },
    { date: 25, title: "Trening siłowy", type: "training" },
  ];

  const getEventsForDay = (day: number) => {
    return events.filter(event => event.date === day);
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
              Kalendarz
            </h1>
            <p className="text-xl text-gray-600">
              Zarządzaj swoimi treningami i wizytami
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prevMonth}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <CardTitle className="text-2xl">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </CardTitle>
                    <button
                      onClick={nextMonth}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Day names */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {dayNames.map((day) => (
                      <div key={day} className="text-center font-semibold text-gray-700 text-sm">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Empty cells before the first day */}
                    {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                      <div key={`empty-${index}`} />
                    ))}

                    {/* Days of the month */}
                    {Array.from({ length: daysInMonth }).map((_, index) => {
                      const day = index + 1;
                      const dayEvents = getEventsForDay(day);
                      const isToday = day === new Date().getDate() && 
                                      currentDate.getMonth() === new Date().getMonth() &&
                                      currentDate.getFullYear() === new Date().getFullYear();
                      const isSelected = selectedDate && 
                                        day === selectedDate.getDate() &&
                                        currentDate.getMonth() === selectedDate.getMonth() &&
                                        currentDate.getFullYear() === selectedDate.getFullYear();

                      return (
                        <button
                          key={day}
                          onClick={() => handleDateClick(day)}
                          className={`
                            aspect-square p-2 rounded-lg text-sm font-medium transition-all
                            ${isToday ? 'bg-primary-600 text-white' : ''}
                            ${isSelected && !isToday ? 'bg-accent-600 text-white' : ''}
                            ${!isToday && !isSelected ? 'hover:bg-gray-100' : ''}
                            ${dayEvents.length > 0 ? 'border-2 border-primary-300' : ''}
                          `}
                        >
                          <div className="flex flex-col items-center justify-between h-full">
                            <span>{day}</span>
                            {dayEvents.length > 0 && (
                              <div className="w-2 h-2 bg-accent-600 rounded-full" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-6 h-6 text-primary-600" />
                    <CardTitle>Nadchodzące wydarzenia</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.map((event, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg border-l-4 border-primary-600"
                      >
                        <div className="font-semibold text-gray-900 mb-1">
                          {event.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {event.date} {monthNames[currentDate.getMonth()]}
                        </div>
                        <div className="mt-2">
                          <span className={`
                            inline-block px-2 py-1 rounded text-xs font-medium
                            ${event.type === 'training' ? 'bg-primary-100 text-primary-700' : ''}
                            ${event.type === 'therapy' ? 'bg-accent-100 text-accent-700' : ''}
                            ${event.type === 'analysis' ? 'bg-green-100 text-green-700' : ''}
                          `}>
                            {event.type === 'training' && 'Trening'}
                            {event.type === 'therapy' && 'Fizjoterapia'}
                            {event.type === 'analysis' && 'Analiza'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link href="/kontakt">
                      <Button className="w-full" variant="outline">
                        Dodaj nowe wydarzenie
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Selected Date Info */}
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    Wydarzenia na {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {getEventsForDay(selectedDate.getDate()).length > 0 ? (
                    <div className="space-y-3">
                      {getEventsForDay(selectedDate.getDate()).map((event, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="font-semibold text-gray-900">{event.title}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">Brak wydarzeń w tym dniu</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}

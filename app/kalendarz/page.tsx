"use client";

import { Navigation } from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from "lucide-react";
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
    { date: 5, title: "Trening interwałowy", type: "training", time: "18:00" },
    { date: 12, title: "Konsultacja fizjoterapeutyczna", type: "therapy", time: "16:30" },
    { date: 15, title: "Długi wyjazd", type: "training", time: "08:00" },
    { date: 20, title: "Analiza wyników", type: "analysis", time: "19:00" },
    { date: 25, title: "Trening siłowy", type: "training", time: "17:00" },
  ];

  const getEventsForDay = (day: number) => {
    return events.filter(event => event.date === day);
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'training': return '#00f0ff';
      case 'therapy': return '#ff00ff';
      case 'analysis': return '#00ff88';
      default: return '#b829dd';
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'training': return 'Trening';
      case 'therapy': return 'Fizjoterapia';
      case 'analysis': return 'Analiza';
      default: return 'Inne';
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      <div className="pt-24 pb-12 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
              <CalendarIcon className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-sm text-white/80">Zarządzaj swoimi treningami</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text glow-text">Kalendarz</span>
            </h1>
            
            <p className="text-xl text-white/60">
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
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  
                  <h2 className="text-2xl font-bold text-white">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  
                  <button
                    onClick={nextMonth}
                    className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Day names */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {dayNames.map((day) => (
                    <div key={day} className="text-center font-semibold text-white/60 text-sm py-2">
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
                          ${isToday ? 'bg-gradient-to-r from-[#00f0ff] to-[#b829dd] text-black' : 'glass hover:bg-white/10'}
                          ${isSelected && !isToday ? 'ring-2 ring-[#00f0ff]' : ''}
                        `}
                      >
                        <div className="flex flex-col items-center justify-between h-full">
                          <span className={isToday ? 'text-black' : 'text-white'}>{day}</span>
                          {dayEvents.length > 0 && (
                            <div className="flex gap-1">
                              {dayEvents.map((event, idx) => (
                                <div 
                                  key={idx}
                                  className="w-1.5 h-1.5 rounded-full" 
                                  style={{ background: getEventTypeColor(event.type) }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Clock className="w-6 h-6 text-[#00f0ff]" />
                  <h3 className="text-xl font-bold text-white">Nadchodzące wydarzenia</h3>
                </div>
                
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div
                      key={index}
                      className="p-4 glass rounded-xl border-l-4"
                      style={{ borderLeftColor: getEventTypeColor(event.type) }}
                    >
                      <div className="font-semibold text-white mb-1">
                        {event.title}
                      </div>
                      <div className="text-sm text-white/50">
                        {event.date} {monthNames[currentDate.getMonth()]} • {event.time}
                      </div>
                      <div className="mt-2">
                        <span 
                          className="inline-block px-2 py-1 rounded text-xs font-medium glass"
                          style={{ color: getEventTypeColor(event.type) }}
                        >
                          {getEventTypeLabel(event.type)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link href="/kontakt">
                    <button className="w-full px-4 py-3 glass text-white rounded-lg hover:bg-white/10 transition-all border border-[#00f0ff]/30">
                      Dodaj nowe wydarzenie
                    </button>
                  </Link>
                </div>
              </div>
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
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Wydarzenia na {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]}
                </h3>
                
                {getEventsForDay(selectedDate.getDate()).length > 0 ? (
                  <div className="space-y-3">
                    {getEventsForDay(selectedDate.getDate()).map((event, index) => (
                      <div 
                        key={index} 
                        className="p-4 glass rounded-lg border-l-4"
                        style={{ borderLeftColor: getEventTypeColor(event.type) }}
                      >
                        <div className="font-semibold text-white">{event.title}</div>
                        <div className="text-sm text-white/50">{event.time}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-white/50">Brak wydarzeń w tym dniu</p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}

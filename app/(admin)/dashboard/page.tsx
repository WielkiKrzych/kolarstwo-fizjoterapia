"use client";

import { motion } from "framer-motion";
import {
  Users,
  Bike,
  Calendar,
  Mail,
  TrendingUp,
  DollarSign,
  Activity,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const stats = [
  { title: "Użytkownicy", value: "156", change: "+12", icon: Users, color: "bg-blue-500" },
  { title: "Aktywne usługi", value: "8", change: "+2", icon: Bike, color: "bg-green-500" },
  { title: "Rezerwacje", value: "48", change: "+5", icon: Calendar, color: "bg-purple-500" },
  { title: "Wiadomości", value: "23", change: "+8", icon: Mail, color: "bg-orange-500" },
];

const recentActivity = [
  { action: "Nowa rezerwacja", user: "Jan Kowalski", time: "2 min temu", type: "booking" },
  { action: "Nowy użytkownik", user: "Anna Nowak", time: "15 min temu", type: "user" },
  { action: "Płatność zakończona", user: "Piotr Wiśniewski", time: "1h temu", type: "payment" },
  { action: "Nowa wiadomość", user: "Maria Zielińska", time: "2h temu", type: "message" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Witaj z powrotem! Oto co dzieje się w Twoim systemie.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                  <div className={`${stat.color} p-2 rounded-lg`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.change} w tym miesiącu
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Ostatnia aktywność</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.user}</p>
                    </div>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Nadchodzące rezerwacje</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { service: "Trening indywidualny", client: "Jan Kowalski", date: "Dzisiaj, 14:00", status: "confirmed" },
                  { service: "Konsultacja fizjoterapeutyczna", client: "Anna Nowak", date: "Jutro, 10:00", status: "pending" },
                  { service: "Analiza wyników", client: "Piotr Wiśniewski", date: "Jutro, 16:00", status: "confirmed" },
                ].map((booking, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{booking.service}</p>
                      <p className="text-sm text-gray-500">{booking.client}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{booking.date}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        booking.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {booking.status === "confirmed" ? "Potwierdzona" : "Oczekująca"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

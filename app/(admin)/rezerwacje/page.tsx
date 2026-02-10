"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, User, CheckCircle, XCircle, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const bookings = [
  { id: 1, service: "Trening podstawowy", client: "Jan Kowalski", date: "2024-02-15", time: "14:00", status: "CONFIRMED" },
  { id: 2, service: "Konsultacja fizjoterapeutyczna", client: "Anna Nowak", date: "2024-02-15", time: "16:00", status: "PENDING" },
  { id: 3, service: "Trening zaawansowany", client: "Piotr Wiśniewski", date: "2024-02-16", time: "10:00", status: "CONFIRMED" },
  { id: 4, service: "Analiza wyników", client: "Maria Zielińska", date: "2024-02-16", time: "14:00", status: "CANCELLED" },
];

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = booking.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Rezerwacje</h1>
          <p className="text-gray-500">Zarządzaj rezerwacjami klientów</p>
        </div>
        <Button>
          <Calendar className="w-4 h-4 mr-2" />
          Nowa rezerwacja
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Szukaj rezerwacji..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="ALL">Wszystkie statusy</option>
              <option value="PENDING">Oczekujące</option>
              <option value="CONFIRMED">Potwierdzone</option>
              <option value="CANCELLED">Anulowane</option>
            </select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Usługa</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Klient</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Data i godzina</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Akcje</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">{booking.service}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>{booking.client}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{booking.date}</span>
                        <Clock className="w-4 h-4 text-gray-400 ml-2" />
                        <span>{booking.time}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === "CONFIRMED"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {booking.status === "CONFIRMED" ? (
                          <><CheckCircle className="w-3 h-3" /><span>Potwierdzona</span></>
                        ) : booking.status === "PENDING" ? (
                          <><Clock className="w-3 h-3" /><span>Oczekująca</span></>
                        ) : (
                          <><XCircle className="w-3 h-3" /><span>Anulowana</span></>
                        )}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Szczegóły</DropdownMenuItem>
                          <DropdownMenuItem>Potwierdź</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Anuluj</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MoreVertical, Edit, Trash2, Plus, Bike } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { id: 1, name: "Trening podstawowy", type: "TRAINING", category: "BEGINNER", price: 299, duration: 60, isActive: true },
  { id: 2, name: "Trening zaawansowany", type: "TRAINING", category: "ADVANCED", price: 499, duration: 90, isActive: true },
  { id: 3, name: "Konsultacja fizjoterapeutyczna", type: "THERAPY", category: "INTERMEDIATE", price: 200, duration: 45, isActive: true },
  { id: 4, name: "Plan treningowy PRO", type: "TRAINING", category: "PRO", price: 599, duration: 120, isActive: false },
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Usługi</h1>
          <p className="text-gray-500">Zarządzaj ofertą usług</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Dodaj usługę
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Szukaj usług..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="relative">
                  <div className="absolute top-4 right-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edytuj
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Usuń
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <Bike className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-gray-500">{service.duration} min</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold">{service.price} zł</p>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        service.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        {service.isActive ? "Aktywna" : "Nieaktywna"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

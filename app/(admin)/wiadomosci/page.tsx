"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Mail, User, Clock, CheckCircle, Trash2, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const messages = [
  { 
    id: 1, 
    name: "Jan Kowalski", 
    email: "jan@example.com", 
    subject: "Pytanie o trening",
    message: "Dzień dobry, chciałbym się zapisać na trening podstawowy. Czy są jeszcze wolne terminy w tym tygodniu?",
    date: "2024-02-15 10:30",
    isRead: false 
  },
  { 
    id: 2, 
    name: "Anna Nowak", 
    email: "anna@example.com", 
    subject: "Rezerwacja fizjoterapii",
    message: "Cześć, czy mogę umówić się na konsultację fizjoterapeutyczną na przyszły wtorek?",
    date: "2024-02-15 09:15",
    isRead: true 
  },
  { 
    id: 3, 
    name: "Piotr Wiśniewski", 
    email: "piotr@example.com", 
    subject: "Problem z płatnością",
    message: "Dzień dobry, próbowałem dokonać płatności ale coś poszło nie tak. Czy możecie sprawdzić?",
    date: "2024-02-14 16:45",
    isRead: true 
  },
];

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<typeof messages[0] | null>(null);

  const filteredMessages = messages.filter((message) =>
    message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wiadomości</h1>
        <p className="text-gray-500">Zarządzaj wiadomościami od klientów</p>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Szukaj wiadomości..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredMessages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  message.isRead ? "bg-white" : "bg-blue-50 border-blue-200"
                } hover:shadow-md`}
                onClick={() => setSelectedMessage(message)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-2 rounded-full">
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-semibold">{message.name}</p>
                        {!message.isRead && (
                          <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">Nowa</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{message.subject}</p>
                      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{message.message}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{message.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
            <DialogDescription>
              Od: {selectedMessage?.name} ({selectedMessage?.email})
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="whitespace-pre-wrap">{selectedMessage?.message}</p>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline" onClick={() => setSelectedMessage(null)}>
              <CheckCircle className="w-4 h-4 mr-2" />
              Oznacz jako przeczytane
            </Button>
            <Button variant="destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              Usuń
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Bike,
  Calendar,
  Mail,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const sidebarItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/uzytkownicy", label: "Użytkownicy", icon: Users },
  { href: "/uslugi", label: "Usługi", icon: Bike },
  { href: "/rezerwacje", label: "Rezerwacje", icon: Calendar },
  { href: "/wiadomosci", label: "Wiadomości", icon: Mail },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:hidden bg-white border-b px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-2">
          <Bike className="w-8 h-8 text-primary-600" />
          <span className="text-xl font-bold">ProKolarz Admin</span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          className="lg:hidden fixed inset-0 z-40 bg-white"
        >
          <div className="p-4 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            <hr className="my-4" />
            <button
              onClick={handleSignOut}
              className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Wyloguj się</span>
            </button>
          </div>
        </motion.div>
      )}

      <div className="flex">
        <motion.aside
          initial={false}
          animate={{ width: isSidebarOpen ? 280 : 80 }}
          className="hidden lg:block bg-white border-r h-screen sticky top-0 overflow-hidden"
        >
          <div className="p-6">
            <Link href="/" className="flex items-center space-x-3">
              <Bike className="w-10 h-10 text-primary-600" />
              {isSidebarOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl font-bold whitespace-nowrap"
                >
                  ProKolarz
                </motion.span>
              )}
            </Link>
          </div>

          <nav className="px-4 space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {isSidebarOpen && (
                    <span className="font-medium whitespace-nowrap">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <div className="flex items-center space-x-3 px-4 py-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary-100 text-primary-600">
                  {session?.user?.name?.charAt(0) || "A"}
                </AvatarFallback>
              </Avatar>
              {isSidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{session?.user?.name || "Admin"}</p>
                  <p className="text-sm text-gray-500 truncate">{session?.user?.email}</p>
                </div>
              )}
            </div>
            <button
              onClick={handleSignOut}
              className={`mt-2 flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors ${
                isSidebarOpen ? "w-full" : "justify-center"
              }`}
            >
              <LogOut className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium">Wyloguj się</span>}
            </button>
          </div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute top-1/2 -right-3 w-6 h-6 bg-white border rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
          >
            <ChevronRight
              className={`w-4 h-4 transition-transform ${isSidebarOpen ? "rotate-180" : ""}`}
            />
          </button>
        </motion.aside>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

# ProKolarz - Treningi Kolarskie & Fizjoterapia Zdalna

Profesjonalna strona internetowa z ofertą treningów kolarskich i fizjoterapii zdalnej. Nowoczesny design w stylu Cyberpunk + Liquid Glass z pełnym backendem, systemem autoryzacji i panelem administracyjnym.

![Cyberpunk Design](https://img.shields.io/badge/Design-Cyberpunk%20+%20Liquid%20Glass-cyan)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🚀 Funkcjonalności

### Frontend
- ✅ **Strona główna** - Hero z animacjami, statystyki, funkcje
- ✅ **Treningi kolarskie** - Szczegółowa oferta, poziomy zaawansowania
- ✅ **Fizjoterapia zdalna** - Usługi, jak to działa, CTA
- ✅ **Galeria** - Kategorie z filtrami, hover effects
- ✅ **Kontakt** - Formularz z walidacją, godziny pracy
- ✅ **Kalendarz** - Interaktywny widok wydarzeń z kolorowymi eventami
- ✅ **System płatności** - Integracja ze Stripe (UI + webhook)

### Autoryzacja
- ✅ **Logowanie** - Credentials, Google OAuth, Facebook OAuth
- ✅ **Rejestracja** - Walidacja, potwierdzenia email
- ✅ **Ochrona tras** - Middleware dla stron chronionych

### Panel Administracyjny (CRUD)
- ✅ **Dashboard** - Statystyki i podsumowanie
- ✅ **Użytkownicy** - Zarządzanie kontami
- ✅ **Usługi** - Zarządzanie ofertą
- ✅ **Rezerwacje** - System bookingów
- ✅ **Wiadomości** - Skrzynka odbiorcza kontaktu

### Design System - Cyberpunk + Liquid Glass
- 🎨 **Ciemne tło** `#0a0a0f` z neonowymi akcentami
- 💡 **Neon colors**: Cyan `#00f0ff`, Pink `#ff00ff`, Purple `#b829dd`, Green `#00ff88`
- 🫗 **Glassmorphism** - `backdrop-blur(20px)` z półprzezroczystymi powierzchniami
- ✨ **Gradient text** - Wielokolorowe nagłówki
- 🔆 **Glow effects** - Animowane orby i neonowe cienie
- 📐 **Cyber grid** - Tło w stylu siatki cyberpunk
- 🎭 **Framer Motion** - Płynne animacje wejścia i hover effects

## 🛠️ Stos technologiczny

### Frontend
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Język**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animacje**: Framer Motion
- **Ikony**: Lucide React
- **Komponenty UI**: shadcn/ui

### Backend
- **API**: Next.js API Routes
- **Baza danych**: Prisma ORM (schema gotowe)
- **Autoryzacja**: NextAuth.js v4
- **Płatności**: Stripe (payments + webhooks)
- **Email**: Resend API

### DevOps
- **Pakietowanie**: npm
- **Kontrola wersji**: Git + GitHub

## 📦 Instalacja

### Wymagania
- Node.js 18+ 
- npm lub yarn

### Szybki start

```bash
# 1. Klonuj repozytorium
git clone https://github.com/WielkiKrzych/kolarstwo-fizjoterapia.git
cd kolarstwo-fizjoterapia

# 2. Zainstaluj zależności
npm install

# 3. Skonfiguruj zmienne środowiskowe
cp .env.example .env.local
# Edytuj .env.local i dodaj swoje klucze API

# 4. Uruchom serwer deweloperski
npm run dev

# Gotowe! Otwórz http://localhost:3000
```

### Zmienne środowiskowe (.env.local)

```env
# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret

# Database (Prisma)
DATABASE_URL="postgresql://user:password@localhost:5432/prokolarz"

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (Resend)
RESEND_API_KEY=re_...
```

## 🏗️ Budowa produkcji

```bash
# Budowa
npm run build

# Uruchomienie produkcji
npm start
```

## 📁 Struktura projektu

```
kolarstwo-fizjoterapia/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Strona główna (Cyberpunk Hero)
│   ├── treningi/                # Treningi kolarskie
│   ├── fizjoterapia/            # Fizjoterapia zdalna
│   ├── galeria/                 # Galeria z filtrami
│   ├── kontakt/                 # Formularz kontaktowy
│   ├── kalendarz/               # Kalendarz wydarzeń
│   ├── platnosci/               # System płatności Stripe
│   ├── login/                   # Logowanie (Cyberpunk)
│   ├── register/                # Rejestracja (Cyberpunk)
│   ├── (admin)/                 # Panel administracyjny
│   │   ├── dashboard/           # Dashboard statystyk
│   │   ├── uzytkownicy/         # Zarządzanie użytkownikami
│   │   ├── uslugi/              # Zarządzanie usługami
│   │   ├── rezerwacje/          # System rezerwacji
│   │   └── wiadomosci/          # Wiadomości kontaktowe
│   ├── (auth)/                  # Grupa autoryzacji
│   ├── api/                     # API Routes
│   │   ├── auth/[...nextauth]  # NextAuth.js
│   │   ├── auth/register       # Rejestracja
│   │   ├── bookings            # Rezerwacje
│   │   ├── contact             # Formularz kontaktu
│   │   └── payments/           # Stripe payments
│   ├── layout.tsx              # Główny layout
│   └── globals.css             # Globalne style + Cyberpunk theme
├── components/
│   ├── ui/                      # Komponenty UI (shadcn)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Navigation.tsx
│   │   └── ...
│   └── analytics.tsx            # Google Analytics
├── lib/
│   ├── auth.ts                  # NextAuth config
│   ├── prisma.ts               # Prisma client
│   └── utils.ts                # Utility functions
├── prisma/
│   └── schema.prisma           # Schema bazy danych
├── middleware.ts               # Ochrona tras
└── public/                     # Zasoby statyczne
```

## 🎨 Design System

### Cyberpunk Theme

Zmienne CSS zdefiniowane w `globals.css`:

```css
/* Tło */
--background: #0a0a0f;

/* Neon colors */
--neon-cyan: #00f0ff;
--neon-pink: #ff00ff;
--neon-purple: #b829dd;
--neon-green: #00ff88;

/* Glass effects */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 240, 255, 0.2);
}
```

### Animacje

- `animate-float` - Unoszące się orby w tle
- `animate-pulse-glow` - Pulsujący neon
- Framer Motion - Animacje wejścia komponentów

## 🌐 Wdrożenie

### Vercel (zalecane)

```bash
# Zainstaluj Vercel CLI
npm install -g vercel

# Wdróż
vercel
```

### Wymagane zmienne środowiskowe na Vercel:
- Wszystkie zmienne z `.env.local`
- Skonfiguruj domenę dla OAuth (Google/Facebook)
- Ustaw webhook URL dla Stripe

## 🧪 Testowanie

### Test credentials (development)
- **Admin**: `admin@prokolarz.pl` / `admin123`
- **User**: `user@example.com` / `password123`

### Stripe test cards
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`

## 🐛 Rozwiązywanie problemów

### Port 3000 jest zajęty
```bash
lsof -ti:3000 | xargs kill -9
# lub
npm run dev -- -p 3001
```

### Błędy zależności
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem z NextAuth
Upewnij się, że `NEXTAUTH_SECRET` jest ustawiony (min. 32 znaki):
```bash
openssl rand -base64 32
```

## 📋 TODO / Przyszłe ulepszenia

- [x] Backend API (Next.js API Routes)
- [x] Schema bazy danych (Prisma)
- [x] Autoryzacja (NextAuth.js)
- [x] Panel administracyjny (CRUD)
- [x] Design Cyberpunk + Liquid Glass
- [ ] Podłączenie prawdziwej bazy PostgreSQL
- [ ] Konfiguracja produkcyjnych kluczy OAuth
- [ ] Konfiguracja produkcyjnego Stripe
- [ ] System powiadomień email (Resend)
- [ ] Integracja z kalendarzem Google/Apple
- [ ] Aplikacja mobilna (PWA)
- [ ] Dodanie prawdziwych treści i zdjęć

## 📝 Licencja

MIT

## 👨‍💻 Autor

Stworzone z ❤️ przy użyciu Next.js, TypeScript i Tailwind CSS

---

**ProKolarz** - Przekraczaj granice! 🚴‍♂️✨

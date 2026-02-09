# Treningi Kolarskie & Fizjoterapia Zdalna

Profesjonalna strona internetowa z ofertą treningów kolarskich i fizjoterapii zdalnej, zbudowana przy użyciu Next.js, TypeScript, Tailwind CSS i Framer Motion.

## 🚀 Funkcjonalności

- ✅ **Strona główna** z sekcjami Hero, O nas i Oferta
- ✅ **Treningi kolarskie** - szczegółowa oferta i cennik
- ✅ **Fizjoterapia zdalna** - informacje o usługach
- ✅ **Galeria** - przykładowe zdjęcia i projekty
- ✅ **Formularz kontaktowy** - z walidacją i modalem potwierdzenia
- ✅ **Panel logowania** - prosty interfejs uwierzytelniania
- ✅ **Kalendarz** - interaktywny widok wydarzeń
- ✅ **System płatności** - UI symulujący Stripe
- ✅ **Responsywność** - mobile-first design
- ✅ **Animacje** - Framer Motion dla płynnych przejść

## 🛠️ Stos technologiczny

- **Framework**: Next.js 16 (App Router)
- **Język**: TypeScript
- **Styling**: Tailwind CSS
- **Animacje**: Framer Motion
- **Ikony**: Lucide React
- **Pakietowanie**: npm

## 📦 Instalacja

### macOS / Linux / Windows (WSL)

1. **Zainstaluj Node.js** (jeśli nie masz):
   - Pobierz z [nodejs.org](https://nodejs.org) lub
   - Użyj Homebrew na macOS: `brew install node`

2. **Zainstaluj zależności:**
```bash
npm install
```

3. **Uruchom serwer deweloperski:**
```bash
npm run dev
```

4. **Otwórz w przeglądarce:**
   - [http://localhost:3000](http://localhost:3000)

### 🚀 Szybki start na macOS

```bash
# 1. Klonuj repozytorium (lub skopiuj folder)
git clone https://github.com/WielkiKrzych/kolarstwo-fizjoterapia.git
cd kolarstwo-fizjoterapia

# 2. Zainstaluj zależności
npm install

# 3. Uruchom aplikację
npm run dev

# Gotowe! Otwórz http://localhost:3000
```

## 🏗️ Budowa produkcji

```bash
npm run build
npm start
```

## 📁 Struktura projektu

```
kolarstwo-fizjoterapia/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Strona główna
│   ├── treningi/            # Treningi kolarskie
│   ├── fizjoterapia/        # Fizjoterapia
│   ├── galeria/             # Galeria
│   ├── kontakt/             # Formularz kontaktowy
│   ├── login/               # Panel logowania
│   ├── kalendarz/           # Kalendarz
│   ├── platnosci/           # Płatności
│   ├── layout.tsx           # Główny layout
│   └── globals.css          # Globalne style
├── components/
│   ├── ui/                  # Komponenty UI
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── Navigation.tsx
│   └── sections/            # Sekcje strony
│       ├── Hero.tsx
│       ├── About.tsx
│       └── Offer.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/                  # Zasoby statyczne
```

## 🎨 Dostosowywanie

### Kolory

Kolory główne są zdefiniowane w `tailwind.config.ts`:

- **Primary** (zielony): Dla elementów związanych z kolarstwem
- **Accent** (niebieski): Dla elementów związanych z fizjoterapią

### Zawartość

Cała treść znajduje się w plikach w folderach `app/` i `components/sections/`. Możesz łatwo edytować teksty, ceny i inne informacje.

## 🌤️ Wdrożenie na Vercel (najprostsza opcja)

1. **Zainstaluj Vercel CLI:**
```bash
npm install -g vercel
```

2. **W folderze projektu uruchom:**
```bash
vercel
```

3. **Postępuj zgodnie z instrukcjami** - strona będzie dostępna w kilka minut!

## 🐘 Instrukcje dla macOS

### Klonowanie z GitHub

```bash
# Otwórz Terminal i wpisz:
cd ~/Desktop
git clone https://github.com/WielkiKrzych/kolarstwo-fizjoterapia.git
cd kolarstwo-fizjoterapia

# Zainstaluj zależności (jeśli Node.js nie zainstalowany):
# brew install node

npm install
npm run dev
```

### Rozwiązywanie problemów na macOS

**Problem: "command not found: npm"**
```bash
# Zainstaluj Node.js przez Homebrew:
brew install node
```

**Problem: "EACCES: permission denied"**
```bash
# Nie używaj sudo! Zamiast tego napraw uprawnienia npm:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

**Problem: Port 3000 jest zajęty**
```bash
# Znajdź i zakończ proces na porcie 3000:
lsof -ti:3000 | xargs kill -9

# Lub uruchom na innym porcie:
npm run dev -- -p 3001
```

## 🔮 Przyszłe ulepszenia

- [ ] Backend API (Next.js API Routes)
- [ ] Baza danych (Prisma + PostgreSQL)
- [ ] Autoryzacja (NextAuth.js)
- [ ] Prawdziwe płatności (Stripe)
- [ ] Panel administracyjny
- [ ] System rezerwacji
- [ ] Powiadomienia email
- [ ] Integracja z kalendarzem Google

## 📝 Licencja

MIT

## 👨‍💻 Autor

Stworzone z ❤️ przy użyciu Next.js i Tailwind CSS

# ProKolarz - Treningi Kolarskie & Fizjoterapia Zdalna

Profesjonalna strona wizytówka z ofertą treningów kolarskich i fizjoterapii zdalnej. 
Nowoczesny design w stylu Cyberpunk + Liquid Glass.

![Cyberpunk Design](https://img.shields.io/badge/Design-Cyberpunk%20+%20Liquid%20Glass-cyan)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🚀 Funkcjonalności

- ✅ **Strona główna** - Hero z animacjami, statystyki, funkcje
- ✅ **Treningi kolarskie** - Szczegółowa oferta, poziomy zaawansowania
- ✅ **Fizjoterapia zdalna** - Usługi, jak to działa
- ✅ **Galeria** - Kategorie z filtrami, hover effects
- ✅ **Kontakt** - Formularz kontaktowy (wysyła maila)
- ✅ **Cennik** - Przejrzyste plany i pakiety
- ✅ **Kalendarz** - Interaktywny widok (mockup)

### Design System - Cyberpunk + Liquid Glass
- 🎨 **Ciemne tło** `#0a0a0f` z neonowymi akcentami
- 💡 **Neon colors**: Cyan `#00f0ff`, Pink `#ff00ff`, Purple `#b829dd`, Green `#00ff88`
- 🫗 **Glassmorphism** - `backdrop-blur(20px)` z półprzezroczystymi powierzchniami
- ✨ **Gradient text** - Wielokolorowe nagłówki
- 🔆 **Glow effects** - Animowane orby i neonowe cienie
- 📐 **Cyber grid** - Tło w stylu siatki cyberpunk
- 🎭 **Framer Motion** - Płynne animacje wejścia i hover effects

## 🛠️ Stos technologiczny

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Język**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animacje**: Framer Motion
- **Ikony**: Lucide React

## 📦 Instalacja

### Wymagania
- Node.js 18+ 
- npm

### Szybki start

```bash
# 1. Klonuj repozytorium
git clone https://github.com/WielkiKrzych/kolarstwo-fizjoterapia.git
cd kolarstwo-fizjoterapia

# 2. Zainstaluj zależności
npm install

# 3. Uruchom serwer deweloperski
npm run dev

# Gotowe! Otwórz http://localhost:3000
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
│   ├── kalendarz/               # Kalendarz (mockup)
│   ├── platnosci/               # Cennik
│   ├── api/                     # API Routes
│   │   └── contact/             # Tylko formularz kontaktowy
│   ├── layout.tsx              # Główny layout
│   └── globals.css             # Globalne style + Cyberpunk theme
├── components/
│   ├── ui/                      # Komponenty UI
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Navigation.tsx
│   │   └── ...
│   └── analytics.tsx            # Google Analytics (opcjonalnie)
├── lib/
│   └── utils.ts                # Utility functions
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

### Inne opcje
- **Netlify** - Drag & drop folderu `dist`
- **GitHub Pages** - Dla statycznych stron

## 📝 Personalizacja

### Zmiana treści

Wszystkie teksty znajdują się bezpośrednio w plikach `.tsx` w folderze `app/`:

- `app/page.tsx` - Strona główna
- `app/treningi/page.tsx` - Oferta treningów
- `app/fizjoterapia/page.tsx` - Oferta fizjoterapii
- `app/platnosci/page.tsx` - Cennik
- `app/kontakt/page.tsx` - Dane kontaktowe

### Zmiana kolorów

W `app/globals.css` możesz zmienić kolory neonowe:

```css
--neon-cyan: #00f0ff;     /* Zmień na wybrany kolor */
--neon-pink: #ff00ff;
--neon-purple: #b829dd;
```

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

## 📋 TODO

- [x] Design Cyberpunk + Liquid Glass
- [x] Strona główna
- [x] Podstrony oferty
- [x] Formularz kontaktowy
- [x] Cennik
- [ ] Dodać prawdziwe treści (teksty)
- [ ] Dodać prawdziwe zdjęcia
- [ ] Skonfigurować wysyłkę maili (EmailJS/Resend)
- [ ] Wdrożyć na produkcję

## 📝 Licencja

MIT

## 👨‍💻 Autor

Stworzone z ❤️ przy użyciu Next.js, TypeScript i Tailwind CSS

---

**ProKolarz** - Przekraczaj granice! 🚴‍♂️✨

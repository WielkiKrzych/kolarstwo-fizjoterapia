# ProKolarz - Treningi Kolarskie & Fizjoterapia Zdalna

Profesjonalna strona wizytówka z ofertą treningów kolarskich i fizjoterapii zdalnej. 
Nowoczesny design w stylu Cyberpunk + Liquid Glass.

![Cyberpunk Design](https://img.shields.io/badge/Design-Cyberpunk%20+%20Liquid%20Glass-cyan)
![Next.js](https://img.shields.io/badge/Next.js-16-black)

## 🚀 Funkcjonalności

- ✅ **Strona główna** - Hero z animacjami, statystyki
- ✅ **Treningi kolarskie** - Szczegółowa oferta, poziomy zaawansowania
- ✅ **Fizjoterapia zdalna** - Usługi, jak to działa
- ✅ **Galeria** - Kategorie z filtrami
- ✅ **Kontakt** - Formularz z wysyłką maili (Formspree)
- ✅ **Cennik** - Przejrzyste plany i pakiety
- ✅ **Kalendarz** - Widok planu zajęć

## 🛠️ Stos technologiczny

- **Framework**: Next.js 16 (App Router)
- **Język**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animacje**: Framer Motion
- **Formularz**: Formspree (wysyłka maili bez backendu)

## 📦 Instalacja i uruchomienie

### 1. Klonowanie repozytorium

```bash
git clone https://github.com/WielkiKrzych/kolarstwo-fizjoterapia.git
cd kolarstwo-fizjoterapia
```

### 2. Instalacja zależności

```bash
npm install
```

### 3. Konfiguracja formularza kontaktowego (WAŻNE!)

Formularz używa **Formspree** do wysyłania maili bez backendu:

**Krok 1:** Wejdź na [formspree.io](https://formspree.io)

**Krok 2:** Załóż darmowe konto

**Krok 3:** Utwórz nowy formularz i skopiuj endpoint URL (np. `https://formspree.io/f/xnqkvnna`)

**Krok 4:** Otwórz plik `app/kontakt/page.tsx` i zamień:
```typescript
// Znajdź tę linię (około linia 23):
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {

// Zamień na swój endpoint:
const response = await fetch("https://formspree.io/f/xnqkvnna", {
```

**Krok 5:** (Opcjonalnie) W Formspree dodaj powiadomienia email, aby dostawać maile na swoją skrzynkę

### 4. Uruchomienie lokalne

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000)

## 🏗️ Budowa produkcji

```bash
npm run build
```

Pliki produkcyjne trafią do folderu `dist/` (lub `.next/`).

## 🌐 Wdrożenie

### Vercel (najprostsze)

```bash
npm install -g vercel
vercel
```

### Inne opcje
- **Netlify** - Połącz z GitHub repo
- **GitHub Pages** - Dla statycznej wersji

## 📝 Personalizacja treści

### Zmiana tekstów

Wszystkie teksty znajdują się w plikach w folderze `app/`:

| Plik | Zawartość |
|------|-----------|
| `app/page.tsx` | Strona główna |
| `app/treningi/page.tsx` | Oferta treningów |
| `app/fizjoterapia/page.tsx` | Oferta fizjoterapii |
| `app/platnosci/page.tsx` | Cennik |
| `app/kontakt/page.tsx` | Formularz kontaktowy |

### Zmiana danych kontaktowych

W `app/kontakt/page.tsx` (linie 45-67) zmień:
- Email
- Telefon
- Godziny pracy

### Zmiana kolorów

W `app/globals.css` możesz zmienić kolory neonowe:

```css
--neon-cyan: #00f0ff;     /* Główny kolor akcentu */
--neon-pink: #ff00ff;     /* Drugi kolor */
--neon-purple: #b829dd;   /* Trzeci kolor */
```

## 📁 Struktura projektu

```
kolarstwo-fizjoterapia/
├── app/                      # Strony Next.js
│   ├── page.tsx             # Strona główna
│   ├── treningi/            # Oferta treningów
│   ├── fizjoterapia/        # Oferta fizjoterapii
│   ├── galeria/             # Galeria
│   ├── platnosci/           # Cennik
│   ├── kontakt/             # Formularz kontaktowy
│   ├── kalendarz/           # Plan zajęć
│   ├── layout.tsx           # Layout główny
│   └── globals.css          # Style + Cyberpunk theme
├── components/
│   └── ui/                  # Komponenty UI
│       ├── Navigation.tsx   # Nawigacja
│       ├── Button.tsx       # Przyciski
│       └── ...
└── public/                  # Obrazy i zasoby
```

## ⚠️ Ważne uwagi

1. **Formularz kontaktowy** - Wymaga konfiguracji Formspree (patrz sekcja "Konfiguracja formularza")

2. **Brak backendu** - To strona statyczna, nie wymaga bazy danych ani serwera backend

3. **Galeria** - Używa emoji jako placeholderów. Dodaj prawdziwe zdjęcia w folderze `public/images/`

4. **Kalendarz** - Jest to widok statyczny (mockup). Nie podłączony do żadnego systemu rezerwacji.

## 🎨 Design System

### Kolory neonowe
- **Cyan** `#00f0ff` - Główny akcent
- **Pink** `#ff00ff` - Drugi akcent
- **Purple** `#b829dd` - Trzeci akcent
- **Green** `#00ff88` - Sukces/pozytywne

### Efekty
- **Glassmorphism** - Półprzezroczyste tła z blur
- **Gradient text** - Wielokolorowe nagłówki
- **Glow effects** - Neonowe cienie
- **Floating orbs** - Unoszące się kule w tle

## 🐛 Rozwiązywanie problemów

### Formularz nie wysyła maili
- Sprawdź czy podałeś poprawny URL Formspree w `app/kontakt/page.tsx`
- Sprawdź czy masz połączenie z internetem
- Sprawdź konsolę przeglądarki (F12 → Console) na błędy

### Port 3000 zajęty
```bash
npm run dev -- -p 3001
```

### Błędy instalacji
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📋 TODO

- [x] Design Cyberpunk + Liquid Glass
- [x] Strona główna
- [x] Podstrony oferty
- [x] Formularz kontaktowy (Formspree)
- [x] Cennik
- [ ] Dodać prawdziwe zdjęcia do galerii
- [ ] Dodać prawdziwe treści (teksty o treningach)
- [ ] Skonfigurować własny email w Formspree
- [ ] Wdrożyć na produkcję

## 📝 Licencja

MIT

---

**ProKolarz** - Przekraczaj granice! 🚴‍♂️✨

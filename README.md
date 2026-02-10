# ProKolarz - Treningi Kolarskie & Fizjoterapia Zdalna

Profesjonalna strona wizytówka z ofertą treningów kolarskich i fizjoterapii zdalnej. 
Nowoczesny design w stylu Cyberpunk + Liquid Glass.

![Cyberpunk Design](https://img.shields.io/badge/Design-Cyberpunk%20+%20Liquid%20Glass-cyan)
![Next.js](https://img.shields.io/badge/Next.js-16-black)

## 🚀 Funkcjonalności

### Strony
- ✅ **Strona główna** - Hero z animacjami, statystyki, pełna nawigacja
- ✅ **O mnie** - Twój profil, doświadczenie, certyfikaty
- ✅ **Treningi kolarskie** - Szczegółowa oferta, poziomy zaawansowania
- ✅ **Fizjoterapia zdalna** - Usługi, jak to działa
- ✅ **Blog** - Wpisy w Markdown (łatwe dodawanie)
- ✅ **FAQ** - Najczęściej zadawane pytania (accordion)
- ✅ **Kontakt** - Formularz z wysyłką maili (Formspree)
- ✅ **Cennik** - Przejrzyste plany i pakiety

### Dodatki
- 📱 **Sticky Social Bar** - Linki do social media (prawa strona)
- 📧 **Newsletter** - Zapis do mailingu
- 🎨 **Cyberpunk Design** - Neonowe kolory, glassmorphism, animacje

## 🛠️ Stos technologiczny

- **Framework**: Next.js 16 (App Router)
- **Język**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animacje**: Framer Motion
- **Blog**: Markdown + gray-matter + remark
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

### 3. Konfiguracja formularza kontaktowego i newslettera (WAŻNE!)

Formularze używają **Formspree** do wysyłania maili:

**Krok 1:** Wejdź na [formspree.io](https://formspree.io)

**Krok 2:** Załóż darmowe konto

**Krok 3:** Utwórz NOWE formularze:
- Jeden dla formularza kontaktowego
- Jeden dla newslettera (opcjonalnie)

**Krok 4:** Skopiuj endpointy URL (np. `https://formspree.io/f/xnqkvnna`)

**Krok 5:** Podmień w kodzie:

W `app/kontakt/page.tsx` (około linia 28):
```typescript
// Z:
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {

// Na:
const response = await fetch("https://formspree.io/f/TWOJ_KOD", {
```

W `components/Newsletter.tsx` (około linia 18):
```typescript
// To samo dla newslettera (możesz użyć tego samego lub osobnego)
```

**Krok 6:** W Formspree dodaj powiadomienia email

### 4. Konfiguracja social media (opcjonalnie)

W `components/ui/SocialMediaBar.tsx` zmień linki:
```typescript
const socialLinks = [
  { name: "Facebook", url: "https://facebook.com/TWOJ-PROFIL", ... },
  { name: "Instagram", url: "https://instagram.com/TWOJ-PROFIL", ... },
  // ...pozostałe
];
```

To samo w `app/kontakt/page.tsx` (sekcja "Znajdź mnie w social media")

### 5. Uruchomienie lokalne

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000)

## 📝 Jak dodać wpis na bloga?

To proste! Nie potrzebujesz CMS ani bazy danych.

**Krok 1:** Utwórz nowy plik w folderze `content/blog/`
```bash
content/blog/moj-nowy-wpis.md
```

**Krok 2:** Użyj formatu YAML frontmatter:
```markdown
---
title: "Tytuł Twojego wpisu"
date: "2025-02-15"
excerpt: "Krótki opis wpisu (pokaże się na liście)"
tags: ["trening", "poradnik", "kolarstwo"]
---

# Treść wpisu

Tu piszesz treść w **Markdown**.

- Listy
- [Linki](https://example.com)
- *Kursywa*
- **Pogrubienie**

## Nagłówki działają też

I tak dalej...
```

**Krok 3:** Zapisz plik i zrób deploy - wpis pojawi się automatycznie!

## 🎨 Personalizacja treści

### Zmiana tekstów

Wszystkie teksty znajdują się w plikach w folderze `app/`:

| Plik | Zawartość |
|------|-----------|
| `app/page.tsx` | Strona główna |
| `app/o-mnie/page.tsx` | O mnie - **TU WPISZ SWOJE DANE** |
| `app/treningi/page.tsx` | Oferta treningów |
| `app/fizjoterapia/page.tsx` | Oferta fizjoterapii |
| `app/faq/page.tsx` | FAQ - **TU ZMIEŃ PYTANIA** |
| `app/blog/page.tsx` | Lista wpisów bloga |
| `app/kontakt/page.tsx` | Formularz + dane kontaktowe |

### Zmiana danych w "O mnie"

Otwórz `app/o-mnie/page.tsx` i zmień:
- `[Twoje Imię]` - na swoje imię/nazwisko
- `[Twoje Miasto]` - na swoją lokalizację
- Teksty opisu - na swoją historię
- Certyfikaty - na swoje kwalifikacje
- Stats - swoje statystyki (opcjonalnie)

### Zmiana FAQ

Otwórz `app/faq/page.tsx` i edytuj tablicę `faqData`:
```typescript
const faqData = [
  {
    question: "Twoje pytanie?",
    answer: "Twoja odpowiedź...",
    category: "Kategoria"
  },
  // Dodaj więcej...
];
```

### Dodanie zdjęcia w "O mnie"

1. Dodaj zdjęcie do folderu `public/images/`
2. W `app/o-mnie/page.tsx` zamień:
```tsx
// Z:
<div className="text-8xl mb-4">👤</div>

// Na:
<img src="/images/twoje-zdjecie.jpg" alt="Twoje Imię" className="w-full h-full object-cover" />
```

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
├── app/                          # Strony Next.js
│   ├── page.tsx                 # Strona główna
│   ├── o-mnie/                  # O mnie
│   ├── treningi/                # Treningi
│   ├── fizjoterapia/            # Fizjoterapia
│   ├── blog/                    # Blog
│   │   ├── page.tsx            # Lista wpisów
│   │   └── [slug]/             # Pojedynczy wpis
│   ├── faq/                     # FAQ
│   ├── kontakt/                 # Kontakt
│   ├── platnosci/               # Cennik
│   ├── kalendarz/               # Kalendarz
│   ├── layout.tsx              # Layout główny
│   └── globals.css             # Style
├── components/
│   ├── ui/                      # Komponenty UI
│   │   ├── Navigation.tsx      # Nawigacja
│   │   ├── SocialMediaBar.tsx  # Pasek social (prawy)
│   │   └── ...
│   └── Newsletter.tsx          # Sekcja newslettera
├── content/
│   └── blog/                    # Wpisy bloga (.md)
├── lib/
│   ├── blog.ts                 # Funkcje bloga
│   └── utils.ts                # Utility
└── public/                      # Zasoby statyczne
    └── images/                  # Zdjęcia
```

## 🌐 Wdrożenie

### Vercel (najprostsze)

```bash
npm install -g vercel
vercel
```

### Netlify

Połącz repozytorium z GitHub w panelu Netlify.

## 🐛 Rozwiązywanie problemów

### Formularz nie wysyła maili
- Sprawdź czy podałeś poprawny URL Formspree
- Sprawdź czy masz połączenie z internetem
- Sprawdź konsolę przeglądarki (F12 → Console)

### Blog nie wyświetla wpisów
- Upewnij się, że pliki są w `content/blog/`
- Sprawdź czy mają rozszerzenie `.md`
- Sprawdź czy frontmatter ma poprawny format (--- na początku i końcu)

### Port 3000 zajęty
```bash
npm run dev -- -p 3001
```

## 📋 TODO - Co jeszcze możesz dodać

- [x] Design Cyberpunk + Liquid Glass
- [x] Strona główna
- [x] Podstrony oferty
- [x] Formularz kontaktowy (Formspree)
- [x] Blog z Markdown
- [x] FAQ
- [x] Strona "O mnie"
- [x] Social media links
- [x] Newsletter
- [ ] Prawdziwe zdjęcia do galerii
- [ ] Prawdziwe treści (teksty o treningach)
- [ ] Podłączyć własne konta social media
- [ ] Skonfigurować Formspree
- [ ] Wdrożyć na produkcję

## 📝 Licencja

MIT

---

**ProKolarz** - Przekraczaj granice! 🚴‍♂️✨

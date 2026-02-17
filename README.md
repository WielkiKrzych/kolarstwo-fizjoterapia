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
- **Animacje**: Framer Motion (LazyMotion + reduced motion)
- **Czcionki**: next/font (Inter, self-hosted)
- **Blog**: Markdown + gray-matter + remark
- **Formularz**: Formspree (wysyłka maili bez backendu)
- **SEO**: JSON-LD structured data, OpenGraph, Twitter Cards

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

**Krok 5:** Podmień endpoint Formspree w kodzie:

W pliku `app/kontakt/page.tsx` znajdź linię 28 i podmień `YOUR_FORM_ID`:
```typescript
const response = await fetch("https://formspree.io/f/TWOJ_KOD", {
```

W pliku `components/Newsletter.tsx` znajdź linię 18 i zrób to samo.

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

## 🔒 Bezpieczeństwo

### Zmienne środowiskowe
Nigdy nie commituj kluczy API do repozytorium! Użyj pliku `.env.local`:

```bash
# .env.local (dodaj do .gitignore!)
NEXT_PUBLIC_SITE_URL=https://twoja-domena.pl
NEXT_PUBLIC_FORMSPREE_ID=twoj_kod_formspree
NEXT_PUBLIC_TWITTER_HANDLE=TwojHandle
```

Przykład konfiguracji znajduje się w pliku `.env.local.example`.

### Sprawdź .gitignore
Upewnij się, że zawiera:
```
.env*.local
node_modules/
.next/
```

### 5. Uruchomienie lokalne

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000)

## 📝 Jak dodać wpis na bloga?

To proste! Nie potrzebujesz CMS ani bazy danych.

### Wymagane pola frontmatter:
- `title` (string) - Tytuł wpisu
- `date` (YYYY-MM-DD) - Data publikacji
- `excerpt` (string) - Krótki opis (2-3 zdania)
- `tags` (array) - Tagi w formacie ["tag1", "tag2"]

### Opcjonalne pola:
- `author` - Autor wpisu
- `coverImage` - Ścieżka do obrazka głównego

### Krok 1: Utwórz plik
```bash
content/blog/moj-nowy-wpis.md
```

### Krok 2: Użyj formatu YAML frontmatter:
```markdown
---
title: "5 Błędów Początkujących Kolarzy"
date: "2025-02-15"
excerpt: "Poznaj najczęstsze błędy, które popełniają osoby zaczynające przygodę z kolarstwem i dowiedz się, jak ich uniknąć."
tags: ["trening", "poradnik", "dla-początkujących"]
author: "Jan Kowalski"
coverImage: "/images/blog/bledy-kolarzy.jpg"
---

# 5 Błędów Początkujących Kolarzy

Tu piszesz treść w **Markdown**.

- Listy
- [Linki](https://example.com)
- *Kursywa*
- **Pogrubienie**

## Nagłówki działają też

I tak dalej...
```

### Krok 3: Testowanie wpisu lokalnie
1. Dodaj plik `.md` w `content/blog/`
2. Uruchom `npm run dev`
3. Sprawdź http://localhost:3000/blog
4. Kliknij w swój wpis - powinien się wyświetlić

### Krok 4: Deploy
Zapisz plik i zrób deploy - wpis pojawi się automatycznie!

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

### Dodanie zdjęć w "O mnie" (Carousel)

1. Dodaj zdjęcia do folderu `public/images/`
2. W `app/o-mnie/page.tsx` w komponencie `PhotoCarousel` dodaj ścieżki do zdjęć:
```tsx
<PhotoCarousel
  images={[
    { src: "/images/twoje-zdjecie-1.jpg", alt: "Opis 1" },
    { src: "/images/twoje-zdjecie-2.jpg", alt: "Opis 2" },
    // dodaj więcej...
  ]}
  autoPlay={true}
  interval={4000}
/>
```

Carousel automatycznie:
- Przewija zdjęcia co 4 sekundy
- Resetuje czas po ręcznym kliknięciu
- Pokazuje nawigację strzałkami i kropkami
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
│   ├── galeria/                 # Galeria
│   ├── sitemap.ts              # Dynamiczny sitemap
│   ├── robots.ts               # Dynamiczny robots.txt
│   ├── layout.tsx              # Layout główny
│   └── globals.css             # Style
├── components/
│   ├── ui/                      # Komponenty UI
│   │   ├── Navigation.tsx      # Nawigacja (z ARIA)
│   │   ├── SocialMediaBar.tsx  # Pasek social (prawy)
│   │   └── ...
│   ├── JsonLd.tsx              # Structured data schemas
│   └── Newsletter.tsx          # Sekcja newslettera
├── content/
│   └── blog/                    # Wpisy bloga (.md)
├── lib/
│   ├── blog.ts                 # Funkcje bloga
│   ├── motion.tsx              # LazyMotion provider
│   ├── lazy-load.tsx           # Dynamic imports utility
│   └── utils.ts                # Utility
├── public/                      # Zasoby statyczne
│   └── images/                  # Zdjęcia
├── .env.local.example           # Przykład zmiennych środowiskowych
└── README.md
```

## 🌐 Wdrożenie na produkcję

### Opcja 1: Vercel (zalecana dla Next.js)

**Krok 1:** Zaloguj się na [vercel.com](https://vercel.com)

**Krok 2:** Kliknij "Add New Project"

**Krok 3:** Zaimportuj repozytorium GitHub

**Krok 4:** Ustaw zmienne środowiskowe:
- Przejdź do Settings → Environment Variables
- Dodaj:
  - `NEXT_PUBLIC_SITE_URL` = twoja domena (np. https://prokolarz.pl)
  - `NEXT_PUBLIC_FORMSPREE_ID` = twój kod formspree
  - `NEXT_PUBLIC_TWITTER_HANDLE` = twój handle (bez @)

**Krok 5:** Deploy!

**Własna domena:**
- Settings → Domains
- Dodaj swoją domenę (np. `prokolarz.pl`)
- Zaktualizuj DNS zgodnie z instrukcjami

### Opcja 2: Netlify

**Krok 1:** Zaloguj się na [netlify.com](https://netlify.com)

**Krok 2:** "Add new site" → "Import from Git"

**Krok 3:** Wybierz repozytorium

**Krok 4:** Konfiguracja build:
- Build command: `npm run build`
- Publish directory: `.next`

**Krok 5:** Dodaj zmienne środowiskowe w Site settings

### Po wdrożeniu sprawdź:
- [ ] Czy wszystkie strony działają
- [ ] Czy formularz wysyła maile
- [ ] Czy blog się ładuje
- [ ] Czy nawigacja działa
- [ ] Czy social media linki są poprawne

## ⚡ Optymalizacja

Projekt jest zoptymalizowany pod kątem wydajności, SEO i dostępności.

### 🚀 Wydajność
- **LazyMotion** - animacje ładowane on-demand
- **next/font** - czcionki self-hosted (brak zewnętrznych requestów)
- **Dynamic imports** - komponenty ładowane gdy potrzebne
- **Package optimization** - tree-shaking dla lucide-react i framer-motion

### 🔍 SEO
- **JSON-LD** - structured data (Organization, Person, Service, BlogPosting)
- **OpenGraph** - pełne metadane dla social media
- **Twitter Cards** - summary_large_image
- **Sitemap** - dynamicznie generowany z lastModified i priority
- **Robots.txt** - z crawl-delay i sitemap location

### ♿ Dostępność (WCAG AA)
- **Skip link** - "Przejdź do treści" dla klawiatury
- **ARIA** - aria-expanded, aria-controls dla mobile menu
- **Focus visible** - neon cyan outline dla nawigacji klawiaturowej
- **Reduced motion** - respektowanie prefers-reduced-motion

### Zdjęcia
- Używaj formatu WebP/AVIF zamiast JPG/PNG
- Kompresuj obrazy przed uploadem (np. [tinypng.com](https://tinypng.com))
- Dodaj atrybuty `width` i `height` do tagów `<img>`

### Lighthouse Score (cel):
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

Sprawdź w Chrome DevTools → Lighthouse

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

## 💬 Wsparcie

### Problemy techniczne
- Otwórz [Issue na GitHub](https://github.com/WielkiKrzych/kolarstwo-fizjoterapia/issues)
- Opisz problem szczegółowo
- Dodaj screenshot/zrzut z konsoli

### Pytania
- Sprawdź sekcję FAQ w README
- Przeczytaj dokumentację Next.js: [nextjs.org/docs](https://nextjs.org/docs)

### Contributing
Pull requesty są mile widziane! Przed dużymi zmianami otwórz issue, żeby przedyskutować propozycję.

## 📋 Roadmap

### ✅ Zrobione (v1.0)
- [x] Design Cyberpunk + Liquid Glass
- [x] Strona główna
- [x] Podstrony oferty
- [x] Formularz kontaktowy (Formspree)
- [x] Blog z Markdown
- [x] FAQ
- [x] Strona "O mnie"
- [x] Social media links
- [x] Newsletter

### ✅ Optymalizacje (v1.1)
- [x] LazyMotion + reduced motion
- [x] next/font (self-hosted fonts)
- [x] JSON-LD structured data
- [x] OpenGraph + Twitter Cards
- [x] Skip link + ARIA
- [x] Focus visible styles
- [x] TypeScript strict mode
- [x] Dynamic sitemap/robots

### 🚧 W trakcie
- [x] Prawdziwe zdjęcia do galerii (carousel 18 zdjęć)
- [x] Prawdziwe treści o mnie (historia, motto, certyfikaty)
- [x] Skonfigurowany formularz kontaktowy (Formspree)

### 📝 Do zrobienia
- [x] Podłączyć własne konta social media
- [x] Skonfigurować Formspree
- [ ] Dodać OG image (/public/images/og-default.jpg)
- [ ] Wdrożyć na produkcję (Vercel/Netlify)

## 📝 Licencja

MIT

---

**ProKolarz** - Przekraczaj granice! 🚴‍♂️✨

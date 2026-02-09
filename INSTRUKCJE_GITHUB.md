# 🚀 Instrukcja utworzenia repozytorium GitHub

## Krok 1: Utwórz repozytorium na GitHub

### Opcja A: Przez przeglądarkę (najprostsza)

1. **Otwórz:** https://github.com/new
2. **Wypełnij formularz:**
   - Repository name: `kolarstwo-fizjoterapia`
   - Description: `Profesjonalna strona z ofertą treningów kolarskich i fizjoterapii zdalnej`
   - Visibility: ✅ Public (lub Private jeśli wolisz)
   - **NIE zaznaczaj** "Add a README file" (mamy już)
   - **NIE zaznaczaj** "Add .gitignore" (mamy już)
3. **Kliknij "Create repository"**

### Opcja B: Przez GitHub CLI (jeśli zainstalowane)

```bash
# Zainstaluj GitHub CLI (jeśli nie masz):
# macOS: brew install gh
# Windows: scoop install gh

# Zaloguj się:
gh auth login

# Utwórz repozytorium:
cd Desktop/kolarstwo-fizjoterapia
gh repo create kolarstwo-fizjoterapia --public --source=. --remote=origin --push
```

---

## Krok 2: Połącz lokalne repozytorium z GitHub

### Na Windows (gdzie jest projekt):

```bash
cd C:\Users\HP\Desktop\kolarstwo-fizjoterapia

# Dodaj remote (zmień WielkiKrzych na swoją nazwę użytkownika):
git remote add origin https://github.com/WielkiKrzych/kolarstwo-fizjoterapia.git

# Wypchnij kod na GitHub:
git branch -M main
git push -u origin main
```

**Jeśli zostaniesz poproszony o login:**
- Username: `WielkiKrzych`
- Password: **Użyj Personal Access Token**, nie hasła do GitHub!

### Jak utworzyć Personal Access Token:

1. **Otwórz:** https://github.com/settings/tokens
2. **Kliknij:** "Generate new token" → "Generate new token (classic)"
3. **Ustaw:**
   - Note: `Next.js project`
   - Expiration: `90 days` (lub mniej)
   - **Zaznacz:** ✅ `repo` (pełny dostęp do repozytoriów)
4. **Kliknij:** "Generate token"
5. **Skopiuj token** (pokaże się tylko raz!)
6. **Użyj go jako hasła** gdy git poprosi o password

---

## Krok 3: Sklonuj na macOS

### Na macOS:

```bash
# Otwórz Terminal i wpisz:
cd ~/Desktop

# Sklonuj repozytorium:
git clone https://github.com/WielkiKrzych/kolarstwo-fizjoterapia.git

# Wejdź do folderu:
cd kolarstwo-fizjoterapia

# Sprawdź czy Node.js jest zainstalowany:
node --version

# Jeśli nie - zainstaluj:
brew install node

# Zainstaluj zależności:
npm install

# Uruchom aplikację:
npm run dev
```

**Gotowe! Otwórz w przeglądarce:** http://localhost:3000

---

## 🔄 Szybka synchronizacja (dla przyszłych zmian)

### Z Windows → GitHub:

```bash
cd C:\Users\HP\Desktop\kolarstwo-fizjoterapia
git add .
git commit -m "Twój opis zmian"
git push
```

### Z GitHub → macOS:

```bash
cd ~/Desktop/kolarstwo-fizjoterapia
git pull
npm run dev
```

---

## 🎯 Sprawdź czy działa

Na macOS po uruchomieniu `npm run dev` powinieneś zobaczyć:

```
✓ Ready in 2s
○ Local:   http://localhost:3000
```

Otwórz ten adres w przeglądarce i strona powinna działać! 🚀

---

## ❌ Najczęstsze problemy

### "git remote add origin" - remote already exists

```bash
# Usuń stare remote i dodaj nowe:
git remote remove origin
git remote add origin https://github.com/WielkiKrzych/kolarstwo-fizjoterapia.git
```

### "git push" - authentication failed

**Użyj Personal Access Token** zamiast hasła! (patrz wyżej)

### Na macOS: "command not found: npm"

```bash
# Zainstaluj Node.js:
brew install node
```

### Na macOS: "EACCES: permission denied"

```bash
# NIGDY nie używaj sudo z npm! Zamiast tego:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

---

## 📤 Alternatywa: Wdróż od razu na Vercel

Jeśli nie chcesz klonować na macOS, możesz wdrożyć stronę online:

1. **Otwórz:** https://vercel.com/new
2. **Importuj z GitHub:** `WielkiKrzych/kolarstwo-fizjoterapia`
3. **Kliknij "Deploy"**

Po minucie strona będzie dostępna online pod adresem jak `https://kolarstwo-fizjoterapia.vercel.app` 🚀

---

## 📞 Potrzebujesz pomocy?

Sprawdź dokumentację:
- **Git:** https://git-scm.com/doc
- **GitHub:** https://docs.github.com
- **Next.js:** https://nextjs.org/docs
- **Vercel:** https://vercel.com/docs

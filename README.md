# Strona izabelaknul.pl

Strona Izabeli Knul (szkolenia, czasdolasu, mentoring). Jest zbudowana w [Astro](https://astro.build) i działa na [Netlify](https://www.netlify.com).

**Najważniejsze w skrócie:** każda zmiana zapisana w tym repozytorium na GitHubie (gałąź `main`) **sama publikuje się na stronie** po 1–3 minutach. Nie trzeba niczego instalować. Wszystko da się zrobić w przeglądarce, na stronie GitHuba.

**Repozytorium:** https://github.com/StachK12/izabelaknul-strona

> **Dostęp (jednorazowo):** żeby edytować pliki, Twoje konto GitHub musi mieć prawo zapisu. Właściciel repozytorium dodaje je w **Settings → Collaborators → Add people**, z rolą **Write**. Może też przenieść repozytorium na Twoje konto: **Settings → Transfer ownership**. Bez tego GitHub zamiast „Commit changes” pokaże „Propose changes”, a zmiana nie trafi na stronę.

---

## Spis treści

1. [Jak edytować pliki w przeglądarce](#1-jak-edytować-pliki-w-przeglądarce)
2. [Jak dodać lub zmienić wydarzenie](#2-jak-dodać-lub-zmienić-wydarzenie)
3. [Jak podmienić zdjęcie](#3-jak-podmienić-zdjęcie)
4. [Jak zmienić tekst na stronie](#4-jak-zmienić-tekst-na-stronie)
5. [Formularze – gdzie trafiają wiadomości](#5-formularze--gdzie-trafiają-wiadomości)
6. [Coś poszło nie tak?](#6-coś-poszło-nie-tak)
7. [Podpięcie pod Netlify i domenę izabelaknul.pl](#7-podpięcie-pod-netlify-i-domenę-izabelaknulpl)
8. [Dla zaawansowanych](#8-dla-zaawansowanych)

---

## 1. Jak edytować pliki w przeglądarce

1. Wejdź na stronę repozytorium na GitHubie i zaloguj się.
2. Kliknij plik, który chcesz zmienić (np. `wydarzenia.yaml`).
3. Kliknij ikonę **ołówka** („Edit this file”) w prawym górnym rogu podglądu pliku.
4. Wprowadź zmiany.
5. Kliknij zielony przycisk **„Commit changes…”**, wpisz krótki opis (np. „Nowe wydarzenie listopad”) i zatwierdź **„Commit changes”**.
6. Po 1–3 minutach zmiana jest na stronie. Postęp widać w panelu Netlify, w zakładce **Deploys**.

> Wskazówka: jeśli coś zepsujesz, nic się nie stanie na stałe. GitHub pamięta każdą wersję pliku (przycisk **History**), a Netlify w razie błędu zostawia na stronie poprzednią, działającą wersję.

---

## 2. Jak dodać lub zmienić wydarzenie

Wszystkie wydarzenia są w jednym pliku: **`wydarzenia.yaml`** (w głównym folderze repozytorium). Strona **/najblizsze-wydarzenia** wyświetla je automatycznie.

**Wydarzenia, których ostatnia data minęła, znikają ze strony same.** Nie trzeba ich usuwać, ale można. Gdy nie ma żadnego nadchodzącego wydarzenia, strona pokazuje komunikat, że nowe terminy pojawią się wkrótce.

### Przykład wydarzenia

```yaml
- tytul: "Ocenianie kształtujące"
  daty: [2026-11-28]
  godzina: "9:00–15:00"
  miejsce: "czasdolasu, Petronelów 36B"
  opis: "Warsztaty outdoorowe dla nauczycieli."
  zdjecie: szkolenie-ocenianie-ksztaltujace.jpg
  link_wiecej: /szkolenia#ocenianie-ksztaltujace
  link_zapisu: https://forms.gle/…
```

### Zasady (ważne!)

- Każde wydarzenie zaczyna się od **myślnika i spacji**: `- tytul: …`.
- Kolejne linijki wydarzenia mają **dokładnie 2 spacje** na początku (tak jak w przykładzie). Nie używaj tabulatora.
- **Daty** wpisuj w nawiasach kwadratowych: `[2026-11-28]`. Kilka terminów oddzielaj przecinkami: `[2026-11-28, 2026-12-05]`. Działa też zapis `28.11.2026`.
- Tekst z dwukropkiem albo cudzysłowem najlepiej wziąć w cudzysłów: `"Tytuł: podtytuł"`.
- Pola `godzina`, `miejsce`, `opis`, `zdjecie`, `link_wiecej` i `link_zapisu` są **opcjonalne**. Możesz je pominąć.
- `zdjecie` to nazwa pliku z folderu `zdjecia/`.
- `link_wiecej` to adres opisu szkolenia. Dostępne opisy:
  - `/szkolenia#ocenianie-ksztaltujace`
  - `/szkolenia#jedna-klasa`
  - `/szkolenia#nowa-podstawa`
  - `/szkolenia#od-wyzwania-do-zmiany`
- `link_zapisu` to np. link do Formularza Google. Jeśli go nie podasz, przycisk „Zapisz się” prowadzi do formularza zapisu na stronie wydarzeń.

### Jak dodać nowe wydarzenie

1. Otwórz `wydarzenia.yaml` do edycji (patrz punkt 1).
2. Skopiuj istniejący blok wydarzenia (od `- tytul:` do jego ostatniej linijki).
3. Wklej go na końcu pliku i zmień wartości.
4. Zapisz („Commit changes”).

---

## 3. Jak podmienić zdjęcie

Wszystkie zdjęcia są w folderze **`zdjecia/`**. Strona sama:
- zmniejsza zdjęcia do kilku rozmiarów (telefon, tablet, komputer);
- zapisuje je w nowoczesnych formatach (AVIF, WebP);
- ładuje je dopiero wtedy, gdy odwiedzający do nich przewinie.

**Nie musisz niczego zmniejszać ręcznie.** Najlepiej wgrywaj zdjęcia w formacie JPG, o szerokości co najmniej 1600 px (do ok. 10 MB).

### Podmiana zdjęcia na inne (najprościej)

1. Przygotuj nowe zdjęcie i nadaj mu **dokładnie taką samą nazwę** jak plik, który chcesz zastąpić, np. `strona-glowna-brzoza.jpg`.
2. Na GitHubie wejdź do folderu `zdjecia/`.
3. Kliknij **„Add file” → „Upload files”** i przeciągnij plik.
4. Kliknij **„Commit changes”**. Stary plik zostanie zastąpiony nowym.

### Które zdjęcie jest gdzie

| Plik | Gdzie jest na stronie |
|---|---|
| `strona-glowna-brzoza.jpg` | strona główna – duże zdjęcie na górze (także obrazek przy udostępnianiu linku) |
| `portret-czarny-stroj.jpg` | strona główna (przedstawienie) i „Dla szkoły” |
| `stopka-pole.jpg` | tło stopki na każdej stronie |
| `o-mnie-portret.jpg` | O mnie |
| `czasdolasu-portret.jpg` | CZASdoLASU – zdjęcie na górze |
| `czasdolasu-polana.jpg` | CZASdoLASU – polana obok formularza |
| `szkolenie-ocenianie-ksztaltujace.jpg` | Dla szkoły – „Ocenianie kształtujące” |
| `szkolenie-jedna-klasa.jpg` | Dla szkoły – „Jedna klasa – wiele potrzeb” oraz karta wydarzenia |
| `szkolenie-sala.jpg` | Dla szkoły – „Nowa podstawa programowa…” (także obrazek przy udostępnianiu) |
| `szkolenie-podroz-bohatera.jpg` | Dla szkoły – „Od wyzwania do zmiany” |
| `dla-rodzicow-portret.jpg` | Dla rodziców – zdjęcie na górze |
| `dla-rodzicow-paw.jpg` | Dla rodziców – przy „Jedna klasa – wiele potrzeb” |
| `dla-rodzicow-brzoza.jpg`, `szkolenie-konferencja.jpg` | **obecnie nieużywane** – zapas do sekcji, które na starej stronie były ukryte |

> **Nazwa musi być identyczna**, łącznie z końcówką `.jpg` pisaną małymi literami. Zdjęcie z telefonu często ma nazwę `….JPG` albo `….jpeg`. Przed wgraniem zmień ją na dokładnie taką jak w tabeli, inaczej wgrany plik nie zastąpi starego.

### Nowe zdjęcie pod nową nazwą

Wgraj plik do `zdjecia/`, a potem w pliku strony (patrz punkt 4) znajdź `plik="…"` i wpisz nową nazwę. Obok jest `alt="…"`, czyli krótki opis zdjęcia dla osób niewidomych i dla Google. Zaktualizuj go, jeśli zdjęcie przedstawia coś innego.

> Jeśli zdjęcia o podanej nazwie nie ma w folderze, w jego miejscu pojawi się wyraźna ramka „Tu będzie zdjęcie…”. Strona dalej działa.

Logo (`logo-izabela-knul.png`, `logo-czasdolasu.png`, `czasdolasu-podpis.png`) jest w folderze `src/assets/marka/`.

---

## 4. Jak zmienić tekst na stronie

Każda podstrona to jeden plik w folderze `src/pages/`:

| Strona | Plik |
|---|---|
| Strona główna | `src/pages/index.astro` |
| O mnie | `src/pages/o-mnie.astro` |
| Najbliższe wydarzenia | `src/pages/najblizsze-wydarzenia.astro` (same wydarzenia: `wydarzenia.yaml`) |
| CZASdoLASU | `src/pages/czas-do-lasu.astro` |
| Dla szkoły (szkolenia) | `src/pages/szkolenia.astro` |
| Dla rodziców | `src/pages/dla-rodzicow.astro` |
| Mentoring | `src/pages/mentoring.astro` |
| Kontakt | `src/pages/kontakt.astro` |
| Polityka prywatności | `src/tresci/polityka-prywatnosci.md` (zwykły tekst) |
| Stopka (podpis, „Sprawdź również:”) | `src/components/Stopka.astro` |
| Formularze (etykiety pól, zgoda RODO, komunikaty po wysłaniu) | `src/components/Formularz.astro` |
| Strona po wysłaniu formularza / strona błędu | `src/pages/dziekuje.astro` / `src/pages/404.astro` |

**Dane wspólne dla wszystkich stron** (telefon, adres, Facebook, Instagram, LinkedIn, pozycje menu) są w jednym pliku: **`src/data/strona.ts`**. Zmiana tam zmienia je wszędzie.

### Jak to zrobić

1. Otwórz plik strony do edycji (ołówek).
2. Znajdź zdanie, które chcesz zmienić. Pomoże wyszukiwanie: **Ctrl+F** (na Macu **Cmd+F**).
3. Zmień **tylko tekst między znacznikami**. Przykład:

   ```html
   <p>To jest tekst, który możesz zmienić.</p>
   ```

   Zmieniasz `To jest tekst, który możesz zmienić.`, a `<p>` i `</p>` zostawiasz.
4. Nie usuwaj znaków `<`, `>`, `{`, `}` ani cudzysłowów wokół atrybutów (np. `class="wyr"`).
5. Zapisz („Commit changes”).

Przydatne znaczniki:
- `<span class="wyr">słowa</span>` – wyróżnienie (pogrubienie w kolorze brązowym).
- `<Marka />` – nazwa *czasdo**lasu*** w barwach marki.
- `<a href="/kontakt">tekst</a>` – link.

Tytuł strony w Google i jej opis są na górze pliku, w atrybutach `tytul="…"` i `opis="…"` (na stronie Mentoring opis jest w linijce `const opis = '…'`).

### Teksty na samej górze pliku (między liniami `---`)

Niektóre strony trzymają część tekstów na górze pliku, między dwiema liniami `---`. Dotyczy to na przykład:
- planu dnia i kart oferty na CZASdoLASU;
- list szkoleń w formularzach.

Wyglądają tak:

```js
{ godziny: '09:00–09:20', tytul: 'Powitanie i integracja przy kawie', opis: 'Spokojny początek dnia…' },
```

Zmieniaj tylko tekst **wewnątrz apostrofów** `'…'`. Nie usuwaj apostrofów ani przecinków. Jeśli w tekście potrzebujesz apostrofu, użyj znaku ’.

### Ten sam opis szkolenia w kilku miejscach

Opisy szkoleń powtarzają się na kilku stronach. Jeśli zmieniasz nazwę lub opis szkolenia, zmień go we wszystkich miejscach (szukaj nazwy przez Ctrl+F):
- `src/pages/szkolenia.astro` – karty u góry, sekcja szkolenia, lista w formularzu i dane dla Google (na górze pliku);
- `src/pages/czas-do-lasu.astro` – karty oferty i lista w formularzu;
- `src/pages/dla-rodzicow.astro` – sekcja „Jedna klasa – wiele potrzeb”;
- `wydarzenia.yaml` – tytuły wydarzeń.

> Pisz zwykłe spacje. Twarde spacje po jednoliterowych słowach (a, i, o, u, w, z), które nie pozwalają im zostać same na końcu linii, strona dodaje sama przy publikacji.

---

## 5. Formularze – gdzie trafiają wiadomości

Formularze (kontakt i zapisy na szkolenia) obsługuje **Netlify Forms**. Nie wymagają zewnętrznych skryptów. Każdy formularz ma zgodę RODO i ukryte pole, które zatrzymuje spam od robotów.

- Wszystkie zgłoszenia widać w panelu Netlify: **Forms**. Formularze nazywają się:
  - `kontakt`
  - `zapis-szkolenia`
  - `zapis-czasdolasu`
  - `zapis-wydarzenia`
- **Powiadomienia e-mail o nowych zgłoszeniach** trzeba włączyć raz:
  1. W panelu Netlify wejdź w **Project configuration → Notifications → Emails and webhooks → Form submission notifications**.
  2. Kliknij **Add notification → Email notification** i wpisz adres, np. szkolenia@izabelaknul.pl.

---

## 6. Coś poszło nie tak?

- **Strona się nie zmieniła.** W Netlify, w zakładce **Deploys**, sprawdź, czy ostatnia publikacja ma status „Published”. Jeśli jest czerwona („Failed”), kliknij ją. Na dole dziennika (log) jest komunikat po polsku, np. *„wydarzenia.yaml: wydarzenie „…” ma niepoprawną datę”*.
- **Błąd w `wydarzenia.yaml`** to najczęściej:
  - zła liczba spacji na początku linijki;
  - brak myślnika przed `tytul`;
  - data w innym formacie niż `2026-11-28` albo `28.11.2026`.
- **Cofnięcie zmiany:** na GitHubie otwórz plik, kliknij **History**, wybierz poprzednią wersję, skopiuj jej treść i zapisz ją ponownie.

---

## 7. Podpięcie pod Netlify i domenę izabelaknul.pl

### Krok 1. Projekt na Netlify (jednorazowo)

1. Załóż konto na <https://app.netlify.com> („Sign up with GitHub”).
2. Kliknij **Add new project → Import an existing project → GitHub** i zezwól Netlify na dostęp do repozytorium `izabelaknul-strona`. Zgodę musi dać konto, które jest **właścicielem** repozytorium (albo zrób to po przeniesieniu repozytorium na swoje konto).
3. Wybierz repozytorium i gałąź `main`. Ustawienia budowania wypełnią się same z pliku `netlify.toml`:
   - polecenie: `npm run build`;
   - folder: `dist`.

   Kliknij **Deploy**.
4. Po 2–4 minutach strona działa pod tymczasowym adresem `https://<nazwa>.netlify.app`. Przejrzyj ją tam w całości.
5. **Włącz formularze:** **Project configuration → Forms → Enable form detection**. Potem zrób ponowną publikację: **Deploys → Trigger deploy → Deploy site**.
6. Wyślij próbną wiadomość z formularza i sprawdź, czy pojawiła się w **Forms**. Włącz powiadomienia e-mail (punkt 5).

### Krok 2. Domena izabelaknul.pl

> ⚠️ **Uwaga na pocztę.** Jeśli adres szkolenia@izabelaknul.pl działa, poczta jest na tej domenie. Przy zmianie ustawień domeny **nie ruszaj rekordów MX** (odpowiadają za pocztę). Najbezpieczniej jest zmienić tylko rekordy strony, jak w wariancie A poniżej.
>
> **Zanim zaczniesz:** sprawdź, kto prowadzi skrzynkę szkolenia@izabelaknul.pl. Zobacz, na jaki serwer wskazują rekordy MX w strefie DNS, i czy strefę DNS prowadzi WebWave. Jeśli poczta albo strefa DNS jest w WebWave, rezygnacja z abonamentu WebWave wyłączy pocztę. Wtedy najpierw przenieś pocztę (albo zostaw w WebWave samą pocztę) i strefę DNS do rejestratora domeny.

1. W Netlify: **Domain management → Add a domain** i wpisz `izabelaknul.pl`. Netlify zapyta o `www.izabelaknul.pl`, więc dodaj obie wersje.
2. Sprawdź, gdzie jest zarejestrowana domena i kto zarządza jej ustawieniami DNS. Może to być panel WebWave albo rejestrator, np. home.pl, nazwa.pl, OVH. Zaloguj się tam.
3. **Wariant A (zalecany, poczta zostaje bez zmian):** w strefie DNS domeny ustaw:
   - rekord **A** dla `izabelaknul.pl` (czasem oznaczany `@`) → `75.2.60.5`. Usuń inne rekordy A i rekordy **AAAA** dla `@`, które wskazują na WebWave;
   - rekord **CNAME** dla `www` → `<nazwa>.netlify.app` (Twój adres z kroku 1). Jeśli dla `www` jest już rekord A, AAAA albo inny CNAME, najpierw go usuń;
   - pozostałe rekordy (zwłaszcza **MX**, **TXT**, a także CNAME typu `mail` czy `autodiscover`) zostaw bez zmian.

   **Wariant B:** przenieś całe DNS do Netlify, zmieniając serwery nazw (nameservers) u rejestratora na te, które pokaże Netlify. Wtedy **przepisz najpierw w Netlify wszystkie rekordy** z obecnej strefy (MX, TXT, CNAME, SRV), inaczej poczta przestanie działać.
4. Zmiany DNS rozchodzą się zwykle w ciągu kilku godzin (maksymalnie do 48 h). Netlify sam wystawi certyfikat HTTPS. W **Domain management → HTTPS** powinien pojawić się zielony status. W razie potrzeby kliknij **Verify DNS configuration**.
5. Ustaw `izabelaknul.pl` jako **domenę główną** (Primary domain). Wersja z `www` będzie wtedy przekierowywać na nią.
6. Sprawdź:
   - czy działa https://izabelaknul.pl;
   - czy stare adresy działają, np. https://izabelaknul.pl/o-mnie-2 powinien pokazać stronę „O mnie”, a https://izabelaknul.pl/polityka-prywatnosci-2 przekierować na /polityka-prywatnosci;
   - czy formularz działa.
7. Dopiero gdy wszystko działa, wyłącz stronę w WebWave i zrezygnuj z tamtejszego abonamentu. Uważaj, żeby nie zrezygnować z samej domeny ani z poczty, jeśli są w WebWave (patrz uwaga o poczcie wyżej).
8. (Opcjonalnie) Dodaj stronę do **Google Search Console** i zgłoś mapę strony: `https://izabelaknul.pl/sitemap-index.xml`.

---

## 8. Dla zaawansowanych

Wymagany Node.js 22.

```bash
npm install        # instalacja zależności
npm run dev        # podgląd na żywo: http://localhost:4321
npm run build      # zbudowanie strony do folderu dist/
npm run preview    # podgląd zbudowanej strony
```

Struktura:

```
zdjecia/                 zdjęcia (źródła; strona sama robi z nich wersje AVIF/WebP)
wydarzenia.yaml          lista wydarzeń
src/pages/               podstrony (jeden plik = jedna strona)
src/tresci/              dłuższe teksty w Markdown (polityka prywatności)
src/components/          elementy wspólne (nagłówek, stopka, formularz, zdjęcie…)
src/layouts/Uklad.astro  wspólny układ: meta SEO, Open Graph, dane strukturalne
src/styles/global.css    kolory, czcionki, odstępy (kolorystyka obecnej strony)
src/data/strona.ts       telefon, adres, media społecznościowe, menu
public/_redirects        przekierowania 301 ze starych adresów WebWave
docs/inwentaryzacja.md   pełny spis treści starej strony
```

- **Bez skryptów śledzących:** nie ma Google Analytics, Pixela Facebooka ani zewnętrznych czcionek. Czcionka Figtree jest na naszym serwerze. Mapa Google na stronie wydarzeń ładuje się dopiero po kliknięciu.
- **Dostępność:** kontrasty WCAG AA, nawigacja klawiaturą, link „Przejdź do treści”, teksty alternatywne zdjęć. Animacje są wyłączone, gdy system ma ustawione „ogranicz ruch”.

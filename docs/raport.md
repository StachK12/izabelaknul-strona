# Raport: nowa strona izabelaknul.pl

Stan na 20.10.2026.

Szczegóły:
- `docs/inwentaryzacja.md` – spis starej strony;
- `docs/zmiany-tresci.md` – każda zmiana w treści;
- `README.md` – instrukcja obsługi i podpięcia domeny.

## Co zostało zrobione

**Strona w Astro, gotowa do publikacji na Netlify:**
- 8 podstron starej strony i nowa podstrona /kontakt;
- strona po wysłaniu formularza (/dziekuje) i strona błędu 404.

**Treść:**
- przeniesiona dosłownie ze starej strony;
- automat sprawdził, że każda widoczna linijka starej strony jest na nowej;
- jedyne różnice to 53 poprawione literówki, podwójne spacje i myślniki (lista w `docs/zmiany-tresci.md`).

**Wygląd – kierunek A „Jasna polana”:**
- kolorystyka obecnej strony;
- krój Figtree (na własnym serwerze, bez Google Fonts);
- dużo światła, piaskowe sekcje, zaokrąglone zdjęcia;
- delikatne pojawianie się treści przy przewijaniu, wyłączone przy ustawieniu „ogranicz ruch”;
- odręczna kreska z listkiem nawiązująca do logo czasdolasu.

**Telefon najpierw:**
- sprawdzone przy szerokościach 320–1440 px;
- menu rozwijane przyciskiem;
- nic nie wystaje poza ekran.

**Wezwania do działania na każdej podstronie:** przyciski „Dowiedz się więcej”, „Zapisz się na szkolenie” oraz pasek „Skontaktuj się” z telefonem.

**Wydarzenia:**
- jeden plik `wydarzenia.yaml`, z instrukcją w środku;
- minione terminy chowają się same: przy publikacji, a dodatkowo w przeglądarce odwiedzającego;
- gdy nie ma terminów, strona pokazuje komunikat.

**Formularze (Netlify Forms):**
- kontakt oraz trzy formularze zapisu, z polami i listami jak na starej stronie;
- zgoda RODO i pole-pułapka na spam;
- komunikaty sukcesu i błędu po polsku, błędy opisane przy konkretnych polach;
- działają też bez JavaScriptu.

**Zdjęcia:**
- 14 zdjęć pobranych ze starej strony do folderu `zdjecia/`;
- automatycznie zmniejszane do kilku rozmiarów, w formatach AVIF i WebP, ładowane przy przewijaniu;
- pierwsze załadowanie strony to 70–360 KB.

**SEO:**
- własny tytuł i opis każdej podstrony;
- Open Graph z właściwym zdjęciem (zamiast obcego szablonu „NUTRI FIT”);
- mapa strony `sitemap-index.xml` (stary adres `/sitemap.xml` też działa), `robots.txt`;
- dane strukturalne: Person, EducationalOrganization i WebPage, na stronie szkoleń także Course.

**Przekierowania 301:** `/o-mnie-2` → `/o-mnie`, `/polityka-prywatnosci-2` → `/polityka-prywatnosci`, `/sitemap` → mapa strony. Pozostałe adresy się nie zmieniły.

**Dostępność (WCAG 2.1 AA):**
- test axe-core bez błędów na wszystkich stronach, na telefonie i komputerze;
- link „Przejdź do treści”, pełna obsługa klawiaturą, widoczny fokus;
- dokładnie jeden nagłówek H1 na stronę;
- opisy alt zdjęć, czytelny wydruk.

**Prywatność:**
- brak skryptów śledzących i banera cookie;
- mapa Google ładuje się dopiero po kliknięciu.

**Polityka prywatności:** przeniesiona 1:1, w łatwym do edycji pliku `src/tresci/polityka-prywatnosci.md`.

## Czego brakuje

1. **Aktualne wydarzenia.** Jedyne wydarzenie („Jedna klasa – wiele potrzeb”, 03.06 / 10.06.2026) już minęło, więc strona pokazuje komunikat o braku terminów. Nowe terminy trzeba dopisać do `wydarzenia.yaml`.
2. **Zdjęcia w lepszej jakości.** Na starej stronie były tylko małe wersje:
   - `o-mnie-portret.jpg` (503×756);
   - `dla-rodzicow-portret.jpg` (523×785);
   - `czasdolasu-portret.jpg` (618×412).

   Na ekranach o dużej gęstości wyglądają lekko miękko. Wystarczy wgrać oryginały pod tymi samymi nazwami.
3. **Mentoring nie ma zdjęcia** (tak było na starej stronie).
4. **Netlify – jednorazowe ustawienia** (instrukcja w README, punkt 7):
   - włączenie wykrywania formularzy;
   - powiadomienia e-mail o zgłoszeniach;
   - podpięcie domeny.
5. **Formularz Google** w wydarzeniu (https://forms.gle/WxdUtMta2Z2TQXZZ8): nie dało się sprawdzić, czy nadal przyjmuje odpowiedzi.

## Do Twojej decyzji (nic nie zostało zmienione bez zgody)

**Treść, którą zostawiłem tak jak na starej stronie** (zgodnie z „zostaw jak są”):

1. **Dla rodziców:**
   - widoczny tekst zastępczy „KLASA PEŁNA POTRZEB DALSZY OPIS…” (11 razy);
   - przycisk w karcie dla rodziców prowadzi do opisu szkolenia **dla nauczycieli**;
   - wstęp mówi o „przestrzeni dla kobiet”.

   Opisy „Co każdy rodzic powinien wiedzieć?” i „Stąd. Dokąd? Podróż Bohatera” istnieją, ale są ukryte. Mogę je opublikować.
2. **Akapity widoczne tylko na telefonie:**
   - CZASdoLASU: „czasdolasu to outdoorowa przestrzeń…”, „Zamiast zamkniętej sali…”;
   - Dla rodziców: „Jako dyrektorka szkoły prowadziłam…”.

   To prawdopodobnie przypadek z kreatora. Wystarczy usunąć klasę `tylko-telefon`, żeby były widoczne wszędzie.
3. **Pisownia marki:** czasdolasu / CZASdoLASU / CZASDOLASU / Czas do Lasu.
4. **Mentoring:**
   - nazwa „EduMastermind” występuje tylko na stronie głównej;
   - skrót „NVC” nie jest objaśniony;
   - cytat Miki Kashtan jest bez źródła.
5. **Formularz zapisu na /szkolenia** ma opcję „Co każdy rodzic powinien wiedzieć?”, choć opis tego warsztatu jest ukryty. Formularz na CZASdoLASU ma „Od wyzwania do zmiany”, którego nie ma w ofercie outdoorowej.
6. **Niespójności w tekstach:**
   - „Trzy godziny pracy…” przy planie dnia 09:00–15:00;
   - kropki na końcu tytułów szkoleń raz są, raz ich nie ma;
   - „poziomów” i „etapów” edukacyjnych;
   - „Pedagogiki” wielką literą;
   - szyk zdania „działania możliwe do od razu wykorzystania” (plan dnia CZASdoLASU);
   - „zwinnej zmiany gry coachingowej” (O mnie) – czy ma być „zwinnej zmiany oraz gry coachingowej”?
7. **Polityka prywatności** (przeniesiona 1:1):
   - opisuje Google Analytics, Tag Managera, Pixel Facebooka, AdSense, newsletter i Privacy Shield, czyli narzędzia, których strona nie używa (Privacy Shield jest nieważny od 2020 r.);
   - numeracja ma dwa razy „4.” i brakuje „5.”.

   Warto ją zaktualizować z prawnikiem. Pełna lista zdań do zmiany jest w `docs/inwentaryzacja.md`.

**Sprawy techniczne i organizacyjne:**

8. **E-mail w stopce:** na stronie nie ma adresu e-mail. Dodać szkolenia@izabelaknul.pl?
9. **Adres:** widoczny jest tylko „Petronelów 36B”. Dopisać „98-113 Buczek”, który jest w polityce prywatności?
10. **Zapis na wydarzenie:** zostawić Formularz Google, czy przenieść zapisy na formularz na stronie (Netlify)?
11. **Zielone „lasu”** w nazwie czasdolasu ma kontrast poniżej normy dla zwykłego tekstu. WCAG zwalnia z tego nazwy marek i logotypy, a kolorystyka miała zostać bez zmian, więc kolor zostaje.

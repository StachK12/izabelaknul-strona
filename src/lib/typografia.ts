// Polska typografia: po jednoliterowych słowach (a, i, o, u, w, z) wstawiamy
// twardą spację, żeby nie zostawały same na końcu linii („sierotki”).
// Działa automatycznie przy budowaniu strony – w plikach wystarczy zwykła spacja.

const BLOKI_POMIJANE = /(<(script|style|textarea|pre)\b[\s\S]*?<\/\2\s*>)/gi;
const SIEROTKA = /(?<=^|[\s„(«])([aiouwzAIOUWZ])\s+(?=\S)/g;

function poprawTekst(fragment: string): string {
  // Dzielimy na znaczniki i tekst – zmieniamy tylko tekst między znacznikami.
  return fragment
    .split(/(<[^>]*>)/g)
    .map((czesc) => (czesc.startsWith('<') ? czesc : czesc.replace(SIEROTKA, '$1 ')))
    .join('');
}

export function sierotki(html: string): string {
  return html
    .split(BLOKI_POMIJANE)
    .map((czesc, i, czesci) => {
      // split z grupami zwraca: tekst, cały blok, nazwę znacznika, tekst, …
      if (i % 3 === 1) return czesc; // cały <script>/<style>/… bez zmian
      if (i % 3 === 2) return ''; // nazwa znacznika z grupy – pomijamy
      return poprawTekst(czesc);
    })
    .join('');
}

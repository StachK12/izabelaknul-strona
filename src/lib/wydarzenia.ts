// Odczyt pliku wydarzenia.yaml z czytelnymi komunikatami błędów po polsku.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'yaml';

export interface Wydarzenie {
  tytul: string;
  daty: string[]; // RRRR-MM-DD
  godzina?: string;
  miejsce?: string;
  opis?: string;
  zdjecie?: string;
  link_wiecej?: string;
  link_zapisu?: string;
}

const PLIK = 'wydarzenia.yaml';

function normalizujDate(wartosc: unknown, gdzie: string): string {
  if (wartosc instanceof Date) return wartosc.toISOString().slice(0, 10);
  const tekst = String(wartosc ?? '').trim();
  let m = tekst.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`;
  m = tekst.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (m) return `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
  throw new Error(`${PLIK}: ${gdzie} ma niepoprawną datę „${tekst}”. Użyj formatu RRRR-MM-DD (np. 2026-11-28) albo DD.MM.RRRR (np. 28.11.2026).`);
}

export function wczytajWydarzenia(): Wydarzenie[] {
  const sciezka = resolve(process.cwd(), PLIK);
  let dane: unknown;
  try {
    dane = parse(readFileSync(sciezka, 'utf-8'));
  } catch (blad) {
    throw new Error(`Nie da się odczytać pliku ${PLIK}. Sprawdź wcięcia i myślniki. Szczegóły: ${(blad as Error).message}`);
  }
  if (dane == null) return [];
  if (!Array.isArray(dane)) throw new Error(`${PLIK}: każde wydarzenie musi zaczynać się od myślnika „- ”.`);

  return dane.map((wpis, i) => {
    const gdzie = `wydarzenie nr ${i + 1}`;
    if (typeof wpis !== 'object' || wpis === null) throw new Error(`${PLIK}: ${gdzie} jest puste albo źle wcięte.`);
    const w = wpis as Record<string, unknown>;
    const tytul = String(w.tytul ?? '').trim();
    if (!tytul) throw new Error(`${PLIK}: ${gdzie} nie ma tytułu (pole „tytul”).`);
    const surowe = Array.isArray(w.daty) ? w.daty : w.daty != null ? [w.daty] : w.data != null ? [w.data] : [];
    if (surowe.length === 0) throw new Error(`${PLIK}: wydarzenie „${tytul}” nie ma daty (pole „daty”).`);
    const tekst = (pole: string) => (w[pole] == null || String(w[pole]).trim() === '' ? undefined : String(w[pole]).trim());
    return {
      tytul,
      daty: surowe.map((d) => normalizujDate(d, `wydarzenie „${tytul}”`)).sort(),
      godzina: tekst('godzina'),
      miejsce: tekst('miejsce'),
      opis: tekst('opis'),
      zdjecie: tekst('zdjecie'),
      link_wiecej: tekst('link_wiecej'),
      link_zapisu: tekst('link_zapisu'),
    };
  });
}

/** Dzisiejsza data w Polsce w formacie RRRR-MM-DD. */
export function dzisiaj(): string {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Warsaw' }).format(new Date());
}

/** Wydarzenia, których ostatnia data jest dziś lub później, posortowane od najbliższego. */
export function nadchodzaceWydarzenia(): Wydarzenie[] {
  const dzis = dzisiaj();
  return wczytajWydarzenia()
    .filter((w) => w.daty[w.daty.length - 1] >= dzis)
    .sort((a, b) => a.daty[0].localeCompare(b.daty[0]));
}

/** 2026-06-03 → 03.06.2026 */
export function formatujDate(data: string): string {
  const [r, m, d] = data.split('-');
  return `${d}.${m}.${r}`;
}

import type { ImageMetadata } from 'astro';

// Wszystkie zdjęcia z folderu zdjecia/ w katalogu głównym repozytorium.
const pliki = import.meta.glob<{ default: ImageMetadata }>(
  '/zdjecia/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

/** Zwraca zdjęcie o podanej nazwie pliku albo undefined, gdy go brakuje. */
export function zdjecie(nazwa: string): ImageMetadata | undefined {
  const plik = pliki[`/zdjecia/${nazwa}`];
  if (!plik) {
    console.warn(`[zdjecia] Brak pliku zdjecia/${nazwa} – na stronie pojawi się placeholder.`);
  }
  return plik?.default;
}

// Uruchamia się przy budowaniu każdej strony: poprawia polską typografię w gotowym HTML.
import { defineMiddleware } from 'astro:middleware';
import { sierotki } from './lib/typografia';

export const onRequest = defineMiddleware(async (_kontekst, dalej) => {
  const odpowiedz = await dalej();
  if (!(odpowiedz.headers.get('content-type') ?? '').includes('text/html')) return odpowiedz;
  const html = await odpowiedz.text();
  return new Response(sierotki(html), { status: odpowiedz.status, headers: odpowiedz.headers });
});

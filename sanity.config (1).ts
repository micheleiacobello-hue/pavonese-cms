import { defineConfig, defineType, defineField } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

/* ============================================================
   Configurazione dello Studio (il "pannello") — Calcio Pavonese
   Tutti i modelli sono qui dentro (nessuna cartella esterna),
   così la pubblicazione è a prova di errore.
   ============================================================ */

/* ---------- NEWS / ARTICOLI ---------- */
const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News / Articoli',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Categoria', type: 'string', options: { list: ['Prima Squadra', 'Settore Giovanile', 'Femminile', 'Società', 'Mercato'], layout: 'radio' }, validation: (r) => r.required() }),
    defineField({ name: 'date', title: 'Data', type: 'date', initialValue: () => new Date().toISOString().slice(0, 10), validation: (r) => r.required() }),
    defineField({ name: 'cover', title: 'Foto di copertina', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Testo alternativo', type: 'string' })] }),
    defineField({ name: 'excerpt', title: 'Sommario (anteprima)', type: 'text', rows: 3, validation: (r) => r.max(200) }),
    defineField({ name: 'body', title: 'Testo dell\u2019articolo', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Testo alternativo' }] }] }),
  ],
  orderings: [{ title: 'Piu\u0300 recenti', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'cover' } },
});

/* ---------- GALLERY ---------- */
const galleryAlbum = defineType({
  name: 'galleryAlbum',
  title: 'Gallery fotografiche',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo album', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'date', title: 'Data', type: 'date', initialValue: () => new Date().toISOString().slice(0, 10) }),
    defineField({ name: 'cover', title: 'Copertina', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'photos', title: 'Foto', type: 'array', of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Didascalia/alt' }] }], options: { layout: 'grid' } }),
  ],
  orderings: [{ title: 'Piu\u0300 recenti', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }],
  preview: { select: { title: 'title', media: 'cover' } },
});

/* ---------- SETTORE GIOVANILE ---------- */
const youthTeam = defineType({
  name: 'youthTeam',
  title: 'Settore Giovanile (categorie)',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Categoria', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'ages', title: 'Annate (es. 2011-2012)', type: 'string' }),
    defineField({ name: 'coach', title: 'Allenatore', type: 'string' }),
    defineField({ name: 'order', title: 'Ordine di visualizzazione', type: 'number', initialValue: 0 }),
    defineField({ name: 'cover', title: 'Foto squadra', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'info', title: 'Descrizione / informazioni', type: 'text', rows: 4 }),
  ],
  orderings: [{ title: 'Ordine', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'ages', media: 'cover' } },
});

/* ---------- ROSA / GIOCATORI ---------- */
const player = defineType({
  name: 'player',
  title: 'Giocatori (rosa)',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome e cognome', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'number', title: 'Numero di maglia', type: 'number' }),
    defineField({ name: 'role', title: 'Reparto', type: 'string', options: { list: ['Portieri', 'Difensori', 'Centrocampisti', 'Attaccanti'], layout: 'radio' }, validation: (r) => r.required() }),
    defineField({ name: 'position', title: 'Ruolo (es. Terzino dx)', type: 'string' }),
    defineField({ name: 'birthYear', title: 'Anno di nascita', type: 'string' }),
    defineField({ name: 'team', title: 'Squadra', type: 'string', options: { list: [{ title: 'Prima Squadra', value: 'prima' }, { title: 'Femminile', value: 'femminile' }], layout: 'radio' }, initialValue: 'prima' }),
    defineField({ name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } }),
  ],
  orderings: [{ title: 'Numero', name: 'num', by: [{ field: 'number', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'position', media: 'photo' } },
});

/* ---------- STAFF E DIRIGENZA ---------- */
const staffMember = defineType({
  name: 'staffMember',
  title: 'Staff e Dirigenza',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome e cognome', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Ruolo', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'area', title: 'Area', type: 'string', options: { list: [{ title: 'Staff tecnico \u2014 Prima Squadra', value: 'tecnico' }, { title: 'Staff tecnico \u2014 Femminile', value: 'femminile' }, { title: 'Dirigenza / Organigramma', value: 'dirigenza' }], layout: 'radio' }, validation: (r) => r.required() }),
    defineField({ name: 'lead', title: 'In evidenza (presidenza)', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Ordine', type: 'number', initialValue: 0 }),
    defineField({ name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
});

/* ---------- SPONSOR ---------- */
const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsor & Partner',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'tier', title: 'Fascia', type: 'string', options: { list: [{ title: 'Main Sponsor', value: 'main' }, { title: 'Gold Sponsor', value: 'gold' }, { title: 'Sponsor Tecnico', value: 'tech' }, { title: 'Partner', value: 'partner' }], layout: 'radio' }, validation: (r) => r.required() }),
    defineField({ name: 'url', title: 'Sito web', type: 'url' }),
    defineField({ name: 'description', title: 'Descrizione', type: 'text', rows: 2 }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Ordine', type: 'number', initialValue: 0 }),
  ],
  preview: { select: { title: 'name', subtitle: 'tier', media: 'logo' } },
});

/* ---------- IMPOSTAZIONI SITO ---------- */
const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Impostazioni sito',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome societa\u0300', type: 'string' }),
    defineField({ name: 'foundedYear', title: 'Anno di fondazione', type: 'string' }),
    defineField({ name: 'about', title: 'Chi siamo (testo società)', type: 'text', rows: 6, description: 'Separa i paragrafi con una riga vuota.' }),
    defineField({ name: 'address', title: 'Indirizzo / Stadio', type: 'string' }),
    defineField({ name: 'phone', title: 'Telefono', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
    defineField({ name: 'nextMatch', title: 'Prossima partita', type: 'object', fields: [
      { name: 'competition', title: 'Competizione', type: 'string' },
      { name: 'home', title: 'Casa', type: 'string' },
      { name: 'away', title: 'Ospite', type: 'string' },
      { name: 'day', title: 'Giorno', type: 'string' },
      { name: 'time', title: 'Ora', type: 'string' },
      { name: 'venue', title: 'Luogo', type: 'string' },
    ] }),
  ],
  preview: { prepare: () => ({ title: 'Impostazioni sito' }) },
});

export default defineConfig({
  name: 'pavonese',
  title: 'Calcio Pavonese \u2014 Gestione sito',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'ey9csghx',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: [newsArticle, galleryAlbum, youthTeam, player, staffMember, sponsor, siteSettings] },
});

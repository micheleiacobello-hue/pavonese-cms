import { defineType, defineField } from 'sanity';

export const youthTeam = defineType({
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

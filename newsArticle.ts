import { defineType, defineField } from 'sanity';

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News / Articoli',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({
      name: 'category', title: 'Categoria', type: 'string',
      options: { list: ['Prima Squadra', 'Settore Giovanile', 'Femminile', 'Società', 'Mercato'], layout: 'radio' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'date', title: 'Data', type: 'date', initialValue: () => new Date().toISOString().slice(0, 10), validation: (r) => r.required() }),
    defineField({ name: 'cover', title: 'Foto di copertina', type: 'image', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Testo alternativo', type: 'string' })] }),
    defineField({ name: 'excerpt', title: 'Sommario (anteprima)', type: 'text', rows: 3, validation: (r) => r.max(200) }),
    defineField({ name: 'body', title: 'Testo dell’articolo', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Testo alternativo' }] }] }),
  ],
  orderings: [{ title: 'Più recenti', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'cover' } },
});

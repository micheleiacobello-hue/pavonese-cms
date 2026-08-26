import { defineType, defineField } from 'sanity';

export const galleryAlbum = defineType({
  name: 'galleryAlbum',
  title: 'Gallery fotografiche',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo album', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'date', title: 'Data', type: 'date', initialValue: () => new Date().toISOString().slice(0, 10) }),
    defineField({ name: 'cover', title: 'Copertina', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'photos', title: 'Foto', type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Didascalia/alt' }] }],
      options: { layout: 'grid' },
    }),
  ],
  orderings: [{ title: 'Più recenti', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }],
  preview: { select: { title: 'title', media: 'cover' } },
});

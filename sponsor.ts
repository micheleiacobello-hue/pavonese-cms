import { defineType, defineField } from 'sanity';

export const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsor & Partner',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'tier', title: 'Fascia', type: 'string',
      options: { list: [
        { title: 'Main Sponsor', value: 'main' },
        { title: 'Gold Sponsor', value: 'gold' },
        { title: 'Sponsor Tecnico', value: 'tech' },
        { title: 'Partner', value: 'partner' },
      ], layout: 'radio' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'url', title: 'Sito web', type: 'url' }),
    defineField({ name: 'description', title: 'Descrizione', type: 'text', rows: 2 }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Ordine', type: 'number', initialValue: 0 }),
  ],
  preview: { select: { title: 'name', subtitle: 'tier', media: 'logo' } },
});

import { defineType, defineField } from 'sanity';

export const player = defineType({
  name: 'player',
  title: 'Giocatori (rosa)',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome e cognome', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'number', title: 'Numero di maglia', type: 'number' }),
    defineField({
      name: 'role', title: 'Reparto', type: 'string',
      options: { list: ['Portieri', 'Difensori', 'Centrocampisti', 'Attaccanti'], layout: 'radio' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'position', title: 'Ruolo (es. Terzino dx)', type: 'string' }),
    defineField({ name: 'birthYear', title: 'Anno di nascita', type: 'string' }),
    defineField({
      name: 'team', title: 'Squadra', type: 'string',
      options: { list: [{ title: 'Prima Squadra', value: 'prima' }, { title: 'Femminile', value: 'femminile' }], layout: 'radio' },
      initialValue: 'prima',
    }),
    defineField({ name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } }),
  ],
  orderings: [{ title: 'Numero', name: 'num', by: [{ field: 'number', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'position', media: 'photo' } },
});

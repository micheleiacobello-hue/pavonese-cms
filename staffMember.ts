import { defineType, defineField } from 'sanity';

export const staffMember = defineType({
  name: 'staffMember',
  title: 'Staff e Dirigenza',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome e cognome', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Ruolo', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'area', title: 'Area', type: 'string',
      options: { list: [
        { title: 'Staff tecnico — Prima Squadra', value: 'tecnico' },
        { title: 'Staff tecnico — Femminile', value: 'femminile' },
        { title: 'Dirigenza / Organigramma', value: 'dirigenza' },
      ], layout: 'radio' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'lead', title: 'In evidenza (presidenza)', type: 'boolean', initialValue: false,
      hidden: ({ parent }) => parent?.area !== 'dirigenza' }),
    defineField({ name: 'order', title: 'Ordine', type: 'number', initialValue: 0 }),
    defineField({ name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
});

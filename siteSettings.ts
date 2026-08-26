import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Impostazioni sito',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome società', type: 'string' }),
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

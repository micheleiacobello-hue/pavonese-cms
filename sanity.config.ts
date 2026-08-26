import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

/**
 * Configurazione dello Studio (il "pannello").
 * projectId: lo trovi su sanity.io dopo aver creato il progetto (o via `sanity init`).
 */
export default defineConfig({
  name: 'pavonese',
  title: 'Calcio Pavonese — Gestione sito',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'ey9csghx',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});

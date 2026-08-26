import { defineCliConfig } from 'sanity/cli';
// projectId e dataset vengono chiesti da `sanity init` e scritti qui.
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'ey9csghx',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
});
